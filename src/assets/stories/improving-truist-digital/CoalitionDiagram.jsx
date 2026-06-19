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
  @media (prefers-color-scheme: dark) {
    .chart-title { fill: var(--text-h, #f3f4f6); }
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
        <defs>
          <radialGradient id="card-grad-info" cx="0" cy="0" r="1"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(1 1) rotate(-135) scale(1.8)">
            <stop stopColor="var(--color-info)"/>
            <stop offset="1" stopColor="var(--color-success)"/>
          </radialGradient>
          <radialGradient id="card-grad-caution" cx="0" cy="0" r="1"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(1 1) rotate(-135) scale(1.8)">
            <stop stopColor="var(--color-caution)"/>
            <stop offset="1" stopColor="var(--color-warning)"/>
          </radialGradient>
          <filter id="card-filter-info" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.780 0 0 0 0 0.745 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
          </filter>
          <filter id="card-filter-caution" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.800 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
          </filter>
          <filter id="lineShadow" x="59" y="280" width="1052" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1" dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-1" dy="-1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
          </filter>
        </defs>
        <style>{styleH}</style>

        <g transform="rotate(-13, 130, 167)">
          <rect x="28" y="65" width="204" height="204" rx="24" fill="url(#card-grad-caution)" filter="url(#card-filter-caution)"/>
          <text x="130" y="167" textAnchor="middle" className="card-title wholesale">Wholesale</text>
        </g>

        <rect x="257" y="67" width="200" height="200" rx="24" fill="url(#card-grad-info)" filter="url(#card-filter-info)"/>
        <text x="357" y="150" textAnchor="middle" className="card-title">Design</text>
        <text x="357" y="184" textAnchor="middle" className="card-title">System</text>

        <rect x="469" y="67" width="200" height="200" rx="24" fill="url(#card-grad-info)" filter="url(#card-filter-info)"/>
        <text x="569" y="167" textAnchor="middle" className="card-title">Commerce</text>

        <rect x="681" y="67" width="200" height="200" rx="24" fill="url(#card-grad-info)" filter="url(#card-filter-info)"/>
        <text x="781" y="150" textAnchor="middle" className="card-title">Public</text>
        <text x="781" y="184" textAnchor="middle" className="card-title">Sites</text>

        <rect x="893" y="67" width="200" height="200" rx="24" fill="url(#card-grad-info)" filter="url(#card-filter-info)"/>
        <text x="993" y="155" textAnchor="middle" className="card-title">Retail</text>
        <text x="993" y="187" textAnchor="middle" className="card-subtitle">My team</text>

        <rect x="60" y="281" width="1050" height="8" rx="4" fill="#E7EBEF" filter="url(#lineShadow)"/>
        <text x="585" y="330" textAnchor="middle" className="chart-title">Coalition to redesign Truist digital</text>
      </svg>

      {/* ── Vertical layout ── */}
      <svg id="coalition-v" width="640" height="1170" viewBox="0 0 640 1170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="card-grad-info-v" cx="0" cy="0" r="1"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(1 1) rotate(-135) scale(1.8)">
            <stop stopColor="var(--color-info)"/>
            <stop offset="1" stopColor="var(--color-success)"/>
          </radialGradient>
          <radialGradient id="card-grad-caution-v" cx="0" cy="0" r="1"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(1 1) rotate(-135) scale(1.8)">
            <stop stopColor="var(--color-caution)"/>
            <stop offset="1" stopColor="var(--color-warning)"/>
          </radialGradient>
          <filter id="card-filter-info-v" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.780 0 0 0 0 0.745 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
          </filter>
          <filter id="card-filter-caution-v" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.800 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
          </filter>
          <filter id="lineShadow-v" x="47" y="1095" width="506" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1" dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-1" dy="-1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
          </filter>
        </defs>
        <style>{styleV}</style>

        <g transform="rotate(-13, 170, 150)">
          <rect x="68" y="48" width="204" height="204" rx="24" fill="url(#card-grad-caution-v)" filter="url(#card-filter-caution-v)"/>
          <text x="170" y="150" textAnchor="middle" className="card-title wholesale">Wholesale</text>
        </g>

        <rect x="200" y="250" width="200" height="200" rx="24" fill="url(#card-grad-info-v)" filter="url(#card-filter-info-v)"/>
        <text x="300" y="333" textAnchor="middle" className="card-title">Design</text>
        <text x="300" y="367" textAnchor="middle" className="card-title">System</text>

        <rect x="200" y="462" width="200" height="200" rx="24" fill="url(#card-grad-info-v)" filter="url(#card-filter-info-v)"/>
        <text x="300" y="562" textAnchor="middle" className="card-title">Commerce</text>

        <rect x="200" y="674" width="200" height="200" rx="24" fill="url(#card-grad-info-v)" filter="url(#card-filter-info-v)"/>
        <text x="300" y="757" textAnchor="middle" className="card-title">Public</text>
        <text x="300" y="791" textAnchor="middle" className="card-title">Sites</text>

        <rect x="200" y="886" width="200" height="200" rx="24" fill="url(#card-grad-info-v)" filter="url(#card-filter-info-v)"/>
        <text x="300" y="976" textAnchor="middle" className="card-title">Retail</text>
        <text x="300" y="1006" textAnchor="middle" className="card-subtitle">My team</text>

        <rect x="48" y="1096" width="504" height="8" rx="4" fill="#E7EBEF" filter="url(#lineShadow-v)"/>
        <text x="295" y="1145" textAnchor="middle" className="chart-title">Coalition to redesign Truist digital</text>
      </svg>

    </>
  )
}
