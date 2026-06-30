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
- Hero area: title
- Summary: full width container with constrained width (~65ch) text, high readability
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

## SVG Guidelines

### Why CSS tokens work in SVGs
SVGs are imported with `?react` (e.g., `import Foo from './foo.svg?react'`), which renders them as inline SVG elements in the DOM. CSS custom properties defined on `:root` and `html.dark` cascade into them correctly, so `var(--token)` works in SVG attributes and `style=""` blocks.

### Token reference

| Role | Token | Light | Dark |
|---|---|---|---|
| Page background | `--bg` | #fff | #1F1F1F |
| Deep background / tracks | `--bg-deep` | #F2F2F2 | #2B2B2B |
| Body text | `--text` | rgba(0,0,0,0.8) | rgba(255,255,255,0.8) |
| Borders / dividers | `--border` | rgba(0,0,0,0.1) | rgba(255,255,255,0.2) |
| Success (dots, arcs) | `--color-success` | #34C759 | #30D158 |
| Caution | `--color-caution` | #FFCC00 | #FFD60A |
| Warning | `--color-warning` | #FF9500 | #FF9F0A |
| Error | `--color-error` | #FF3B30 | #FF453A |
| Success glow shadow | `--arc-glow-green` | rgba(30,150,60,0.35) | rgba(50,210,100,0.5) |
| Caution glow shadow | `--arc-glow-yellow` | rgba(180,140,0,0.35) | rgba(255,210,50,0.5) |
| Warning glow shadow | `--arc-glow-orange` | rgba(200,120,0,0.35) | rgba(255,180,50,0.5) |
| Error glow shadow | `--arc-glow-red` | rgba(220,60,30,0.35) | rgba(255,120,50,0.5) |
| Ring inner shadow | `--ring-inner-shadow` | rgba(0,0,0,0.15) | (inherits) |
| Ring inner highlight | `--ring-inner-highlight` | rgba(255,255,255,0.2) | (inherits) |
| Text on vibrant/gradient surfaces | `--text-on-vibrant` | rgba(0,0,0,0.8) | rgba(0,0,0,0.8) |

### ID suffix convention
Every SVG must use a **unique per-file suffix** on all `id` attributes. All SVGs imported via `?react` share the same DOM — duplicate IDs cause gradients and filters to resolve to the wrong definition.

Convention: 2–4 lowercase letters abbreviating the filename (e.g., `_dsb` for dev-spec-before).

Assigned suffixes:
- `_dcb` — designer-capacity-before.svg
- `_dca` — designer-capacity-after.svg (moved from duplicate below)
- `_aa` — accessibility-after.svg
- `_ab` — accessibility-before.svg
- `_dsa` — dev-spec-after.svg
- `_dsb` — dev-spec-before.svg
- `_rdb` — ratings-distribution-before.svg
- `_rda` — ratings-distribution-after.svg
- `_mmd` — mental-models-of-a-designer.svg
- `_cd` — coallition.svg (coalition desktop)
- `_cm` — coallition-mobile.svg (coalition mobile)
- `_phb` — product-hours-before.svg
- `_pha` — product-hours-after.svg
- `_momm` — matrixed-org-model-mobile.svg
- `_ert` — everyone-rotates-timeline.svg
- `_prt` — pm-rotates-timeline.svg
- `_ars` — airtable-rally-sync-diagram.svg
- `_arsm` — airtable-rally-sync-diagram-mobile.svg
- `_mcdt` — mcd-timeline.svg
- `_mcdtm` — mcd-timeline-mobile.svg

### Filter pattern — single soft pass only
Figma exports a double-pass filter (stdDeviation=1 tight + stdDeviation=4 soft). The tight pass causes jagged anti-aliasing on circles and arcs. **Remove it — use only the stdDeviation=4 pass.**

```xml
<filter id="filter1_dd_SUFFIX" x="..." y="..." width="..." height="..."
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <!-- Single soft drop shadow — removed the tight stdDeviation=1 pass that caused jagged edges -->
    <feColorMatrix in="SourceAlpha" type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset in="hardAlpha" dx="2" dy="2" result="offset1"/>
    <feGaussianBlur in="offset1" stdDeviation="4" result="blur1"/>
    <feComposite in="blur1" in2="hardAlpha" operator="out" result="shadowMask"/>
    <feFlood flood-color="var(--arc-glow-green)" result="glowColor"/>
    <feComposite in="glowColor" in2="shadowMask" operator="in" result="coloredShadow"/>
    <feBlend mode="normal" in="coloredShadow" in2="BackgroundImageFix" result="dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="dropShadow" result="shape"/>
</filter>
```

Notes:
- Use `feFlood flood-color="var(--token)"` for color — `feColorMatrix` cannot use CSS variables
- Always use `filterUnits="userSpaceOnUse"` with absolute coordinates
- For 8px-radius circles: `x = cx - 14, y = cy - 14, width = 32, height = 32`

### Gradient stop syntax
Use the `style` attribute — bare `stop-color="var(...)"` does not work in most browsers:

```xml
<stop style="stop-color: var(--color-success)"/>
<stop offset="1" style="stop-color: var(--color-caution)"/>
```

### Migration status
- ✅ what-designers-should-actually-be-doing/ — all 6 files tokenized
- ✅ a-common-language-for-performance/ratings-distribution-before.svg
- ✅ a-common-language-for-performance/ratings-distribution-after.svg
- ✅ a-common-language-for-performance/mental-models-of-a-designer.svg (suffix: _mmd)
- ✅ a-common-language-for-performance/collaborative-rating-process-desktop.svg
- ✅ a-common-language-for-performance/collaborative-rating-process-mobile.svg
- ✅ structure-follows-craft/matrixed-org-model-mobile.svg (suffix: _momm)
- ✅ structure-follows-craft/everyone-rotates-timeline.svg (suffix: _ert)
- ✅ structure-follows-craft/pm-rotates-timeline.svg (suffix: _prt)
- ✅ a-system-built-for-designers/airtable-rally-sync-diagram.svg (suffix: _ars)
- ✅ a-system-built-for-designers/airtable-rally-sync-diagram-mobile.svg (suffix: _arsm)
- ✅ structure-follows-craft/pm-rotations-flowchart.svg
- ✅ structure-follows-craft/mismatched-coaching-flowchart.svg
- ✅ mobile-check-deposit/mcd-timeline.svg (suffix: _mcdt)
- ✅ mobile-check-deposit/mcd-timeline-mobile.svg (suffix: _mcdtm)