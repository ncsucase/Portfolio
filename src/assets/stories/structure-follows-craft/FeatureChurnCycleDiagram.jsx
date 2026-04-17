import CycleDiagram from './CycleDiagram.jsx'

const items = [
  { label: 'PM rotates feature area' },
  { label: 'Designer offboards' },
  { label: '3 months to re-onboard', sublabel: 'New feature context' },
  { label: 'Lost delivery velocity' },
]

export default function FeatureChurnCycleDiagram(props) {
  return <CycleDiagram items={items} {...props} />
}
