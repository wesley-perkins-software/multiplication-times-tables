# Multiplication Times Tables

## Project summary
A static HTML/CSS/JS site for practicing multiplication times tables (1–12) with dedicated pages for each table plus supporting info pages.

## Live URL
https://multiplication-times-tables.com

## Local development
1. Start a local server from the repo root:
   ```sh
   python3 -m http.server 8000
   ```
2. Open http://localhost:8000 in your browser.

## Test on mobile
1. Make sure your phone and computer are on the same Wi‑Fi network.
2. Find your computer’s local IP (for example, `192.168.1.10`).
3. On your phone, open `http://<local-ip>:8000` in a browser.
4. iPhone note: Safari can cache aggressively. If you don’t see changes, pull to refresh, or open the page in a Private tab to bypass cache.

## Project structure
- `index.html`: Mixed practice page (1–12).
- `1-times-table/` … `12-times-table/`: Per-table pages, each with its own `index.html`.
- `about/`, `privacy-policy/`, `terms/`: Supporting pages.
- `assets/css/main.css`: Site styles.
- `assets/js/`: JavaScript modules.
  - `app.js`: App entry point.
  - `game.js`: Game logic.
  - `ui.js`: DOM/UI rendering.
  - `storage.js`: Local storage helpers.
- Root files: `robots.txt`, `sitemap.xml`, and favicons (`/favicon.ico`, `/favicon-32x32.png`, `/favicon-16x16.png`, `/apple-touch-icon.png`).

## Add a new times table page
1. Copy an existing table folder (for example, `7-times-table/`) and rename it to the new table folder.
2. Update the new page’s `index.html`:
   - `data-table` value for the table number.
   - `data-theme` on `<body>` (use `table-N`).
   - `<title>`, meta description, and canonical URL.
3. Keep the URL directory format with a trailing slash.

## SEO notes
- Every page should have a unique `<title>`, meta description, and canonical URL that matches its trailing-slash path.
- Keep sitemap and robots updated when new pages are added.
- Avoid duplicate copy across the table pages to prevent thin or duplicate content.

## Accessibility notes
- Keep form labels tied to inputs.
- Ensure keyboard support (Enter to submit) and keep a visible submit button for mobile.
- Don’t rely on color alone to communicate state.

## Deployment notes
- Ensure `robots.txt`, `sitemap.xml`, and all favicon files are served from the site root.

## License
No license specified yet.
