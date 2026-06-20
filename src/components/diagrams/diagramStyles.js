export const diagramStyles = `
  .dg-title {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-size: 14px;
    font-weight: 700;
    fill: var(--text);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .dg-title-sm {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-size: 12px;
    font-weight: 700;
    fill: var(--text);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .dg-sub {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-size: 11px;
    font-weight: 400;
    fill: var(--text-muted);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .dg-label {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-size: var(--dg-label-size, var(--font-size-lg));
    font-weight: 700;
    fill: var(--text);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .dg-sublabel {
    font-family: var(--font-heading, 'Epilogue', system-ui, sans-serif);
    font-size: var(--dg-sublabel-size, var(--font-size-md));
    font-weight: 400;
    fill: var(--text-muted);
    text-anchor: middle;
    dominant-baseline: central;
  }
  .dg-conn {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-size: 11px;
    font-weight: 400;
    fill: var(--text-muted);
    text-anchor: middle;
    dominant-baseline: central;
    font-style: italic;
  }
  .dg-micro {
    font-family: var(--font-ui, 'Inter', system-ui, sans-serif);
    font-size: 10px;
    font-weight: 400;
    fill: var(--text-muted);
    text-anchor: middle;
    dominant-baseline: central;
    font-style: italic;
  }
`

export function nodeFill(color) {
  if (!color) return 'var(--bg-deep)'
  return `var(--bg-${color})`
}

export function nodeStroke(color) {
  if (!color) return 'none'
  return `var(--color-${color})`
}

export function edgeColor(color) {
  if (!color) return 'var(--border)'
  return `var(--color-${color})`
}
