import { useId } from 'react'

const style = `
  .td-mark {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-weight: 400;
    font-size: var(--font-size-xs, 11px);
    fill: var(--text-muted);
    dominant-baseline: auto;
  }
  .td-mark-sub {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-weight: 400;
    font-size: var(--font-size-2xs, 10px);
    fill: var(--text-muted);
    dominant-baseline: auto;
    font-style: italic;
  }
  .td-seg {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: var(--font-size-xs, 11px);
    fill: var(--text);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .td-dur {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-weight: 400;
    font-size: var(--font-size-xs, 11px);
    fill: var(--text-muted);
    dominant-baseline: central;
  }
  @media (max-width: 640px) {
    .td-seg { font-size: 15px; }
    .td-mark { font-size: 14px; }
    .td-mark-sub { font-size: 13px; }
    .td-dur { font-size: 14px; }
  }
`

const W = 600
const PAD = 4
const USE_W = W - 2 * PAD
const SEG_H = 52
const SEG_R = 6

// segments: [{ label?, sublabel?, kind: 'onboarding'|'productive', weight }]
// markers:  [{ at: number, label: string, subtitle?: string }]
//   at — segment index; marker appears at the left edge of that segment
export default function TimelineDiagram({ segments, markers = [], ...props }) {
  const rawId = useId()
  const uid = rawId.replace(/:/g, '')

  const totalW = segments.reduce((s, g) => s + g.weight, 0)
  const xAt = (i) =>
    PAD + (segments.slice(0, i).reduce((s, g) => s + g.weight, 0) / totalW) * USE_W
  const wAt = (i) => (segments[i].weight / totalW) * USE_W

  const hasSubtitle = markers.some((m) => m.subtitle)
  const MRK_LABEL_Y = 10
  const MRK_SUB_Y = 24
  const SEG_Y = hasSubtitle ? 42 : 28
  const DUR_CY = SEG_Y + SEG_H + 13
  const svgH = DUR_CY + 8
  const clipId = `${uid}clip`

  return (
    <svg
      width={W} height={svgH}
      viewBox={`0 0 ${W} ${svgH}`}
      fill="none" xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>{style}</style>
        <clipPath id={clipId}>
          <rect x={PAD} y={SEG_Y} width={USE_W} height={SEG_H} rx={SEG_R} />
        </clipPath>

        {/* Success gradient — matches WaffleChart neu-grad-success */}
        <radialGradient id={`${uid}grad`} cx="0" cy="0" r="1"
          gradientUnits="objectBoundingBox"
          gradientTransform="translate(1 1) rotate(-135) scale(1.8)">
          <stop stopColor="var(--color-success)"/>
          <stop offset="1" stopColor="var(--color-caution)"/>
        </radialGradient>

        {/* Success glow filter — matches WaffleChart neu-filter-success */}
        <filter id={`${uid}glow`} x="-20%" y="-20%" width="140%" height="140%"
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

        {/* Inset shadow filter for gray base rect */}
        <filter id={`${uid}inset`} x="0" y="0" width="100%" height="100%"
          colorInterpolationFilters="sRGB">
          <feComponentTransfer in="SourceAlpha" result="invAlpha">
            <feFuncA type="table" tableValues="1 0"/>
          </feComponentTransfer>
          {/* Dark shadow: inset 4px 4px 6px rgba(0,0,0,0.15) */}
          <feOffset dx="4" dy="4" in="invAlpha" result="off1"/>
          <feGaussianBlur stdDeviation="3" in="off1" result="blur1"/>
          <feComposite in="blur1" in2="SourceAlpha" operator="in" result="shape1"/>
          <feFlood floodColor="black" floodOpacity="0.15" result="col1"/>
          <feComposite in="col1" in2="shape1" operator="in" result="darkShadow"/>
          {/* Light highlight: inset -1px -1px 2px rgba(255,255,255,0.8) */}
          <feOffset dx="-1" dy="-1" in="invAlpha" result="off2"/>
          <feGaussianBlur stdDeviation="1" in="off2" result="blur2"/>
          <feComposite in="blur2" in2="SourceAlpha" operator="in" result="shape2"/>
          <feFlood floodColor="white" floodOpacity="0.8" result="col2"/>
          <feComposite in="col2" in2="shape2" operator="in" result="lightHighlight"/>
          <feMerge>
            <feMergeNode in="SourceGraphic"/>
            <feMergeNode in="darkShadow"/>
            <feMergeNode in="lightHighlight"/>
          </feMerge>
        </filter>
      </defs>

      {/* Gray base — full-width neumorphic background */}
      <rect
        x={PAD} y={SEG_Y}
        width={USE_W} height={SEG_H}
        rx={SEG_R}
        fill="var(--bg-deep)"
        stroke="var(--border)"
        strokeWidth="1"
        filter={`url(#${uid}inset)`}
      />

      {/* Green productive segments on top, clipped to bar shape */}
      <g clipPath={`url(#${clipId})`}>
        {segments.map((seg, i) =>
          seg.kind !== 'onboarding' ? (
            <rect
              key={i}
              x={xAt(i)} y={SEG_Y}
              width={wAt(i)} height={SEG_H}
              fill={`url(#${uid}grad)`}
              filter={`url(#${uid}glow)`}
            />
          ) : null
        )}
      </g>

      {/* Segment labels (inside bar) */}
      {segments.map((seg, i) =>
        seg.label ? (
          <text key={i} x={xAt(i) + wAt(i) / 2} y={SEG_Y + SEG_H / 2} className="td-seg">
            {seg.label}
          </text>
        ) : null
      )}

      {/* Duration sublabels: left-aligned at segment start edge, with tick line */}
      {segments.map((seg, i) =>
        seg.sublabel ? (
          <g key={i}>
            <line
              x1={xAt(i)} y1={SEG_Y + SEG_H + 1}
              x2={xAt(i)} y2={DUR_CY - 3}
              stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3"
            />
            <text x={xAt(i) + 3} y={DUR_CY} className="td-dur" textAnchor="start">
              {seg.sublabel}
            </text>
          </g>
        ) : null
      )}

      {/* Markers: label above + dashed vertical line down to bar */}
      {markers.map((m, mi) => {
        const x = xAt(m.at)
        const lineY1 = (m.subtitle ? MRK_SUB_Y : MRK_LABEL_Y) + 6
        return (
          <g key={mi}>
            <text x={x} y={MRK_LABEL_Y} className="td-mark">{m.label}</text>
            {m.subtitle && (
              <text x={x} y={MRK_SUB_Y} className="td-mark-sub">{m.subtitle}</text>
            )}
            <line
              x1={x} y1={lineY1} x2={x} y2={SEG_Y - 1}
              stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 3"
            />
          </g>
        )
      })}
    </svg>
  )
}
