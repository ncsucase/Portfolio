export const meta = {
  title: `Why counting clicks misses the point`,
  slug: 'stop-counting-clicks',
  date: '2026-05',
  tags: ['Design'],
  excerpt: null,
  readTime: 3,
}

export const content = [
  {
    type: 'summary',
    text: `Users don't have a click budget. They have a cognitive budget. Each step in a flow spends some of it. Counting clicks misses that entirely.`,
  },
  {
    type: 'paragraph',
    text: `The 3-click rule has been debunked for more than twenty years. Joshua Porter's 2003 study analyzed over 8,000 clicks across 620 tasks and found no correlation between the number of clicks and whether users succeeded or felt satisfied.[[1]] Nielsen Norman Group reached the same conclusion: click counting is an arbitrary heuristic with no data behind it.[[2]] The research is clear, has been clear for a long time, and doesn't seem to matter. "Reduce the clicks" is still one of the most common requests I receive from product partners.`,
  },
  {
    type: 'paragraph',
    text: `The reason it persists isn't that people haven't read the research. It's that counting clicks is simple, and simple metrics are hard to give up when you don't have a better one to replace them with. The right response isn't to say the 3-click rule is wrong and leave it there. It's to replace it with a frame that's actually useful.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `Clicks aren't the cost. Decisions are.`,
  },
  {
    type: 'paragraph',
    text: `Every click in a flow asks the user to do something. Sometimes that something is trivial: tap "Continue" on a screen with one obvious next step. Sometimes it's genuinely demanding: evaluate six options, recall a piece of information, or make a choice with consequences they don't fully understand. Both register as one click. They don't cost the same thing.`,
  },
  {
    type: 'paragraph',
    text: `This is what Hick's Law describes: the time and effort required to make a decision increases with the number and complexity of the choices involved.[[3]] A step that presents two clear, well-labeled options is faster and less taxing than a step that presents five overlapping ones, regardless of where it falls in the sequence. The click count doesn't capture any of that. The cognitive load per step does.`,
  },
  {
    type: 'paragraph',
    text: `Users aren't managing a click count. They're managing their attention. When a flow burns through that attention early (with a confusing first step, an ambiguous label, or a choice that requires them to recall something they don't have ready) they arrive at later steps with less capacity to handle them. That's when errors happen. That's when people abandon. Not because they hit some arbitrary click number.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `What this looks like in practice.`,
  },
  {
    type: 'paragraph',
    text: `Consider a bill payment flow in a banking app. A user who pays the same bills every month has automated most of the decision-making. They know the payee, they know the amount, they know the account. A six-step confirmation flow might feel almost frictionless, because each step is confirming something they already know. Now take a first-time user setting up that same payment. Same six steps. Same click count. Completely different experience, because each step is a decision rather than a confirmation.`,
  },
  {
    type: 'paragraph',
    text: `Optimizing for clicks in that scenario produces the wrong solution. The returning user doesn't need fewer steps. The new user needs steps with lower cognitive load per decision (clearer labels, better defaults, confirmation language that reduces uncertainty rather than adding to it). Reducing the flow from six steps to four doesn't help either user if the four remaining steps are the hard ones.`,
  },
  {
    type: 'heading',
    level: 2,
    text: `The question to ask instead.`,
  },
  {
    type: 'paragraph',
    text: `When a product partner asks to reduce clicks, the most useful response isn't "clicks don't matter." It's a redirect: *which click is the hard one?* Where in the flow are users slowing down, making errors, or dropping off? That's the step with the high cognitive load. That's where the work is.`,
  },
  {
    type: 'paragraph',
    text: `Sometimes the answer really is that there are too many steps and some can be eliminated. Sometimes it's that one step is doing too much and needs to be split. Sometimes the steps are fine but the labels are wrong, or the defaults are missing, or the user doesn't have the information they need to make the choice confidently. Counting clicks can't tell you which of those is true. Asking what each step costs gets you there faster.`,
  },
  {
    type: 'paragraph',
    text: `The goal isn't a shorter flow. It's a flow that respects the effort users are spending to complete it.`,
  },
  {
    type: 'footnote',
    id: 1,
    text: `Porter, J. (2003). [Testing the Three-Click Rule](https://articles.centercentre.com/three_click_rule/). Center Centre.`,
  },
  {
    type: 'footnote',
    id: 2,
    text: `Laubheimer, P. (2019). [The 3-Click Rule for Navigation Is False](https://www.nngroup.com/articles/3-click-rule/). Nielsen Norman Group.`,
  },
  {
    type: 'footnote',
    id: 3,
    text: `Hick, W.E. (1952). On the rate of gain of information. *Quarterly Journal of Experimental Psychology*, 4(1), 11-26.`,
  },
]