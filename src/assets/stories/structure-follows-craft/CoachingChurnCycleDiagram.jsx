import CycleDiagram from './CycleDiagram.jsx'

const items = [
  { label: 'Design leader coaches', sublabel: 'Outside their discipline' },
  { label: 'Feedback misses the mark', sublabel: "IC can't grow in their craft" },
  { label: 'Design quality drops', sublabel: 'Inconsistency across teams' },
  { label: 'Partners flag concerns' },
]

export default function CoachingChurnCycleDiagram(props) {
  return <CycleDiagram items={items} {...props} />
}
