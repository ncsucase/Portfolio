// Copy this file and rename it to your-perspective-slug.js
// Then add it to src/perspectives/index.js

export const meta = {
  title: 'What users say vs. what users do',
  slug: 'what-users-say-vs-what-users-do',       // must match the filename (without .js)
  date: '2026-05',       // YYYY-MM
  theme: 'Design',
  excerpt: null,    // 1–2 sentences shown on the Perspectives listing page
  readTime: 3, // estimated read time in minutes (number), e.g. 3
}

export const content = [
  {
    type: 'summary',
    text: `Users know when they're feeling frustrated. But they can't reliably tell you what to do about it. Don't take their feedback at face value.`,
  },
  {
    type: 'paragraph',
    text: `User feedback and usability testing are two of the most reliable inputs product teams have. That's not the problem. The problem is treating what users *ask for* as equivalent to what users *need* and building accordingly.`,
  },
  {
    type: 'paragraph',
    text: `These aren't the same thing. Users are experts in their own frustration. They are not typically experts in interface design. When they translate a felt problem into a requested solution, the solution is usually shaped by the context in which the frustration happened. Not by their actual behavior in the world.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `"I want to customize it."`,
  },
  {
    type: 'paragraph',
    text: `Customization is one of the most consistently requested features in user feedback, and one of the least used. Even when users know it's available. Research published in *Human Communication Research* found that most users rely on default interface features without ever exploring customization options, with power users being the exception.[[1]] We've seen the same pattern at Truist. VOC complaints about customization stopped when we improved its discoverability. Utilization didn't change. Clients weren't asking for more control over their experience. They were telling us the defaults weren't working for them.`,
  },
  {
    type: 'paragraph',
    text: `That's not a contradiction worth resolving with more prominent customization entry points. It's a signal about where the work actually belongs. If most users are living with the defaults, those defaults carry all the weight. Investing in customization as a substitute for good defaults is solving the wrong problem.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `"Put it at the top."`,
  },
  {
    type: 'paragraph',
    text: `In a usability test, a user struggled to find a feature. They said so. Then they said, "it should just be right here at the top." That feedback will show up in the readout. It will probably appear in the synthesis deck. And it will be wrong.`,
  },
  {
    type: 'paragraph',
    text: `What the user experienced was friction in a specific task, in a specific session, with a specific scenario loaded in their head. What they recommended reflects that experience. It doesn't reflect that the feature they couldn't find might be used by 3% of users monthly. It doesn't reflect the eight other teams who have already won that same argument and put their features at the top. It doesn't reflect what it costs other users (the ones doing the frequent tasks) when the page becomes a negotiation over whose thing is most important.`,
  },
  {
    type: 'paragraph',
    text: `Users are telling you something real: the feature was hard to find. That's worth solving. Elevated placement in a screen hierarchy is one possible solution, not the automatic one.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `What to do with the gap.`,
  },
  {
    type: 'paragraph',
    text: `The frame that helps: users describe a symptom accurately. Their proposed solution is constrained by the context they were in when they felt it. A user who struggled to find something in a test has that struggle in their head when they suggest where to move it. A user who wants customization is reacting to defaults that don't fit them, they're not necessarily asking you to build a configuration layer.`,
  },
  {
    type: 'paragraph',
    text: `Take the symptom seriously. Interrogate the solution. Ask what behavior the data actually shows, not just what users say they want to do. That gap, between stated preference and observed behavior, is where the most useful product decisions live.`,
  },
  {
    type: 'footnote',
    id: 1,
    text: `Sundar, S.S. & Marathe, S.S. (2010). [Personalization vs. Customization: The Importance of Agency, Privacy, and Power Usage](https://doi.org/10.1111/j.1468-2958.2010.01377.x). *Human Communication Research*, 36(3).`,
  },
]
