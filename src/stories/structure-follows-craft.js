export const meta = {
  title: 'Structure Follows Craft',
  slug: 'structure-follows-craft',
  startDate: '2023-01',
  duration: '3 months',
  status: 'complete',
  tags: ['Org Design', 'Craft Development', 'Design Leadership', 'Matrix Management'],
  role: 'Design Director',
  outcome: `Restructured a 36-person design org from PM alignment to a discipline matrix — eliminating the three-month onboarding tax and ending partner-flagged design quality issues within one PI cycle.`,
  excerpt: `A 36-person design org structured around PM alignment was spending half its time onboarding rather than producing. I restructured it around a matrix that separated feature ownership from craft development — and within one PI cycle, both problems were gone.`,
  featured: false,
  heroImage: null,
}

export const content = [
  {
    type: 'summary',
    text: `A 36-person design organization structured around PM alignment was generating two compounding problems: designers spending half their time onboarding due to PM rotations, and craft coaching consistently mismatched to discipline. I restructured the org around a matrix model — decoupling feature ownership from reporting structure. Within one PI cycle, the onboarding tax disappeared and partner quality complaints stopped.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Situation',
  },
  {
    type: 'paragraph',
    text: `When I took over as design director for Truist's authenticated digital banking organization, I inherited a 36-person team structured around Product Manager alignment. Each designer reported to a design leader who was paired with a Group Product Manager, and individual contributors were assigned to follow their PM's feature area as it evolved.`,
  },
  {
    type: 'paragraph',
    text: `On paper, the logic was sound — designers stay close to the people driving the roadmap. In practice, it was eroding the team.`,
  },
  {
    type: 'columns',
    columns: [
      [{
        type: 'inline-svg',
        name: 'featureChurn',
        title: 'PM Rotations',
        alt: 'The vicious cycle of PM-aligned designer staffing.',
        caption: null,
      }],
      [{
        type: 'inline-svg',
        name: 'coachingChurn',
        title: 'Mismatched Coaching',
        alt: 'The vicious cycle of mis-matched managers.',
        caption: null,
      }],
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Challenge',
  },
  {
    type: 'paragraph',
    text: `Two failure modes emerged gradually, and they were related.`,
  },
  {
    type: 'paragraph',
    text: `First, PM feature areas were shifting frequently. Truist operates on Program Increment (PI) planning cycles, and PMs regularly rotated ownership of feature areas. Every rotation triggered a designer onboarding — and full feature onboarding takes roughly three months. With rotations happening approximately every six months, designers were spending half their time getting up to speed rather than producing meaningful work.`,
  },
  {
    type: 'paragraph',
    text: `Second, design quality was declining. Because design leaders were paired to GPMs rather than to disciplines, a UI-specialized leader might be coaching a UX designer, or a content designer might be getting feedback from someone without content expertise. The coaching wasn't landing where it needed to. `,
  },
  {
    type: 'paragraph',
    text: `Design leaders and I were observing inconsistency across deliverables, PM and stakeholder partners were flagging concerns, and rework cycles were increasing. At our worst point, we had features blocked by partners due to unresolved design concerns — a clear signal that something structural was broken.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Decision',
  },
  {
    type: 'paragraph',
    text: `I landed on a matrixed approach that decoupled two things that had been incorrectly fused: feature alignment and reporting structure. The changes:`,
  },
  {
    type: 'list',
    items: [
      `Designers align to feature areas, not to PMs. When a PM rotates, the designer stays. The designer builds deep domain knowledge in their feature space and owns continuity — the PM comes to them.`,
      `Individual contributors report to a design leader who specializes in their discipline. A UX designer reports to a UX-specialized lead. A UI designer to a UI lead. That leader may or may not be the one partnered with the designer's GPM — and that's intentional.`,
    ]
  },
  {
    type: 'inline-svg',
    name: 'orgModel1',
    title: 'Before',
    subtitle: 'Structurally simple on paper but weak in practice.',
    alt: 'Org model 1: Design Leader manages all designers in a feature area.',
  },
  {
    type: 'inline-svg',
    name: 'orgModel2',
    title: 'After',
    subtitle: 'Same design leads with matrixed management.',
    alt: 'Org model 2: Design Leader manages only designers of the same discipline.',
  },
  {
    type: 'paragraph',
    text: `The matrix created two independent axes: feature ownership (horizontal) and craft development (vertical). Neither dilutes the other.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Resistance',
  },
  {
    type: 'paragraph',
    text: `The design leaders pushed back. Some felt the new structure would reduce their authority over their feature area — that if their direct reports were spread across GPM partnerships, they'd lose influence over the work.`,
  },
  {
    type: 'paragraph',
    text: `I addressed this directly: feature partnership and craft leadership are different kinds of authority, and the matrix gives leaders more of both by making each role explicit. It took a couple of months for the team to internalize that, but the resistance dissolved gradually as the outcomes became visible.`,
  },
  {
    type: 'paragraph',
    text: `The clearest signal came in our quarterly PI demos — the leaders who had pushed back hardest couldn't help but notice the improvement in design quality and consistency across teams.`,
  },
  {
    type: 'paragraph',
    text: `Smaller moments reinforced it: designers thanking craft managers for coaching that finally matched their discipline, and design leaders finding they could ask a peer to step in when a situation fell outside their specialty. The matrix made us a better leadership team by making it easier to lean into each other's strengths.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Outcome',
  },
  {
    type: 'paragraph',
    text: `Within one PI cycle the signal was clear. Feature onboarding — previously triggered every six months — became the exception rather than the rule. Designers now only transition to a new feature area when they choose to explore one, not because a PM rotated. The three-month onboarding tax effectively disappeared from our delivery capacity.`,
  },
  {
    type: 'paragraph',
    text: `Quality improvements showed up in PI demos: for the first time, I was seeing consistent interaction patterns and visual language across screens owned by different designers and different feature teams. Partner complaints dropped. No features were blocked due to design concerns in the PIs that followed the restructure. And perhaps most telling — designers told me they finally felt like they were getting the coaching they actually needed.`,
  },
  {
    type: 'inline-svg',
    name: 'timeline1',
    title: 'Before',
    subtitle: '50% of time spent onboarding.',
    titleAlign: 'left',
    alt: 'The disruptive cadence of designers following PMs when they move to a new Feature.',
    caption: null,
  },
  {
    type: 'inline-svg',
    name: 'timeline2',
    title: 'After',
    subtitle: 'Onboard once, own it a long time.',
    titleAlign: 'left',
    alt: 'The improved cadence of designers staying on a Feature when PMs migrate.',
    caption: null,
  },
  {
    type: 'paragraph',
    text: `A 36-person design organization had been structured for managerial convenience. Restructuring it for craft and continuity changed what it could produce.`,
  },
]
