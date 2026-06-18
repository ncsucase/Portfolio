const SQUARE = 32
const GAP = 6
const LEGEND_TOP_GAP = 14
const SWATCH = 16
const LEGEND_ROW_H = 24

const NEU = {
  'var(--color-error)':   { fill: 'url(#neu-grad-error)',   filter: 'url(#neu-filter-error)'   },
  'var(--color-success)': { fill: 'url(#neu-grad-success)', filter: 'url(#neu-filter-success)' },
}

function neuProps(fillValue) {
  return NEU[fillValue] ?? {}
}

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

        {/* Radial gradients — objectBoundingBox so one def covers any rect size/position */}
        <radialGradient id="neu-grad-error" cx="0" cy="0" r="1"
          gradientUnits="objectBoundingBox"
          gradientTransform="translate(1 1) rotate(-135) scale(1.414)">
          <stop stopColor="var(--color-error)"/>
          <stop offset="1" stopColor="var(--color-warning)"/>
        </radialGradient>

        <radialGradient id="neu-grad-success" cx="0" cy="0" r="1"
          gradientUnits="objectBoundingBox"
          gradientTransform="translate(1 1) rotate(-135) scale(1.8)">
          <stop stopColor="var(--color-success)"/>
          <stop offset="1" stopColor="var(--color-caution)"/>
        </radialGradient>

        {/* Dual-shadow filter: tight dark shadow + colored glow */}
        <filter id="neu-filter-error" x="-20%" y="-20%" width="140%" height="140%"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.231 0 0 0 0 0.188 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
        </filter>

        <filter id="neu-filter-success" x="-20%" y="-20%" width="140%" height="140%"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix"
            values="0 0 0 0 0.204 0 0 0 0 0.780 0 0 0 0 0.349 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
        </filter>
      </defs>

      {squares.map((square, idx) => {
        const fill = typeof square === 'string' ? square : square.fill
        const stroke = typeof square === 'string' ? undefined : square.borderColor
        const col = idx % cols
        const row = Math.floor(idx / cols)
        const { fill: gradFill = fill, filter } = neuProps(fill)
        return (
          <rect
            key={idx}
            x={col * (SQUARE + GAP)}
            y={row * (SQUARE + GAP)}
            width={SQUARE}
            height={SQUARE}
            rx={2}
            fill={gradFill}
            filter={filter}
            {...(stroke ? { stroke, strokeWidth: 1 } : {})}
          />
        )
      })}

      {legend.map(({ color, label }, i) => {
        const fill = typeof color === 'string' ? color : color.fill
        const stroke = typeof color === 'string' ? undefined : color.borderColor
        const y = legendY + i * LEGEND_ROW_H
        const { fill: gradFill = fill, filter } = neuProps(fill)
        return (
          <g key={i}>
            <rect x={0} y={y} width={SWATCH} height={SWATCH} rx={2}
              fill={gradFill} filter={filter}
              {...(stroke ? { stroke, strokeWidth: 1 } : {})} />
            <text x={SWATCH + 5} y={y + SWATCH / 2} className="wc-label">{label}</text>
          </g>
        )
      })}
    </svg>
  )
}
