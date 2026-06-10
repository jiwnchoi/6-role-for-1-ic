# Marp Presentation Template

This repository contains a Marp theme for 16:9 presentation decks.

## Files

- `themes/marp.css` - Marp theme CSS
- `marp.config.mjs` - custom directives for title slide metadata
- `main.md` - sample deck using the theme
- `themes/assets/` - sample image assets

## Usage

```bash
pnpm install
pnpm build:html
pnpm build:pdf
pnpm build
pnpm server
```

For one-shot usage without installing dependencies:

```bash
npx @marp-team/marp-cli main.md --theme themes/marp.css --html --allow-local-files -o dist/main.html
npx @marp-team/marp-cli main.md --theme themes/marp.css --pdf --allow-local-files -o dist/main.pdf
```

`--allow-local-files` is required because the theme references local image assets.
`pnpm build` writes generated files to `dist/main.html` and `dist/main.pdf`.
`pnpm server` serves the current directory through Marp CLI server mode. Open `http://localhost:8080/main.md` after starting it.

## Deck Metadata

The title slide reads these values from Markdown frontmatter:

```yaml
title: Presentation Title Goes Here
presenter: Presenter Name
affiliation: Role, Organization
```
