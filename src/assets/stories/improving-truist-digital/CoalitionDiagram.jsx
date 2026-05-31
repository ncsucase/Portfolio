const sharedStyle = `
  .card-title {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.02em;
    fill: var(--text-on-success, #000);
    dominant-baseline: central;
  }
  .card-subtitle {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-weight: 400;
    font-size: 22px;
    fill: var(--text-on-success, #000);
    dominant-baseline: central;
  }
  .card-title.wholesale {
    fill: var(--text-on-caution, #000);
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

export default function CoalitionDiagram(props) {
  return (
    <>
      {/* ── Horizontal layout ── */}
      <svg id="coalition-h" width="1269" height="315" viewBox="0 40 1269 315" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <style>{styleH}</style>

        <g transform="rotate(-13, 130, 167)">
          <rect x="28" y="65" width="204" height="204" rx="24" fill="var(--color-caution, #FFCC00)"/>
          <text x="130" y="167" textAnchor="middle" className="card-title wholesale">Wholesale</text>
        </g>

        <rect x="257" y="67" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="357" y="150" textAnchor="middle" className="card-title">Design</text>
        <text x="357" y="184" textAnchor="middle" className="card-title">System</text>

        <rect x="469" y="67" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="569" y="167" textAnchor="middle" className="card-title">Commerce</text>

        <rect x="681" y="67" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="781" y="150" textAnchor="middle" className="card-title">Public</text>
        <text x="781" y="184" textAnchor="middle" className="card-title">Sites</text>

        <rect x="893" y="67" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="993" y="155" textAnchor="middle" className="card-title">Retail</text>
        <text x="993" y="187" textAnchor="middle" className="card-subtitle">My team</text>

        <line x1="60" y1="285" x2="1110" y2="285" className="divider" strokeWidth="1.5"/>
        <text x="634" y="330" textAnchor="middle" className="chart-title">Coalition to redesign Truist digital</text>
      </svg>

      {/* ── Vertical layout ── */}
      <svg id="coalition-v" width="640" height="1170" viewBox="0 0 640 1170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{styleV}</style>

        <g transform="rotate(-13, 170, 150)">
          <rect x="68" y="48" width="204" height="204" rx="24" fill="var(--color-caution, #FFCC00)"/>
          <text x="170" y="150" textAnchor="middle" className="card-title wholesale">Wholesale</text>
        </g>

        <rect x="200" y="250" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="300" y="333" textAnchor="middle" className="card-title">Design</text>
        <text x="300" y="367" textAnchor="middle" className="card-title">System</text>

        <rect x="200" y="462" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="300" y="562" textAnchor="middle" className="card-title">Commerce</text>

        <rect x="200" y="674" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="300" y="757" textAnchor="middle" className="card-title">Public</text>
        <text x="300" y="791" textAnchor="middle" className="card-title">Sites</text>

        <rect x="200" y="886" width="200" height="200" rx="24" fill="var(--color-info, #00C7BE)"/>
        <text x="300" y="976" textAnchor="middle" className="card-title">Retail</text>
        <text x="300" y="1006" textAnchor="middle" className="card-subtitle">My team</text>

        <line x1="48" y1="1100" x2="552" y2="1100" className="divider" strokeWidth="1.5"/>
        <text x="320" y="1145" textAnchor="middle" className="chart-title">Coalition to redesign Truist digital</text>
      </svg>

    </>
  )
}
