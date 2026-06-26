# Learn — university notes

A public, browsable website of my university computer-science notes, live at
**[learn.specy.app](https://learn.specy.app)**.

It turns an Obsidian vault of lecture notes into a fast, themeable course/lecture
site for students: pick a subject, read the notes, with full math, diagrams,
callouts and code rendering. The content is currently in Italian; the site is
built i18n-ready (an English content root can be added later with no code
changes).

## Repository layout

This repo is **both** the Obsidian vault (the content) and the SvelteKit site
that renders it.

```
.
├─ it/                 # Italian content root — one folder per course
│  ├─ 01-analisi/
│  ├─ 02-fisica/
│  ├─ 03-base-di-dati/ # has modules: 01-teoria/, 02-laboratorio/
│  ├─ 04-statistica/
│  ├─ 05-algoritmica-avanzata/
│  ├─ 06-reti/         # + Excalidraw/ drawings
│  ├─ 07-ai/           # has modules: ricerca-e-ragionamento, machine-learning
│  └─ 08-data-mining/  # English content (stays here until an en/ root exists)
├─ app/                # SvelteKit static site (reads ../it at build time)
├─ docs/               # design spec + implementation plans
└─ README.md
```

> The site reads the **sibling content root** (`../it`) at build time — the
> vault is the single source of truth. Editing in Obsidian keeps working.

## Content model

Content is discovered by **convention**, not hardcoded. The rules:

- **Naming:** every folder and note file is `NN-slug` (zero-padded), so folders
  and files interleave by number when sorted. The `NN-` prefix is stripped from
  URLs (`it/01-analisi/03-limiti.md` → `/it/analisi/limiti`).
- **Folder descriptor:** a folder is a navigable course/module **only if it
  contains an `index.md`** (exempt from the `NN-` rule). Folders without one
  (`attachments/`, `Excalidraw/`) are treated as asset stores and ignored in the
  nav tree.
- **Modules:** a course may nest sub-folders (modules), each with its own
  `index.md` — e.g. `base-di-dati/teoria` and `base-di-dati/laboratorio`.
- **Language = content root:** today only `it/` exists; `en` is aliased to it in
  app config. Flip one value when translations exist.

### Frontmatter

**Folder `index.md`** (course or module):

```yaml
---
title: Reti di Calcolatori
description: Internet, protocolli, TCP/UDP, routing, link layer, wireless e sicurezza.
image: attachments/cover.webp   # optional cover
order: 6                        # optional; defaults to the NN- prefix
published: true                 # optional; default true (set false to hide)
---
Longer overview in markdown…
```

**Note `NN-slug.md`** (leaf):

```yaml
---
title: Livello di trasporto: UDP, RDT e TCP
description: Multiplexing, UDP, trasferimento dati affidabile, TCP, congestione.
type: lecture   # lecture (default) | resource | exercise | exam | summary
---
```

On a course page, child **modules** render as cards, `type: lecture` notes form
the **Lectures** index, and every other type goes under **Resources**.

## Markdown rendering

A purpose-built build-time `unified` (remark → rehype) pipeline renders
Obsidian-flavored markdown:

- **LaTeX math** (KaTeX) — inline `$…$` and display `$$…$$`
- **Obsidian callouts** — `> [!info] Title`
- **Wikilinks & embeds** — `[[note]]`, `[[note|alias]]`, `![[image.png]]`
- **Excalidraw** drawings — exported to dual-theme SVG at build time (headless
  Chromium), embedded via `![[Drawing ….excalidraw]]`
- **Mermaid** diagrams and inline SVG
- **Syntax-highlighted code** (Shiki, light + dark)

## The app

SvelteKit 2 + Svelte 5 (runes) + `@sveltejs/adapter-static` — fully prerendered,
served at a domain root. A custom `virtual:vault` Vite plugin walks the content
root, parses frontmatter (`gray-matter`), copies assets with hashed names, and
exposes the node tree to the routes. Theme is a FOUC-safe dark/light system
(palette borrowed from [specy.app](https://specy.app)) with a blurred
Game-of-Life "blobs" background. Fonts: Rubik (UI/headings), Noto Serif (body),
Fira Code (code).

### Develop

```bash
cd app
npm install
npm run dev        # dev server
npm run check      # svelte-check (types)
npm run test       # vitest unit tests
npm run build      # static build → app/build  (runs the Excalidraw export first)
npm run preview    # preview the production build
```

`npm run build` runs `prebuild` (`scripts/buildExcalidraw.mjs`) to export
Excalidraw scenes to SVG, then prerenders every course and note to static HTML.

## Deployment

Static output (`app/build`) served at **learn.specy.app**. Because it's a
subdomain root, `paths.base = ''` — no base path needed.

## Authoring in Obsidian

The vault opens directly in Obsidian. Recommended community plugins:

- **Obsidian Git** — auto-backup / version history
- **Excalidraw** — the drawings rendered on the site
- **Linter** — consistent formatting

Optional: periodically clear unused images from the per-course `attachments/`
folders.

## License

Licensed under the **GNU Affero General Public License v3.0 or later** — see
[LICENSE](LICENSE). You're free to use, study, modify and share it; but because
AGPL §13 covers network use, anyone who runs a modified version as a service
must make their modified source available to its users.

© 2026 Specy
