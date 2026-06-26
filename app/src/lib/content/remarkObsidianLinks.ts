// app/src/lib/content/remarkObsidianLinks.ts
import { visit } from 'unist-util-visit';
import type { LinkResolver } from './markdown';
import { decodeExcalidrawSentinel, EXCALIDRAW_SENTINEL_PREFIX } from './context';

const WIKILINK = /(!)?\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;

/** Escape special HTML attribute characters to prevent injection. */
function escAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default function remarkObsidianLinks(resolve: LinkResolver) {
  return (tree: any) => {
    visit(tree, 'text', (node: any, index: number | undefined, parent: any) => {
      if (!parent || index === undefined || !node.value.includes('[[')) return;
      WIKILINK.lastIndex = 0;
      const out: any[] = [];
      let last = 0;
      let m: RegExpExecArray | null;
      while ((m = WIKILINK.exec(node.value)) !== null) {
        const [full, bang, target, alias] = m;
        if (m.index > last) out.push({ type: 'text', value: node.value.slice(last, m.index) });
        if (bang) {
          const assetUrl = resolve.asset(target.trim());
          const altText = (alias ?? target).trim();

          // Check if this is an excalidraw dual-theme sentinel
          const excalidraw = decodeExcalidrawSentinel(assetUrl);
          if (excalidraw !== null) {
            if (excalidraw.light || excalidraw.dark) {
              // Emit a <picture> with a dark-mode source and a light-mode fallback.
              // The site uses both html[data-theme="dark"] and prefers-color-scheme,
              // so we use the CSS media query which works for the static export.
              const lightSrc = escAttr(excalidraw.light ?? excalidraw.dark ?? '');
              const darkSrc = escAttr(excalidraw.dark ?? excalidraw.light ?? '');
              const escapedAlt = escAttr(altText);
              out.push({
                type: 'html',
                value: `<picture class="excalidraw-embed"><source media="(prefers-color-scheme: dark)" srcset="${darkSrc}"><img src="${lightSrc}" alt="${escapedAlt}" class="excalidraw-img"></picture>`
              });
            } else {
              // Missing excalidraw — render a placeholder span
              out.push({
                type: 'html',
                value: `<span class="excalidraw-missing" title="${escAttr(altText)}">[excalidraw: ${escAttr(altText)}]</span>`
              });
            }
          } else {
            // Regular image asset — use an HTML node so rehype-raw passes the src
            // verbatim (no percent-encoding by unified's image → hast conversion).
            out.push({
              type: 'html',
              value: `<img src="${escAttr(assetUrl)}" alt="${escAttr(altText)}">`
            });
          }
        } else {
          out.push({
            type: 'link',
            url: resolve.note(target.trim()),
            title: null,
            children: [{ type: 'text', value: (alias ?? target).trim() }]
          });
        }
        last = m.index + full.length;
      }
      if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
      return index + out.length; // skip inserted nodes
    });
  };
}
