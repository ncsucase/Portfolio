const SQUARE = 32
const GAP = 6
const LEGEND_TOP_GAP = 14
const SWATCH = 16
const LEGEND_ROW_H = 24

// squares: flat array of color strings (length = rows * cols)
// cols: number of columns
// legend: [{ color, label }]
export default function WaffleChart({ squares, cols = 7, legend = [], ...props }) {
  const rows = Math.ceil(squares.length / cols)
  const gridW = cols * SQUARE + (cols - 1) * GAP
  const gridH = rows * SQUARE + (rows - 1) * GAP
  const legendY = gridH + LEGEND_TOP_GAP
  const totalH = legendY + legend.length * LEGEND_ROW_H

  return (
    <svg
      width={gridW}
      height={totalH}
      viewBox={`0 0 ${gridW} ${totalH}`}
      style={{ maxWidth: `${gridW}px` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>{`
          .wc-label {
            font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
            font-size: var(--font-size-sm);
            font-weight: 400;
            fill: var(--text-muted, rgba(0,0,0,0.55));
            dominant-baseline: central;
          }
        `}</style>
      </defs>

      {squares.map((square, idx) => {
        const fill = typeof square === 'string' ? square : square.fill
        const stroke = typeof square === 'string' ? undefined : square.borderColor
        const col = idx % cols
        const row = Math.floor(idx / cols)
        return (
          <rect
            key={idx}
            x={col * (SQUARE + GAP)}
            y={row * (SQUARE + GAP)}
            width={SQUARE}
            height={SQUARE}
            fill={fill}
            {...(stroke ? { stroke, strokeWidth: 1 } : {})}
          />
        )
      })}

      {legend.map(({ color, label }, i) => {
        const fill = typeof color === 'string' ? color : color.fill
        const stroke = typeof color === 'string' ? undefined : color.borderColor
        const y = legendY + i * LEGEND_ROW_H
        return (
          <g key={i}>
            <rect x={0} y={y} width={SWATCH} height={SWATCH} fill={fill} {...(stroke ? { stroke, strokeWidth: 1 } : {})} />
            <text x={SWATCH + 5} y={y + SWATCH / 2} className="wc-label">{label}</text>
          </g>
        )
      })}
    </svg>
  )
}
