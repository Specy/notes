<script lang="ts">
  import type { PageProps } from './$types';
  import CourseCard from '$lib/components/CourseCard.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import NoteNav from '$lib/components/NoteNav.svelte';
  import Toc from '$lib/components/Toc.svelte';
  import { t } from '$lib/i18n';
  import RenderedMarkdown from '$lib/components/RenderedMarkdown.svelte';
  let { data }: PageProps = $props();
</script>

<Breadcrumbs lang={data.lang} path={data.node.path} title={data.node.title} />

{#if data.kind === 'folder'}
  <article class="content">
    <h1>{data.node.title}</h1>
    <p class="desc">{data.node.description}</p>
    {#if data.html}<RenderedMarkdown html={data.html} />{/if}
    {#if data.groups.modules.length}
      <h2>{t(data.lang, 'course.modules')}</h2>
      <div class="grid">
        {#each data.groups.modules as m}
          <CourseCard title={m.title} description={m.description} image={m.image} url={m.url} />
        {/each}
      </div>
    {/if}
    {#if data.groups.lectures.length}
      <h2>{t(data.lang, 'course.lectures')}</h2>
      <ol class="list">
        {#each data.groups.lectures as n}<li><a href={n.url}>{n.title}</a><span>{n.description}</span></li>{/each}
      </ol>
    {/if}
    {#if data.groups.resources.length}
      <h2>{t(data.lang, 'course.resources')}</h2>
      <ul class="list">
        {#each data.groups.resources as n}<li><a href={n.url}>{n.title}</a><span>{n.description}</span></li>{/each}
      </ul>
    {/if}
  </article>
{:else}
  <article class="content note">
    <header><h1>{data.node.title}</h1><p class="meta">{data.readingText} · {data.node.description}</p></header>
    {#if data.toc.length}<Toc items={data.toc} lang={data.lang} />{/if}
    <RenderedMarkdown html={data.html} />
    <NoteNav prev={data.prev} next={data.next} lang={data.lang} />
  </article>
{/if}

<style>
  .content { max-width: calc(80ch + 2rem); margin: 2rem auto; padding: 1rem; }
  .desc, .meta { color: var(--hint); }
  .grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); }
  .list { display: flex; flex-direction: column; gap: .5rem; }
  .list span { color: var(--hint); margin-left: .6rem; }
</style>
