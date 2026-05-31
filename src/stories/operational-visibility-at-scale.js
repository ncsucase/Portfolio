export const meta = {
  title: 'Operational Visibility at Scale',
  slug: 'operational-visibility-at-scale',         // must match the filename and URL: /stories/story-slug
  startDate: '2026-01',       // YYYY-MM format; used for sorting, display ("Jan 2024"), and computing duration for in-progress stories
  duration: '6 months',       // manual string for completed stories; ignored when status is 'in progress'
  status: 'in progress',      // `in progress` | `complete` (optional)
  tags: ['Design Operations', 'Workflow Automation', 'Systems Thinking', 'Org Design'],
  role: 'Design Director',
  outcome: 'One sentence describing measurable impact.',
  excerpt: `My manager saw what I'd built and asked me to replicate it across two other design organizations. What looked like a rollout turned out to be a design problem.`,
  featured: false,             // set true on the story you want in the hero slot on home
  heroImage: null,             // or: import heroImg from '...' and set heroImage: heroImg
  readTime: 3,
}

export const content = [
  {
    type: 'summary',
    // Full paragraph shown in the summary band above the story body (italic, large).
    text: `When my manager asked me to extend my Rally-Airtable system to two sibling design organizations, the easy path was a template handoff. I treated it like a design problem instead: discovery interviews, needs mapping, a shared architecture with team-specific layers, and a POC before any team touched it. What I found in those interviews changed what I thought I was building.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Ask',
  },
  {
    type: 'paragraph',
    text: `My manager had seen what operational visibility looked like when it works. When he asked the design leadership team about capacity and delivery health, I had answers in the room. My peers followed up days later. That gap was enough for him to ask me to replicate what I'd built across two other design organizations he oversees.`,
  },
  {
    type: 'paragraph',
    text: `My first instinct was to treat it as a deployment. Export the Airtable base, hand it to each team, and walk them through the setup. But a system built around one team's way of working doesn't automatically fit two others. I'd learned that much from extending it to my own larger org. So before building anything, I went to learn what I was actually building for. When I shared what the discovery revealed with my manager, he agreed the extra care was warranted, and the go-forward plan reflected it.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Discovery',
  },
  {
    type: 'paragraph',
    text: `I interviewed the leaders of each sibling org and key members of their teams. I wanted to understand their Rally structure, their PM relationships, their informal tracking habits, and what their partners actually needed from them. Standard discovery questions for a non-standard problem.`,
  },
  {
    type: 'paragraph',
    text: `What I found wasn't what I expected.`,
  },
  {
    type: 'paragraph',
    text: `Every team was spending significant time each week on manual work management. Designers were spending 30 minutes to an hour per week just assigning and tracking their own work. Managers were spending more than that. The tools weren't synced, the data wasn't trusted, and decisions had to wait for someone to compile a report that was already out of date by the time it was shared.`,
  },
  {
    type: 'paragraph',
    text: `The part that struck me hardest: most of what they were tracking wasn't being used for anything. No capacity conversations. No funding decisions. No delivery forecasting. They were maintaining records that no one was reading, out of habit or obligation, with no clear purpose on the other end. Process for the sake of process.`,
  },
  {
    type: 'paragraph',
    text: `The problem wasn't that these teams needed my system. It was that they were spending real designer and manager time on work that shouldn't exist at all.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Architecture',
  },
  {
    type: 'paragraph',
    text: `The system I built for my team works because it's shaped around how my team operates. Extending it to two other orgs meant solving two problems simultaneously:`,
  },
  {
    type: 'list',
    items: [
      `Each team needed something that fit their specific structure.`,
      `My manager needed rollup views that worked consistently across all three organizations.`
    ]
  },
  {
    type: 'paragraph',
    text: `The solution is a shared core with team-specific layers. The core handles the Rally sync, the delivery data structure, and the rollup views my manager needs. Each team's layer handles the fields, views, and automations unique to how they work. Teams get a system that feels built for them. My manager gets consistent data across all three orgs without anyone having to compile it.`,
  },
  {
    type: 'paragraph',
    // TODO: Designers and managers have to do minimal input (status, checkbox indicating work was reviewed, etc) but the system moves the data where it belongs so they dont' have to copy/paste to different systems/views. The system also automatically captures dates and does math behind the scenes to calculate time spent, capacity, velocity.
    text: `The system is also designed to stay out of people's way. Designers and managers provide minimal input (updating a status, checking a box to confirm work was reviewed) and the system handles the rest. Assignments, dates, and status changes all sync automatically with Rally. Time spent, capacity, and velocity are calculated behind the scenes. Nobody copies data between systems or maintains a separate view for their manager. Achieving that required significantly more design work upfront than asking people to enter data manually. But that was the right tradeoff.`,
  },
  {
    type: 'inline-svg',
    name: 'architectureDiagram',
    alt: `Shared system core with unique layers for each of the three design organizations.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Current State',
  },
  {
    type: 'paragraph',
    text: `The proof of concept is complete. One of my own design teams is in active pilot, and a second pilot with one of my sibling organizations starts in a few weeks. Each pilot is as much a test of the change management approach as it is for the system itself. Helping teams understand why eliminating busy work is worth the short-term adjustment is its own design problem.`,
  },
  {
    type: 'paragraph',
    text: `The rollout isn't finished. I'm writing this now because the most interesting part isn't the system. It's what happened when I treated a deployment task like a design problem.`,
  },
]
