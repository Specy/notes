import type { EntryGenerator, PageLoad } from './$types';
export const prerender = true;
export const entries: EntryGenerator = () => [{ lang: 'it' }];
export const load: PageLoad = ({ params }) => ({ lang: params.lang });
