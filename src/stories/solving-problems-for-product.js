export const meta = {
  title: 'Solving Problems for Product',
  slug: 'solving-problems-for-product',
  startDate: '2023-03',
  duration: '3 months',
  status: 'complete',
  tags: ['Cross-functional Leadership', 'Workflow Automation', 'Systems Thinking', 'Product Partnership'],
  role: 'Design Director',
  outcome: `Reduced a product team's backlog management burden from 20+ hours a week to 1–2 by replacing a fragile Excel process with a live Rally–Airtable sync.`,
  excerpt: `A product team managing 400+ features across Excel and Rally was spending 20+ hours a week on manual reconciliation. I\'d solved a similar problem for my own team — so I offered to fix it for theirs.`,
  featured: false,
  heroImage: null,
}

export const content = [
  {
    type: 'summary',
    // Full paragraph shown in the summary band above the story body (italic, large).
    text: `The product team responsible for Truist's authenticated banking backlog was managing roughly 400 features across Excel and Rally — manually. Daily cross-checks, broken formulas, lost updates, and no reliable way to share data with stakeholders. I'd solved a similar problem for my own design team and knew I could fix it. I offered. What had been taking one person 20+ hours a week now takes 1–2.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Situation',
  },
  {
    type: 'paragraph',
    text: `The Product team managing Truist's authenticated banking backlog had a process problem they'd been living with for a long time. Their source of truth was an Excel file — manually maintained, manually cross-checked against Rally, and vulnerable to anyone who opened it and accidentally broke a formula.`,
  },
  {
    type: 'paragraph',
    text: `I noticed it. I didn't own it. But I'd already built a Rally API integration for my own design team and knew the same approach could fix what they were dealing with. I offered to help.`,
  },
  {
    type: 'paragraph',
    text: `This wasn't in my job description. I built it because I saw the problem, knew I could solve it, and understood that a product team operating more effectively makes the entire design and delivery system better.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Problem',
  },
  {
    type: 'paragraph',
    text: `The backlog manager's daily routine was a study in unsustainable process. Each day she manually checked the Excel file against Rally — feature by feature, across roughly 400 items — looking for mismatches and updating records by hand. When other users broke formulas, she'd fix them. When formulas were too broken to recover, she'd revert to an older version of the file, which meant PMs and GPMs had to try to reconstruct their lost updates from memory.`,
  },
  {
    type: 'paragraph',
    text: `Beyond the daily maintenance burden, the system had deeper structural problems.`,
  },
  {
    type: 'paragraph',
    text: `Work sizing estimates couldn't be reliably tracked against actuals — the Product team had no consistent way to compare what they thought something would take against what it actually took, which made improving estimates over time nearly impossible. `,
  },
  {
    type: 'paragraph',
    text: `Dates pulled from Rally — Program Increments, releases — had to be manually added and maintained in Excel.`,
  },
  {
    type: 'paragraph',
    text: `Sharing data with line of business partners meant either giving them access to the whole file or building one-off graphs that were already out of date by the time they were shared.`,
  },
  {
    type: 'paragraph',
    text: `The Excel file wasn't a backlog management tool. It was a second job.`,
  },
  {
    type: 'inline-svg',
    name: 'problemFlowchart',
    alt: 'The daily inefficient process of manually maintaining feature information in Excel.',
    caption: null,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Build',
  },
  {
    type: 'paragraph',
    text: `The solution used the same Rally API foundation I'd built for my design team, adapted to how the product team actually worked. The core components:`,
  },
  {
    type: 'list',
    items: [
      `A live sync between Rally and Airtable replaced the manual daily cross-check. Instead of opening each Feature individually, the backlog manager now has a view that automatically surfaces mismatches — the system flags what needs attention rather than requiring her to find it.`,
      `Permission controls and field types in Airtable eliminated the broken formula problem entirely. Fields are structured so they can't be accidentally overwritten, and there's no formula layer for users to corrupt.`,
      `Work sizing became trackable for the first time. Estimated sizes and actual sizes from Rally are pulled forward automatically, with mismatches surfaced in a dedicated view. The Product team can now see where their estimates are consistently off and adjust accordingly.`,
      `Dates — Program Increments, releases — sync automatically from Rally. No one maintains them manually.`,
    ]
  },
  {
    type: 'paragraph',
    text: `And where the Excel file had one view, Airtable generates multiple purpose-built views automatically. GPMs can now share exactly the slice of data each stakeholder needs — line of business partners, leadership, engineering — without exposing the entire backlog or building a custom export.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `The backlog manager went from 20+ hours a week to 1–2. That's not a productivity improvement — that's a job function transformed. Time that was previously consumed by reconciliation and error recovery is now available for actual product work.`,
  },
  {
    type: 'paragraph',
    text: `The benefits extended beyond her.`,
  },
  {
    type: 'paragraph',
    text: `GPMs gained visibility into sizing accuracy they'd never had before. Leadership can now get reliable backlog data on demand. Line of business partners receive clean, targeted views instead of exported spreadsheets.`,
  },
  {
    type: 'columns',
    columns: [
      [{ 
        type: 'inline-svg',
        align: 'center',
        name: 'waffleChartBefore',
        title: 'Before',
        alt: 'Before: maintenance hours vs work hours',
      }],
      [{ 
        type: 'inline-svg',
        align: 'center',
        name: 'waffleChartAfter',
        title: 'After',
        alt: 'After: reclaimed work hours',
      }],
    ]
  },
  {
    type: 'paragraph',
    text: `The system has been running without intervention since launch. No broken formulas, no manual syncs, no lost updates. When Product teammates have moved to other organizations, they've taken a copy of the system with them — and they advocate for it.`,
  },
]
