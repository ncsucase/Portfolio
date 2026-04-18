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

const segFill = (kind) =>
  kind === 'onboarding' ? 'var(--bg-deep)' : 'var(--bg-success)'

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
      </defs>

      {/* Segments clipped to rounded bar shape */}
      <g clipPath={`url(#${clipId})`}>
        {segments.map((seg, i) => (
          <rect
            key={i}
            x={xAt(i)} y={SEG_Y}
            width={wAt(i)} height={SEG_H}
            fill={segFill(seg.kind)}
          />
        ))}
        {segments.map((_, i) => (
          <line
            key={`div${i}`}
            x1={xAt(i)} y1={SEG_Y} x2={xAt(i)} y2={SEG_Y + SEG_H}
            stroke="var(--border)" strokeWidth="1.5"
          />
        ))}
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
