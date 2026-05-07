import WaffleChart from '../../../components/WaffleChart.jsx'

const RED = 'var(--color-error)'
const DARK  = { fill: 'var(--bg-deep)', borderColor: 'var(--border)' }

const squares = [
  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  DARK, DARK,
  DARK, DARK, DARK, DARK, DARK,
  DARK, DARK, DARK, DARK, DARK,
]

const legend = [
  { color: RED,  label: 'information gaps' },
  { color: DARK, label: 'information provided' },
]

export default function WaffleChartDev(props) {
  return <WaffleChart squares={squares} cols={5} legend={legend} {...props} />
}
