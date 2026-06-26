// app/src/lib/content/remarkObsidianLinks.test.ts
import { describe, it, expect } from 'vitest';
import { renderMarkdown } from './markdown';
const resolve = { note: (t: string) => `/note/${t}`, asset: (t: string) => `/vault-assets/${t}` };

describe('obsidian links', () => {
  it('turns [[Target]] into a link via resolve.note', async () => {
    const html = await renderMarkdown('vedi [[L01]] qui', resolve);
    expect(html).toContain('href="/note/L01"');
    expect(html).toContain('>L01</a>');
  });
  it('uses the alias in [[Target|Alias]]', async () => {
    const html = await renderMarkdown('[[L01|Lezione 1]]', resolve);
    expect(html).toContain('href="/note/L01"');
    expect(html).toContain('>Lezione 1</a>');
  });
  it('turns ![[img.png]] into an image via resolve.asset', async () => {
    const html = await renderMarkdown('![[Pasted image 1.png]]', resolve);
    expect(html).toContain('src="/vault-assets/Pasted image 1.png"');
  });
});
