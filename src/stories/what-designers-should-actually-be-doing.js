export const meta = {
  title: 'What Designers Should Actually Be Doing',         // must match the filename and URL: /stories/story-slug
  slug: 'what-designers-should-actually-be-doing',
  startDate: '2026-05',       // YYYY-MM format; used for sorting, display ("Jan 2024"), and computing duration for in-progress stories
  duration: '6 months',       // manual string for completed stories; ignored when status is 'in progress'
  status: 'in progress',      // `in progress` | `complete` (optional)
  contribution: 'Systems & Automation',
  outcome: `Wireframed and built the first versions of two AI-built tools, a Figma plugin that exports structured design data and a spec viewer for dev and QA, and set the direction for one design export feeding a viewer for every audience.`,
  excerpt: `I set out to generate developer specs with AI. Instead, I used AI to build the tools: a Figma plugin that exports structured design data, and a spec viewer that turns it into something dev and QA can use. The plan is one export and a viewer for every audience. Building them showed me design's real AI asset isn't a tool. It's documented judgment.`,
  featured: true,             // set true on the story you want in the hero slot on home
  heroImage: null,             // or: import heroImg from '...' and set heroImage: heroImg
  readTime: 7,
}

export const content = [
  {
    type: 'summary',
    text: `I set out to build one tool: an AI system that would generate developer specs from Figma wireframes. Building it with our dev partners turned it into two. I wireframed and built, with AI, a Figma plugin that exports structured design data and a spec viewer that presents it to dev and QA. My team has carried both forward from there. Building them surfaced a bigger problem than the one I started with. This is the story of what changed, why, and what I'm building instead.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Situation',
  },
  {
    type: 'paragraph',
    text: `Every feature my team delivers requires a translation step between UX and development. A UX designer completes wireframes. A UI designer then takes those wireframes and does the work of applying the correct Design System components and tokens, documenting responsive behavior across viewports, and annotating every accessibility requirement (semantic roles, ARIA labels, focus order, touch targets) before producing a Figma file developers can reference.`,
  },
  {
    type: 'paragraph',
    text: `It's a multi-day process per feature. And it's fragile in the way any manual, knowledge-intensive process is fragile: the Design System contains hundreds of components and patterns. No designer holds all of it accurately in their head across every delivery. The spec reflects how well someone remembers, how much time they have, and how tired they are.`,
  },
  {
    type: 'inline-svg',
    name: 'handoffBeforeDraft',
    alt: 'The handoff before: a UX designer completes wireframes, then a UI designer applies the Design System and documents accessibility requirements before producing a Figma file developers can reference',
    maxWidth: `470px`,
  },
  {
    type: 'paragraph',
    text: `That's not a people problem. That's a system design problem.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Organizational Cost',
  },
  {
    type: 'paragraph',
    text: `Three things converged this year that made this worth solving.`,
  },
  {
    type: 'paragraph',
    text: `First, a meaningful portion of my UI designer capacity was going to mechanical execution (component selection, token application, annotation) rather than the higher-order work my organization actually needs from design.`,
  },
  {
    type: 'paragraph',
    text: `Second, Truist went through a round of layoffs that eliminated the team's internal accessibility specialists. That knowledge had previously compensated for some of the inconsistency in designer annotations. Without it, WCAG 2.1 AA compliance depends on individual designer recall. For a regulated financial institution, that's a risk that compounds quietly until an audit or incident makes it impossible to ignore.`,
  },
  {
    type: 'paragraph',
    text: `Third, developers weren't finding Figma files useful. No structured interaction documentation, unclear screen relationships, and the friction of navigating a canvas to find the information they need. Rework cycles increase as a result.`,
  },
  {
    type: 'paragraph',
    text: `Three separate problems pointing at the same handoff step.`,
  },
  {
    type: 'columns',
    columns: [
      [{
        type: 'inline-svg',
        name: 'designerCapacityBefore',
        title: `Designer Capacity`,
        alt: 'Designer capacity before: UI designer time weighted toward mechanical execution',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'accessibilityBefore',
        title: `Accessibility`,
        alt: 'Accessibility before: WCAG compliance dependent on individual designer recall',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'devSpecBefore',
        title: `Dev Spec`,
        alt: 'Dev spec before: gaps in interaction documentation and screen relationships',
        maxWidth: `200px`,
      }],
    ]
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Original Plan',
  },
  {
    type: 'paragraph',
    text: `The plan I started with was narrow and mechanical, and I want to name the assumptions in it plainly, because the pivot only makes sense against what I originally believed.`,
  },
  {
    type: 'list',
    items: [
      `We'd pull wireframe structure directly from Figma through its REST API.`,
      `The output was a single structured spec document, generated once, that would replace the need for developers to open Figma at all.`,
      `The win was mechanization: take a slow manual process and make an AI system do it instead.`,
    ]
  },
  {
    type: 'paragraph',
    text: `All three turned out to be wrong, or at least incomplete.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'What Changed',
  },
  {
    type: 'paragraph',
    text: `Truist won't allow API-level access to Figma. That constraint alone forced a redesign. Instead of pulling structure from outside Figma, I built a plugin that runs inside it and exports the file as structured JSON: components, tokens, responsive behavior, and accessibility annotations. I built the first version with AI, without waiting on an engineering team.`,
  },
  {
    type: 'paragraph',
    text: `At the same time, our dev partners weren't waiting on us. They're already building their own AI tooling on GitLab Duo, code generation agents that take a design export and produce a first draft of working code, plus a way to QA that code against our visuals. What they needed from design wasn't a polished narrative spec document. It was clean, well-structured export data their tooling could ingest reliably.`,
  },
  {
    type: 'paragraph',
    text: `Meanwhile, the other half of the original problem hadn't moved at all. PMs, QA, and stakeholders outside design still voice the same frustration with Figma as a review tool. AI didn't change that. And when I raised replacing our standard deliverable, dev's first instinct was to ask us to keep producing it anyway. Not because it works for them, but because they hadn't seen a working alternative yet. That's not an argument for keeping it. It's the reason this project exists.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Room',
  },
  {
    type: 'paragraph',
    text: `Underneath the technical problem was a people problem. Across Truist, most teams approaching AI were convinced it could do someone else's job. Not their own. That belief produces a predictable dynamic: hoarding instead of sharing, defensiveness instead of collaboration, everyone protecting the parts of their process an AI tool might need visibility into. Our dev partnership had the early signs of the same pattern.`,
  },
  {
    type: 'paragraph',
    text: `I treated it as a design problem, the same as any client-facing one. What's the goal? Who are the actual users of this collaboration? What are the constraints? What does "good" look like for both sides? That's the part of design that has nothing to do with pixels, and it's the part most useful when the thing you're designing is a working relationship, not a screen.`,
  },
  {
    type: 'paragraph',
    text: `I opened the meeting by naming the elephant directly: "We're not trying to use AI to take away jobs. We want to experiment and see if we can use AI to improve the connection between our teams." That single reframe moved the room from hoarding and defensive to sharing and collaborative.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Split',
  },
  {
    type: 'paragraph',
    text: `What came out of that meeting was two workstreams, not one, because dev's AI tooling and our human stakeholders needed different things from us:`,
  },
  {
    type: 'list',
    items: [
      `Figma files structured so the right information surfaces correctly in the JSON export and gets translated into the right values by dev's AI tooling. This is the machine-to-machine problem.`,
      `A deliverable made for non-designers as the primary artifact. Not a Figma file they have to be trained to read. This is the human problem, and it exists independent of AI.`,
    ]
  },
  {
    type: 'aside',
    label: 'Why not solve this with one deliverable?',
    text: `Because every audience wants something different from it. Dev's AI tooling needs structured, unambiguous data. Dev and QA need specs they can read without learning Figma. Product, LOB, and Legal each need something else again. Optimizing one deliverable for all of them is how we ended up with a spec nobody was happy with. So we separated the data from the presentation: one export, a different view for each audience.`,
  },
  {
    type: 'paragraph',
    text: `Dev's leaders left that meeting excited about both workstreams, which told me the split was the right read of the problem, not just mine.`,
  },
  { 
    type: 'heading', 
    level: 2, 
    text: 'One Export, Many Viewers' 
  },
  {
    type: 'paragraph',
    text: `I wireframed and built the first version of both tools with AI. My team has iterated on them since.`,
  },
  {
    type: 'list',
    items: [
      `The Figma plugin turns a designer's file into a structured JSON export. Dev's GitLab Duo agents consume it directly. Machine to machine.`,
      `The spec viewer reads that same export and presents it to dev and QA as a spec they can read and act on, with no Figma canvas to navigate. Machine to human.`,
    ],
  },
  {
    type: 'paragraph',
    text: `The proof of concept with our dev partners was the first time they saw a working alternative to the Figma file.`,
  },
  {
    type: 'paragraph',
    text: `The spec viewer is the first viewer, not the only one. Product, LOB, and Legal each need something different from a design, and today a designer either builds each version by hand or everyone squints at the same Figma file. With one export underneath, each new audience is a new viewer, not new designer hours.`,
  },
  {
    type: 'paragraph',
    text: `Dev is the first audience on purpose. Their needs are the most detailed and the least forgiving, so if the export holds up for them, it is likely to carry most of what other audiences need. The open question is the rest: rationale, risk, and business intent are what Legal and LOB read for, and they don't live in component data. That gap is where the next section begins.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Bigger Realization',
  },
  {
    type: 'paragraph',
    text: `Working through the first workstream forced a harder question underneath both of them: what makes a design decision good, stated precisely enough that an AI system could learn and repeat it?`,
  },
  {
    type: 'paragraph',
    text: `My original framing treated AI as something that fills the execution gap between design intent and dev output. Narrow, mechanical, bounded to one handoff. What building it revealed is that AI is only as good as the context it's given, and context is exactly what design's expertise is. A pattern that's good in one flow is wrong in another. That judgment doesn't live in a component library. It lives in the reasoning designers apply every time they choose one pattern over another for a specific user, in a specific context, under specific constraints.`,
  },
  {
    type: 'paragraph',
    text: `That reframes what design's actual asset is here. Not a Figma file reformatted into something friendlier. Not a spec document AI happens to be good at generating. The documented judgment about what's good, in our domain, at this bank, for these users. That's the thing worth building for AI to draw from. A point solution fixes one handoff. Documented design judgment scales to every AI tool anyone in the org points at design work, not just this one.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Pivot',
  },
  {
    type: 'paragraph',
    text: `I redirected my design leaders. Instead of continuing to build toward a single-purpose spec tool, they're documenting what makes good design decisions in our domain: patterns, the nuances that distinguish similar-looking solutions, the reasoning behind exceptions to the Design System, the tradeoffs that never made it into a component library because they lived in someone's head.`,
  },
  {
    type: 'paragraph',
    text: `That documentation is the next-generation Design System. Not a library of components. A trained context that lets any AI tool, dev's, ours, whatever comes next, produce work that's actually good in our context, not just technically assembled from the right pieces. Good design in one context can be a bad decision in another. AI's whole limitation is that it doesn't know the difference unless someone teaches it. Design is the discipline that already understands that difference. It's the natural teacher.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Organizational Work',
  },
  {
    type: 'paragraph',
    text: `Dev owns the code generation layer. It runs on GitLab Duo, already approved and in use on their side. Design owns the translation layer: the plugin that turns a Figma file into an export dev can trust, the viewers built on top of it, and the job of diagnosing it when the translation breaks.`,
  },
  {
    type: 'paragraph',
    text: `The heavier organizational lift is the documentation effort. Getting design leaders to externalize judgment they've never had to write down before is slower and harder than it sounds. It's one thing to make a good call in a design review. It's another to articulate why it was good clearly enough that someone, or something, else can apply the same reasoning next time.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'What This Is Actually For',
  },
  {
    type: 'paragraph',
    text: `The goal was never a smaller design team, and it still isn't. But the scope of what "better-used" means got bigger. Designer capacity still moves toward discovery, usability testing, and earlier participation in roadmap conversations as mechanical execution gets absorbed elsewhere. What's different is that the documented judgment behind that execution doesn't stay locked inside one tool. It's available to whatever AI system in the org next needs to know what good design looks like here.`,
  },
  {
    type: 'columns',
    columns: [
      [{
        type: 'inline-svg',
        name: 'designerCapacityAfter',
        title: `Designer Capacity`,
        alt: 'Designer capacity after: more time for discovery, testing, and roadmap work',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'accessibilityAfter',
        title: `Accessibility`,
        alt: 'Accessibility after: requirements captured in the export instead of recalled by hand',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'devSpecAfter',
        title: `Dev Spec`,
        alt: 'Dev spec after: structured specs delivered through the spec viewer',
        maxWidth: `200px`,
      }],
    ]
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Current State',
  },
  {
    type: 'paragraph',
    text: `This is still in progress. We've completed a proof of concept with our dev partners, and we're refining two things: how accurately the plugin translates Figma into the export, and how familiar the spec viewer feels to the developers and QA engineers using it. Viewers for Product, LOB, and Legal come next. In parallel, my leaders are documenting the patterns and nuances that define good design in our domain, the first version of the context an AI system would need to apply that judgment consistently.`,
  },
  {
    type: 'paragraph',
    text: `I started this project assuming I knew the shape of the solution. What told me I had the wrong scope was asking the same questions I'd ask about any user problem: what's the goal, who's actually affected, what are the constraints, what does good look like? That's how you find out whether the problem you scoped is the real one.`,
  },
  {
    type: 'paragraph',
    text: `We solve problems and make good experiences for humans. That job doesn't change based on whether the tool doing the mechanical work is a person or a model.`,
  },
]