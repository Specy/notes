<script lang="ts">
  let { title, description, image, imageAlt, url }:
    { title: string; description: string; image?: string; imageAlt?: string; url: string } = $props();
</script>
<a class="card" href={url}>
  {#if image}<img src={image} alt={imageAlt ?? title} />{/if}
  <h2>{title}</h2>
  <p>{description}</p>
</a>
<style>
  .card {
    display: block;
    padding: 1.2rem;
    border-radius: 1rem;
    background: color-mix(in srgb, var(--secondary) 70%, transparent);
    color: var(--background-text);
    box-shadow: 0 1px 3px var(--shadow-color);
    transition: background 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    background: color-mix(in srgb, var(--secondary) 95%, transparent);
    box-shadow: 0 6px 20px var(--shadow-color);
  }
  img { width: 100%; border-radius: .6rem; margin-bottom: .8rem; }
  h2 { font-family: var(--heading-font), sans-serif; }
  p { color: var(--hint); }
</style>
