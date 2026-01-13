# agents.md

## Project Overview
This is a static educational website for practicing multiplication times tables (1–12).
The site is designed for students, parents, and teachers and prioritizes:
- Simplicity
- Accessibility
- SEO clarity
- Performance
- Mobile usability

## Tech Stack (Do Not Change)
- Static HTML files per page (directory + index.html)
- Vanilla CSS (single stylesheet: /assets/css/main.css)
- Vanilla JavaScript (ES modules in /assets/js/)
- No frameworks (no React/Vue/Angular/Svelte)
- No build tools/bundlers (no Vite/Webpack/Parcel)
- No TypeScript
- No external UI libraries

## URL Structure (Critical)
- All pages use directory-based URLs with trailing slashes:
  - / (mixed 1–12)
  - /7-times-table/
  - /privacy-policy/
  - /about/
  - /terms/
- Each URL maps to a folder containing index.html.
- Do NOT introduce query-param routing or hash routing.
- Do NOT rename existing URLs without explicit instruction.

## SEO Rules
- Every page must include:
  - Unique <title>
  - Unique meta description
  - Correct canonical URL matching the final trailing-slash URL
- Keep the exact phrase “N Times Table” in navigation/buttons for clarity + SEO.
- Avoid duplicate body content across table pages:
  - Vary supporting text naturally
  - Include per-table unique “chart” and “facts/patterns” blocks
- Keep pages fast and crawlable; do not hide essential content behind JS-only rendering.

## Accessibility Rules
- Keep semantic HTML (headings in order, labels for inputs)
- Maintain keyboard support (Enter submit on desktop; visible submit button for mobile)
- Ensure focus styles remain visible
- Do not rely on color alone to convey meaning

## JavaScript Rules
- Keep game logic separate from DOM code (game.js vs ui.js)
- Do not introduce globals; keep ES module structure
- Do not break localStorage best streak behavior
- Avoid unnecessary refactors; prefer small changes

## Styling Guidelines
- “Playful but polished” kid-friendly aesthetic
- Use CSS variables for theming:
  - Per-table accent colors via body data-theme="table-N"
  - Mixed page uses neutral theme
- Keep success/error colors consistent across pages
- Keep backgrounds subtle; avoid high-saturation full-page color fills
- Maintain responsive layouts for mobile + desktop

## Privacy / Ads Constraints
- No tracking/analytics scripts unless explicitly requested
- Ads placeholders may exist but should remain hidden unless instructed
- Any future ad/analytics changes must also update the Privacy Policy copy

## Things NOT To Do
- Do not add accounts/authentication
- Do not add new dependencies
- Do not change URL structure
- Do not remove SEO copy or replace with symbols (e.g., “×7” instead of “7 Times Table”)
- Do not add timers/leaderboards unless explicitly requested
- Do not rewrite content across pages into identical templates

## Output Expectations
- Prefer incremental changes with minimal diff
- List modified files
- Explain what changed and confirm constraints were respected
