<script lang="ts">
  let { title, description, image, url }:
    { title: string; description: string; image?: string; url: string } = $props();
</script>
<a class="card" href={url}>
  {#if image}<img src={image} alt="" />{/if}
  <h2>{title}</h2>
  <p>{description}</p>
</a>
<style>
  .card { display: block; padding: 1.2rem; border-radius: 1rem;
    background: color-mix(in srgb, var(--secondary) 70%, transparent);
    border: 1px solid var(--accent2); color: var(--background-text); }
  .card:hover { border-color: var(--accent); }
  img { width: 100%; border-radius: .6rem; margin-bottom: .8rem; }
  h2 { font-family: Rubik, sans-serif; }
  p { color: var(--hint); }
</style>
