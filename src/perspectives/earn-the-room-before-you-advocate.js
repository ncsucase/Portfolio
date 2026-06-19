// Copy this file and rename it to your-perspective-slug.js
// Then add it to src/perspectives/index.js

export const meta = {
  title: 'Earn the room before you advocate',
  slug: 'earn-the-room-before-you-advocate',       // must match the filename (without .js)
  date: '2026-06',       // YYYY-MM
  theme: 'Leadership',
  excerpt: '',    // 1–2 sentences shown on the Perspectives listing page
  readTime: 4, // estimated read time in minutes (number), e.g. 3
}

export const content = [
  {
    type: 'summary',
    text: `A design recommendation is only as strong as the reasoning behind it. If the room can't evaluate your rationale, they'll default to their own judgment. And they should.`,
  },
  {
    type: 'paragraph',
    text: `There's a version of design advocacy that sounds like this: "Trust me, I'm a designer. This is what users need." It gets dismissed. Not because the designer is wrong, but because the room has no way to evaluate whether they're right. Confidence without evidence isn't advocacy. It's an assertion.`,
  },
  {
    type: 'paragraph',
    text: `The dismissal is the correct outcome.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `What happened when zoom got disabled.`
  },
  {
    type: 'paragraph',
    text: `Product came to my team with a solution to a recurring VOC complaint: users were reporting broken text when they zoomed in on our banking app. The proposed fix was to disable zoom entirely. Cheapest option, fastest to implement, complaint goes away.`,
  },
  {
    type: 'paragraph',
    text: `My designers couldn't make the case against it. Some of them thought the current experience looked better without zoom anyway. I had to step in.`,
  },
  {
    type: 'paragraph',
    text: `The argument wasn't about aesthetics. It was about what disabling zoom would actually accomplish and what it would cost. Users who rely on zoom to read text aren't going to stop needing to read text. Disabling zoom doesn't change what those users need. It just removes their ability to meet that need in our app. The VOC complaints don't go away. They get worse. And disabling zoom fails WCAG 2.1 Success Criterion 1.4.4, which requires text to be resizable up to 200% without loss of content or functionality.[[1]] The DOJ has consistently taken the position that the ADA applies to mobile apps of businesses open to the public,[[2]] which means we'd be trading three monthly VOC complaints for a legal liability with no ceiling.`,
  },
  {
    type: 'paragraph',
    text: `Product understood immediately. The conversation was over in minutes. Not because I outranked anyone in the room, but because the argument addressed the things the room was actually accountable for: user outcomes, legal exposure, and complaint volume. Those are terms everyone could evaluate.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `The work that earns the room.`
  },
  {
    type: 'paragraph',
    text: `That argument didn't come from instinct. It came from asking the right questions before walking in.`,
  },
  {
    type: 'paragraph',
    text: `Who are the users actually affected? What are they trying to do? What does the proposed solution actually change for them, and what doesn't it change? What are the downstream consequences nobody has said out loud yet? Is there existing research? Is there legal or regulatory exposure? What is the decision-maker accountable for that this recommendation might affect?`,
  },
  {
    type: 'paragraph',
    text: `Those questions don't always produce a clean answer. Sometimes they reveal that your instinct was wrong. That's the point. Interrogating your own assumptions before you advocate means you're not defending a position. You're presenting a conclusion you've already stress-tested.`,
  },
  {
    type: 'paragraph',
    text: `The designers who struggle in rooms like that one aren't struggling because they lack design skill. They're struggling because they walked in with a preference instead of a prepared argument. A preference can be dismissed. A prepared argument has to be engaged with.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `What advocacy actually is.`
  },
  {
    type: 'paragraph',
    text: `Design's job in a cross-functional meeting isn't to win. It's to make sure the people making the decision understand what they're actually deciding. What the options are, what each one costs, and who bears that cost.`,
  },
  {
    type: 'paragraph',
    text: `That requires showing up with reasoning the room can follow, evidence they can evaluate, and consequences they hadn't already mapped. Not a stronger opinion. Not more volume. The work behind the recommendation.`,
  },
  {
    type: 'paragraph',
    text: `Earn the room before you walk into it. The advocacy is easy after that.`,
  },
  {
    type: 'footnote',
    id: 1,
    text: `W3C. [WCAG 2.1 Success Criterion 1.4.4: Resize Text](https://www.w3.org/TR/WCAG21/#resize-text). W3C Recommendation, June 2018.`,
  },
  {
    type: 'footnote',
    id: 2,
    text: `U.S. Department of Justice. [Guidance on Web Accessibility and the ADA](https://www.ada.gov/resources/web-guidance/).`,
  },
]
