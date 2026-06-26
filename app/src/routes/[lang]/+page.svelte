<script lang="ts">
  import type { PageProps } from './$types';
  import CourseCard from '$lib/components/CourseCard.svelte';
  let { data }: PageProps = $props();
</script>
<section class="hero"><h1>Appunti universitari</h1></section>
<div class="grid">
  {#each data.courses ?? [] as c}
    <CourseCard title={c.title} description={c.description} image={c.image} url={c.url} />
  {/each}
</div>
<style>
  .hero { padding: 3rem 1rem 1rem; }
  .grid { display: grid; gap: 1rem; padding: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); }
</style>
