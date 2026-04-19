import WaffleChart from './WaffleChart.jsx'

const RED = 'var(--color-error)'
const DARK = 'var(--bg-deep)'

// 7×4 = 28 squares: 17 maintenance (red), 11 work (dark)
const squares = [
  RED,  RED,  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  RED,  RED,  RED,  RED,
  RED,  RED,  RED,  DARK, DARK, DARK, DARK,
  DARK, DARK, DARK, DARK, DARK, DARK, DARK,
]

const legend = [
  { color: RED,  label: 'existing maintenance hours' },
  { color: DARK, label: 'remaining work hours' },
]

export default function WaffleChartBefore(props) {
  return <WaffleChart squares={squares} cols={7} legend={legend} {...props} />
}
