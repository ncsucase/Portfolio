const sharedStyle = `
  .card-title {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.02em;
    fill: var(--text-on-success, #000);
    dominant-baseline: central;
  }
  .card-title.wholesale {
    fill: var(--text-on-caution, #000);
  }
  .annotation {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: 24px;
    fill: var(--accent, rgb(175, 82, 222));
  }
  .chart-title {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.02em;
    fill: var(--text-h, #000);
  }
  .divider { stroke: var(--border, rgba(0, 0, 0, 0.2)); }
  @media (prefers-color-scheme: dark) {
    .annotation  { fill: var(--accent, rgb(191, 90, 242)); }
    .chart-title { fill: var(--text-h, #f3f4f6); }
    .divider     { stroke: var(--border, rgba(255, 255, 255, 0.25)); }
  }
`

const styleH = sharedStyle + `
  @media (max-width: 600px) { #coalition-h { display: none; } }
`

const styleV = sharedStyle + `
  @media (min-width: 601px) { #coalition-v { display: none; } }
`

const arrowMarker = (id) => (
  <marker id={id} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="var(--accent, rgb(175, 82, 222))" />
  </marker>
)

export default function CoalitionDiagram(props) {
  return (
    <>
      {/* ── Horizontal layout ── */}
      <svg id="coalition-h" width="1269" height="358" viewBox="0 0 1269 358" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>{arrowMarker('arrow-h')}</defs>
        <style>{styleH}</style>

        <g transform="rotate(-13, 130, 167)">
          <rect x="28" y="65" width="204" height="204" rx="24" fill="var(--color-caution, #FFCC00)"/>
          <text x="130" y="167" textAnchor="middle" className="card-title wholesale">Wholesale</text>
        </g>

        <rect x="257" y="67" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="357" y="150" textAnchor="middle" className="card-title">Design</text>
        <text x="357" y="184" textAnchor="middle" className="card-title">System</text>

        <rect x="469" y="67" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="569" y="167" textAnchor="middle" className="card-title">Commerce</text>

        <rect x="681" y="67" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="781" y="150" textAnchor="middle" className="card-title">Public</text>
        <text x="781" y="184" textAnchor="middle" className="card-title">Sites</text>

        <rect x="893" y="67" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="993" y="167" textAnchor="middle" className="card-title">Retail</text>

        <text x="1040" y="24" textAnchor="middle" className="annotation">my team</text>
        <path d="M 1040 28 L 1000 72"
              stroke="var(--accent, rgb(175, 82, 222))" strokeWidth="2"
              fill="none" strokeLinecap="round" markerEnd="url(#arrow-h)"/>

        <line x1="60" y1="285" x2="1110" y2="285" className="divider" strokeWidth="1.5"/>
        <text x="634" y="330" textAnchor="middle" className="chart-title">Coalition to redesign Truist digital</text>
      </svg>

      {/* ── Vertical layout ── */}
      <svg id="coalition-v" width="640" height="1170" viewBox="0 0 640 1170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>{arrowMarker('arrow-v')}</defs>
        <style>{styleV}</style>

        <g transform="rotate(-13, 170, 150)">
          <rect x="68" y="48" width="204" height="204" rx="24" fill="var(--color-caution, #FFCC00)"/>
          <text x="170" y="150" textAnchor="middle" className="card-title wholesale">Wholesale</text>
        </g>

        <rect x="200" y="250" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="300" y="333" textAnchor="middle" className="card-title">Design</text>
        <text x="300" y="367" textAnchor="middle" className="card-title">System</text>

        <rect x="200" y="462" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="300" y="562" textAnchor="middle" className="card-title">Commerce</text>

        <rect x="200" y="674" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="300" y="757" textAnchor="middle" className="card-title">Public</text>
        <text x="300" y="791" textAnchor="middle" className="card-title">Sites</text>

        <rect x="200" y="886" width="200" height="200" rx="24" fill="var(--color-success, #34C759)"/>
        <text x="300" y="986" textAnchor="middle" className="card-title">Retail</text>

        <text x="110" y="975" textAnchor="middle" className="annotation">my team</text>
        <path d="M 168 975 L 200 986"
              stroke="var(--accent, rgb(175, 82, 222))" strokeWidth="2"
              fill="none" strokeLinecap="round" markerEnd="url(#arrow-v)"/>

        <line x1="48" y1="1100" x2="552" y2="1100" className="divider" strokeWidth="1.5"/>
        <text x="320" y="1145" textAnchor="middle" className="chart-title">Coalition to redesign Truist digital</text>
      </svg>

    </>
  )
}
