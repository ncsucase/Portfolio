export const meta = {
  title: 'Operational Visibility at Scale',
  slug: 'operational-visibility-at-scale',
  startDate: '2026-01',
  duration: '8 months',
  status: 'complete',
  contribution: 'Operations & Scale',
  outcome: `Extended a Rally-Airtable system to a 20-person sibling design org, reclaiming significant time for their leaders and designers, while eliminating tracking no one was using across all teams involved.`,
  excerpt: `My manager asked me to replicate my Rally-Airtable system across two other design organizations. What looked like a rollout turned out to be a design problem, and the team that adopted it got real time back while every team involved got data quality they'd never had.`,
  featured: false,
  heroImage: null,
  readTime: 4,
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
    text: 'The Pilots',
  },
  {
    type: 'paragraph',
    text: `I started with one of my own design teams. Their feedback drove a second version of the system. I added a second team, gathered more feedback, made another round of adjustments. Both teams reached a point where they had no further changes to ask for.`,
  },
  {
    type: 'paragraph',
    text: `For my own teams, the time impact split by role. Designer time was roughly net neutral. They'd already benefited from the Rally-Airtable sync built years earlier, so there wasn't much manual work left to remove. My leaders were a different story. Quarterly reporting time dropped, and the data feeding those reports was more reliable than anything they'd worked from before.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Sibling Org',
  },
  {
    type: 'paragraph',
    text: `The sibling org, a single team of about 20 designers, was still managing everything manually in Rally. No sync, no automation. When they moved to the shared system, both leaders and designers reclaimed real time. This was the group the original problem statement was written for.`,
  },
  {
    type: 'paragraph',
    text: `It wasn't a clean handoff. Some of the team pushed back on adopting "Mikey's system." I addressed it directly in a working session: staying in Rally wasn't an option, and moving to Airtable was what would let our leadership get rollups without compiling them by hand. That framing helped some. What actually built trust was what happened after. When they raised specific requests, I didn't make them wait. Changes that reflected their input shipped in hours or days, not the next planning cycle. Being heard and seeing it acted on quickly did more for adoption than the argument did.`,
  },
  {
    type: 'paragraph',
    text: `The third sibling org, a set of small teams ranging from 1 to 5 designers each, is out of scope for this rollout. Its structure doesn't map to what made the shared architecture work for the 20-person team.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'Cutting What Wasn\u2019t Being Used',
  },
  {
    type: 'paragraph',
    text: `The discovery interviews had surfaced tracking nobody was reading. Removing it required more than telling teams to stop. I showed them samples of what the new system would surface in its place, so the choice wasn't "give this up" but "trade it for something usable." With that in hand, the negotiation was straightforward, and the unused process was eliminated rather than just relocated into the new system.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `My manager now has the centralized view he asked for. He's used it to self-service data requests in conversations with his own leadership, without looping back to me or any of the design leads first.`,
  },
]
