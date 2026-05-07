import WaffleChart from '../../../components/WaffleChart.jsx'

const RED = 'var(--color-error)'
const DARK  = { fill: 'var(--bg-deep)', borderColor: 'var(--border)' }

const squares = [
  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  RED,  RED,
  RED,  DARK, DARK, DARK, DARK,
]

const legend = [
  { color: RED,  label: 'execution work' },
  { color: DARK, label: 'thinking work' },
]

export default function WaffleChartDesign(props) {
  return <WaffleChart squares={squares} cols={5} legend={legend} {...props} />
}
