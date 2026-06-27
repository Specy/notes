# Authoring guide

How this vault is structured and how to add new courses, lectures, and assets.
This is the **content** repo behind **[learn.specy.app](https://learn.specy.app)**;
the SvelteKit app that renders it lives in [Specy/learn](https://github.com/Specy/learn)
and consumes this repo as a git submodule.

Everything is discovered by **convention** — there is no config file to edit. Get
the naming and frontmatter right and a new course shows up automatically.

## Repository layout

```
.
├─ it/           # Italian content root — one folder per course (future: en/)
├─ Excalidraw/   # Obsidian's drawing folder (embedded into notes, not navigated)
├─ LICENSE
└─ README.md
```

Open the repo as an **Obsidian vault** and edit normally. `it/` is the content
root; each top-level folder inside it is a **course**.

## The two rules that drive everything

1. **Naming: `NN-slug`.** Every course folder, module folder, and note file is
   named with a zero-padded number + a kebab-case slug, e.g. `03-base-di-dati`,
   `01-introduzione.md`.
   - The number sets the **ordering** within its folder and is **stripped from
     the URL**: `it/03-base-di-dati/01-teoria/01-introduzione.md` →
     `/it/base-di-dati/teoria/introduzione`.
   - Use lowercase, hyphens, no spaces.

2. **A folder is navigable only if it contains `index.md`.** `index.md` makes a
   folder a course/module and supplies its title, description, and intro text.
   Folders **without** `index.md` (e.g. `attachments/`, `Excalidraw/`) are asset
   stores and are ignored by navigation.

## Hierarchy

```
it/
└─ 03-base-di-dati/            # a COURSE  (folder + index.md)
   ├─ index.md                 #   course title/description + intro
   ├─ 01-teoria/               # a MODULE  (sub-folder + index.md)
   │  ├─ index.md
   │  ├─ 01-introduzione.md    #   a lecture
   │  ├─ 02-modello-relazionale.md
   │  └─ attachments/          #   asset store (no index.md → not navigated)
   └─ 02-laboratorio/          # another module
      ├─ index.md
      └─ 01-progetto.md
```

A course can hold note files directly, or group them into module sub-folders.
Nesting is arbitrary — any folder with an `index.md` becomes navigable.

## Frontmatter

Every `.md` starts with YAML frontmatter.

A **course / module `index.md`** (folders have no `type`):

```yaml
---
title: "Basi di Dati"
description: "Appunti del corso di basi di dati: modello relazionale, normalizzazione, tecnologie DBMS, e un progetto di laboratorio con MySQL."
---
```

A **note** (lecture / resource / …):

```yaml
---
title: "Introduzione ai Database e ai DBMS"
description: "Architettura ANSI-SPARC, proprietà ACID, componenti di un DBMS."
type: lecture
---
```

Fields:

| Field | Where | Notes |
|---|---|---|
| `title` | all | Display name. Falls back to the slug if omitted. |
| `description` | all | Shown in cards/lists and used for SEO. |
| `type` | notes | `lecture` (default) · `resource` · `exercise` · `exam` · `summary`. |
| `order` | optional | Override the numeric-prefix ordering (a number). |
| `published` | optional | Set `false` to hide a note or folder. Defaults to `true`. |
| `image` | optional | Cover image basename (e.g. `cover.png`), shown on cards. |
| `authors` | optional | One or more authors, shown as pills. See [Authors](#authors). |
| `topics` / `tags` / `keywords` | optional | Extra keywords for search/SEO. |

> ⚠️ **Quote any title/description containing a colon** (`:`) with double quotes —
> an unquoted `:` breaks YAML.

### How types display

On a course/module page the children are grouped into three sections, in order:

- **Moduli** — sub-folders (each with an `index.md`).
- **Lezioni** — notes with `type: lecture`.
- **Risorse** — notes with any other `type` (`resource`, `exercise`, `exam`, `summary`).

Within each group, items are sorted by their numeric prefix (or `order`).

### Authors

`authors` is a list; each author has a **`name`** and optionally a **`link`**
(opened on click) and an **`image`** (avatar).

```yaml
authors:
  - name: Specy
    link: https://github.com/Specy
    image: /images/logo.png   # absolute path/URL, or a vault image basename
  - name: Jane Doe            # name only is fine
```

The avatar `image` is either a **vault image basename** (resolved like any embed)
or an **absolute path/URL** (e.g. `/images/logo.png`, the site logo). A bare
string also works as shorthand for a name-only author (`authors: [Specy]`).

Authors are shown as pills on course, module, and lecture pages, with a
**fallback**: a page uses its own `authors`; if it has none it inherits the
nearest ancestor's — **lecture → module → course** — and shows nothing if no
ancestor declares any. So setting `authors` once on a course's `index.md`
covers every lecture under it; override on a specific module or lecture to
credit someone else.

## Writing content (Obsidian-flavoured Markdown)

- **Headings** `#`–`####` become navigable sections — search jumps straight to a
  heading's anchor, so structure notes with real headings.
- **Wikilinks** to other notes, resolved by title or slug (case-insensitive),
  anywhere in the vault:
  - `[[Note Title]]` · `[[01-introduzione]]` · `[[slug|Custom label]]` ·
    `[[Note#Heading]]` to jump to a section.
- **Image embeds** by basename: `![[Pasted image 20250622182144.png]]`.
- **Excalidraw embeds**: `![[Drawing 2024-11-11 09.12.21.excalidraw|100%]]` —
  rendered as a theme-aware SVG (light/dark).
- **Math** (KaTeX): `$x^2$` inline, `$$ … $$` for display blocks.
- **Callouts**: `> [!tip] Title` / `> [!warning]` … (Obsidian syntax).
- **Code fences** with a language get syntax highlighting; ` ```mermaid ` fences
  render as diagrams.

## Assets

- Keep images near the notes that use them, conventionally in an `attachments/`
  sub-folder (no `index.md`, so it stays an asset store).
- **Image basenames must be unique across the whole vault** — they are resolved
  by filename alone, so two `diagram.png` files would collide and break a link.
- Excalidraw drawings live in `Excalidraw/` and are embedded by their name.

## Adding a new course — checklist

1. Create `it/NN-course-slug/` using the next free number.
2. Add `it/NN-course-slug/index.md` with `title` + `description` and a short
   intro body (`# Title` + a paragraph).
3. Add lectures as `NN-lecture-slug.md` with frontmatter
   (`title`, `description`, `type: lecture`).
4. *(Optional)* Group lectures into modules: create sub-folders, each with its
   own `index.md`.
5. Drop images into an `attachments/` folder and embed them with `![[name.png]]`.
6. Preview in Obsidian, then **commit & push**.

Pushing to this repo automatically notifies the app repo to bump its submodule
and redeploy — no action needed there. Content-only docs like this file don't
affect the build.

## Gotchas

- A folder with **no `index.md`** never appears in navigation.
- Spaces in folder/file names break the `NN-slug` convention — don't use them.
- Unquoted YAML values containing `:` will fail — quote them.
- Duplicate image basenames anywhere in the vault break image links.
- The numeric prefix is **ordering only**; it never appears in the URL.
- `.obsidian/`, `.trash/`, and `.claude/` are git-ignored.

For the exhaustive content contract and the markdown rendering pipeline (the code
that turns these files into the site), see the app repo:
[Specy/learn](https://github.com/Specy/learn).
