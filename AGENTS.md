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
├─ it/           # Italian content root — one folder per CDL (future: en/)
├─ Excalidraw/   # Obsidian's drawing folder (embedded into notes, not navigated)
├─ LICENSE
└─ README.md
```

Open the repo as an **Obsidian vault** and edit normally. `it/` is the content
root; each top-level folder inside it is a **CDL** (*corso di laurea* — the
degree programme, e.g. Informatica), and each folder inside a CDL is a
**course**.

## The two rules that drive everything

1. **Naming: `NN-slug`.** Every CDL folder, course folder, module folder, and
   note file is named with a zero-padded number + a kebab-case slug, e.g.
   `01-informatica`, `03-base-di-dati`, `01-introduzione.md`.
   - The number sets the **ordering** within its folder and is **stripped from
     the URL**: `it/01-informatica/03-base-di-dati/01-introduzione.md` →
     `/it/informatica/base-di-dati/introduzione`.
   - Use lowercase, hyphens, no spaces.

2. **A folder is navigable only if it contains `index.md`.** `index.md` makes a
   folder a CDL/course/module and supplies its title, description, and intro
   text. Folders **without** `index.md` (e.g. `attachments/`, `Excalidraw/`) are
   asset stores and are ignored by navigation.

## Hierarchy

A folder's role comes from **how deep it sits**, not from any field:

```
it/
└─ 01-informatica/                # a CDL     (folder + index.md)
   ├─ index.md                    #   degree title/description + intro
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

The homepage lists the **CDLs**; a CDL page lists its **courses** in order (with
their tags); a course page lists its lectures and modules. A course can hold
note files directly, or group them into module sub-folders. Nesting below a
course is arbitrary — any folder with an `index.md` becomes navigable.

**Previous/Next** navigation walks the whole **course** (across its modules) and
stops at its edges — it never rolls over into the next course of the CDL.

## Adding a new CDL

Create `it/NN-cdl-slug/` with an `index.md` (`title` + `description`), then add
course folders inside it. That is the whole setup — nothing to register.

## Frontmatter

Every `.md` starts with YAML frontmatter.

A **CDL / course / module `index.md`** (folders have no `type`):

```yaml
---
title: "Basi di Dati"
description: "Appunti del corso di basi di dati: modello relazionale, normalizzazione, tecnologie DBMS, e un progetto di laboratorio con MySQL."
year: 2
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
| `year` | optional | Academic year (a number) — renders a localized pill: `2° anno` / `Year 2`. See [Tags](#tags). |
| `tags` | optional | Free-form pills, e.g. `[Obbligatorio, 12 CFU]`. See [Tags](#tags). |
| `authors` | optional | One or more authors, shown as pills. See [Authors](#authors). |
| `topics` / `tags` / `keywords` | optional | Extra keywords for search/SEO. |

> ⚠️ **Quote any title/description containing a colon** (`:`) with double quotes —
> an unquoted `:` breaks YAML.

### Tags

Courses (and modules and notes) can carry **tags**, shown as pills next to the
title in listings and under the heading on the page itself.

```yaml
---
title: "Reti di Calcolatori"
year: 3                          # -> "3° anno" (it) / "Year 3" (en)
tags: ["Obbligatorio", "12 CFU"] # -> free-form pills, in this order
---
```

- **`year`** is the one tag the site understands: give it a plain number and it
  is translated per language and accented, so a CDL page reads as a year-by-year
  list. It is display-only — ordering still comes from the `NN-` prefix, so keep
  the numbering consistent with the years if you want the list to read in order.
- **`tags`** is anything else you want to surface (a comma-separated string works
  too). Rendered verbatim, so write them the way they should appear.
- `topics` / `keywords` are **not** tags — they stay invisible SEO keywords.

### How types display

A CDL/course/module page lists **all** its children in one continuous list,
sorted by numeric prefix (or `order`) — folders and notes interleaved, exactly
as they are numbered on disk. `type` picks the icon on each row (and sub-folders
are tinted and get a folder icon):

- **folder** — a course or module (each with an `index.md`).
- **`lecture`** (default) — a lesson.
- **`resource`** · **`exercise`** · **`exam`** · **`summary`** — everything else.

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

1. Create `it/NN-cdl-slug/NN-course-slug/` using the next free number inside the
   CDL the course belongs to.
2. Add its `index.md` with `title` + `description` (plus `year` and any `tags`)
   and a short intro body (`# Title` + a paragraph).
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

- A folder with **no `index.md`** never appears in navigation — including a CDL
  folder, whose missing index hides every course under it.
- Courses live **inside a CDL folder**. A course folder placed at the root of
  `it/` would be read as a CDL, and its lectures as courses.
- Spaces in folder/file names break the `NN-slug` convention — don't use them.
- Unquoted YAML values containing `:` will fail — quote them.
- Duplicate image basenames anywhere in the vault break image links.
- The numeric prefix is **ordering only**; it never appears in the URL.
- `.obsidian/`, `.trash/`, and `.claude/` are git-ignored.

For the exhaustive content contract and the markdown rendering pipeline (the code
that turns these files into the site), see the app repo:
[Specy/learn](https://github.com/Specy/learn).
