// Copy this file and rename it to your story's slug (e.g. design-systems-at-scale.js)
// Then import it in src/stories/index.js:
//   import * as yourStorySlug from './your-story-slug.js'
//   const allStories = [yourStorySlug, ...]

// To use a hero image:
//   1. Add a WebP file to src/assets/stories/<slug>/hero.webp
//   2. Import it: import heroImg from '../assets/stories/<slug>/hero.webp'
//   3. Set meta.heroImage: heroImg

// outcome vs excerpt vs summary
//  excerpt => on the Home page card
//  outcome => specific, measurable result on the Story Header metadata row
//  summary => full-width band above the body

export const meta = {
  title: 'Story Title',
  slug: 'story-slug',         // must match the filename and URL: /stories/story-slug
  startDate: '2024-01',       // YYYY-MM format; used for sorting, display ("Jan 2024"), and computing duration for in-progress stories
  duration: '6 months',       // manual string for completed stories; ignored when status is 'in progress'
  status: 'in progress',      // `in progress` | `complete` (optional)
  tags: ['Tag One', 'Tag Two'],
  role: 'Design Director',
  outcome: 'One sentence describing measurable impact.',
  excerpt: 'Two to three sentences shown on the home page. Summarize the challenge and result.',
  featured: false,             // set true on the story you want in the hero slot on home
  heroImage: null,             // or: import heroImg from '...' and set heroImage: heroImg
}

export const content = [
  {
    type: 'summary',
    // Full paragraph shown in the summary band above the story body (italic, large).
    text: 'A concise framing of the challenge: what was at stake, why it mattered, and what you set out to do.',
  },
  {
    type: 'paragraph',
    text: 'First body paragraph.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Section Heading',
  },
  {
    type: 'paragraph',
    text: 'Paragraph under the section heading.',
  },
  // To add an image:
  // {
  //   type: 'image',
  //   src: importedImageVariable,
  //   alt: 'Descriptive alt text',
  //   title: 'Optional title shown above the image.',      // optional
  //   subtitle: 'Optional subtitle shown above the image.', // optional
  //   caption: 'Optional caption shown below the image.',   // optional
  // },

  // Timeline — two variants:
  //   (default)          horizontal desktop, vertical mobile
  //   variant:'truncated' always horizontal, scrollable, fades on overflow edges
  // Each item is a quarter group. Each event within the group has its own date.
  // `quarter` is optional. `date`/`sublabel` on each event are optional.
  // {
  //   type: 'timeline',
  //   items: [
  //     {
  //       quarter: 'Q1 2025',
  //       events: [
  //         { date: 'Feb 2025', label: 'Brand review' },
  //         { date: 'Mar 2025', label: 'User study', sublabel: 'App-only; 4 designs' },
  //       ],
  //     },
  //     {
  //       quarter: 'Q2 2025',
  //       events: [
  //         { date: 'May 2025', label: 'Design system shipped' },
  //       ],
  //     },
  //   ],
  // },

  // Stat cards — value-first layout (default):
  // Large number at top, bold label below, muted description at bottom.
  // Omit `color` for default heading color, or use: 'error' | 'warning' | 'success' | 'info'
  // {
  //   type: 'stats',
  //   items: [
  //     { value: '14', label: 'Studies', description: 'Unmoderated, JD Power and internal metrics.' },
  //     { value: '50+', label: 'Designs', description: 'Tested, not including the ones we trashed.' },
  //     { value: '5k+', label: 'Clients', description: 'Supplied the feedback via user studies.' },
  //   ],
  // },

  // Before/After comparison — side-by-side (default) or stacked layout.
  // `layout: 'side-by-side'` shows images in two columns on desktop, stacks on mobile (<640px).
  // `layout: 'stacked'` always shows images vertically.
  // `truncate` clips the image at a max-height (px) with a gradient fade and a "Show more" button.
  //   Set to a number for a specific height, or `true` for the 400px default.
  // `after: null` (or omit `after`) renders a "Coming soon" placeholder.
  // `label` on each side defaults to 'Before' / 'After'; set to `null` to hide the label.
  // {
  //   type: 'comparison',
  //   layout: 'side-by-side',
  //   before: {
  //     src: importedImageVariable,
  //     alt: 'Descriptive alt text',
  //     truncate: 500,
  //   },
  //   after: {
  //     src: importedImageVariable,   // or null for placeholder
  //     alt: 'Descriptive alt text',
  //     truncate: 500,
  //   },
  //   caption: 'Optional caption shown below the whole block.',
  // },

  // Side-by-side columns — any block types can be nested in each column.
  // Columns sit side-by-side on desktop and stack vertically on mobile (<640px).
  // Works with any number of columns; two is most common.
  // {
  //   type: 'columns',
  //   columns: [
  //     [
  //       { type: 'image', src: importedImageVariable, alt: 'Left image' },
  //     ],
  //     [
  //       { type: 'image', src: importedImageVariable, alt: 'Right image' },
  //     ],
  //   ],
  // },

  // Stat cards — label-first layout:
  // Bold label at top, large colored number in middle, muted description at bottom.
  // {
  //   type: 'stats',
  //   variant: 'label-first',
  //   items: [
  //     { label: 'Voice of the Customer', value: '10%', description: 'Rated "visual appeal" 1 out of 5 every month.', color: 'error' },
  //     { label: 'JD Power Ranking', value: '9th', description: 'Consistently low in "visual appeal" every year.', color: 'warning' },
  //   ],
  // },
]
