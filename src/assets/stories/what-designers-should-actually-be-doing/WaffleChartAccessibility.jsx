import WaffleChart from '../../../components/WaffleChart.jsx'

const RED = 'var(--color-error)'
const DARK  = { fill: 'var(--bg-deep)', borderColor: 'var(--border)' }

const squares = [
  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  DARK, DARK,
]

const legend = [
  { color: RED,  label: 'requirements at risk' },
  { color: DARK, label: 'reliably annotated' },
]

export default function WaffleChartAccessibility(props) {
  return <WaffleChart squares={squares} cols={5} legend={legend} {...props} />
}
