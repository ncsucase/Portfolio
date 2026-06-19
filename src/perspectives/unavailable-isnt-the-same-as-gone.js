export const meta = {
  title: `Unavailable isn't the same as gone`,
  slug: 'unavailable-isnt-the-same-as-gone',
  date: '2026-06',
  theme: 'Design',
  excerpt: null,
  readTime: 3,
}

export const content = [
  {
    type: 'summary',
    text: `When a feature is unavailable, removing it feels like simplification. Cleaner interface, one less thing to explain. But missing content doesn't explain itself. Users fill that silence with the wrong answer.`,
  },
  {
    type: 'paragraph',
    text: `When something is broken or temporarily offline, the instinct is to remove it from the interface. Less visible means less confusing. That logic is backwards.`,
  },
  {
    type: 'paragraph',
    text: `A user navigating a banking app doesn't have its information architecture memorized. They know roughly where things live because they've used it before. When Bill Pay disappears from the primary nav, they notice the absence and start investigating. Did we remove the feature? Is it somewhere else now? Did they lose access? None of those are the right answer, but they're the only answers the interface is giving them. Hiding a feature doesn't remove the user's question. It removes your ability to answer it.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `Navigation exists so users don't have to remember.`,
  },
  {
    type: 'paragraph',
    text: `One of Nielsen Norman Group's foundational usability heuristics is "recognition over recall": interfaces should let users recognize options rather than requiring them to reconstruct them from memory.[[1]] Navigation is recognition infrastructure. It works because users can scan it and spot what they're looking for. When you remove an item, you've converted a recognition task into a recall task. The user now has to remember whether the feature exists at all, and then investigate where it went. That's the wrong direction.`,
  },
  {
    type: 'paragraph',
    text: `The question Vitaly Friedman at Smashing Magazine suggests asking is a useful one: "Will a given user ever be able to interact with this element?"[[2]] If the answer is yes, the element should remain visible. Hiding it is appropriate when the content is permanently irrelevant to that user. It's not the right call when the feature is temporarily unavailable.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `The link is fine. The destination is where the work is.`,
  },
  {
    type: 'paragraph',
    text: `Keep Bill Pay in the nav. When the user arrives on the Bill Pay page, use that space to tell them what's happening: "Bill Pay is temporarily unavailable. We expect to have it back by tomorrow morning." That's useful. That's an answer. The navigation got them to the place where they could get information about the thing they came to do. That's what navigation is for.`,
  },
  {
    type: 'paragraph',
    text: `The same principle applies to features that require enrollment. If a user doesn't have access to Zelle, the right response isn't to hide the Zelle entry point. It's to show an enrollment state that explains what it is and how to get it. That state is doing real work: it confirms the feature exists, it sets expectations, and it gives the user a path forward. Showing nothing does none of those things.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `There's a legitimate reason to hide content.`,
  },
  {
    type: 'paragraph',
    text: `There are cases where hiding is right. Business-only features don't belong in a personal banking client's navigation. Features gated by permissions that a user will never meet aren't worth surfacing. The principle isn't "show everything always." It's that the bar for hiding should be permanent irrelevance, not temporary unavailability.`,
  },
  {
    type: 'paragraph',
    text: `The distinction matters because the failure modes are different. A user who never sees a business feature doesn't expect it and doesn't miss it. A user who regularly pays their bills and suddenly can't find Bill Pay has a prior expectation that's now unresolved. That unresolved expectation turns into confusion, then frustration, then a support call. All of which could have been avoided by leaving the link in place and saying something on the other end.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `What "showing nothing" actually communicates.`,
  },
  {
    type: 'paragraph',
    text: `A blank space or missing link communicates nothing intentionally. But users don't experience it as neutral. They interpret it, and the interpretations they land on (the feature was removed, they lost access, they're looking in the wrong place) are uniformly worse than the truth. A temporary outage is recoverable. A user who concludes the feature no longer exists has already started looking for a different bank.`,
  },
  {
    type: 'paragraph',
    text: `Interfaces that behave consistently, even when things aren't working, build trust. The navigation should look the same whether every feature is running or one is down. What changes is the state the user finds when they get there. That's where the system communicates. Removing the entry point removes the communication entirely.`,
  },
  {
    type: 'paragraph',
    text: `Keep the link. Say something.`,
  },
  {
    type: 'footnote',
    id: 1,
    text: `Nielsen, J. (1994). [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/). Nielsen Norman Group. Heuristic #6: Recognition rather than recall.`,
  },
  {
    type: 'footnote',
    id: 2,
    text: `Friedman, V. (2024). [Hidden vs. Disabled In UX](https://www.smashingmagazine.com/2024/05/hidden-vs-disabled-ux/). Smashing Magazine.`,
  },
]