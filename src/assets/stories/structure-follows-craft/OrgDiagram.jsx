import { useState, useEffect } from 'react'

const style = `
  .od-title {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: 14px;
    fill: var(--text);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .od-sub {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-weight: 400;
    font-size: 11px;
    white-space: normal;
    fill: var(--text-muted);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .od-feat {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: 13px;
    fill: var(--text);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .od-des {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 600;
    font-size: var(--font-size-xs);
    fill: var(--text);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .od-conn {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-weight: 400;
    font-size: 11px;
    fill: var(--text-muted);
    text-anchor: middle;
    dominant-baseline: central;
    font-style: italic;
  }
  .od-mgr {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-weight: 400;
    font-size: var(--font-size-2xs);
    fill: var(--text-muted);
    text-anchor: middle;
    dominant-baseline: central;
    font-style: italic;
  }
`

// ── Large layout ──────────────────────────────────────────────────────────────
const W = 600
const CX = W / 2
const TOP = { x: 20, y: 20, w: 560, h: 60 }
const CONN = { x: 165, y: 100, w: 270, h: 32 }
const FEAT = { y: 160, w: 275, h: 48 }
const FEAT_A_X = 20
const FEAT_B_X = 305
const FEAT_A_CX = FEAT_A_X + FEAT.w / 2
const FEAT_B_CX = FEAT_B_X + FEAT.w / 2
const BRANCH_Y = 152
const FEAT_BOTTOM = FEAT.y + FEAT.h

const DES_A = [[20, 87], [114, 87], [208, 87]]
const DES_B = [[305, 87], [399, 87], [493, 87]]
const DES_BRANCH_Y = 213
const DES_Y = 220
const DES_H = 48
const desCX = ([x, w]) => x + w / 2

// ── Small layout ──────────────────────────────────────────────────────────────
const W_SM = 340
const CX_SM = W_SM / 2    // 170
const LEFT_X = 40

// Feature/designer boxes extend from LEFT_X+10 to right edge-20
const FEAT_SM_X = 50
const FEAT_SM_W = 270     // 50 + 270 = 320, 20px right margin
const FEAT_SM_H = 40
const DES_SM_H = 52
const DES_SM_W = 86       // 3×86 + 2×6 = 270 (matches FEAT_SM_W)
// Each box starts at FEAT_SM_X; gaps are 6px
const DES_SM_POSITIONS = [[50, DES_SM_W], [142, DES_SM_W], [234, DES_SM_W]]
// Y-dependent values are computed inside the component based on subtitle line count

function wrapText(str, maxChars) {
  if (!str) return ['']
  const words = str.split(' ')
  const lines = []
  let line = ''
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (candidate.length <= maxChars) { line = candidate }
    else { if (line) lines.push(line); line = word }
  }
  if (line) lines.push(line)
  return lines
}

const DISCIPLINES = ['UX', 'UI', 'Content']

function useSmallViewport(breakpoint = 640) {
  const [small, setSmall] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  )
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const handler = (e) => setSmall(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])
  return small
}

