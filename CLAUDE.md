# mikeycestari.com — Project Brief

## About
Portfolio site for Mikey Cestari, Design Director.
Purpose: showcase leadership success stories with accompanying visuals.

## Stack
- React + Vite (static site, no backend needed)
- Deployed via Cloudflare Pages (auto-deploys on push to GitHub)
- Custom domain: mikeycestari.com (via Cloudflare Registrar)

## Project Structure
src/
├── assets/          # images, fonts
├── components/      # reusable UI pieces (Button, Tag, etc.)
├── layouts/         # page templates (StoryLayout, etc.)
├── pages/           # individual pages (Home, Story, About)
├── stories/         # story content and metadata (JS/JSON files)
├── styles/          # design system (CSS custom properties, global styles)
└── App.jsx

## Design System
- Light and dark mode via CSS custom properties toggled on <html> class
- No third-party UI library — custom tokens only
- Tokens cover: colors, type scale, spacing

## Story Template Requirements
Each story page should support:
- Hero area: title + optional cover image
- Prose column: constrained width (~65ch), high readability
- Inline visuals: images or media within the story body
- Metadata: date, tags, role, outcome

## Content Management
- Stories are JS/JSON files in src/stories/
- Each file exports content + metadata (no CMS)
- Add new stories by adding files to src/stories/

## Pages Needed
- Home (story index/showcase)
- Story (individual story template)
- About (TBD)

## Design Notes
- Typography is critical — stories are the core content
- Choose fonts early, don't retrofit
- WebP format for all images, lazy loading
- Mikey's visual design background: expect high design bar