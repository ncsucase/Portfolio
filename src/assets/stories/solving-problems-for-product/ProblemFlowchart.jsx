export default function ProblemFlowchart(props) {
  return (
    <>
      <style>{`
        .pf-large { display: block; }
        .pf-small { display: none; }
        @media (max-width: 600px) {
          .pf-large { display: none; }
          .pf-small { display: block; }
        }
      `}</style>

      {/* ── LARGE VIEWPORT (> 600px) ── */}
      <div className="pf-large">
      <svg
        viewBox="14 19 517 609"
        width="517"
        height="609"
        style={{ maxWidth: '100%', height: 'auto' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flowchart showing the chaotic manual reporting process"
        {...props}
      >
        <defs>
          <style>{`
            .pf-main  { fill: var(--bg-caution);  stroke: var(--color-caution); stroke-width: 1.5; }
            .pf-error { fill: var(--bg-error);    stroke: var(--color-error);   stroke-width: 1.5; }
            .pf-title {
              font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
              font-size: 15px;
              font-weight: 600;
              fill: var(--text-h);
              text-anchor: middle;
              dominant-baseline: middle;
            }
            .pf-sub {
              font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
              font-size: 12px;
              fill: var(--text-muted);
              text-anchor: middle;
              dominant-baseline: middle;
            }
            .pfl-line-main  { stroke: var(--color-caution); stroke-width: 2; marker-end: url(#pfl-head-main); }
            .pfl-line-error { stroke: var(--color-error);   stroke-width: 2; stroke-dasharray: 6 4; marker-end: url(#pfl-head-error); }
          `}</style>
          <marker id="pfl-head-main" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0,0 L 10,3.5 L 0,7 Z" style={{ fill: 'var(--color-caution)' }} />
          </marker>
          <marker id="pfl-head-error" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0,0 L 10,3.5 L 0,7 Z" style={{ fill: 'var(--color-error)' }} />
          </marker>
        </defs>

        <rect x={45} y={20} width={240} height={72} rx={6} className="pf-main" />
        <text x={165} y={56} className="pf-title">Open Excel + Rally</text>

        <rect x={45} y={148} width={240} height={88} rx={6} className="pf-main" />
        <text x={165} y={183} className="pf-title">Check each Feature</text>
        <text x={165} y={201} className="pf-sub">~400 items, manually</text>

        <polygon points="165,277 193,305 165,333 137,305" className="pf-main" strokeLinejoin="miter" />

        <rect x={300} y={261} width={230} height={88} rx={6} className="pf-error" />
        <text x={415} y={296} className="pf-title">Fix broken formulas</text>
        <text x={415} y={314} className="pf-sub">Other users overwrote</text>

        <rect x={45} y={400} width={240} height={88} rx={6} className="pf-main" />
        <text x={165} y={435} className="pf-title">Update records</text>
        <text x={165} y={453} className="pf-sub">By hand, hope it holds</text>

        <polygon points="415,416 443,444 415,472 387,444" className="pf-error" strokeLinejoin="miter" />

        <rect x={300} y={539} width={230} height={88} rx={6} className="pf-error" />
        <text x={415} y={574} className="pf-title">Revert to old version</text>
        <text x={415} y={592} className="pf-sub">PMs reconstruct updates</text>

        <path d="M 165,92 V 145" className="pfl-line-main" />
        <path d="M 165,236 V 274" className="pfl-line-main" />
        <path d="M 193,305 H 297" className="pfl-line-error" />
        <path d="M 165,333 V 397" className="pfl-line-main" />
        <path d="M 415,349 V 413" className="pfl-line-error" />
        <path d="M 387,444 H 288" className="pfl-line-main" />
        <path d="M 415,472 V 536" className="pfl-line-error" />
        <path d="M 300,583 H 15 V 444 H 42" className="pfl-line-main" />
      </svg>
      </div>

      {/* ── SMALL VIEWPORT (≤ 600px) ── */}
      {/* Right col shifts left (x=220, w=185) so the return arrow from        */}
      {/* "Revert" only routes left to x=112 — never past the left box edge.   */}
      <div className="pf-small">
      <svg
        viewBox="19 19 388 610"
        width="388"
        height="610"
        style={{ maxWidth: '100%', height: 'auto' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flowchart showing the chaotic manual reporting process"
        {...props}
      >
        <defs>
          <style>{`
            .pf-main  { fill: var(--bg-caution);  stroke: var(--color-caution); stroke-width: 1.5; }
            .pf-error { fill: var(--bg-error);    stroke: var(--color-error);   stroke-width: 1.5; }
            .pf-title {
              font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
              font-size: 15px;
              font-weight: 600;
              fill: var(--text-h);
              text-anchor: middle;
              dominant-baseline: middle;
            }
            .pf-sub {
              font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
              font-size: 12px;
              fill: var(--text-muted);
              text-anchor: middle;
              dominant-baseline: middle;
            }
            .pfs-line-main  { stroke: var(--color-caution); stroke-width: 2; marker-end: url(#pfs-head-main); }
            .pfs-line-error { stroke: var(--color-error);   stroke-width: 2; stroke-dasharray: 6 4; marker-end: url(#pfs-head-error); }
          `}</style>
          <marker id="pfs-head-main" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0,0 L 10,3.5 L 0,7 Z" style={{ fill: 'var(--color-caution)' }} />
          </marker>
          <marker id="pfs-head-error" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0,0 L 10,3.5 L 0,7 Z" style={{ fill: 'var(--color-error)' }} />
          </marker>
        </defs>

        {/* Left col: x=20, w=185, center x=112. Right col: x=220, w=185, center x=312. */}

        <rect x={20} y={20} width={185} height={72} rx={6} className="pf-main" />
        <text x={112} y={56} className="pf-title">Open Excel + Rally</text>

        <rect x={20} y={148} width={185} height={88} rx={6} className="pf-main" />
        <text x={112} y={183} className="pf-title">Check each Feature</text>
        <text x={112} y={201} className="pf-sub">~400 items, manually</text>

        <polygon points="112,280 137,305 112,330 87,305" className="pf-main" strokeLinejoin="miter" />

        <rect x={220} y={261} width={185} height={88} rx={6} className="pf-error" />
        <text x={312} y={296} className="pf-title">Fix broken formulas</text>
        <text x={312} y={314} className="pf-sub">Other users overwrote</text>

        <rect x={20} y={400} width={185} height={88} rx={6} className="pf-main" />
        <text x={112} y={435} className="pf-title">Update records</text>
        <text x={112} y={453} className="pf-sub">By hand, hope it holds</text>

        <polygon points="312,419 337,444 312,469 287,444" className="pf-error" strokeLinejoin="miter" />

        <rect x={220} y={539} width={185} height={88} rx={6} className="pf-error" />
        <text x={312} y={574} className="pf-title">Revert to old version</text>
        <text x={312} y={592} className="pf-sub">PMs reconstruct updates</text>

        <path d="M 112,92 V 145" className="pfs-line-main" />
        <path d="M 112,236 V 277" className="pfs-line-main" />
        <path d="M 137,305 H 217" className="pfs-line-error" />
        <path d="M 112,330 V 397" className="pfs-line-main" />
        <path d="M 312,349 V 416" className="pfs-line-error" />
        <path d="M 287,444 H 208" className="pfs-line-main" />
        <path d="M 312,469 V 536" className="pfs-line-error" />
        {/* Revert → Update records: left to col center x=112, then up into L3 bottom */}
        <path d="M 220,583 H 112 V 485" className="pfs-line-main" />
      </svg>
      </div>
    </>
  )
}
