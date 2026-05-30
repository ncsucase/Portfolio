import heroImg from '../assets/stories/redesigning-truist-digital/hero.webp'

export const meta = {
  title: 'Improving Truist Digital',
  slug: 'improving-truist-digital',
  startDate: '2024-09',
  duration: '2 years',
  status: 'complete',
  tags: ['Brand', 'User Research', 'Coalition Building', 'Design Systems'],
  role: 'Design Director',
  outcome: `Convened a voluntary coalition of 5 design teams, drove measurable visual improvements across Truist's digital products, and built a cross-enterprise design partnership that outlasted the project that created it.`,
  excerpt: `No mandate. No top-down directive. Just a shared problem and a case worth making. I convened five design teams across Truist to tackle a visual appeal problem no single team could solve alone. We let the evidence decide what we built.`,
  featured: false,
  heroImage: heroImg,
}

export const content = [
  {
    type: 'summary',
    text: `Truist clients consistently rated our digital experiences as dated and unattractive. Over two years, I built a cross-enterprise design coalition, sponsored 13 user studies with over 5,000 clients, and drove measurable visual improvements across our products. The evidence ultimately pointed toward targeted refinement over a full redesign, and following it was the right call.`,
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
    text: `Truist has consistently ranked low in JD Power's Visual Appeal category for digital banking. Our own Voice of Customer data told the same story in plain language: clients described our authenticated experience as dated and unattractive. In our monthly client survey, 10% of respondents gave us the lowest possible rating for visual appeal on a five-point scale. This was a steady, unmistakable signal that wasn't moving on its own.`,
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
    text: `This wasn't a problem I could solve within my own org. Truist's digital products span personal banking, wholesale banking, public sites, commerce, and more. Each owned by a different design team. A visual refresh that only touched my domain would be incomplete, inconsistent, and ultimately unconvincing to clients who move across those surfaces.`,
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
    text: `I approached the leaders of peer design teams and made a simple argument: we all share the same client perception problem, and none of us can solve it alone. I invited them to participate voluntarily, no organizational pressure, no top-down directive. Four teams ultimately joined, representing design coverage across Truist's major digital surfaces.`,
  },
  {
    type: 'inline-svg',
    name: 'coalition',
    alt: 'The five teams in the coalition to improve Truist digital.',
  },
  {
    type: 'paragraph',
    text: `The hardest team to bring in was Wholesale. They had already begun their own redesign and weren't interested in consuming a shared system, they wanted to own their direction. Rather than pushing, I kept inviting. I held room for their designs in every round of user testing. And I made a specific commitment: we would respect each team's priorities, and no team would be forced to consume the new styles on anyone else's timeline. That assurance mattered. They joined, and their participation made the final system stronger.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Process',
  },
  {
    type: 'paragraph',
    text: `With cross-team representation, we ran an iterative design and testing process over more than a year. We tested new visual styles across a wide range of contexts (public sites, account opening, authenticated experiences, web and app) using unmoderated remote testing and preference surveys to keep the work grounded in actual client response rather than internal opinion.`,
  },
  {
    type: 'paragraph',
    text: `A working group of designers from competing teams, each with their own stakeholders and priorities, had to generate new ideas while also killing ones that didn't survive testing. The discipline was keeping every decision tethered to the user data. When opinions surfaced, and they always do, the data was the arbiter. We also navigated multiple rounds of Brand review, which added scrutiny and stakeholder management at the executive level.`,
  },
  // {
  //   type: 'timeline',
  //   variant: 'truncated',
  //   items: [
  //     {
  //       quarter: `Q4 2024`,
  //       events: [
  //         { date: 'Oct 1', label: 'User Study 1', sublabel: 'Survey attributes' },
  //         { date: 'Oct 21', label: 'User Study 2', sublabel: 'Unmoderated; 5 designs' },
  //         { date: 'Nov 11', label: 'User Study 3', sublabel: 'Unmoderated; 4 designs' },
  //         { date: 'Nov 25', label: 'User Study 4', sublabel: 'Unmoderated; 5 designs' },
  //       ]
  //     },
  //     {
  //       quarter: `Q1 2025`,
  //       events: [
  //         { date: 'Feb 14', label: 'Brand Review 1', color: 'accent' },
  //         { date: 'Mar 21', label: 'User Study 5', sublabel: 'Unmoderated; 4 designs' },
  //       ]
  //     },
  //     {
  //       quarter: `Q2 2025`,
  //       events: [
  //         { date: 'Apr 17', label: 'User Study 6', sublabel: 'Unmoderated; 3 designs' },
  //         { date: 'May 6', label: 'User Study 7', sublabel: 'Moderated; 2 designs' },
  //         { date: 'May 21', label: 'User Study 8', sublabel: 'Unmoderated; 4 designs' },
  //       ]
  //     },
  //     {
  //       quarter: 'Q3 2025',
  //       events: [
  //         { date: 'Jul 11', label: 'Brand Review 2', color: 'accent' },
  //         { date: 'Jul 16', label: 'User Study 9', sublabel: 'Unmoderated; 5 designs'},
  //         { date: 'Jul 30', label: 'User Study 10', sublabel: 'Unmoderated; 4 designs'},
  //         { date: 'Aug 29', label: 'User Study 11', sublabel: 'Unmoderated; 25 designs'},
  //       ],
  //     },
  //     {
  //       quarter: `Q4 2025`,
  //       events: [
  //         { date: 'Nov 5', label: 'User Study 12', sublabel: 'Unmoderated; 17 designs' },
  //       ]
  //     },
  //     {
  //       quarter: `Q1 2026`,
  //       events: [
  //         { date: 'Mar 6', label: 'Brand Review 3', color: 'accent' },
  //       ]
  //     },
  //     {
  //       quarter: `Q2 2026`,
  //       events: [
  //         { date: 'Apr 28', label: 'User Study 13', sublabel: 'Unmoderated; 4 designs' },
  //       ]
  //     },
  //   ],
  // },
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
    text: `After 13 studies and three rounds of brand review, the pattern was consistent: targeted improvements outperformed full redesign concepts in client testing. Specific applications of heading hierarchy, grouping, spacing, and color produced measurable preference gains. A platform-wide visual overhaul did not.`,
  },
  {
    type: 'paragraph',
    text: `The right call was to follow that signal rather than the original plan. Incremental improvements could be implemented without requiring dev teams to make sweeping platform changes, a practical constraint that a full redesign would have run into regardless of what testing showed.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `Our Wealth clients recently praised improvements to the dashboard experience. Visual appeal complaints about our color system, previously a steady signal in VOC, have been effectively silent for over a year. JD Power web ranking improved to 3rd place, up from 9th. The platform is better than it was, and the improvements are grounded in 5,000+ client responses rather than internal preference.`,
  },
  {
    type: 'paragraph',
    text: `The more durable outcome is the coalition itself. Five teams that previously operated independently now share exploratory work, align on visual direction early, and have a working model for cross-enterprise design collaboration that didn't exist before. That infrastructure will outlast any single project.`,
  },
  {
    type: 'paragraph',
    text: `The hardest thing the process required wasn't building the coalition or running the studies. It was recognizing when two years of investment and momentum were pointing in a direction the evidence didn't support, and making the call to follow the evidence instead.`
  },
]
