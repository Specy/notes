<script lang="ts">
  let { prev, next }: {
    prev: { title: string; path: string } | null;
    next: { title: string; path: string } | null;
  } = $props();
</script>

{#if prev || next}
  <nav aria-label="Note navigation" class="note-nav">
    <div class="prev">
      {#if prev}
        <a href={prev.path}>← {prev.title}</a>
      {/if}
    </div>
    <div class="next">
      {#if next}
        <a href={next.path}>{next.title} →</a>
      {/if}
    </div>
  </nav>
{/if}

<style>
  .note-nav { display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border, #e5e7eb); font-size: .9rem; }
  .next { text-align: right; }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
