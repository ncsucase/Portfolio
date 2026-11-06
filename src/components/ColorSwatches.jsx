import './ColorSwatches.css'

// swatches: [{ hex: '#2E1A47', label: 'Bg Std Emphasis' }]
// size: swatch edge length (number = px, or any CSS length)
// gap: space between swatches (number = px, or any CSS length)
// align: 'start' | 'center' | 'end' (default 'center')
export default function ColorSwatches({ swatches, size = 80, gap = 16, align = 'center', label }) {
  const px = v => (typeof v === 'number' ? `${v}px` : v)
  return (
    <ul
      className="color-swatches"
      aria-label={label}
      style={{ '--swatch-size': px(size), '--swatch-gap': px(gap), justifyContent: align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center' }}
    >
      {swatches.map(({ hex, label: name }) => (
        <li key={`${hex}-${name}`} className="color-swatch">
          <span className="color-swatch-chip" style={{ background: hex }} />
          <span className="color-swatch-hex">{hex.toUpperCase()}</span>
          {name && <span className="color-swatch-name">{name}</span>}
        </li>
      ))}
    </ul>
  )
}
