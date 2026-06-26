<script lang="ts">
  import Icon from './Icon.svelte';
  let { breadcrumbs, current }:
    { breadcrumbs: { title: string; url: string }[]; current: string } = $props();
  // Index 1 is the course crumb (0 = Home) — it must never be ellipsized.
  const courseIndex = 1;
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol>
    {#each breadcrumbs as crumb, i}
      <li class:keep={i === courseIndex}>
        {#if i > 0}<Icon name="chevron" size={14} class="sep" />{/if}
        <a href={crumb.url} class="crumb">{crumb.title}</a>
      </li>
    {/each}
    <li class="current-li">
      {#if breadcrumbs.length}<Icon name="chevron" size={14} class="sep" />{/if}
      <span class="crumb current" aria-current="page">{current}</span>
    </li>
  </ol>
</nav>

<style>
  .breadcrumbs {
    padding: 0.25rem 0 0.75rem;
  }
  ol {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.15rem;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    display: flex;
    align-items: center;
    gap: 0.15rem;
    min-width: 0; /* allow flex children to shrink + ellipsis */
    color: var(--muted); /* chevron (currentColor) inherits this */
  }
  /* Keep the chevron icons from shrinking (they live in the child component). */
  .breadcrumbs :global(svg) {
    flex-shrink: 0;
  }
  /* Course crumb stays full width, never truncated. */
  li.keep {
    flex-shrink: 0;
  }

  .crumb {
    display: block;
    max-width: 16rem;
    padding: 0.22rem 0.7rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--secondary) 80%, transparent);
    color: var(--background-text);
    font-family: var(--heading-font), sans-serif;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background 0.2s, box-shadow 0.2s;
  }
  li.keep .crumb {
    max-width: none;
  }
  a.crumb:hover {
    background: color-mix(in srgb, var(--secondary) 100%, transparent);
    box-shadow: 0 2px 8px var(--shadow-color);
  }
  .crumb.current {
    background: color-mix(in srgb, var(--accent) 22%, transparent);
    color: var(--accent);
  }
</style>
