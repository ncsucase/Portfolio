import WaffleChart from './WaffleChart.jsx'

const RED   = 'var(--color-error)'
const GREEN = 'var(--color-success)'
const DARK  = { fill: 'var(--bg-deep)', borderColor: 'var(--border)' }

// 7×4 = 28 squares: 1 maintenance (red), 15 reclaimed (green), 12 work (dark)
const squares = [
  RED,   GREEN, GREEN, GREEN, GREEN, GREEN, GREEN,
  GREEN, GREEN, GREEN, GREEN, GREEN, GREEN, GREEN,
  GREEN, GREEN, DARK,  DARK,  DARK,  DARK,  DARK,
  DARK,  DARK,  DARK,  DARK,  DARK,  DARK,  DARK,
]

const legend = [
  { color: GREEN, label: 'reclaimed work hours' },
  { color: DARK,  label: 'focused work hours' },
]

export default function WaffleChartAfter(props) {
  return <WaffleChart squares={squares} cols={7} legend={legend} {...props} />
}
