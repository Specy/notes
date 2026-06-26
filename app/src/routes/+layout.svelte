<script lang="ts">
  import { onMount } from 'svelte';
  import 'katex/dist/katex.min.css';
  import '../app.css';
  import { hydrateTheme } from '$lib/theme.svelte';
  import Background from '$lib/components/Background.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';

  let { children } = $props();

  onMount(() => {
    hydrateTheme();
  });
</script>

<Background>
  <Nav />
  <PageTransition>
    {@render children?.()}
  </PageTransition>
</Background>
