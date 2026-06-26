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

/** Prefix used to encode dual-theme excalidraw asset sentinels. */
export const EXCALIDRAW_SENTINEL_PREFIX = 'excalidraw:';

/** Encode a dual-theme excalidraw asset as a sentinel string for the embed handler. */
export function encodeExcalidrawSentinel(light: string | null, dark: string | null): string {
  return EXCALIDRAW_SENTINEL_PREFIX + JSON.stringify({ light, dark });
}

/** Decode an excalidraw sentinel, or return null if the string is not a sentinel. */
export function decodeExcalidrawSentinel(s: string): { light: string | null; dark: string | null } | null {
  if (!s.startsWith(EXCALIDRAW_SENTINEL_PREFIX)) return null;
  try {
    return JSON.parse(s.slice(EXCALIDRAW_SENTINEL_PREFIX.length));
  } catch {
    return null;
  }
}

export function makeResolver(root: FolderNode, assets: Record<string, unknown>): LinkResolver {
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
      const entry = assets[base];

      // Excalidraw dual-theme asset: value is { light, dark }
      if (base.toLowerCase().endsWith('.excalidraw')) {
        if (entry && typeof entry === 'object' && entry !== null) {
          const { light, dark } = entry as { light: string | null; dark: string | null };
          return encodeExcalidrawSentinel(light, dark);
        }
        // Missing excalidraw: return a sentinel with no URLs so the embed
        // handler can still render a placeholder rather than a broken image.
        return encodeExcalidrawSentinel(null, null);
      }

      // Regular image/svg asset
      if (typeof entry === 'string') return entry;
      return `#missing-${base}`;
    }
  };
}

export function buildContext(files: RawFile[], assets: Record<string, unknown>): Context {
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