// direct: [bool, bool, bool] — which discipline indices are managed by this leader
export default function OrgDiagram({ subtitle, connectorLabel, direct = [true, true, true], ...props }) {
  const small = useSmallViewport()
  const hasDifferentManager = direct.some(d => !d)

  const renderDesignerBox = ([x, w], disciplineIdx, team) => {
    const cx = x + w / 2
    const isDirect = direct[disciplineIdx]
    return (
      <g key={`${x}-${team}`}>
        {isDirect
          ? <rect x={x} y={DES_Y} width={w} height={DES_H} rx={6} fill="var(--bg-deep)" />
          : <rect x={x} y={DES_Y} width={w} height={DES_H} rx={6} stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 3" />
        }
        <text x={cx} y={DES_Y + DES_H / 2 - 4} className="od-des">{DISCIPLINES[disciplineIdx]}</text>
        <text x={cx} y={DES_Y + DES_H / 2 + 6} className="od-des">Designer {team}</text>
        {!isDirect && (
          <text x={cx} y={DES_Y + DES_H + 14} className="od-mgr">Different manager</text>
        )}
      </g>
    )
  }

  const renderDesignerBoxSm = ([x, w], disciplineIdx, team, y) => {
    const cx = x + w / 2
    const isDirect = direct[disciplineIdx]
    return (
      <g key={`${x}-${team}`}>
        {isDirect
          ? <rect x={x} y={y} width={w} height={DES_SM_H} rx={6} fill="var(--bg-deep)" />
          : <rect x={x} y={y} width={w} height={DES_SM_H} rx={6} stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 3" />
        }
        <text x={cx} y={y + DES_SM_H / 2 - 7} className="od-des">{DISCIPLINES[disciplineIdx]}</text>
        <text x={cx} y={y + DES_SM_H / 2 + 7} className="od-des">Designer {team}</text>
        {!isDirect && (
          <text x={cx} y={y + DES_SM_H + 8} className="od-mgr">Different manager</text>
        )}
      </g>
    )
  }

  if (small) {
    // Subtitle wrapping — determines top box height
    const subLines = wrapText(subtitle || '', 42)
    const topH = subLines.length > 1 ? 80 : 60
    const topCY = 20 + topH / 2  // vertical center of top box

    // Title/subtitle Y positions, vertically centered as a group
    const titleY = subLines.length > 1 ? topCY - 15 : topCY - 7
    const subLineYs = subLines.length > 1
      ? subLines.map((_, i) => topCY + 1 + i * 15)
      : [topCY + 7]

    // Y cascade — everything below the top box
    const connY = 20 + topH + 20
    const connBottom = connY + 32
    const branchDownY = connBottom + 16
    const featAY = branchDownY + 8
    const featACY = featAY + FEAT_SM_H / 2
    const featABottom = featAY + FEAT_SM_H
    const featCX = FEAT_SM_X + FEAT_SM_W / 2

    const desABranchY = featABottom + 7
    const desAY = desABranchY + 7
    const desABottom = desAY + DES_SM_H

    // Extra gap before Feature B when "Different manager" label is present
    const featBY = desABottom + (hasDifferentManager ? 32 : 22)
    const featBCY = featBY + FEAT_SM_H / 2
    const featBBottom = featBY + FEAT_SM_H

    const desBBranchY = featBBottom + 7
    const desBY = desBBranchY + 7
    const desBBottom = desBY + DES_SM_H

    const svgH = desBBottom + 12 + (hasDifferentManager ? 12 : 0)
    // Tight viewBox: 16px crop on each side (leaves ~4px pad around content)
    // Content spans x=20–320, y=20–desBBottom(+label)
    const vbH = svgH - 24

    return (
      <svg
        width={308}
        height={vbH}
        viewBox={`16 16 308 ${vbH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs><style>{style}</style></defs>

        {/* Design Leader box */}
        <rect x={20} y={20} width={300} height={topH} rx={8} fill="var(--bg-deep)" />
        <text x={CX_SM} y={titleY} className="od-title">Design Leader</text>
        {subLines.map((line, i) => (
          <text key={i} x={CX_SM} y={subLineYs[i]} className="od-sub">{line}</text>
        ))}

        {/* Design Leader → connector */}
        <line x1={CX_SM} y1={20 + topH} x2={CX_SM} y2={connY} stroke="var(--border)" strokeWidth="1.5" />
        <rect x={20} y={connY} width={300} height={32} rx={6}
              stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x={CX_SM} y={connY + 16} className="od-conn">{connectorLabel}</text>

        {/* Connector → turn left → left bar */}
        <line x1={CX_SM} y1={connBottom} x2={CX_SM} y2={branchDownY} stroke="var(--border)" strokeWidth="1.5" />
        <line x1={LEFT_X} y1={branchDownY} x2={CX_SM} y2={branchDownY} stroke="var(--border)" strokeWidth="1.5" />
        <line x1={LEFT_X} y1={branchDownY} x2={LEFT_X} y2={featBCY} stroke="var(--border)" strokeWidth="1.5" />

        {/* Left bar → Feature A */}
        <line x1={LEFT_X} y1={featACY} x2={FEAT_SM_X} y2={featACY} stroke="var(--border)" strokeWidth="1.5" />

        {/* Feature A box */}
        <rect x={FEAT_SM_X} y={featAY} width={FEAT_SM_W} height={FEAT_SM_H} rx={6} fill="var(--bg-deep)" />
        <text x={featCX} y={featAY + FEAT_SM_H / 2} className="od-feat">Feature A</text>

        {/* Feature A → designer branches */}
        <line x1={featCX} y1={featABottom} x2={featCX} y2={desABranchY} stroke="var(--border)" strokeWidth="1.5" />
        <line x1={desCX(DES_SM_POSITIONS[0])} y1={desABranchY} x2={desCX(DES_SM_POSITIONS[2])} y2={desABranchY} stroke="var(--border)" strokeWidth="1.5" />
        {DES_SM_POSITIONS.map(d => (
          <line key={d[0]} x1={desCX(d)} y1={desABranchY} x2={desCX(d)} y2={desAY} stroke="var(--border)" strokeWidth="1.5" />
        ))}

        {/* Left bar → Feature B */}
        <line x1={LEFT_X} y1={featBCY} x2={FEAT_SM_X} y2={featBCY} stroke="var(--border)" strokeWidth="1.5" />

        {/* Feature B box */}
        <rect x={FEAT_SM_X} y={featBY} width={FEAT_SM_W} height={FEAT_SM_H} rx={6} fill="var(--bg-deep)" />
        <text x={featCX} y={featBY + FEAT_SM_H / 2} className="od-feat">Feature B</text>

        {/* Feature B → designer branches */}
        <line x1={featCX} y1={featBBottom} x2={featCX} y2={desBBranchY} stroke="var(--border)" strokeWidth="1.5" />
        <line x1={desCX(DES_SM_POSITIONS[0])} y1={desBBranchY} x2={desCX(DES_SM_POSITIONS[2])} y2={desBBranchY} stroke="var(--border)" strokeWidth="1.5" />
        {DES_SM_POSITIONS.map(d => (
          <line key={d[0]} x1={desCX(d)} y1={desBBranchY} x2={desCX(d)} y2={desBY} stroke="var(--border)" strokeWidth="1.5" />
        ))}

        {/* Designer boxes */}
        {DES_SM_POSITIONS.map((d, i) => renderDesignerBoxSm(d, i, 'A', desAY))}
        {DES_SM_POSITIONS.map((d, i) => renderDesignerBoxSm(d, i, 'B', desBY))}
      </svg>
    )
  }

  const svgH = DES_Y + DES_H + (hasDifferentManager ? 32 : 20)
  // Tight viewBox: 16px crop on each side (leaves ~4px pad around content)
  // Content spans x=20–580, y=20–268 (no dm) or y=20–287 (dm)
  const vbH = hasDifferentManager ? 276 : 256

  return (
    <svg
      width={568}
      height={vbH}
      viewBox={`16 16 568 ${vbH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs><style>{style}</style></defs>

      {/* Design Leader box */}
      <rect x={TOP.x} y={TOP.y} width={TOP.w} height={TOP.h} rx={8} fill="var(--bg-deep)" />
      <text x={CX} y={TOP.y + TOP.h / 2 - 6} className="od-title">Design Leader</text>
      <text x={CX} y={TOP.y + TOP.h / 2 + 8} className="od-sub">{subtitle}</text>

      {/* Top box → dashed connector */}
      <line x1={CX} y1={TOP.y + TOP.h} x2={CX} y2={CONN.y} stroke="var(--border)" strokeWidth="1.5" />
      <rect x={CONN.x} y={CONN.y} width={CONN.w} height={CONN.h} rx={6}
            stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={CX} y={CONN.y + CONN.h / 2} className="od-conn">{connectorLabel}</text>

      {/* Dashed connector → Feature A and B */}
      <line x1={CX} y1={CONN.y + CONN.h} x2={CX} y2={BRANCH_Y} stroke="var(--border)" strokeWidth="1.5" />
      <line x1={FEAT_A_CX} y1={BRANCH_Y} x2={FEAT_B_CX} y2={BRANCH_Y} stroke="var(--border)" strokeWidth="1.5" />
      <line x1={FEAT_A_CX} y1={BRANCH_Y} x2={FEAT_A_CX} y2={FEAT.y} stroke="var(--border)" strokeWidth="1.5" />
      <line x1={FEAT_B_CX} y1={BRANCH_Y} x2={FEAT_B_CX} y2={FEAT.y} stroke="var(--border)" strokeWidth="1.5" />

      {/* Feature boxes */}
      <rect x={FEAT_A_X} y={FEAT.y} width={FEAT.w} height={FEAT.h} rx={6} fill="var(--bg-deep)" />
      <text x={FEAT_A_CX} y={FEAT.y + FEAT.h / 2} className="od-feat">Feature A</text>
      <rect x={FEAT_B_X} y={FEAT.y} width={FEAT.w} height={FEAT.h} rx={6} fill="var(--bg-deep)" />
      <text x={FEAT_B_CX} y={FEAT.y + FEAT.h / 2} className="od-feat">Feature B</text>

      {/* Feature A → designer branches */}
      <line x1={FEAT_A_CX} y1={FEAT_BOTTOM} x2={FEAT_A_CX} y2={DES_BRANCH_Y} stroke="var(--border)" strokeWidth="1.5" />
      <line x1={desCX(DES_A[0])} y1={DES_BRANCH_Y} x2={desCX(DES_A[2])} y2={DES_BRANCH_Y} stroke="var(--border)" strokeWidth="1.5" />
      {DES_A.map(d => (
        <line key={d[0]} x1={desCX(d)} y1={DES_BRANCH_Y} x2={desCX(d)} y2={DES_Y} stroke="var(--border)" strokeWidth="1.5" />
      ))}

      {/* Feature B → designer branches */}
      <line x1={FEAT_B_CX} y1={FEAT_BOTTOM} x2={FEAT_B_CX} y2={DES_BRANCH_Y} stroke="var(--border)" strokeWidth="1.5" />
      <line x1={desCX(DES_B[0])} y1={DES_BRANCH_Y} x2={desCX(DES_B[2])} y2={DES_BRANCH_Y} stroke="var(--border)" strokeWidth="1.5" />
      {DES_B.map(d => (
        <line key={d[0]} x1={desCX(d)} y1={DES_BRANCH_Y} x2={desCX(d)} y2={DES_Y} stroke="var(--border)" strokeWidth="1.5" />
      ))}

      {/* Designer boxes */}
      {DES_A.map((d, i) => renderDesignerBox(d, i, 'A'))}
      {DES_B.map((d, i) => renderDesignerBox(d, i, 'B'))}
    </svg>
  )
}
