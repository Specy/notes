<script lang="ts">
  let { breadcrumbs, current }:
    { breadcrumbs: { title: string; url: string }[]; current: string } = $props();
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol>
    {#each breadcrumbs as crumb, i}
      <li>
        {#if i > 0}<span aria-hidden="true">/</span>{/if}
        <a href={crumb.url}>{crumb.title}</a>
      </li>
    {/each}
    <li><span aria-hidden="true">/</span><span aria-current="page">{current}</span></li>
  </ol>
</nav>

<style>
  .breadcrumbs { padding: .5rem 1rem; font-size: .875rem; color: var(--hint); }
  ol { list-style: none; display: flex; flex-wrap: wrap; gap: .25rem; margin: 0; padding: 0; }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  span[aria-hidden] { margin-right: .25rem; }
</style>
