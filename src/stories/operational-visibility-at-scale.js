// TODO (visuals): uncomment each import once the asset exists.
import designerScreen from '../assets/stories/operational-visibility-at-scale/designer-screen.png'
import configScreen from '../assets/stories/operational-visibility-at-scale/config-screen.png'
import leaderScreen from '../assets/stories/operational-visibility-at-scale/leader-screen.png'

export const meta = {
  title: 'Operational Visibility at Scale',
  slug: 'operational-visibility-at-scale', // kept so existing links still work
  startDate: '2026-01',
  duration: '8 months',
  status: 'complete', // TODO: confirm. You mentioned two more teams are onboarding now.
  contribution: 'Product Design', // was 'Operations & Scale'
  outcome: `Designed a configurable work management product for two design organizations: a shared core that keeps cross-org data consistent, and a settings layer each team controls.`,
  excerpt: `My manager asked me to extend my team's Rally-Airtable system to two sibling design organizations. A copy would have fit no one. I designed it as a product instead: a core every team shares and a configuration layer each team owns.`,
  featured: false,
  heroImage: null,
  readTime: 4,
}

export const content = [
  {
    type: 'summary',
    text: `My manager asked me to extend the Rally-Airtable system I built for my team to two sibling design organizations. Handing over a copy would have fit no one. I treated the request as a product with new customers: discovery with each team, a shared core every team runs on, a configuration layer each team controls, and onboarding built on fast responses to feedback. The product now serves my organization and a 20-person sibling org, and my manager pulls cross-org data on his own.`,
  },

  // ─── The Product ───────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'The Product',
  },
  {
    type: 'paragraph',
    text: `Engineering at Truist tracks delivery in Rally. The product is a work management layer on top of it, built in Airtable, that serves three roles with very different needs. The less a role enters, the more it receives.`,
  },
  // VISUAL: role-matrix.svg. Register it as 'roleMatrix'.
  {
    type: 'inline-svg',
    name: 'roleMatrix',
    alt: `What each role enters and receives. Designers enter status updates and partner reviews and receive a queue built for design work. Leaders enter design review results and receive capacity, time spent, velocity, and quality. The director enters nothing and receives one rollup across every organization.`,
  },

  // ─── Discovery ─────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'What Discovery Found',
  },
  {
    type: 'paragraph',
    text: `I interviewed the leaders of each sibling org and key members of their teams about their Rally structure, their PM relationships, their informal tracking habits, and what their partners needed from them.`,
  },
  {
    type: 'paragraph',
    text: `Designers spent 30 minutes to an hour each week assigning and tracking their own work. Managers spent more. The tools weren't synced, nobody trusted the data, and every report was out of date by the time it was shared.`,
  },
  {
    type: 'paragraph',
    text: `Worse, most of that tracking fed nothing. No capacity conversations, no funding decisions, no delivery forecasts. That finding became the product's first rule: capture only what a decision consumes.`,
  },
  {
    type: 'table',
    columns: ['Teammate', 'Enters', 'Receives'],
    rowHeaders: true, // first cell of each row renders as <th scope="row">
    rows: [
      ['Designers', 'Status updates and partner reviews', 'A queue built for design work'],
      ['Leaders', 'Design review results', 'Capacity, time spent, velocity, and quality'],
      ['Director', 'Nothing', 'One rollup across every organization'],
    ],
  },

  // ─── The Core Decision ─────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'What Stays Fixed, What Teams Control',
  },
  {
    type: 'paragraph',
    text: `Each team needed a product shaped to its structure. My manager needed data that rolled up the same way across all of them. Those needs pull in opposite directions, so the central design decision was where to draw the line.`,
  },
  {
    type: 'paragraph',
    text: `The core fixes the structure: how a Feature enters, how it becomes design stories, how those stories move through phases, and what every interface reads. Teams set the values inside that structure:`,
  },
  {
    type: 'list',
    items: [
      `What flows in: Rally sync sources, field mappings and sync direction, and the rules that translate Rally data into Airtable concepts.`,
      `Who and where: team structure and the platforms the team designs for.`,
      `How work moves: workflow phases, phase estimates, and quality thresholds.`,
      `Who hears about it: notifications.`,
    ],
  },
  {
    type: 'inline-svg',
    name: 'systemArchitecture',
    alt: `System architecture. Features sync from Rally into a unified table, become one design story per designer, and move through phases, blocking, and projections into measurement and four interfaces. Rally sync, designer assignment, phases, projections, and measurement are marked as team-configurable. Everything else is shared core.`,
  },
  {
    type: 'paragraph',
    text: `All of it lives in a single settings table. Each row carries a Config Type, so one table holds every kind of setting. Teams never touch that table directly. They work through scoped interface views that show only the settings they own. A team can change how it works without breaking what the rollup depends on.`,
  },
  {
    type: 'annotated-image',
    group: 'ov-config',
    label: 'Settings:',
    status: 'success',
    border: true,
    options: [
      { id: 'scope', label: 'Scoped access' },
      { id: 'settings', label: 'What teams control' },
    ],
    src: configScreen,
    alt: 'Admin settings interface showing phase estimates for the Content role, grouped by phase, with a day count for each work size',
    tooltips: {
      scope: [
        { x: 8, y: 47, text: 'Every setting a team controls has its own page: sync sources, field mappings, phases, estimates, platforms. Teams edit settings here, never the underlying table.' },
        { x: 17, y: 4, text: 'Admin is one of four interfaces. Designers, leaders, and the director each work in their own.' },
      ],
      settings: [
        { x: 23.5, y: 17, text: 'Estimates are set per role. Content, UX, and UI work on the same phase take different amounts of time.' },
        { x: 76, y: 42, text: 'Each size maps to a day count. Size and role set the phase estimate, which rolls up into a projected done date.' },
        { x: 94.5, y: 73.5, text: 'Ready for Dev carries no estimate, so it is switched off. The phase stays in the workflow without skewing projections.' },
      ],
    },
  },

  // ─── Minimal Input ─────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'Designing for Minimal Input',
  },
  {
    type: 'paragraph',
    text: `Input is a few clicks per role. Designers update a status and confirm reviews with their Product and Dev partners. Leaders mark which Features passed design review. The system does the rest. Assignments, dates, and status changes sync with Rally. Time spent, capacity, and velocity are calculated in the background. Nobody copies data between tools or keeps a separate view for their manager.`,
  },
  {
    type: 'paragraph',
    text: `That took more design work upfront than a form would have. Every field a person stops filling in is a field the system has to derive correctly.`,
  },
  {
    type: 'annotated-image',
    group: 'ov-designer',
    label: 'Designer view:',
    status: 'success',
    border: true,
    options: [
      { id: 'input', label: 'What designers enter' },
      { id: 'derived', label: 'What the system derives' },
    ],
    src: designerScreen,
    alt: 'Designer user stories board with cards in Uncategorized, Discover & Iterate, Prepare Deliverables, and Ready for Dev columns',
    tooltips: {
      input: [
        { x: 44, y: 15.7, text: 'Moving a card to the next column is the status update. Rally and every downstream view follow from that one move.' },
        { x: 62.5, y: 61.4, text: `'Block stops one designer's story, not the whole Feature. Other designers on the same Feature keep moving. The system logs when it was set and counts blocked days.` },
      ],
      derived: [
        { x: 22.3, y: 15.7, text: 'Stories arrive from Rally on their own, one per designer per Feature. Nobody creates them by hand.' },
        { x: 42.4, y: 37.4, text: `Phase end dates are projected from the team's phase estimates. Nobody types them.` },
        { x: 20.7, y: 52.7, text: 'Feature Blocked stops every designer on the Feature. It appears on each of their cards, whether the block was set in Rally or in Airtable.' },
        { x: 82, y: 32.4, text: 'A red edge marks work that is blocked or past its projected date.' },
      ],
    },
  }, 
  {
    type: 'annotated-image',
    group: 'ov-leader',
    label: 'Leader view:',
    status: 'success',
    border: true,
    options: [
      { id: 'attention', label: 'Where to look' },
      { id: 'signals', label: 'How it’s calculated' },
    ],
    src: leaderScreen,
    alt: 'Leader Team Health screen showing a distribution of user story health signals and a table of designers with rework, friction, load, and on-time rates',
    tooltips: {
      attention: [
        { x: 24, y: 22.4, text: 'Leaders see only the teams they lead. One screen serves every leader.' },
        { x: 54, y: 48.6, text: 'Every story carries a health signal. Leaders see where attention is needed before anyone has to ask.' },
       ],
      signals: [
        { x: 55.9, y: 87.3, text: 'Rework is counted from stories that move back into the Rework phase.' },
        { x: 69, y: 87.3, text: 'Friction Level measures the amount of time work spent blocked.' },
        { x: 79.4, y: 87.3, text: 'Current Load counts the number of User Stories the designer is actively supporting.' },
        { x: 89.5, y: 87.3, text: 'On-time rate compares when each story finished each phase against its projected end date.' },
        { x: 43.7, y: 87.3, text: `Needs Coaching is triggered when there is sufficient User Story data, the designer isn't blocked, and they have a low on-time rate.` },
      ],
    },
  },

  // ─── Onboarding ────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'Onboarding',
  },
  {
    type: 'paragraph',
    text: `I piloted with one of my own teams. Their feedback drove a second version. A second team joined, and another round of changes followed, until both teams had nothing further to ask for. Designer time was roughly neutral, because they'd had the original Rally sync for years. Leaders saw the difference: quarterly reporting took less time, and the data behind it was more reliable than anything they'd worked from before.`,
  },
  {
    type: 'paragraph',
    text: `The sibling org, about 20 designers, still managed everything by hand in Rally. Moving to the shared product reclaimed time for leaders and designers alike. This was the team the original problem statement was written for.`,
  },
  {
    type: 'paragraph',
    text: `Some of them pushed back on adopting "Mikey's system." I addressed it in a working session: staying in Rally wasn't an option, and the shared product was what would let leadership see rollups without anyone compiling them. The argument helped some. Response time helped more. When the team asked for a change, it shipped in hours or days, not the next planning cycle.`,
  },
  {
    type: 'paragraph',
    text: `Retiring the unused tracking worked the same way. I showed teams samples of what the product would surface in its place, so the choice wasn't "give this up" but "trade it for something usable." The old process was eliminated, not relocated.`,
  },
  {
    type: 'paragraph',
    text: `The third sibling org, a set of teams with one to five designers each, is out of scope. Its structure doesn't fit what makes the shared core work. Not every customer fits the product.`,
  },

  // ─── Outcome ───────────────────────────────────────────────
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `My manager now has the centralized view he asked for. He uses it to answer data requests from his own leadership in the moment, without coming back to me or any of the design leads.`,
  },
  // VISUAL: leader dashboard, full width. Anonymize names and Truist data.
  // {
  //   type: 'image',
  //   src: leaderDashLg,
  //   srcSm: leaderDashSm,
  //   alt: 'Leader dashboard showing capacity, velocity, and quality across teams',
  //   caption: `The leader view. Every number on it comes from a status change or a sync, not a spreadsheet.`,
  // },
]