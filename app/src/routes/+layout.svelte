<script lang="ts">
  import { onMount } from 'svelte';
  import 'katex/dist/katex.min.css';
  import '../app.css';
  import { hydrateTheme } from '$lib/theme.svelte';

  let { children } = $props();

  onMount(() => {
    hydrateTheme();
  });
</script>
{@render children?.()}
