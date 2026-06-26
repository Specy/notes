// app/src/lib/content/context.test.ts
import { describe, it, expect } from 'vitest';
import { buildContext, extractToc, siblings } from './context';
import type { RawFile } from './types';

const files: RawFile[] = [
  { relPath: '01-fisica/index.md', frontmatter: { title: 'Fisica', description: 'd' }, content: 'o' },
  { relPath: '01-fisica/01-a.md', frontmatter: { title: 'A', description: 'd', type: 'lecture' }, content: 'x' },
  { relPath: '01-fisica/02-b.md', frontmatter: { title: 'B', description: 'd', type: 'lecture' }, content: 'y' }
];

describe('context', () => {
  it('resolves a wikilink target by title to a node path', () => {
    const { resolve } = buildContext(files, {});
    expect(resolve.note('A')).toBe('fisica/a');     // route prepends /[lang]/
  });
  it('resolves an asset by basename', () => {
    const { resolve } = buildContext(files, { 'img.png': '/vault-assets/img.1234abcd.png' });
    expect(resolve.asset('img.png')).toBe('/vault-assets/img.1234abcd.png');
  });
  it('extracts a heading ToC from rendered html', () => {
    const toc = extractToc('<h2 id="uno">Uno</h2><h3 id="due">Due</h3>');
    expect(toc).toEqual([{ id: 'uno', text: 'Uno', depth: 2 }, { id: 'due', text: 'Due', depth: 3 }]);
  });
  it('finds prev/next siblings within a folder', () => {
    const { root } = buildContext(files, {});
    const { prev, next } = siblings(root, 'fisica/b');
    expect(prev?.slug).toBe('a');
    expect(next).toBeNull();
  });
});
