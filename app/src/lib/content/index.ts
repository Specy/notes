// app/src/lib/content/index.ts
import { files, assets } from 'virtual:vault';
import readingTime from 'reading-time';
import { buildContext, getNodeByPath, listRoutes, extractToc, siblings, breadcrumbsFor } from './context';
import { groupChildren } from './tree';
import { renderMarkdown } from './markdown';
import { toPlainText } from './plainText';
import { LANGUAGES } from '$lib/languages';
import type { Context } from './context';

let _ctx: Context | null = null;
function ctx(): Context { return (_ctx ??= buildContext(files, assets)); }

export function listAllRoutes() {
  return (Object.keys(LANGUAGES) as (keyof typeof LANGUAGES)[]).flatMap((lang) =>
    listRoutes(ctx().root).map((r) => ({ lang, path: r.path }))
  );
}

export async function renderNode(lang: string, path: string) {
  const c = ctx();
  const node = path === '' ? c.root : getNodeByPath(c.root, path.split('/'));
  if (!node) throw new Error(`404 ${lang}/${path}`);

  const breadcrumbs = breadcrumbsFor(c.root, node.path, lang);

  if (node.kind === 'folder') {
    const html = node.content ? await renderMarkdown(node.content, c.resolve) : '';
    const g = groupChildren(node);
    return { kind: 'folder' as const, lang, node: stripBody(node), html, groups: prefixGroups(g, lang), breadcrumbs };
  }
  const html = await renderMarkdown(node.content, c.resolve);
  const stats = readingTime(toPlainText(node.content));
  const sib = siblings(c.root, node.path);
  return {
    kind: 'note' as const, lang,
    node: { ...node, content: '' },
    html, toc: extractToc(html), readingText: stats.text,
    prev: sib.prev && { title: sib.prev.title, path: `/${lang}/${sib.prev.path}` },
    next: sib.next && { title: sib.next.title, path: `/${lang}/${sib.next.path}` },
    breadcrumbs
  };
}

// helpers prefix child paths with /lang and drop heavy bodies for the payload
function stripBody(f: any) { return { ...f, content: '', children: undefined }; }
function prefixGroups(g: any, lang: string) {
  const map = (n: any) => ({ slug: n.slug, title: n.title, description: n.description,
    image: n.image, type: n.type, url: `/${lang}/${n.path}` });
  return { modules: g.modules.map(map), lectures: g.lectures.map(map), resources: g.resources.map(map) };
}
