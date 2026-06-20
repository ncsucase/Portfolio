import { useState, useEffect } from 'react'
import { diagramStyles } from '../../../components/diagrams/diagramStyles.js'

// ── Large layout: 600×220 canvas, viewBox crops 16px each side → 568×188 ────
const BOX_W = 160, BOX_H = 80, BOX_R = 10
const COL1_X = 20, COL2_X = 220, COL3_X = 420
const MERGE_X = 200
const BOX_A_Y = 20, BOX_B_Y = 120, BOX_CD_Y = 70

const COL1_CX = COL1_X + BOX_W / 2  // 100
const COL2_CX = COL2_X + BOX_W / 2  // 300
const COL3_CX = COL3_X + BOX_W / 2  // 500
const CY_A  = BOX_A_Y  + BOX_H / 2  // 60
const CY_B  = BOX_B_Y  + BOX_H / 2  // 160
const CY_CD = BOX_CD_Y + BOX_H / 2  // 110

// ── Small layout: 340×336 canvas, viewBox crops 16px each side → 308×304 ────
const SM_BOX_W = 140, SM_BOX_H = 72, SM_BOX_R = 8
const SM_BOX_A_X = 20, SM_BOX_B_X = 180, SM_BOX_AB_Y = 20, SM_BOX_CD_X = 100

const SM_CX_A  = SM_BOX_A_X  + SM_BOX_W / 2  // 90
const SM_CX_B  = SM_BOX_B_X  + SM_BOX_W / 2  // 250
const SM_CX_CD = SM_BOX_CD_X + SM_BOX_W / 2  // 170
const SM_CY_AB = SM_BOX_AB_Y + SM_BOX_H / 2  // 56

const SM_MERGE_Y  = 110
const SM_BOX_C_Y  = 136
const SM_CY_C     = SM_BOX_C_Y + SM_BOX_H / 2  // 172
const SM_BOX_D_Y  = SM_BOX_C_Y + SM_BOX_H + 36 // 244
const SM_CY_D     = SM_BOX_D_Y + SM_BOX_H / 2  // 280

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

const arrowMarker = (
  <marker id="rpd-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
    <polyline points="1 1, 6 4, 1 7" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </marker>
)

