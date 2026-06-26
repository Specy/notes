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

{#if data.kind === 'folder'}
  <article class="article">
    <Breadcrumbs breadcrumbs={data.breadcrumbs} current={data.node.title} />
    <header class="hero">
      <h1 class="main-header">{data.node.title}</h1>
      {#if data.node.description}<p class="hero-desc">{data.node.description}</p>{/if}
    </header>

    {#if data.html}
      <div class="md-content">
        <RenderedMarkdown html={data.html} />
      </div>
    {/if}

    {#if data.groups.modules.length}
      <h2 class="section">{t(data.lang, 'course.modules')}</h2>
      <div class="grid">
        {#each data.groups.modules as m}
          <CourseCard title={m.title} description={m.description} image={m.image} url={m.url} />
        {/each}
      </div>
    {/if}
    {#if data.groups.lectures.length}
      <h2 class="section">{t(data.lang, 'course.lectures')}</h2>
      <ol class="list">
        {#each data.groups.lectures as n}
          <li>
            <a class="list-link" href={n.url}>
              <span class="lt">{n.title}</span>
              <span class="ld">{n.description}</span>
            </a>
          </li>
        {/each}
      </ol>
    {/if}
    {#if data.groups.resources.length}
      <h2 class="section">{t(data.lang, 'course.resources')}</h2>
      <ul class="list">
        {#each data.groups.resources as n}
          <li>
            <a class="list-link" href={n.url}>
              <span class="lt">{n.title}</span>
              <span class="ld">{n.description}</span>
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </article>
{:else}
  <article class="article">
    <Breadcrumbs breadcrumbs={data.breadcrumbs} current={data.node.title} />
    <header class="hero">
      <h1 class="main-header">{data.node.title}</h1>
      <p class="hero-meta">{data.readingText}</p>
      {#if data.node.description}<p class="hero-desc">{data.node.description}</p>{/if}
    </header>

    {#if data.toc.length}<Toc items={data.toc} lang={data.lang} />{/if}

    <div class="md-content">
      <RenderedMarkdown html={data.html} />
    </div>

    <NoteNav prev={data.prev} next={data.next} lang={data.lang} />
  </article>
{/if}

<style>
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  /* The whole card is the link (not just the title). */
  .list-link {
    display: block;
    padding: 0.6rem 0.9rem;
    border-radius: 0.5rem;
    background: color-mix(in srgb, var(--secondary) 70%, transparent);
    box-shadow: 0 1px 3px var(--shadow-color);
    transition: background 0.2s, box-shadow 0.2s;
    color: var(--background-text);
  }
  .list-link:hover {
    background: color-mix(in srgb, var(--secondary) 95%, transparent);
    box-shadow: 0 6px 18px var(--shadow-color);
  }
  .lt {
    display: block;
    font-weight: 600;
    color: var(--background-text);
  }
  .ld {
    display: block;
    color: var(--muted);
    font-size: 0.95rem;
    margin-top: 0.15rem;
  }
</style>
