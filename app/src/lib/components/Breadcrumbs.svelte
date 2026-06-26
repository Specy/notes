<script lang="ts">
  let { breadcrumbs, current }:
    { breadcrumbs: { title: string; url: string }[]; current: string } = $props();

  // Combined segments: ancestor crumbs + the current page (no link).
  const segs = $derived([
    ...breadcrumbs.map((b) => ({ title: b.title, url: b.url })),
    { title: current, url: null as string | null },
  ]);
  const courseIndex = 1; // never ellipsized
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol style={`--total:${segs.length}`}>
    {#each segs as seg, i}
      <li
        class="seg"
        class:first={i === 0}
        class:keep={i === courseIndex}
        style={`--seg: hsl(${(205 + i * 40) % 360}, 38%, 44%); z-index: ${segs.length - i};${i > 0 ? ' margin-left: -0.62rem;' : ''}`}
      >
        {#if seg.url}
          <a class="label" href={seg.url}>{seg.title}</a>
        {:else}
          <span class="label" aria-current="page">{seg.title}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  .breadcrumbs {
    padding: 0.25rem 0 1rem;
  }
  ol {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-size: 1rem; /* reset: parent .article sets 1.2rem */
  }

  .seg {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--seg);
    /* extra left padding leaves room for the incoming notch/arrow */
    padding: 0.3rem 0.85rem 0.3rem 1.15rem;
    /* notched left + pointed right => interlocking powerline segments */
    clip-path: polygon(
      0 0,
      calc(100% - 0.6rem) 0,
      100% 50%,
      calc(100% - 0.6rem) 100%,
      0 100%,
      0.6rem 50%
    );
  }
  /* First segment: straight left edge (no notch), slightly rounded start. */
  .seg.first {
    padding-left: 0.85rem;
    clip-path: polygon(0 0, calc(100% - 0.6rem) 0, 100% 50%, calc(100% - 0.6rem) 100%, 0 100%);
  }

  .label {
    display: block;
    max-width: 14rem;
    color: #fff;
    font-family: var(--heading-font), sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .seg.keep .label {
    max-width: none; /* course name never truncated */
  }
  a.label:hover {
    text-decoration: underline;
  }
</style>
