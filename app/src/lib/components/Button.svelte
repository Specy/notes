<script lang="ts">
  import type { Snippet } from 'svelte';
  let {
    href,
    variant = 'secondary',
    align = 'start',
    children,
  }: {
    href: string;
    variant?: 'accent' | 'secondary';
    align?: 'start' | 'end';
    children?: Snippet;
  } = $props();
</script>

<a {href} class="btn {variant} {align}">
  {@render children?.()}
</a>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    font-family: var(--heading-font), sans-serif;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.3;
    transition: filter 0.2s, border-color 0.2s;
  }
  .btn.start { text-align: left; }
  .btn.end { text-align: right; }

  .secondary {
    background: color-mix(in srgb, var(--secondary) 80%, transparent);
    color: var(--background-text);
    border: 1px solid var(--accent2);
  }
  .secondary:hover {
    border-color: var(--accent);
  }

  .accent {
    background: var(--accent);
    color: #fff;
    border: 1px solid var(--accent);
  }
  .accent:hover {
    filter: brightness(1.15);
  }
</style>
