export const meta = {
  title: 'What Designers Should Actually Be Doing',         // must match the filename and URL: /stories/story-slug
  slug: 'what-designers-should-actually-be-doing',
  startDate: '2026-05',       // YYYY-MM format; used for sorting, display ("Jan 2024"), and computing duration for in-progress stories
  duration: '6 months',       // manual string for completed stories; ignored when status is 'in progress'
  status: 'in progress',      // `in progress` | `complete` (optional)
  contribution: 'Systems & Automation',
  outcome: 'Redirected the effort from a single spec-generation tool to documented design judgment that grounds every AI tool touching design work, starting with the dev handoff.',
  excerpt: `What started as a tool to generate developer specs became something bigger: documenting the contextual judgment that makes design good, so any AI tool in the org, ours or dev's, can draw on it.`,
  featured: true,             // set true on the story you want in the hero slot on home
  heroImage: null,             // or: import heroImg from '...' and set heroImage: heroImg
  readTime: 6,
}

export const content = [
  {
    type: 'summary',
    text: `I set out to build one tool: an AI system that would generate developer specs from Figma wireframes and close the handoff gap between UX and dev. Building it with our dev partners surfaced a bigger problem than the one I started with. This is the story of what changed, why, and what I'm building instead.`,
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
        alt: 'Chart showing designer capacity before...',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'accessibilityBefore',
        title: `Accessibility`,
        alt: 'Chart showing accessibility risk before...',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'devSpecBefore',
        title: `Dev Spec`,
        alt: 'Chart showing dev spec gaps before...',
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
    text: `Truist won't allow API-level access to Figma. That constraint alone forced a redesign: instead of pulling structure programmatically, we have to structure our Figma files so the right information comes out cleanly in a JSON export, then get that translated correctly downstream. No shortcut around it.`,
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
    text: `Because the two audiences want different things from it. Dev's AI tooling needs structured, unambiguous data. A human stakeholder needs a document they can read and act on without learning Figma. Optimizing one deliverable for both audiences is how we ended up with a spec nobody was happy with in the first place.`
  },
  {
    type: 'paragraph',
    text: `Dev's leaders left that meeting excited about both workstreams, which told me the split was the right read of the problem, not just mine.`,
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
    text: `Dev owns the code generation layer. It runs on GitLab Duo, already approved and in use on their side. What they need from design is a reliable translation layer: files structured so the export means what it should, and a partner who can diagnose it when the translation breaks.`,
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
        alt: 'Chart showing designer capacity after...',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'accessibilityAfter',
        title: `Accessibility`,
        alt: 'Chart showing accessibility risk after...',
        maxWidth: `200px`,
      }],
      [{
        type: 'inline-svg',
        name: 'devSpecAfter',
        title: `Dev Spec`,
        alt: 'Chart showing dev spec gaps after...',
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
    text: `Both workstreams with dev are underway: file structuring for the JSON export, and early prototyping on a non-designer deliverable. In parallel, my leaders are documenting the patterns and nuances that define good design in our domain, the first version of the context an AI system would need to apply that judgment consistently.`,
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