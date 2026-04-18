import TimelineDiagram from './TimelineDiagram.jsx'

// Before: designer follows PM rotations — repeated onboarding tax
export default function TimelineDiagram1(props) {
  return (
    <TimelineDiagram
      segments={[
        { label: 'Onboarding', sublabel: '3 mo', kind: 'onboarding', weight: 3 },
        { label: 'Active', sublabel: '6 mo', kind: 'productive', weight: 3 },
        { label: 'Onboarding', sublabel: '9 mo', kind: 'onboarding', weight: 3 },
        { label: 'Active', sublabel: '12 mo', kind: 'productive', weight: 3 },
      ]}
      markers={[
        { at: 0, label: 'PM rotates' },
        { at: 2, label: 'PM rotates' },
      ]}
      {...props}
    />
  )
}
