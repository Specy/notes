// app/src/lib/content/markdown.test.ts
import { describe, it, expect } from 'vitest';
import { renderMarkdown } from './markdown';

const resolve = { note: (t: string) => `/${t}`, asset: (t: string) => `/vault-assets/${t}` };

describe('renderMarkdown', () => {
  it('renders headings with slugs', async () => {
    const html = await renderMarkdown('# Ciao Mondo', resolve);
    expect(html).toContain('id="ciao-mondo"');
  }, 30000);
  it('renders inline KaTeX math', async () => {
    const html = await renderMarkdown('Sia $x^2$ il quadrato', resolve);
    expect(html).toContain('class="katex"');
  });
  it('highlights fenced code with Shiki (dual-theme vars)', async () => {
    const html = await renderMarkdown('```js\nconst a = 1;\n```', resolve);
    expect(html).toContain('class="shiki');
    expect(html).toContain('--shiki-dark');
  });
  it('renders GFM tables', async () => {
    const html = await renderMarkdown('| a | b |\n|---|---|\n| 1 | 2 |', resolve);
    expect(html).toContain('<table>');
  });
});
