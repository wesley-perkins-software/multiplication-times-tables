# Multiplication Times Tables

A static site for practicing multiplication times tables with streak tracking and dedicated pages for each table.

## Live site
https://multiplication-times-tables.com

## Features
- Mixed practice for tables 1–12.
- Individual practice pages for each table (1–12).
- Streak tracking for correct answers.
- Times table chart reference.
- Mobile-friendly layout.

## Local development
1. Start a local server from the repo root:
   ```sh
   python3 -m http.server 8000
   ```
2. Open http://localhost:8000 in your browser.

## Repo structure
- `/assets/css/` and `/assets/js/`: Stylesheets and JavaScript modules.
- `/1-times-table/` … `/12-times-table/`: Per-table pages (each contains an `index.html`).
- Root SEO files: `/robots.txt`, `/sitemap.xml`, `/404.html`, plus favicons at the root.

## Deployment (Netlify)
- Build command: none (static site).
- Publish directory: repository root.
- If a Netlify redirects file is added later (`_redirects` or `netlify.toml`), keep it at the repo root.

## SEO notes
- Canonical URLs should use trailing slashes (for example, `/7-times-table/`).
- Keep `sitemap.xml` and `robots.txt` up to date with all public pages.

## Analytics (future)
- Event tracking can be added later if needed (no analytics are implemented today).
