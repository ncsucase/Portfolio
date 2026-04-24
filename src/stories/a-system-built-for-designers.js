import dashboardLg from '../assets/stories/a-system-built-for-designers/dashboard-lg.webp'
import dashboardSm from '../assets/stories/a-system-built-for-designers/dashboard-sm.webp'

export const meta = {
  title: 'A System Built for Designers',
  slug: 'a-system-built-for-designers',
  startDate: '2020-05',
  duration: 'ongoing',
  status: 'in progress',
  tags: ['Design Operations', 'Workflow Automation', 'Systems Thinking', 'Leadership'],
  role: 'Design Director',
  outcome: 'Built an automated Rally–Airtable sync that gave my team real-time delivery visibility — and earned a mandate to roll it out across two additional design organizations.',
  excerpt: 'Design and engineering teams track work in fundamentally different tools. I built an automated bridge between them that gave my designers a purpose-built system without disrupting our engineering partners — and the results earned a mandate to scale it across two other organizations at Truist.',
  featured: false,
  heroImage: null,
}

export const content = [
  {
    type: 'summary',
    // Full paragraph shown in the summary band above the story body (italic, large).
    text: `Design and development teams at Truist track work in fundamentally different ways. Rather than accept that gap, I built an automated bridge between Rally (used by engineering) and Airtable (used by design) using their APIs — giving my team a purpose-built workflow system without asking our development partners to change anything. The system worked so well that the Head of Design is now having me roll it out across 2 other design organizations at Truist.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Situation',
  },
  {
    type: 'paragraph',
    text: `When I took over as design director, my team was tracking work in Rally (an enterprise work management tool built around how developers operate) without support. Our development partners tracked everything in Rally with Scrum Master and Product Owner support. `,
  },
  {
    type: 'paragraph',
    text: `Rally works well for engineering when there’s dedicated help like a Scrum Master. For design, it's the wrong shape entirely: the hierarchy, the terminology, the workflow states — none of it maps cleanly to how designers plan, iterate, and deliver.`,
  },
  {
    type: 'paragraph',
    text: `The standard answer in organizations like this is to pick one system and make everyone adapt to it. That answer creates losers.`,
  },
  {
    type: 'paragraph',
    text: `I decided to build a better system.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Problem',
  },
  {
    type: 'paragraph',
    text: `Two things needed to be true simultaneously:`,
  },
  {
    type: 'list',
    items: [
      `My team needed a system that matched how design work actually flows.`,
      `Our development and product partners needed to see the same data they were already tracking in Rally without having to look in two places`
    ]
  },
  {
    type: 'paragraph',
    text: `Manual syncing wasn't viable. Data would go stale, people would stop trusting it, and someone would always be spending time reconciling rather than working. The only durable solution was automation.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Build',
  },
  {
    type: 'paragraph',
    text: `I used the Rally and Airtable APIs to create a live sync between them. Rally remained the source of truth for shared delivery data — sprint assignments, story points, completion status — while Airtable became the design team's operating layer: a purpose-built environment with the right structure, automation, field types, and permissions for how design work actually happens.`,
  },
  {
    type: 'inline-svg',
    name: 'syncDiagram',
    alt: 'Airtable and Rally connected bidirectionally through a custom sync layer built by Mikey.',
    caption: null,
  },
  {
    type: 'paragraph',
    text: `The sync runs automatically. When something changes in Rally that my team needs to know about, it surfaces in Airtable without anyone having to check. When design-specific data needs to be visible to partners, it flows back. No manual reconciliation. No stale data. No one's time wasted on data hygiene.`,
  },
  {
    type: 'paragraph',
    text: `The system also solved for something Rally never could: visibility into design-specific health signals. At any point I can pull an accurate picture of how my team is performing, where they're spending their time, what's at risk, and what's behind schedule — without asking anyone to stop what they're doing to run down the details and generate a report.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Recognition',
  },
  {
    type: 'paragraph',
    text: `The Head of Design noticed. Not because I pitched it — because when he asked me questions about my team's workload and delivery health, I could answer them immediately and accurately. My peer design directors couldn't.`,
  },
  {
    type: 'paragraph',
    text: `The moment that crystallized it was when he asked the design leadership team how much capacity we were spending on strategy versus business-as-usual work. I pulled the answer up in Airtable during the meeting. My peers took about a week to get back to him.`,
  },
  {
    type: 'paragraph',
    text: `That pattern repeated. My team also stopped asking for extra support to manage our tracking — something my peers' teams still needed. And when I synced my Airtable with the Research team's, we gained something none of us had before: a live connection between feature work and the user testing that supports it. That cross-team visibility is a big part of what he wants to replicate.`,
  },
  {
    type: 'paragraph',
    text: `He's asked me to build it out across his other design organizations — and that ask came with its own set of design problems.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Rollout',
  },
  {
    type: 'paragraph',
    text: `Scaling a system built around one team's ways of working to multiple teams is its own design problem. Every organization has its own Rally structure, its own PM relationships, its own informal tracking habits. The rollout isn't a template handoff — it's a structured discovery process.`,
  },
  {
    type: 'paragraph',
    text: `For each team I start by understanding how they currently work: what they track, what they don't, what their partners need from them, and where the friction lives. Then I translate that into the system in a way that's as undisruptive as possible — preserving what teams are already doing well while closing the gaps.`,
  },
  {
    type: 'paragraph',
    text: `Every rollout also feeds back into the system itself: each team I onboard surfaces edge cases and improvement opportunities I hadn't designed for, making the system more robust for everyone.`,
  },
  {
    type: 'paragraph',
    text: `The hardest part isn't the technical build. It's the change management — helping teams understand why a purpose-built system is worth the short-term adjustment, and earning the trust of partners who are used to getting inconsistent information.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `My team has operated on this system since 2020. The Head of Design now has a model for what reliable design workflow visibility looks like at the organizational level — and I'm the one building it out across his org.`,
  },
  {
    type: 'image',
    src: dashboardLg,
    srcSm: dashboardSm,
    alt: 'The Airtable dashboard built for the design team',
    caption: `The live Airtable dashboard — accurate, always on, no manual updates.`,
  },
]