export default function ReviewProcessDiagram(props) {
  const small = useSmallViewport()

  if (small) {
    const svgH = SM_BOX_D_Y + SM_BOX_H + 20  // 336
    const vbH  = svgH - 32                    // 304
    return (
      <svg
        width={308}
        height={vbH}
        viewBox={`16 16 308 ${vbH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto' }}
        {...props}
      >
        <defs><style>{diagramStyles}</style>{arrowMarker}</defs>

        <rect x={SM_BOX_A_X} y={SM_BOX_AB_Y} width={SM_BOX_W} height={SM_BOX_H} rx={SM_BOX_R} fill="var(--bg-deep)"/>
        <text x={SM_CX_A} y={SM_CY_AB - 14} className="dg-sub">Designer</text>
        <text x={SM_CX_A} y={SM_CY_AB}       className="dg-title-sm">Rates self with</text>
        <text x={SM_CX_A} y={SM_CY_AB + 14}  className="dg-title-sm">the rubric</text>

        <rect x={SM_BOX_B_X} y={SM_BOX_AB_Y} width={SM_BOX_W} height={SM_BOX_H} rx={SM_BOX_R} fill="var(--bg-deep)"/>
        <text x={SM_CX_B} y={SM_CY_AB - 14} className="dg-sub">Manager</text>
        <text x={SM_CX_B} y={SM_CY_AB}       className="dg-title-sm">Rates designer</text>
        <text x={SM_CX_B} y={SM_CY_AB + 14}  className="dg-title-sm">with same rubric</text>

        <line x1={SM_CX_A}  y1={SM_BOX_AB_Y + SM_BOX_H} x2={SM_CX_A}  y2={SM_MERGE_Y} stroke="var(--border)" strokeWidth="1.5"/>
        <line x1={SM_CX_B}  y1={SM_BOX_AB_Y + SM_BOX_H} x2={SM_CX_B}  y2={SM_MERGE_Y} stroke="var(--border)" strokeWidth="1.5"/>
        <line x1={SM_CX_A} y1={SM_MERGE_Y} x2={SM_CX_B} y2={SM_MERGE_Y} stroke="var(--border)" strokeWidth="1.5"/>
        <line x1={SM_CX_CD} y1={SM_MERGE_Y} x2={SM_CX_CD} y2={SM_BOX_C_Y} stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#rpd-arrow)"/>

        <rect x={SM_BOX_CD_X} y={SM_BOX_C_Y} width={SM_BOX_W} height={SM_BOX_H} rx={SM_BOX_R} fill="var(--bg-deep)"/>
        <text x={SM_CX_CD} y={SM_CY_C - 14} className="dg-sub">Designer + Manager</text>
        <text x={SM_CX_CD} y={SM_CY_C}       className="dg-title-sm">Discrepancy</text>
        <text x={SM_CX_CD} y={SM_CY_C + 14}  className="dg-title-sm">conversation</text>

        <line x1={SM_CX_CD} y1={SM_BOX_C_Y + SM_BOX_H} x2={SM_CX_CD} y2={SM_BOX_D_Y} stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#rpd-arrow)"/>

        <rect x={SM_BOX_CD_X} y={SM_BOX_D_Y} width={SM_BOX_W} height={SM_BOX_H} rx={SM_BOX_R} fill="var(--bg-deep)"/>
        <text x={SM_CX_CD} y={SM_CY_D - 14} className="dg-sub">Designer</text>
        <text x={SM_CX_CD} y={SM_CY_D}       className="dg-title-sm">Consistent</text>
        <text x={SM_CX_CD} y={SM_CY_D + 14}  className="dg-title-sm">growth plan</text>
      </svg>
    )
  }

  return (
    <svg
      width={568}
      height={188}
      viewBox="16 16 568 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto' }}
      {...props}
    >
      <defs><style>{diagramStyles}</style>{arrowMarker}</defs>

      <rect x={COL1_X} y={BOX_A_Y} width={BOX_W} height={BOX_H} rx={BOX_R} fill="var(--bg-deep)"/>
      <text x={COL1_CX} y={CY_A - 16} className="dg-sub">Designer</text>
      <text x={COL1_CX} y={CY_A}      className="dg-title">Rates self with</text>
      <text x={COL1_CX} y={CY_A + 16} className="dg-title">the rubric</text>

      <rect x={COL1_X} y={BOX_B_Y} width={BOX_W} height={BOX_H} rx={BOX_R} fill="var(--bg-deep)"/>
      <text x={COL1_CX} y={CY_B - 16} className="dg-sub">Manager</text>
      <text x={COL1_CX} y={CY_B}      className="dg-title">Rates designer with</text>
      <text x={COL1_CX} y={CY_B + 16} className="dg-title">the same rubric</text>

      <rect x={COL2_X} y={BOX_CD_Y} width={BOX_W} height={BOX_H} rx={BOX_R} fill="var(--bg-deep)"/>
      <text x={COL2_CX} y={CY_CD - 16} className="dg-sub">Designer + Manager</text>
      <text x={COL2_CX} y={CY_CD}      className="dg-title">Discrepancy</text>
      <text x={COL2_CX} y={CY_CD + 16} className="dg-title">conversation</text>

      <rect x={COL3_X} y={BOX_CD_Y} width={BOX_W} height={BOX_H} rx={BOX_R} fill="var(--bg-deep)"/>
      <text x={COL3_CX} y={CY_CD - 16} className="dg-sub">Designer</text>
      <text x={COL3_CX} y={CY_CD}      className="dg-title">Consistent</text>
      <text x={COL3_CX} y={CY_CD + 16} className="dg-title">growth plan</text>

      <line x1={COL1_X + BOX_W} y1={CY_A}  x2={MERGE_X} y2={CY_A}  stroke="var(--border)" strokeWidth="1.5"/>
      <line x1={COL1_X + BOX_W} y1={CY_B}  x2={MERGE_X} y2={CY_B}  stroke="var(--border)" strokeWidth="1.5"/>
      <line x1={MERGE_X} y1={CY_A}  x2={MERGE_X} y2={CY_B}  stroke="var(--border)" strokeWidth="1.5"/>
      <line x1={MERGE_X} y1={CY_CD} x2={COL2_X} y2={CY_CD} stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#rpd-arrow)"/>

      <line x1={COL2_X + BOX_W} y1={CY_CD} x2={COL3_X} y2={CY_CD} stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#rpd-arrow)"/>
    </svg>
  )
}
