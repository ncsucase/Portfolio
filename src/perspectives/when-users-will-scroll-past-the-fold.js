// Copy this file and rename it to your-perspective-slug.js
// Then add it to src/perspectives/index.js

export const meta = {
  title: `When Users Will (and Won't) Scroll Past the Fold`,
  slug: 'when-users-will-scroll-past-the-fold',       // must match the filename (without .js)
  date: '',       // YYYY-MM
  tags: [],
  excerpt: ``,    // 1–2 sentences shown on the Perspectives listing page
  readTime: 2,
}

export const content = [
  {
    type: 'summary',
    text: `Content above the fold tells users if they *should* scroll. What stops users from scrolling is content that fails to establish why crossing it is worth the effort.`,
  },
  {
    type: 'paragraph',
    text: `"Above the fold" started in print. Headlines and lead stories placed at the top half of a newspaper's front page were the most visible on a newsstand, and the most likely to convince someone to buy the paper.[[1]] When the web arrived in the 90's, the term traveled with it. And it stuck because it was directionally true. Above the fold is your most valuable real estate. That part isn't wrong.`,
  },
  {
    type: 'paragraph',
    text: `Where it goes wrong is the conclusion people draw from it: that the fold is a stopping point and anything below it is low-value real estate.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `The fold doesn't stop users. A missing reason to scroll does.`,
  },
  {
    type: 'paragraph',
    text: `Nielsen Norman Group's eyetracking research found that users will scroll below the fold only if the information above makes them believe the rest of the page will be valuable.[[2]] When that condition is met, Chartbeat's analysis of 2 billion visits found that 66% of attention on a normal media page is spent below the fold.[[3]] Users scroll a lot when the page earns it. The fold becomes invisible. What stops users isn't the boundary itself, it's the content that fails to establish why crossing it is worth the effort.`,
  },
  {
    type: 'paragraph',
    text: `This distinction matters for product decisions. "Move it above the fold" is often the wrong solution to the wrong diagnosis. If users aren't scrolling, the question isn't where the content lives. It's whether the content above it is doing its job.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `What this looks like in practice.`,
  },
  {
    type: 'paragraph',
    text: `Consider how users navigate transaction history in a banking app. A user looking for a specific charge from three months ago will scroll through hundreds of transactions to find it. Not skim. Not search. Scroll, line by line, month by month, until they land on what they're looking for. Then they stop.`,
  },
  {
    type: 'paragraph',
    text: `That behavior looks irrational on paper. Search would be faster. But search requires *recall*, users must produce the information from memory. The user's memory of "that coffee shop charge from when I was traveling" is an impression, not a banking record. Converting that into terms a search field can use isn't always possible. Scrolling requires only *recognition*, users know the answer when they see it. They may not be able to describe the transaction precisely enough to find it. But they'll know it the moment it appears.`,
  },
  {
    type: 'paragraph',
    text: `Users aren't optimizing for speed. They're optimizing for confidence. Scrolling gives them that. And they'll scroll a surprising amount when they trust that what they're looking for is there.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `The practical implication.`,
  },
  {
    type: 'paragraph',
    text: `Before concluding that content needs to move above the fold, consider what's actually happening in the room when that decision is made. One team's item isn't performing, so they push it to the top. Then another team's item is buried, so they push theirs up too. Then the first team is back in line. Everyone is applying the same "above the fold" rule. The page becomes crowded, the signal above the fold weakens, and users have less reason to scroll which triggers another round of the same conversation.`,
  },
  {
    type: 'paragraph',
    text: `Instead, ask what the content above it is communicating. Is it clear what's below? Does it give users a reason to keep going? If the answer is no, moving content up treats the symptom rather than the cause, and usually at the cost of crowding the most visible part of the page.`,
  },
  {
    type: 'paragraph',
    text: ` The fold matters. But it matters less than what you put above it.`,
  },
  {
    type: 'footnote',
    id: 1,
    text: `NN/Group, Feb 2015, [The Fold Manifesto: Why the Page Fold Still Matters](https://www.nngroup.com/articles/page-fold-manifesto/)`,
  },
  {
    type: 'footnote',
    id: 2,
    text: `NN/Group, March 2010, [Scrolling and Attention (Original Research Study)](https://www.nngroup.com/articles/scrolling-and-attention-original-research/)`,
  },
  {
    type: 'footnote',
    id: 3,
    text: `UX Myths, [Myth #3: People don't scroll](https://uxmyths.com/post/654047943/myth-people-dont-scroll)`,
  },
]
