// app/src/lib/content/markdown.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';

export type LinkResolver = {
  note(target: string): string;
  asset(target: string): string;
};

export function createProcessor(resolve: LinkResolver) {
  // `resolve` = { note(target):string, asset(target):string } link resolvers
  // NOTE: remarkObsidianLinks and remarkCallouts are added in Tasks 5 & 6.
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeShiki, {
      themes: { light: 'github-light', dark: 'github-dark' },
      fallbackLanguage: 'text',
      defaultColor: false
    })
    .use(rehypeStringify, { allowDangerousHtml: true });
}

export async function renderMarkdown(md: string, resolve: LinkResolver): Promise<string> {
  return String(await createProcessor(resolve).process(md));
}
