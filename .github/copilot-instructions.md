## Save The Date — AI assistant instructions

This project is a small Jamstack wedding site built with Astro and deployed to Netlify. Use the notes below to provide focused, repository-specific help (code, tests, fixes, and PRs).

Response guidelines

- Be direct and concise. Skip filler words and flowery language.
- For small changes: make edits silently using tools, then provide a brief summary at the end.
- Only elaborate when explaining complex concepts or architecture decisions.
- Avoid narrating every single action taken ("Now I'll...", "Let me just...").
- Do not use comments in code diffs unless absolutely necessary for clarity, or within new code changes.
- Code should be self-descriptive and changes made do not need extra explanation beyond the summary.

Project Goals

- Purpose: A mostly-static, mobile-first invitation site for ~15 guests. It must share event details, capture dinner preferences, and surface a gift registry while keeping the UI simple, friendly, and personal.
- Audience & tone: Friendly, fun, and informal copy aimed at a tiny circle of close family. Every touchpoint should feel personal and welcoming.
- Design & responsiveness: Elegant and modern (not fussy), fully responsive, and clarity-first. Default canvas is white with lavender purple and sage green accents for buttons, links, and highlights.
- Stack: Astro (component-driven .astro files), Astro API routes for serverless functions, Netlify hosting, Neon (Postgres) for storage.

Architecture & platform rationale

- Jamstack approach keeps the site "mostly static," fast, and secure while still allowing dynamic moments through API routes.
- Astro's zero-JS-by-default model and component ergonomics suit the building-block philosophy for this invitation site.
- Netlify provides seamless Astro builds and serverless functions; Neon provides serverless Postgres. Lean on these defaults unless there's a strong reason not to.

Key things to know when editing or generating code

- Components: Follow the component-driven approach — create small, focused `.astro` components (e.g., Header.astro, RSVPForm.astro). Prefer props for configuration.
- Progressive enhancement: Default to server-rendered HTML/CSS. Add client JS only for interactive needs (form submission, small state). Avoid shipping large bundles.
- API routes: Dynamic behavior (RSVP, gift registry) lives in Astro API routes which become serverless functions on Netlify. Keep handlers small and idempotent.
- Database: Use Neon (Postgres) via standard `postgres` or `pg` driver if writing server code. Connection handling should suit serverless lifecycles (short-lived connections or pool helpers).

Developer workflows & commands (confirm before running)

- Install & dev: The project uses typical Node tooling for Astro. If `package.json` exists, run `npm install` then `npm run dev` to start local dev server.
- Build: `npm run build` (produces static output / serverless functions). Deploy to Netlify for full integration testing.

Project-specific conventions

- Styling: Global-first CSS. Place foundational styles in global CSS files (fonts, color variables, typographic scale, spacing scale, resets, and shared utilities). Use CSS custom properties for tokens (e.g., `--font-size-1`, `--color-primary`, `--space-2`). Use component-scoped CSS only when a style is unique to a single component and unlikely to be reused (for small layout tweaks such as header gap/padding).

- Example guidance:
  - Global files: `src/styles/base.css`, `src/styles/vars.css` (or similar) should declare fonts, color palette, and CSS variables.
  - Shared components (buttons, links): style from global tokens so appearance is consistent site-wide.
  - Scoped usage: in `Header.astro` only add a small margin tweak if necessary — don't re-declare colors or font rules in components.
- Accessibility & tone: Content should be friendly and informal; small audience — prioritize clarity and mobile usability. Keep color accents to lavender purple and sage green.
- Small-scope PRs: Prefers small, reviewable changes (component per PR). When adding features, include a preview URL from Netlify when possible.

Integration points to watch for

- Netlify platform: Deploys both static site and serverless functions (Astro API routes). Expect serverless cold-starts and plan DB access accordingly.
- Postgres: If adding DB migrations or schema changes (for Neon), document them in PRs and prefer minimal changes.

If anything is unclear or you need deeper repo access (missing files like `package.json` or `src/`), ask for permission to list the workspace and run the project's dev server. Provide short, actionable PRs and ask for review when unsure about design choices.

Request feedback: After making changes, ask maintainers to confirm styling, copy tone, and any Netlify/Neon credentials or environment-specific details.

## Wedding Details

**Dates (2026):**

- Oct 14th: arrive, chill, dinner and games
- Oct 15th: wedding day, get ready, ceremony, party
- Oct 16th: chill and then leave

**Location:**
Chambre Estate Margaret River

**Cost:**
$440 per adult (accommodation for 3 days 2 nights, and food)

**Bride and Groom names:**

- Joshua McCrystal (Josh)
- Anjeleen McCrystal (Lina)

**Theme:**
Indian inspired western wedding with mixed decorations and food
