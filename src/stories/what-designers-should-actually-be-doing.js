export const meta = {
  title: 'What Designers Should Actually Be Doing',
  slug: 'what-designers-should-actually-be-doing',         // must match the filename and URL: /stories/story-slug
  startDate: '2026-05',       // YYYY-MM format; used for sorting, display ("Jan 2024"), and computing duration for in-progress stories
  duration: '6 months',       // manual string for completed stories; ignored when status is 'in progress'
  status: 'in progress',      // `in progress` | `complete` (optional)
  contribution: 'Systems & Automation',
  outcome: 'One sentence describing measurable impact.',
  excerpt: `Spec production isn't where designers create value. I'm replacing the execution layer with an AI-powered system and redirecting that capacity toward the work only designers can do.`,
  featured: true,             // set true on the story you want in the hero slot on home
  heroImage: null,             // or: import heroImg from '...' and set heroImage: heroImg
  readTime: 5,
}

export const content = [
  {
    type: 'summary',
    // Full paragraph shown in the summary band above the story body (italic, large).
    text: `The design-to-dev handoff at Truist relies on a manual translation layer: UI designers interpreting wireframes, selecting components, annotating accessibility requirements, and producing documentation that developers struggle to use. I'm designing an AI-powered spec generation system to replace it. The planning is complete. The POC is next.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Situation',
  },
  {
    type: 'paragraph',
    text: `Every feature my team delivers requires a translation step between UX and development. A UX designer completes wireframes. A UI designer then takes those wireframes and does the work of applying the correct Design System components and tokens, documenting responsive behavior across viewports, and annotating every accessibility requirement (semantic roles, ARIA labels, focus order, touch targets) before producing a Figma file developers can reference.`,
  },
  {
    type: 'paragraph',
    text: `It's a multi-day process per feature. And it's fragile in the way any manual, knowledge-intensive process is fragile: the Design System contains hundreds of components and patterns. No designer holds all of it accurately in their head across every delivery. The spec reflects how well someone remembers, how much time they have, and how tired they are.`,
  },
  {
    type: 'paragraph',
    text: `That's not a people problem. That's a system design problem.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Organizational Cost',
  },
  {
    type: 'paragraph',
    text: `Three things converged this year that make this worth solving now.`,
  },
  {
    type: 'paragraph',
    text: `First, a meaningful portion of my UI designer capacity is going to mechanical execution (component selection, token application, annotation) rather than the higher-order work my organization actually needs from design.`,
  },
  {
    type: 'paragraph',
    text: `Second, Truist went through a round of layoffs that eliminated the team's internal accessibility specialists. That knowledge had previously compensated for some of the inconsistency in designer annotations. Without it, WCAG 2.1 AA compliance depends on individual designer recall. For a regulated financial institution, that's a risk that compounds quietly until an audit or incident make it impossible to ignore.`,
  },
  {
    type: 'paragraph',
    text: `Third, developers aren't finding Figma files useful. No structured interaction documentation, unclear screen relationships, and the friction of navigating a canvas to find the information they need. Rework cycles increase as a result.`,
  },
  {
    type: 'paragraph',
    text: `Three separate problems pointing at the same handoff step.`,
  },
  {
    type: 'columns',
    columns: [
      [{ 
        type: 'inline-svg',
        align: 'center',
        name: 'waffleChartDesign',
        title: 'Designer Capacity',
        alt: 'Designer capacity on execution vs thinking',
      }],
      [{ 
        type: 'inline-svg',
        align: 'center',
        name: 'waffleChartAccessibility',
        title: 'Accessibility Coverage',
        alt: 'Reliable and unreliable annotations due to lack of experts',
      }],
      [{ 
        type: 'inline-svg',
        align: 'center',
        name: 'waffleChartDev',
        title: 'Dev Spec Usefulness',
        alt: 'Proportion of specs that are useful to developers',
      }],
    ]
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Approach',
  },
  {
    type: 'paragraph',
    text: `I didn't start with the technology. I started with the question of what the handoff process should actually produce, and who it should serve.`,
  },
  {
    type: 'paragraph',
    text: `Developers are users, too. So before designing the system, I applied the same process I apply to any product problem. I ran co-creation sessions with developers across different roles to understand what the handoff deliverable should actually contain and how they'd navigate it. What information do they need first? What causes them to re-open a conversation with design? Where does the current Figma artifact break down in practice? We're now prototyping two candidate formats and taking those to developers for usability testing before any generation logic is built.`,
  },
  {
    type: 'paragraph',
    text: `The answer is a document developers can navigate linearly, not a canvas they have to explore. Pixel-perfect, annotated visuals with tappable zones linked to component cards. Explicit interaction and transition documentation. Accessibility annotations generated against a known standard, not from memory. Responsive behavior documented in a layout changes matrix across viewports.`,
  },
  {
    type: 'aside',
    label: 'Why not generate code directly?',
    text: `My developer leads don't want it and the reasons are practical. Generated front-end code doesn't account for backend constraints, service calls, or iframe scenarios. And if developers can copy/paste it, they will, which means it won't be reviewed properly. A spec that explains intent is more useful than code that approximates it.`
  },
  {
    type: 'heading',
    level: 2,
    text: 'The System',
  },
  {
    type: 'paragraph',
    text: `The system handles the mechanical work. Designers handle the judgment calls.`,
  },
  {
    type: 'paragraph',
    text: `The AI layer is what makes this tractable. The system takes a Figma wireframe URL, calls the Figma REST API to retrieve the file structure, and cross-references three documentation sources: the Design System Figma library (structural ground truth), Design System Markdown files (component usage reasoning, already maintained for AI consumption by the DS team), and the team's own Figma pattern library. The agent maps components, generates accessibility annotations, documents responsive overrides, and surfaces open questions as blockers before a developer picks up the work.`,
  },
  {
    type: 'paragraph',
    text: `Designers review and correct the output. They don't produce it from scratch. The review interface uses constrained dropdowns populated from the Design System to prevent invalid values. A plain-language input handles corrections the form can't accommodate. Every correction is logged with attribution.`,
  },
  {
    type: 'paragraph',
    text: `That attribution data feeds a quality tracking layer. The system surfaces which component categories have above-average error rates, which designers are generating above-average correction volume, and whether the agent is consistently misinterpreting certain wireframe patterns. Those signals go to the design lead and to the Design System team, giving them something they've never had before: a demand-driven signal on which components are being misapplied and which custom patterns are being built around gaps in their library.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Organizational Work',
  },
  {
    type: 'paragraph',
    text: `Building the system is the tractable part. Getting it approved at a major bank requires a different kind of design work.`,
  },
  {
    type: 'paragraph',
    text: `Truist's enterprise technology process isn't hostile to new tools. It's thorough. Risk review, procurement, vendor assessment. I mapped the process early and identified that the critical path isn't the build. It's the vendor contract. An existing Anthropic relationship at the enterprise level unlocks the approval path significantly faster than a net-new procurement.`,
  },
  {
    type: 'paragraph',
    text: `I also recognized that a working demo changes every conversation. Rather than entering the approval process with a PRD, I'm building Phase 1 on personal API keys: interactive prototypes that show the spec output, the review interface, the viewport switcher, the quality dashboard. Reviewers and stakeholders at every level respond differently to something they can interact with than to something they can only read about.`,
  },
  {
    type: 'paragraph',
    text: `The alignment conversation with the Design System team lead was equally important. The system only works if it has accurate, maintained documentation to draw from. The DS team had already built Markdown documentation with AI consumption in mind. Rather than asking them to change anything, I framed the partnership around return on that investment: the system makes their documentation directly measurable, and the custom component log gives them a roadmap signal they currently don't have.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'What This is Actually For',
  },
  {
    type: 'paragraph',
    text: `When the system is running, the goal isn't a smaller design team. It's a better-used one.`,
  },
  {
    type: 'paragraph',
    text: `The capacity currently absorbed by mechanical execution belongs somewhere else: understanding users, identifying the right problems, and finding the right solutions before a feature reaches implementation. When designers aren't spending multi-day stretches on spec production, that time goes into discovery before features are defined, usability testing on what's already in the market, and earlier participation in roadmap conversations rather than downstream consumption of them. That's where design creates organizational value. Not in producing documentation that a well-designed system can handle.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Current State',
  },
  {
    type: 'paragraph',
    text: `The planning is complete. Interactive prototypes exist. The PRD is written. The organizational alignment conversations are underway. The POC is being scoped around what's currently approvable. Enterprise AI tool approvals at Truist take 12 to 18 months, and the approval pipeline has slowed further while the organization works through broader AI governance questions. I'm building what I can with what's accessible now and sequencing the rest against the approval timeline.`,
  },
  {
    type: 'paragraph',
    text: `I'm publishing this now, before it's built, because I think it illustrates something specific about how I approach AI: not as a trend to integrate, but as a tool to reach for when a real problem has a shape that fits what it can do. Manual, knowledge-intensive, high-volume, error-prone, with clear source material and a defined output to generate. That's the shape.`,
  },
]
