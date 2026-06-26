import type { EntryGenerator, PageLoad } from './$types';
import { renderNode } from '$lib/content';
export const prerender = true;
export const entries: EntryGenerator = () => [{ lang: 'it' }];
export const load: PageLoad = async ({ params }) => {
  const data = await renderNode(params.lang, ''); // root folder = course list
  return { lang: params.lang, courses: data.kind === 'folder' ? data.groups.modules : [] };
};
