import heroImg from '../assets/stories/redesigning-truist-digital/hero.webp'
import oldAccount from '../assets/stories/redesigning-truist-digital/old-account.webp'
import oldDashboard from '../assets/stories/redesigning-truist-digital/old-dashboard.webp'

export const meta = {
  title: 'Redesigning Truist Digital',
  slug: 'redesigning-truist-digital',
  startDate: '2024-09',
  status: 'in progress',
  tags: ['Brand', 'User Research', 'Coalition Building', 'Design Systems'],
  role: 'Design Director',
  outcome: 'Convened a voluntary coalition of 5 design teams across Truist and delivered a brand-approved visual system — built on 13 user studies and 5,000+ client responses — set for enterprise rollout in 2026.',
  excerpt: 'No mandate. No top-down directive. Just a shared problem and a case worth making. I convened five design teams across Truist — voluntarily — to redesign the visual foundation of every digital product we own.',
  featured: true,
  heroImage: heroImg,
}

export const content = [
  {
    type: 'summary',
    text: `Truist clients felt our digital experiences were dated and unattractive — consistently and measurably. Over two years, I built a cross-enterprise design coalition, sponsored 13 user studies to evaluate over 50 designs with over 5,000 clients, and delivered a new visual system that will be finalized and brand-approved for use across all of Truist's digital products in two months.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Situation',
  },
  {
    type: 'stats',
    variant: 'label-first',
    items: [
      { label: 'Voice of the Customer', value: '10%', description: 'Rated "visual appeal" 1 out of 5, every month.', color: 'error' },
      { label: 'JD Power Ranking', value: '9th', description: 'Consistently low in "visual appeal" every year.', color: 'error' },
    ],
  },
  {
    type: 'paragraph',
    text: `Truist has consistently ranked low in JD Power's Visual Appeal category for digital banking. Our own Voice of Customer data told the same story in plain language: clients described our authenticated experience as dated and unattractive. In our monthly client survey, 10% of respondents gave us the lowest possible rating for visual appeal on a five-point scale — a steady, unmistakable signal that wasn't moving on its own.`,
  },
  {
    type: 'paragraph',
    text: `The root cause was known internally but hadn't been solved: when Truist launched as a merged brand, the digital design guidelines it inherited were not built for the complexity of a modern banking platform. Every design team was doing their best within a system that had never been strong enough to begin with.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Challenge',
  },
  {
    type: 'paragraph',
    text: `This wasn't a problem I could solve within my own org. Truist's digital products span personal banking, wholesale banking, public sites, commerce, and more — each owned by a different design team. A visual refresh that only touched my domain would be incomplete, inconsistent, and ultimately unconvincing to clients who move across those surfaces.`,
  },
  {
    type: 'paragraph',
    text: `The real scope of the problem was enterprise-wide. But I had no mandate to convene the other teams. I had to convince them to join me.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'Building the Coalition',
  },
  {
    type: 'paragraph',
    text: `I approached the leaders of peer design teams and made a simple argument: we all share the same client perception problem, and none of us can solve it alone. I invited them to participate voluntarily — no organizational pressure, no top-down directive. Four teams ultimately joined, representing design coverage across Truist's major digital surfaces.`,
  },
  {
    type: 'inline-svg',
    name: 'coalition',
    alt: 'The five teams in the coalition to redesign Truist digital.',
    caption: null,
  },
  {
    type: 'paragraph',
    text: `The hardest team to bring in was Wholesale. They had already begun their own redesign and weren't interested in consuming a shared system — they wanted to own their direction. Rather than pushing, I kept inviting. I held room for their designs in every round of user testing. And I made a specific commitment: we would respect each team's priorities, and no team would be forced to consume the new styles on anyone else's timeline. That assurance mattered. They joined, and their participation made the final system stronger.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Process',
  },
  {
    type: 'paragraph',
    text: `With cross-team representation, we ran an iterative design and testing process over more than a year. We tested new visual styles across a wide range of contexts — public sites, account opening, authenticated experiences, web and app — using unmoderated remote testing and preference surveys to keep the work grounded in actual client response rather than internal opinion.`,
  },
  {
    type: 'paragraph',
    text: `A working group of designers from competing teams — each with their own stakeholders and priorities — had to generate new ideas while also killing ones that didn't survive testing. The discipline was keeping every decision tethered to the user data. When opinions surfaced — and they always do — the data was the arbiter. We also navigated multiple rounds of Brand review, which added scrutiny and stakeholder management at the executive level.`,
  },
  {
    type: 'timeline',
    variant: 'truncated',
    items: [
      {
        quarter: `Q4 2024`,
        events: [
          { date: 'Oct 1', label: 'User Study 1', sublabel: 'Survey attributes' },
          { date: 'Oct 21', label: 'User Study 2', sublabel: 'Unmoderated; 5 designs' },
          { date: 'Nov 11', label: 'User Study 3', sublabel: 'Unmoderated; 4 designs' },
          { date: 'Nov 25', label: 'User Study 4', sublabel: 'Unmoderated; 5 designs' },
        ]
      },
      {
        quarter: `Q1 2025`,
        events: [
          { date: 'Feb 14', label: 'Brand Review 1', color: 'accent' },
          { date: 'Mar 21', label: 'User Study 5', sublabel: 'Unmoderated; 4 designs' },
        ]
      },
      {
        quarter: `Q2 2025`,
        events: [
          { date: 'Apr 17', label: 'User Study 6', sublabel: 'Unmoderated; 3 designs' },
          { date: 'May 6', label: 'User Study 7', sublabel: 'Moderated; 2 designs' },
          { date: 'May 21', label: 'User Study 8', sublabel: 'Unmoderated; 4 designs' },
        ]
      },
      {
        quarter: 'Q3 2025',
        events: [
          { date: 'Jul 11', label: 'Brand Review 2', color: 'accent' },
          { date: 'Jul 16', label: 'User Study 9', sublabel: 'Unmoderated; 5 designs'},
          { date: 'Jul 30', label: 'User Study 10', sublabel: 'Unmoderated; 4 designs'},
          { date: 'Aug 29', label: 'User Study 11', sublabel: 'Unmoderated; 25 designs'},
        ],
      },
      {
        quarter: `Q4 2025`,
        events: [
          { date: 'Nov 5', label: 'User Study 12', sublabel: 'Unmoderated; 17 designs' },
        ]
      },
      {
        quarter: `Q1 2026`,
        events: [
          { date: 'Mar 6', label: 'Brand Review 3', color: 'accent' },
        ]
      },
      {
        quarter: `Q2 2026`,
        events: [
          { date: 'Apr 28', label: 'User Study 13', sublabel: 'Unmoderated; 4 designs' },
        ]
      },
    ],
  },
  {
    type: 'stats',
    items: [
      { value: '13', label: 'Studies', description: 'Included JD Power and internal metrics.', color: 'accent' },
      { value: '50+', label: 'Designs', description: 'Tested, not including the ones we trashed.', color: 'accent' },
      { value: '5k+', label: 'Clients', description: 'Supplied the feedback via user studies.', color: 'accent' },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Decision',
  },
  {
    type: 'paragraph',
    text: `After multiple testing iterations and brand reviews, we arrived at a new set of digital style guidelines that will apply across all of Truist's digital products — not just authenticated banking. The scope of the output matches the scope of the original problem.`,
  },
  {
    type: 'paragraph',
    text: `The rollout is deliberately structured to respect what I committed to the other teams: each team determines when they're ready to consume. On my end, I've already aligned with Product and Development on a two-PI rollout plan — PI1 adopts the new styles and fine-tunes high-traffic pages, PI2 addresses style defects. I've had the Design System team at the table throughout, working through token mapping strategies, versioning for delayed upgrading, and support for teams without current capacity to migrate.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `The new digital styles will be finalized and brand-approved in two months. Before/after visuals will be documented here when available.`,
  },
  {
    type: 'paragraph',
    text: `The leading indicators are already meaningful: a cross-functional coalition that didn't exist before, a shared design language where there was none, and a Wholesale team that came in skeptical and ended up shaping the result.`,
  },
  {
    type: 'paragraph',
    text: `The lagging indicators — JD Power Visual Appeal rankings, VOC satisfaction scores — will take longer to move. But for the first time, Truist's digital products will have a visual foundation worth building on.`,
  },
  {
    type: 'comparison',
    layout: 'side-by-side',
    before: {
      src: oldDashboard,
      alt: 'The old dashboard screen.',
      truncate: 500,
    },
    after: {
      src: null,   // or null for placeholder
      alt: 'The new dashboard screen.',
      truncate: 500,
    },
    caption: null,
  },
  {
    type: 'comparison',
    layout: 'side-by-side',
    before: {
      src: oldAccount,
      alt: 'The old checking account screen.',
      truncate: 500,
    },
    after: {
      src: null,   // or null for placeholder
      alt: 'The new checking account screen.',
      truncate: 500,
    },
    caption: null,
  },
]
