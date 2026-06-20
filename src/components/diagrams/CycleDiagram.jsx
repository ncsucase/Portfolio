import { diagramStyles } from './diagramStyles.js'

const BOX_X = 20
const BOX_W = 340
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
  const contentBottom = boxBottomY(items.length - 1)
  const vbH = contentBottom - 12
  return (
    <svg
      width={428}
      height={vbH}
      viewBox={`16 16 428 ${vbH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto' }}
      {...props}
    >
      <defs>
        <style>{diagramStyles}</style>
        <marker id="cd-arrow-down" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="var(--color-error)" />
        </marker>
        <marker id="cd-arrow-left" markerWidth="6" markerHeight="8" refX="6" refY="4" orient="auto">
          <polygon points="0 0, 6 4, 0 8" fill="var(--color-error)" />
        </marker>

        <radialGradient id="cd-grad-error" cx="0" cy="0" r="1"
          gradientUnits="objectBoundingBox"
          gradientTransform="translate(1 1) rotate(-135) scale(1.414)">
          <stop stopColor="var(--color-error)"/>
          <stop offset="1" stopColor="var(--color-warning)"/>
        </radialGradient>

        <filter id="cd-filter-error" x="-20%" y="-20%" width="140%" height="140%"
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
      </defs>

      {items.map((_, i) => (
        <rect
          key={i}
          x={BOX_X}
          y={boxY(i)}
          width={BOX_W}
          height={BOX_H}
          rx={BOX_R}
          fill="url(#cd-grad-error)"
          filter="url(#cd-filter-error)"
        />
      ))}

      {items.map(({ label, sublabel }, i) => (
        sublabel ? (
          <g key={i}>
            <text x={CX} y={boxMidY(i) - 12} className="dg-label">{label}</text>
            <text x={CX} y={boxMidY(i) + 14} className="dg-sublabel">{sublabel}</text>
          </g>
        ) : (
          <text key={i} x={CX} y={boxMidY(i)} className="dg-label">{label}</text>
        )
      ))}

      {items.slice(0, -1).map((_, i) => (
        <line
          key={i}
          x1={CX} y1={boxBottomY(i) + 2}
          x2={CX} y2={boxY(i + 1) - 6}
          stroke="var(--color-error)"
          strokeWidth="2"
          markerEnd="url(#cd-arrow-down)"
        />
      ))}

      <path
        d={`M ${BOX_RIGHT} ${boxMidY(items.length - 1)} L 440 ${boxMidY(items.length - 1)} L 440 ${boxMidY(0)} L ${BOX_RIGHT + 6} ${boxMidY(0)}`}
        stroke="var(--color-error)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#cd-arrow-left)"
      />
    </svg>
  )
}
