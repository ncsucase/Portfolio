import { useState, useEffect } from 'react'
import { diagramStyles, nodeFill, nodeStroke, edgeColor } from '../../../components/diagrams/diagramStyles.js'

function useSmallViewport(breakpoint = 600) {
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

const cauFill   = nodeFill('caution')
const cauStroke = nodeStroke('caution')
const errFill   = nodeFill('error')
const errStroke = nodeStroke('error')
const errEdge   = edgeColor('error')
const cauEdge   = edgeColor('caution')

function ErrorDefs() {
  return (
    <>
      <radialGradient id="pf-grad-error" cx="0" cy="0" r="1"
        gradientUnits="objectBoundingBox"
        gradientTransform="translate(1 1) rotate(-135) scale(1.414)">
        <stop stopColor="var(--color-error)"/>
        <stop offset="1" stopColor="var(--color-warning)"/>
      </radialGradient>
      <filter id="pf-filter-error" x="-20%" y="-20%" width="140%" height="140%"
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
    </>
  )
}

function CautionDefs() {
  return (
    <>
      <radialGradient id="pf-grad-caution" cx="0" cy="0" r="1"
        gradientUnits="objectBoundingBox"
        gradientTransform="translate(1 1) rotate(-135) scale(1.414)">
        <stop stopColor="var(--color-warning)"/>
        <stop offset="1" stopColor="var(--color-caution)"/>
      </radialGradient>
      <filter id="pf-filter-caution" x="-20%" y="-20%" width="140%" height="140%"
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
          values="0 0 0 0 1 0 0 0 0 0.624 0 0 0 0 0.039 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
      </filter>
    </>
  )
}

function Markers({ prefix }) {
  return (
    <>
      <marker id={`${prefix}-head-main`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M 0,0 L 10,3.5 L 0,7 Z" fill={cauEdge} />
      </marker>
      <marker id={`${prefix}-head-error`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M 0,0 L 10,3.5 L 0,7 Z" fill={errEdge} />
      </marker>
    </>
  )
}

export default function ProblemFlowchart(props) {
  const small = useSmallViewport()

  if (small) {
    return (
      <svg
        viewBox="19 19 388 610"
        width={320}
        height={502}
        style={{ maxWidth: '100%', height: 'auto' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flowchart showing the chaotic manual reporting process"
      >
        <defs>
          <style>{diagramStyles}</style>
          <Markers prefix="pfs" />
          <ErrorDefs />
          <CautionDefs />
        </defs>

        <rect x={20} y={20} width={185} height={72} rx={6} fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" />
        <text x={112} y={56} className="dg-label">Open Excel + Rally</text>

        <rect x={20} y={148} width={185} height={88} rx={6} fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" />
        <text x={112} y={183} className="dg-label">Check each Feature</text>
        <text x={112} y={201} className="dg-sublabel">~400 items, manually</text>

        <polygon points="112,280 137,305 112,330 87,305" fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" strokeLinejoin="miter" />

        <rect x={220} y={261} width={185} height={88} rx={6} fill="url(#pf-grad-error)" filter="url(#pf-filter-error)" stroke={errStroke} strokeWidth="1.5" />
        <text x={312} y={296} className="dg-label">Fix broken formulas</text>
        <text x={312} y={314} className="dg-sublabel">Other users overwrote</text>

        <rect x={20} y={400} width={185} height={88} rx={6} fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" />
        <text x={112} y={435} className="dg-label">Update records</text>
        <text x={112} y={453} className="dg-sublabel">By hand, hope it holds</text>

        <polygon points="312,419 337,444 312,469 287,444" fill="url(#pf-grad-error)" filter="url(#pf-filter-error)" stroke={errStroke} strokeWidth="1.5" strokeLinejoin="miter" />

        <rect x={220} y={539} width={185} height={88} rx={6} fill="url(#pf-grad-error)" filter="url(#pf-filter-error)" stroke={errStroke} strokeWidth="1.5" />
        <text x={312} y={574} className="dg-label">Revert to old version</text>
        <text x={312} y={592} className="dg-sublabel">PMs reconstruct updates</text>

        <path d="M 112,92 V 145" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfs-head-main)" />
        <path d="M 112,236 V 277" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfs-head-main)" />
        <path d="M 137,305 H 217" stroke={errEdge} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#pfs-head-error)" />
        <path d="M 112,330 V 397" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfs-head-main)" />
        <path d="M 312,349 V 416" stroke={errEdge} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#pfs-head-error)" />
        <path d="M 287,444 H 208" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfs-head-main)" />
        <path d="M 312,469 V 536" stroke={errEdge} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#pfs-head-error)" />
        <path d="M 220,583 H 112 V 485" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfs-head-main)" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="14 19 517 609"
      width={430}
      height={506}
      style={{ maxWidth: '100%', height: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flowchart showing the chaotic manual reporting process"
      {...props}
    >
      <defs>
        <style>{diagramStyles}</style>
        <Markers prefix="pfl" />
        <ErrorDefs />
        <CautionDefs />
      </defs>

      <rect x={45} y={20} width={240} height={72} rx={6} fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" />
      <text x={165} y={56} className="dg-label">Open Excel + Rally</text>

      <rect x={45} y={148} width={240} height={88} rx={6} fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" />
      <text x={165} y={183} className="dg-label">Check each Feature</text>
      <text x={165} y={201} className="dg-sublabel">~400 items, manually</text>

      <polygon points="165,277 193,305 165,333 137,305" fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" strokeLinejoin="miter" />

      <rect x={300} y={261} width={230} height={88} rx={6} fill="url(#pf-grad-error)" filter="url(#pf-filter-error)" stroke={errStroke} strokeWidth="1.5" />
      <text x={415} y={296} className="dg-label">Fix broken formulas</text>
      <text x={415} y={314} className="dg-sublabel">Other users overwrote</text>

      <rect x={45} y={400} width={240} height={88} rx={6} fill="url(#pf-grad-caution)" filter="url(#pf-filter-caution)" stroke={cauStroke} strokeWidth="1.5" />
      <text x={165} y={435} className="dg-label">Update records</text>
      <text x={165} y={453} className="dg-sublabel">By hand, hope it holds</text>

      <polygon points="415,416 443,444 415,472 387,444" fill="url(#pf-grad-error)" filter="url(#pf-filter-error)" stroke={errStroke} strokeWidth="1.5" strokeLinejoin="miter" />

      <rect x={300} y={539} width={230} height={88} rx={6} fill="url(#pf-grad-error)" filter="url(#pf-filter-error)" stroke={errStroke} strokeWidth="1.5" />
      <text x={415} y={574} className="dg-label">Revert to old version</text>
      <text x={415} y={592} className="dg-sublabel">PMs reconstruct updates</text>

      <path d="M 165,92 V 145" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfl-head-main)" />
      <path d="M 165,236 V 274" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfl-head-main)" />
      <path d="M 193,305 H 297" stroke={errEdge} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#pfl-head-error)" />
      <path d="M 165,333 V 397" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfl-head-main)" />
      <path d="M 415,349 V 413" stroke={errEdge} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#pfl-head-error)" />
      <path d="M 387,444 H 288" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfl-head-main)" />
      <path d="M 415,472 V 536" stroke={errEdge} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#pfl-head-error)" />
      <path d="M 300,583 H 15 V 444 H 42" stroke={cauEdge} strokeWidth="2" markerEnd="url(#pfl-head-main)" />
    </svg>
  )
}
