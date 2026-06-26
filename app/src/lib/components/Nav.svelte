<script lang="ts">
  import { page } from '$app/state';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

  // Derive lang from the first path segment; fall back to 'it'
  const lang = $derived(page.url.pathname.split('/').filter(Boolean)[0] ?? 'it');
</script>

<header class="nav">
  <a class="site-title" href="/{lang}">Notes</a>
  <div class="nav-controls">
    <LanguageSwitcher />
    <ThemeToggle />
  </div>
</header>

<style>
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    background: color-mix(in srgb, var(--background) 80%, transparent);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid color-mix(in srgb, var(--accent2) 40%, transparent);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .site-title {
    font-family: var(--heading-font, sans-serif);
    font-weight: var(--heading-weight, 800);
    font-size: 1.2rem;
    color: var(--background-text);
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: color 0.15s;
  }

  .site-title:hover {
    color: var(--accent);
  }

  .nav-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
</style>
