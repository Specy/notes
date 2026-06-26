// app/src/lib/content/remarkObsidianLinks.ts
import { visit } from 'unist-util-visit';
import type { LinkResolver } from './markdown';

const WIKILINK = /(!)?\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;

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
          // Use an HTML node so rehype-raw passes the src verbatim (no percent-encoding).
          out.push({
            type: 'html',
            value: `<img src="${assetUrl}" alt="${altText}">`
          });
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
