<script lang="ts">
  import { themeState, toggleTheme } from '$lib/theme.svelte';
</script>
<button onclick={toggleTheme} aria-label="Toggle theme">
  {themeState.name === 'dark' ? '☀️' : '🌙'}
</button>
