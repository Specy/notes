<script lang="ts">
  import { t } from '$lib/i18n';
  import Button from './Button.svelte';
  let { prev, next, lang = 'it' }: {
    prev: { title: string; path: string } | null;
    next: { title: string; path: string } | null;
    lang?: string;
  } = $props();
</script>

{#if prev || next}
  <nav aria-label="Note navigation" class="note-nav">
    {#if prev}
      <Button href={prev.path} align="start">
        <span class="dir">← {t(lang, 'note.prev')}</span>
        <span class="title">{prev.title}</span>
      </Button>
    {:else}
      <span></span>
    {/if}
    {#if next}
      <Button href={next.path} align="end">
        <span class="dir">{t(lang, 'note.next')} →</span>
        <span class="title">{next.title}</span>
      </Button>
    {/if}
  </nav>
{/if}

<style>
  .note-nav {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
  }
  /* Stack the direction label above the title inside each button. */
  .note-nav :global(.btn) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
    max-width: 48%;
  }
  .note-nav :global(.btn.end) {
    align-items: flex-end;
    text-align: right;
  }
  .dir {
    font-size: 0.8rem;
    color: var(--muted);
    font-weight: 500;
  }
  .title {
    color: var(--accent);
  }
</style>
