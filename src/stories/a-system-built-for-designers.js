import dashboardLg from '../assets/stories/a-system-built-for-designers/dashboard-lg.webp'
import dashboardSm from '../assets/stories/a-system-built-for-designers/dashboard-sm.webp'

export const meta = {
  title: 'A System Built for Designers',
  slug: 'a-system-built-for-designers',
  startDate: '2020-05',
  duration: '2 years',
  status: 'complete',
  tags: ['Design Operations', 'Workflow Automation', 'Systems Thinking'],
  role: 'Design Director',
  outcome: 'Built an automated Rally–Airtable sync that gave my team real-time delivery visibility, extended it to a 40-person org without rebuilding it, and connected design work directly to the user research that shaped it.',
  excerpt: 'Design and engineering teams track work in fundamentally different tools. I built an automated bridge between them that gave my designers a purpose-built system without disrupting our engineering partners. Then extended it to a larger org when my scope expanded.',
  featured: false,
  heroImage: null,
}

export const content = [
  {
    type: 'summary',
    // Full paragraph shown in the summary band above the story body (italic, large).
    text: `Design and development teams at Truist track work in fundamentally different ways. Rather than accept that gap, I built an automated bridge between Rally (used by engineering) and Airtable (used by design) using their APIs, giving my team a purpose-built workflow system without asking our development partners to change anything. When my scope expanded to lead all of Digital Servicing design, the system came with me and extended to a 40-person org without a rebuild.`,
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
    text: `Rally works well for engineering when there’s dedicated help like a Scrum Master. For design, it's the wrong shape entirely: the hierarchy, the terminology, the workflow states, none of it maps cleanly to how designers plan, iterate, and deliver.`,
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
    text: `I used the Rally and Airtable APIs to create a live sync between them. Rally remained the source of truth for shared delivery data (sprint assignments, story points, completion status) while Airtable became the design team's operating layer: a purpose-built environment with the right structure, automation, field types, and permissions for how design work actually happens.`,
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
    text: `The system also solved for something Rally never could: visibility into design-specific health signals. At any point I can pull an accurate picture of how my team is performing, where they're spending their time, what's at risk, and what's behind schedule, without asking anyone to stop what they're doing to run down the details and generate a report.`,
  },
  {
    type: 'paragraph',
    text: `One capability stood out as particularly valuable: I connected our Airtable directly to the User Research team's Airtable. Linking design work to the specific user studies that informed it. For the first time, we could show which work was shaped by user testing and what that testing found. Discovery wasn't just happening before delivery, it was traceable through it.`
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Recognition',
  },
  {
    type: 'paragraph',
    text: `The Head of Design noticed. Not because I pitched it. When he asked me questions about my team's workload and delivery health, I could answer them immediately and accurately. My peer design directors couldn't.`,
  },
  {
    type: 'paragraph',
    text: `The moment that crystallized it: he asked the design leadership team how much capacity we were spending on strategy versus business-as-usual work. I pulled the answer up in Airtable during the meeting. My peers took about a week to get back to him.`,
  },
  {
    type: 'paragraph',
    text: `That pattern repeated. My team also stopped asking for extra support to manage our tracking (something my peers' teams still needed).`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Extension',
  },
  {
    type: 'paragraph',
    text: `When my scope expanded to lead all of Digital Servicing design, I inherited a larger team with the same fundamental problem. I didn't rebuild the system. I extended it.`
  },
  {
    type: 'paragraph',
    text: `The same Rally-Airtable architecture that worked for an 8-person team scaled to a 40-person organization without structural changes. The extension required mapping the new team's Rally structure and adjusting field configurations, but the core held. That's the test of a well-designed system: it accommodates growth without requiring you to start over.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `My team has operated on this system since 2020. Work is clearly prioritized, deadlines are visible, and delivery health is accurate without anyone spending time maintaining it. When my manager asks about capacity or throughput, I have the answer before he finishes the question.`,
  },
  {
    type: 'paragraph',
    text: `The research connection adds a layer most design organizations don't have: a documented trail from user insight to shipped feature. That traceability has chnaged how we talk about design's contribution to product decisions. It's no longer a claim we make, it's something we can show.`,
  },
  {
    type: 'image',
    src: dashboardLg,
    srcSm: dashboardSm,
    alt: 'The Airtable dashboard built for the design team',
    caption: `The live Airtable dashboard — accurate, always on, no manual updates.`,
  },
]
