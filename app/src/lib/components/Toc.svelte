<script lang="ts">
  let { items }: { items: { id: string; text: string; depth: number }[] } = $props();
</script>

<nav aria-label="Table of contents" class="toc">
  <ul>
    {#each items as item}
      <li style="padding-left: {(item.depth - 1) * 1}rem">
        <a href="#{item.id}">{item.text}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .toc { border-left: 2px solid var(--accent, #6366f1); padding: .5rem 1rem; margin: 1rem 0; font-size: .875rem; }
  ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .25rem; }
  a { color: var(--hint); text-decoration: none; }
  a:hover { color: var(--accent); text-decoration: underline; }
</style>
