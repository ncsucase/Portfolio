import TimelineDiagram from './TimelineDiagram.jsx'

// After: designer stays on feature — PM rotates independently, no onboarding reset
export default function TimelineDiagram2(props) {
  return (
    <TimelineDiagram
      segments={[
        { label: 'Onboarding', sublabel: '3 mo', kind: 'onboarding', weight: 3 },
        { label: 'Active', sublabel: '12 mo', kind: 'productive', weight: 12 },
      ]}
      markers={[
        { at: 0, label: 'PM rotates', subtitle: 'Designer onboards' },
        { at: 1, label: 'PM rotates', subtitle: 'Designer stays' },
      ]}
      {...props}
    />
  )
}
