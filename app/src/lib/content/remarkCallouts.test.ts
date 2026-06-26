// app/src/lib/content/remarkCallouts.test.ts
import { describe, it, expect } from 'vitest';
import { renderMarkdown } from './markdown';
const resolve = { note: (t: string) => `/${t}`, asset: (t: string) => `/${t}` };

describe('callouts', () => {
  it('converts > [!info] Title into a callout div with title', async () => {
    const html = await renderMarkdown('> [!info] Nota importante\n> corpo', resolve);
    expect(html).toContain('class="callout callout-info"');
    expect(html).toContain('data-callout="info"');
    expect(html).toContain('>Nota importante<');
    expect(html).toContain('corpo');
  });
  it('defaults the title to the capitalized type when omitted', async () => {
    const html = await renderMarkdown('> [!tip]\n> x', resolve);
    expect(html).toContain('class="callout callout-tip"');
    expect(html).toContain('>Tip<');
  });
  it('leaves a normal blockquote untouched', async () => {
    const html = await renderMarkdown('> solo una citazione', resolve);
    expect(html).toContain('<blockquote>');
  });
});
