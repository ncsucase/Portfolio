import v1Screen from '../assets/stories/design-work-in-an-engineering-tool/designer-view-v1.png'

import dashboardLg from '../assets/stories/design-work-in-an-engineering-tool/dashboard-lg.webp'
import dashboardSm from '../assets/stories/design-work-in-an-engineering-tool/dashboard-sm.webp'

export const meta = {
  title: 'Design Work in an Engineering Tool',
  slug: 'design-work-in-an-engineering-tool',
  startDate: '2020-05',
  duration: '2 years',
  status: 'complete',
  contribution: 'Product Design', // was 'Systems & Automation'
  outcome: `Designed a Rally-Airtable integration that routed work to designers automatically, left engineering's tool untouched, and scaled from 8 designers to 40 without a rebuild.`,
  excerpt: `My designers tracked work in Rally, a tool built for engineering, and couldn't find their own assignments. I designed an integration that brought Rally's data into a workspace shaped for design and routed each new Feature to the right designers automatically. Engineering changed nothing.`,
  featured: false,
  heroImage: null,
  readTime: 3,
}

export const content = [
  {
    type: 'summary',
    text: `In 2020, my design team tracked work in Rally, an enterprise tool built around how engineers operate. Designers couldn't find the Features assigned to them. I designed an integration that synced Rally's Feature, PI, and release data into Airtable, routed each new Feature to the right designers automatically, and gave every discipline its own queue. Engineering and Product changed nothing. The system scaled from 8 designers to 40 without a rebuild, and its limits shaped the version that came next.`,
  },

  // ─── The Problem ───────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'The Problem',
  },
  {
    type: 'paragraph',
    text: `When I became design director, my team tracked work in Rally. Engineering used it with Scrum Masters and Product Owners keeping it current. Design had no such support, and Rally's hierarchy, terminology, and workflow states fit how engineers deliver, not how designers plan and iterate.`,
  },
  {
    type: 'paragraph',
    text: `The most basic task failed first: designers couldn't find the Features assigned to them.`,
  },
  {
    type: 'paragraph',
    text: `The usual fix is to pick one tool and make everyone adapt. That creates losers. I set a different constraint: Engineering and Product change nothing.`,
  },

  // ─── Source of Truth ───────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'One Source of Truth, Two Workspaces',
  },
  {
    type: 'paragraph',
    text: `Rally stays the source of truth for delivery. Feature, Program Increment, and release data sync into Airtable automatically, and design data flows back where partners need to see it. Airtable becomes design's working layer, with the structure, fields, and permissions design work needs.`,
  },
  {
    type: 'inline-svg',
    name: 'airtableRallySyncDiagram',
    mobileVariant: 'airtableRallySyncDiagramMobile',
    alt: 'Rally and Airtable connected by a two-way sync. Feature, PI, and release data flow into Airtable, and design data flows back to Rally.',
    caption: null,
  },

  // ─── Routing ───────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'Assignment Nobody Has to Make',
  },
  {
    type: 'paragraph',
    text: `Routing did more for designers than the sync itself. An alignment table records which designers work with which Product Managers. When a Feature syncs in from Rally, the system reads its owner, finds the aligned designers, and assigns it. Nobody assigns work by hand, and no designer goes looking for it.`,
  },
  {
    type: 'paragraph',
    text: `Each discipline works from its own queue. Content, UX, and UI designers open their view and find their Features already there, grouped by design due date, with PI, status, and size in one row.`,
  },
  // VISUAL: annotated v1 Designer View. Anonymize names and Feature names first.
  {
    type: 'annotated-image',
    group: 'sbd-v1',
    label: 'Designer view:',
    status: 'success',
    options: [
      { id: 'routing', label: 'How work finds designers' },
      { id: 'tracking', label: 'What designers track' },
    ],
    src: v1Screen,
    alt: 'First version of the designer view: a UI designer’s Features grouped by design due date, with owner, PI, status, and size columns',
    // x / y are percentages of the 2576x1406 screenshot. Nudge after placing.
    tooltips: {
      routing: [
        { x: 67.8, y: 20.8, text: 'Owner is the PM for Features from Rally, or a design leader for Features design creates. The alignment table matches each PM to their designers, so a Feature lands in the right queue the moment it syncs.' },
        { x: 7.2, y: 19.6, text: 'Each discipline has its own queue. Content, UX, and UI designers each open a view with only their work in it.' },
        { x: 58.7, y: 10.2, text: 'PI and release data sync from Rally. Nobody types them.' },
      ],
      tracking: [
        { x: 89.5, y: 37.9, text: 'Each discipline tracks its own status on the Feature: Not Started, Work in Progress, In Review, Done.' },
        { x: 78.8, y: 20.8, text: 'Ready for UI flagged the UX handoff. It taught UI designers to wait instead of collaborate, and the next version dropped it.' },
        { x: 7.5, y: 27.6, text: 'Research I&Is link each Feature to the research behind it.' },
      ],
    },
  },

  // ─── Research ──────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'Linking Work to Research',
  },
  {
    type: 'paragraph',
    text: `I also connected our base to the User Research team's Airtable. Each Feature links to the studies that informed it, so we can show which work testing shaped and what testing found. Research no longer ends where delivery starts. It stays attached to the work.`,
  },

  // ─── Limits ────────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'Where the First Version Fell Short',
  },
  {
    type: 'paragraph',
    text: `Designers were tagged directly to Features, and each discipline had one status column per Feature. Designers couldn't track their own work and progress independently of the Feature they shared.`,
  },
  {
    type: 'paragraph',
    text: `A handoff flag also worked against collaboration. "Ready for UI" turned on when UX marked a Feature done, signaling UI designers to start. Instead, it taught them to wait. UI designers disengaged until UX finished, and UX lost their input while it could still shape the work.`,
  },
  {
    type: 'paragraph',
    text: `The next version fixed both. Each designer has their own story on every Feature they touch, and the handoff flag is gone. [Operational Visibility at Scale](/stories/operational-visibility-at-scale) covers what that made possible.`,
  },

  // ─── Scale ─────────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'From 8 Designers to 40',
  },
  {
    type: 'paragraph',
    text: `When my scope expanded to all of Digital Servicing design, the system came with me. Extending it from 8 designers to 40 meant mapping the new teams' Rally structure and adjusting fields. The core held.`,
  },
  {
    type: 'paragraph',
    text: `It also absorbed a reorg. When [I restructured my org](/stories/structure-follows-craft) so designers stayed in their feature areas as PMs rotated, routing needed no rebuild. A design leader swaps the aligned PM in the alignment table, and the new PM's Features start flowing to the designers who stayed.`,
  },

  // ─── Outcome ───────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `My team has worked from this system since 2020. Work reaches the right designer without anyone routing it, deadlines are visible, and delivery health stays accurate without anyone maintaining it. I answer capacity questions from leadership in the meeting, not a week later.`,
  },
  {
    type: 'paragraph',
    text: `The research link adds what most design organizations lack: a documented trail from user insight to shipped feature. Design's contribution to product decisions is no longer a claim. It's a record.`,
  },
]