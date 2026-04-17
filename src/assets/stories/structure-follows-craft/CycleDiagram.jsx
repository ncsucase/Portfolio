const style = `
  .rc-label {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.01em;
    fill: rgba(255, 59, 48, 0.6);
    dominant-baseline: central;
  }
  .rc-sublabel {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 400;
    font-size: 14px;
    fill: rgba(255, 59, 48, 0.45);
    dominant-baseline: central;
  }
`

const BOX_X = 20
const BOX_W = 660
const BOX_H = 86
const BOX_R = 10
const GAP = 70
const CX = BOX_X + BOX_W / 2
const BOX_RIGHT = BOX_X + BOX_W

const boxY = (i) => 20 + i * (BOX_H + GAP)
const boxMidY = (i) => boxY(i) + BOX_H / 2
const boxBottomY = (i) => boxY(i) + BOX_H

// items: [{ label: string, sublabel?: string }]
export default function CycleDiagram({ items, ...props }) {
  return (
    <svg
      width="820"
      height="630"
      viewBox="0 0 820 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>{style}</style>
        <marker id="rc-arrow-down" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto">
          <polygon points="0 0, 8 0, 4 6" fill="var(--color-error, #FF3B30)" />
        </marker>
        <marker id="rc-arrow-left" markerWidth="6" markerHeight="8" refX="0" refY="4" orient="auto">
          <polygon points="6 0, 6 8, 0 4" fill="var(--color-error, #FF3B30)" />
        </marker>
      </defs>

      {/* Boxes */}
      {items.map((_, i) => (
        <rect
          key={i}
          x={BOX_X}
          y={boxY(i)}
          width={BOX_W}
          height={BOX_H}
          rx={BOX_R}
          fill="var(--bg-error, rgba(255, 59, 48, 0.15))"
        />
      ))}

      {/* Labels */}
      {items.map(({ label, sublabel }, i) => (
        sublabel ? (
          <g key={i}>
            <text x={BOX_X + 28} y={boxMidY(i) - 12} className="rc-label">{label}</text>
            <text x={BOX_X + 28} y={boxMidY(i) + 14} className="rc-sublabel">{sublabel}</text>
          </g>
        ) : (
          <text key={i} x={BOX_X + 28} y={boxMidY(i)} className="rc-label">{label}</text>
        )
      ))}

      {/* Down arrows between boxes */}
      {items.slice(0, -1).map((_, i) => (
        <line
          key={i}
          x1={CX} y1={boxBottomY(i) + 2}
          x2={CX} y2={boxY(i + 1) - 6}
          stroke="var(--color-error, #FF3B30)"
          strokeWidth="2"
          markerEnd="url(#rc-arrow-down)"
        />
      ))}

      {/* Feedback arrow: right side, last box → first box */}
      <path
        d={`M ${BOX_RIGHT} ${boxMidY(items.length - 1)} L 760 ${boxMidY(items.length - 1)} L 760 ${boxMidY(0)} L ${BOX_RIGHT + 6} ${boxMidY(0)}`}
        stroke="var(--color-error, #FF3B30)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#rc-arrow-left)"
      />
    </svg>
  )
}
