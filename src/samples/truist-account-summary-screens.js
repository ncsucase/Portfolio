import cardImg from '../assets/designs/truist-account-summary/Card-Account-Summary.png'
import newChecking from '../assets/designs/truist-account-summary/New.png'
import oldChecking from '../assets/designs/truist-account-summary/Old.png'
import beforePhone from '../assets/designs/truist-account-summary/Side-by-side-before.png'
import afterPhone from '../assets/designs/truist-account-summary/Side-by-side-after.png'

const situationOptions = [
  { id: 'space', label: 'Space utilization' },
  { id: 'hierarchy', label: 'Hierarchy' },
  { id: 'branding', label: 'Branding' },
]

const solutionOptions = [
  { id: 'space', label: 'Space utilization' },
  { id: 'hierarchy', label: 'Hierarchy' },
  { id: 'branding', label: 'Branding' },
]

export const meta = {
  title: 'Truist Account Summaries',
  slug: 'truist-account-summary-screens',
  date: '2024-04',
  client: 'Truist',
  challenge: '90% of visits are for transactions. I had to make room for them without taking anything away.',
  image: cardImg,
  imageFit: 'corner', // flush to the card's bottom-right corner
  imageAlt: 'Truist credit card account summary screen',
}

export const content = [
  {
    type: 'heading',
    level: 2,
    text: `The Situation`,
  },
  {
    type: 'paragraph',
    text: `Account Summary is the second most visited page in Truist's digital banking. Clients come for one thing 90% of the time: their transactions.`,
  },
  {
    type: 'paragraph',
    text: `The old layout stacked a benefits banner, oversized action tiles, and a Cash Reserve module between clients and that list. On mobile, not a single transaction cleared the fold.`,
  },
  {
    type: 'annotated-image',
    group: 'truist-problems',
    label: 'Problems:',
    status: 'warning',
    options: situationOptions,
    src: oldChecking,
    alt: 'Before: checking account summary',
    // x / y are percentages of the image.
    tooltips: {
      space: [
        { x: 59, y: 33, text: 'Clients want Transfer & Pay close at hand, but they came for transactions. At this size clients said the button felt “too big” and “in the way.”' },
        { x: 82.5, y: 53.4, text: 'Three tall tiles claim a full row of the screen. Activity starts at the bottom, with no transactions in view.' },
      ],
      hierarchy: [
        { x: 49.2, y: 22, text: 'A boldly colored Level Benefits banner sits above the balance. Though LOB felt it was important to emphsize it, clients disagreed.' },
        { x: 75, y: 80, text: `Activity houses transactions, the reason for 90% of visits, and they're pushed below the fold.` },
        { x: 82.5, y: 31, text: 'The Level Benefits banner is the first thing a client reads, ahead of their own balance and anything else they came here to do.' },
      ],
      branding: [
        { x: 36, y: 18, text: 'Brand color ends at the navigation. Below it, the page is gray and white, with purple reduced to a stripe on the Level Benefits banner.' },
        { x: 83, y: 40, text: 'Purple frames the screen in the header and tab bar. Everything between them is white cards on gray.' },
      ],
    },
  },
  {
    type: 'heading',
    level: 2,
    text: `The Solution`,
  },
  {
    type: 'paragraph',
    text: `With transactions as the priority and nothing allowed to leave, I compressed everything above them. Actions became chips and benefits became a badge.`,
  },
  {
    type: 'paragraph',
    text: `While the hood was up, I fixed the hierarchy and carried the brand past the nav.`,
  },
  {
    type: 'paragraph',
    text: `Transactions now start above the fold on web and mobile.`,
  },
  {
    type: 'annotated-image',
    group: 'truist-problems',
    label: 'Solutions:',
    status: 'success',
    options: solutionOptions,
    src: newChecking,
    alt: 'After: checking account summary',
    tooltips: {
      space: [
        { x: 61, y: 26, text: 'Level Benefits and account actions collapse into compact chips beside the balance. Activity and transactions move up.' },
        { x: 80, y: 46, text: 'Three tiles become one row of pills. The first transaction now peeks above the fold.' },
      ],
      hierarchy: [
        { x: 61, y: 26, text: 'Level Benefits drop from a banner to a chip. The balance leads the page.' },
        { x: 93, y: 27, text: 'The Level Benefits moves into the header as a badge. Still one tap away, no longer the most prominent element.' },
        { x: 73, y: 70, text: 'Transactions are above the fold now, drawing attention with their company logos.' },
        { x: 78, y: 92, text: 'The tab bar turns white, no longer competing with the on-page emphasized elements.' },
      ],
      branding: [
        { x: 31, y: 28, text: 'The purple header extends behind the content, and Cash Reserve sits on a lavender tint. The brand runs into the page instead of stopping at the nav.' },
        { x: 94, y: 42, text: 'The most-viewed number on the page gets the strongest brand moment. Plus the rounded corner adds a hint of the Truist brand core shape.' },
        { x: 85, y: 55, text: 'A lavender tint marks Cash Reserve as a Truist product without competing with the balance.' },
        { x: 71, y: 69, text: `Activity's corner is rounded to reflect the Truist brand core shape. In combination with the purple corner, the page gains a hint of directional flow.` },
      ],
    },
  },
  {
    type: 'columns',
    columns: [
      [{ type: 'image', src: beforePhone, alt: 'Before: checking account summary', title: 'Before', maxHeight: `500px`, }],
      [{ type: 'image', src: afterPhone, alt: 'After: checking account summary', title: 'After', maxHeight: `500px`, }],
    ],
  },
]