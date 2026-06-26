<script lang="ts">
  let { lang, path, title }: { lang: string; path: string; title: string } = $props();

  const segments = $derived(path ? path.split('/') : []);
  const crumbs = $derived(segments.map((seg, i) => ({
    label: seg,
    href: `/${lang}/${segments.slice(0, i + 1).join('/')}`
  })));
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol>
    <li><a href="/{lang}">Home</a></li>
    {#each crumbs.slice(0, -1) as crumb}
      <li><span aria-hidden="true">/</span><a href={crumb.href}>{crumb.label}</a></li>
    {/each}
    <li><span aria-hidden="true">/</span><span aria-current="page">{title}</span></li>
  </ol>
</nav>

<style>
  .breadcrumbs { padding: .5rem 1rem; font-size: .875rem; color: var(--hint); }
  ol { list-style: none; display: flex; flex-wrap: wrap; gap: .25rem; margin: 0; padding: 0; }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  span[aria-hidden] { margin-right: .25rem; }
</style>
