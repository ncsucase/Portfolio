// Copy this file and rename it to your-perspective-slug.js
// Then add it to src/perspectives/index.js

export const meta = {
  title: 'Research informs, you decide',
  slug: 'research-informs-you-decide',       // must match the filename (without .js)
  date: '2026-06',       // YYYY-MM
  tags: ['Leadership'],
  excerpt: '',    // 1–2 sentences shown on the Perspectives listing page
  readTime: 2, // estimated read time in minutes (number), e.g. 3
}

export const content = [
  {
    type: 'summary',
    text: `Research reduces uncertainty. It doesn't eliminate it. At some point the evidence is directional enough and the cost of waiting exceeds the cost of being wrong. Someone has to make that call.`,
  },
  {
    type: 'paragraph',
    text: `There's a version of discovery that never ends. Another round of testing, one more study, a few more interviews. The team isn't being careless. They're being careful. But careful and productive aren't the same thing, and at some point the research stops answering questions and starts deferring them.`,
  },
  {
    type: 'paragraph',
    text: `That's the moment someone has to make a decision.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `What research can and can't do.`,
  },
  {
    type: 'paragraph',
    text: `Research reduces uncertainty. It doesn't eliminate it. That distinction matters because teams that treat research as a path to certainty will keep running studies until they find it, and they won't find it. A McKinsey survey of more than 1,200 business leaders found that 61% felt at least half the time spent on decisions was used ineffectively, and in product organizations, unanchored discovery is one of the more common culprits.[[1]] UI decisions in particular resist clean answers. User preferences are contextual, testing environments are artificial, and two well-run studies on the same question can point in different directions. Waiting for certainty in that environment isn't rigor. It's avoidance.`,
  },
  {
    type: 'paragraph',
    text: `The question research actually answers is narrower: given what we know now, which direction has the most support? When the answer to that question is consistent across multiple studies, you have enough. The remaining uncertainty doesn't go away with another round. It goes away when you ship something and find out.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `When the loop stops closing.`,
  },
  {
    type: 'paragraph',
    text: `I've watched two different teams get stuck in versions of this. In both cases the problem wasn't the quality of the research. It was that the research had stopped being connected to specific decisions it was supposed to inform.`,
  },
  {
    type: 'paragraph',
    text: `In one case, a visual design effort had accumulated enough directional signal across multiple studies to move forward. The team wasn't comfortable with the remaining uncertainty, and the instinct was to keep testing. But UI testing has a ceiling. Preference data gives you direction, not permission. I made the call to move forward. We had enough to act on, and there was other work that needed to happen before the effort stalled entirely.`,
  },
  {
    type: 'paragraph',
    text: `In another case, a product redesign team had done substantial research on a new set of capabilities and still couldn't commit to decisions. They kept running studies, not because the existing findings were inconclusive, but because they hadn't organized what they already knew into a form that supported decision-making. The research was producing information. It wasn't producing clarity. I stepped in to help them synthesize what they had, map it to the specific decisions in front of them, and establish a principle they could hold onto: don't undo a decision without a new reason. Doubt alone doesn't qualify.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `The real problem in both cases.`,
  },
  {
    type: 'paragraph',
    text: `Neither team had too much research. They had research that wasn't connected to decisions clearly enough to give anyone confidence to act on it. That's a different problem, and more research doesn't fix it.`,
  },
  {
    type: 'paragraph',
    text: `When findings accumulate without being organized into conclusions, the team keeps researching because it feels like forward motion. It isn't. It's the appearance of progress while the actual decision gets deferred. The loop never closes because nobody defined what closing it would look like.`,
  },
  {
    type: 'paragraph',
    text: `That's the forcing function research needs: a specific question it's answering, a decision it's informing, and a threshold for what "enough" looks like before the study starts. Without those, discovery expands to fill whatever time is available.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `Who makes the call.`,
  },
  {
    type: 'paragraph',
    text: `Research informs the decision. It doesn't make it. Someone has to look at what the evidence is saying, accept that the remaining uncertainty won't be resolved by another study, and commit to a direction. That's a judgment call, and judgment calls belong to people, not processes.`,
  },
  {
    type: 'paragraph',
    text: `The cost of waiting isn't neutral. Every week spent in another research cycle is a week the team isn't building, isn't learning from a real product in market, and isn't making progress on the next problem. At some point that cost exceeds the value of the additional certainty you're chasing.`,
  },
  {
    type: 'paragraph',
    text: `At some point, you decide.`,
  },
  {
    type: 'footnote',
    id: 1,
    text: `McKinsey & Company (2019). [Decision making in the age of urgency](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency).`,
  },
]
