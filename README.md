# Notes — content vault

The Obsidian vault behind **[learn.specy.app](https://learn.specy.app)**: my
university computer-science notes (currently Italian, under `it/`).

## Layout

```
.
├─ it/           # Italian content root — one folder per course (future: en/)
└─ Excalidraw/   # Obsidian's default drawing folder
```

## Authoring

Open this repository as an Obsidian vault and edit normally. Content is
discovered by **convention**:

- Every folder and note file is named `NN-slug` (zero-padded).
- A folder is a navigable course/module **only if it contains an `index.md`**;
  folders without one (`attachments/`, `Excalidraw/`) are asset stores.
- Notes carry frontmatter (`title`, `description`, `type`); see the app repo for
  the full content contract and the markdown rendering pipeline.

After pushing changes here, bump the submodule in the
[app repo](https://github.com/Specy/learn) to publish them.

## License

Licensed under the **GNU Affero General Public License v3.0 or later** — see
[LICENSE](LICENSE).

© 2026 Specy
