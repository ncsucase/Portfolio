// Copy this file and rename it to your-perspective-slug.js
// Then add it to src/perspectives/index.js

export const meta = {
  title: 'Be dangerous enough to collaborate',
  slug: 'dangerous-enough-to-collaborate',       // must match the filename (without .js)
  date: '2026-06',       // YYYY-MM
  theme: 'Leadership',
  excerpt: '',    // 1–2 sentences shown on the Perspectives listing page
  readTime: 3, // estimated read time in minutes (number), e.g. 3
}

export const content = [
  {
    type: 'summary',
    text: `Design sits at the intersection of what clients need, what the business requires, and what technology can actually do. Designers who don't understand all three can only do part of their job.`,
  },
  {
    type: 'paragraph',
    text: `Designers fail in two directions. Some stay in their lane so completely that their work arrives fully formed, beautifully reasoned, and impossible to implement. Others bulldoze into adjacent disciplines without enough understanding to be useful, treating every product constraint as a political obstacle and every engineering limitation as a failure of ambition. Both produce the same outcome: good work that goes nowhere.`,
  },
  {
    type: 'paragraph',
    text: `The path between them isn't compromise. It's fluency.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `You don't need to do their job. You need to understand it.`,
  },
  {
    type: 'paragraph',
    text: `When I didn't know how Truist makes money on Bill Pay, I couldn't design Bill Pay well. I could design something clients would prefer in isolation. But preference in isolation isn't the goal. The goal is a Bill Pay experience that works for clients and is sustainable for the business. Those aren't naturally in tension, but finding where they're compatible requires understanding both sides of the equation. Without the business context, I was only solving half the problem.`,
  },
  {
    type: 'paragraph',
    text: `The same is true on the technical side. When I didn't understand the constraints of our Deposits system, I couldn't know which design decisions were expensive and which were cheap. I was asking for things without knowing what I was asking for. That's not a collaborative relationship. That's a wishlist.`,
  },
  {
    type: 'paragraph',
    text: `Neither gap was filled by taking a course or reading documentation. Both were filled by spending enough time with Product and Engineering partners to learn their language, understand their constraints, and earn enough credibility that they'd tell me the real answer instead of the diplomatic one.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `Fluency changes the conversation.`,
  },
  {
    type: 'paragraph',
    text: `Tim Brown, IDEO's longtime CEO, described this as being "T-shaped": deep expertise in your own discipline paired with enough working knowledge of adjacent ones to collaborate meaningfully across them.[[1]] The horizontal stroke isn't decoration. It's what makes the vertical stroke useful in a cross-functional team.`,
  },
  {
    type: 'paragraph',
    text: `There's a version of cross-functional collaboration that never gets past surface level. Design presents work. Product asks why certain decisions were made. Engineering flags what won't work. Everyone leaves with action items and schedules another meeting. That loop is familiar to anyone who has worked in a large organization, and it's expensive.`,
  },
  {
    type: 'paragraph',
    text: `The version that actually works looks different. It happens earlier, before work is presented, when the conversation is still about the problem. It requires Design to walk in already understanding what the business needs from the feature and what Engineering will flag if the design goes a certain direction. Not to preemptively surrender to those constraints, but to have already thought through them. To show up with a recommendation that accounts for the full system, not just the user-facing layer.`,
  },
  {
    type: 'paragraph',
    text: `That only happens when designers know enough about adjacent disciplines to ask the right questions. Not enough to do Product's job or Engineering's job. Dangerous enough to collaborate.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `The beautiful intersection.`,
  },
  {
    type: 'paragraph',
    text: `The best design outcomes I've seen weren't the result of Design winning an argument. They were the result of finding the place where what clients need, what the business requires, and what technology can actually deliver all overlap. That intersection exists in almost every problem. But you can only find it if you're looking at all three dimensions at once.`,
  },
  {
    type: 'paragraph',
    text: `Designers who understand only the client dimension will keep producing work that's right in theory and wrong in practice. Designers who defer entirely to business and technical constraints will produce work that's feasible but doesn't actually serve anyone. The job is to hold all three simultaneously and find something that works across all of them.`,
  },
  {
    type: 'paragraph',
    text: `That requires genuine curiosity about the disciplines you're collaborating with. Not performative curiosity. Not sitting in a meeting and nodding. Actually wanting to understand how the bank makes money on a feature, what makes a system constraint real versus assumed, and what your Product partner is accountable for that you might be making harder.`,
  },
  {
    type: 'paragraph',
    text: `Design doesn't sit in the corner and paint pretty pictures. It sits at the intersection and does the hard work of finding solutions that survive contact with reality.`,
  },
  {
    type: 'footnote',
    id: 1,
    text: `Brown, T. (2010). [T-Shaped Stars: The Backbone of IDEO's Collaborative Culture](https://chiefexecutive.net/ideo-ceo-tim-brown-t-shaped-stars-the-backbone-of-ideoaes-collaborative-culture__trashed/). Executive Magazine.`,
  },
]
