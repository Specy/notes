// app/src/lib/content/context.ts
import { buildTree, getNodeByPath, listRoutes } from './tree';
import type { RawFile, FolderNode, NoteNode } from './types';
import type { LinkResolver } from './markdown';

export interface Context { root: FolderNode; resolve: LinkResolver; }

function indexByTitleAndSlug(root: FolderNode) {
  const titleMap = new Map<string, NoteNode | FolderNode>();
  const slugMap = new Map<string, NoteNode | FolderNode>();
  const walk = (f: FolderNode) => {
    for (const c of f.children) {
      titleMap.set(c.title.toLowerCase(), c);
      slugMap.set(c.slug.toLowerCase(), c);
      if (c.kind === 'folder') walk(c);
    }
  };
  walk(root);
  return { titleMap, slugMap };
}

export function makeResolver(root: FolderNode, assets: Record<string, string>): LinkResolver {
  const { titleMap, slugMap } = indexByTitleAndSlug(root);
  return {
    note(target: string) {
      const [name, anchor] = target.split('#');
      const key = name.trim().toLowerCase();
      const hit = titleMap.get(key) ?? slugMap.get(key);
      const base = hit ? hit.path : key.replace(/\s+/g, '-');
      return anchor ? `${base}#${anchor.trim().toLowerCase().replace(/\s+/g, '-')}` : base;
    },
    asset(target: string) {
      const base = target.split('/').pop()!.trim();
      return assets[base] ?? `#missing-${base}`;
    }
  };
}

export function buildContext(files: RawFile[], assets: Record<string, string>): Context {
  const root = buildTree(files);
  return { root, resolve: makeResolver(root, assets) };
}

export function extractToc(html: string) {
  const out: { id: string; text: string; depth: number }[] = [];
  const re = /<h([2-4])[^>]*\bid="([^"]+)"[^>]*>(.*?)<\/h\1>/gis;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    out.push({ depth: Number(m[1]), id: m[2], text: m[3].replace(/<[^>]+>/g, '').trim() });
  }
  return out;
}

export function siblings(root: FolderNode, notePath: string) {
  const segs = notePath.split('/');
  const parent = getNodeByPath(root, segs.slice(0, -1));
  if (!parent || parent.kind !== 'folder') return { prev: null, next: null };
  const notes = parent.children.filter((c): c is NoteNode => c.kind === 'note');
  const i = notes.findIndex((n) => n.path === notePath);
  return { prev: i > 0 ? notes[i - 1] : null, next: i >= 0 && i < notes.length - 1 ? notes[i + 1] : null };
}

export { getNodeByPath, listRoutes };
