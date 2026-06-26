<!-- app/src/lib/components/RenderedMarkdown.svelte -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { themeState } from '$lib/theme.svelte';
  import { mount } from 'svelte';
  import Mermaid from './Mermaid.svelte';

  let { html }: { html: string } = $props();

  let el: HTMLElement;

  $effect(() => {
    const _t = themeState.name;
    if (!browser || !el) return;

    const mermaidTheme = _t === 'dark' ? 'dark' : 'default';

    // Replace .mermaid-src blocks with mounted Mermaid components.
    // Re-running after theme change: previously mounted components are already
    // replaced DOM nodes (div.mermaid), so .mermaid-src won't appear again —
    // but mounted components will re-render because theme prop is reactive.
    // We use a WeakMap to pass new theme to already-mounted instances.
    el.querySelectorAll<HTMLPreElement>('pre.mermaid-src').forEach((pre) => {
      const code = pre.textContent ?? '';
      const host = document.createElement('div');
      pre.replaceWith(host);
      mount(Mermaid, { target: host, props: { code, theme: mermaidTheme } });
    });

    // Wire foldable callouts. Guard with dataset to avoid duplicate listeners.
    el.querySelectorAll<HTMLElement>('.callout[data-callout-fold]').forEach((c) => {
      if (c.dataset.foldWired) return;
      c.dataset.foldWired = '1';
      // Start closed if fold value is 'closed'
      if (c.dataset.calloutFold === 'closed') c.classList.add('folded');
      const title = c.querySelector('.callout-title');
      title?.addEventListener('click', () => c.classList.toggle('folded'));
    });
  });
</script>

<div class="md" bind:this={el}>{@html html}</div>
