import airtable from './airtable.webp'
import sync from './sync.webp'
import rally from './rally.webp'

const svgReset = { width: 'auto', height: 'auto', flexShrink: 0 }

function ArrowRight() {
  return (
    <svg width="44" height="14" viewBox="0 0 44 14" fill="none" aria-hidden="true" style={svgReset}>
      <path d="M1 7 H40 M33 1 L41 7 L33 13" stroke="var(--text-h)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="44" height="14" viewBox="0 0 44 14" fill="none" aria-hidden="true" style={svgReset}>
      <path d="M43 7 H4 M11 1 L3 7 L11 13" stroke="var(--text-h)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg width="14" height="44" viewBox="0 0 14 44" fill="none" aria-hidden="true" style={svgReset}>
      <path d="M7 1 V40 M1 33 L7 41 L13 33" stroke="var(--text-h)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUp() {
  return (
    <svg width="14" height="44" viewBox="0 0 14 44" fill="none" aria-hidden="true" style={svgReset}>
      <path d="M7 43 V4 M1 11 L7 3 L13 11" stroke="var(--text-h)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Card({ title, src, label }) {
  return (
    <div className="sd-card">
      <span className="sd-card-title">{title}</span>
      <img src={src} alt={`${title} logo`} className="sd-card-img" />
      <span className="sd-card-label">{label}</span>
    </div>
  )
}

function HArrows() {
  return (
    <div className="sd-arrows-h">
      <ArrowRight />
      <ArrowLeft />
    </div>
  )
}

function VArrows() {
  return (
    <div className="sd-arrows-v">
      <ArrowDown />
      <ArrowUp />
    </div>
  )
}

export default function SyncDiagram(props) {
  return (
    <>
      <style>{`
        .sd-wrap {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 0;
          width: 100%;
        }
        .sd-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 20px;
          border-radius: 16px;
          background: var(--bg-deep);
          border: 1px solid var(--border);
          flex: 1;
          min-width: 0;
        }
        .sd-card-title {
          font-family: var(--font-heading);
          font-size: var(--heading-3);
          font-weight: 700;
          color: var(--text-h);
          text-align: center;
        }
        .sd-card-img {
          width: 88px;
          height: 88px;
          object-fit: contain;
        }
        .sd-card-label {
          font-family: var(--font-ui);
          font-size: var(--font-size-md);
          color: var(--text-muted);
          text-align: center;
        }
        .sd-arrows-h {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 20px;
          flex-shrink: 0;
        }
        .sd-arrows-v {
          display: none;
        }
        @media (max-width: 600px) {
          .sd-wrap {
            flex-direction: column;
            align-items: stretch;
            max-width: 300px;
            margin: 0 auto;
            overflow: hidden;
          }
          .sd-card .sd-card-img {
            width: 72px;
            height: 72px;
          }
          .sd-arrows-h {
            display: none;
          }
          .sd-arrows-v {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 16px 0;
          }
        }
      `}</style>

      <div className="sd-wrap" role="img" aria-label="Airtable syncs bidirectionally with Rally via a custom sync layer built by Mikey" {...props}>
        <Card title="Airtable" src={airtable} label="Design's home" />
        <HArrows />
        <VArrows />
        <Card title="Sync" src={sync} label="Built by Mikey" />
        <HArrows />
        <VArrows />
        <Card title="Rally" src={rally} label="Unchanged" />
      </div>
    </>
  )
}
