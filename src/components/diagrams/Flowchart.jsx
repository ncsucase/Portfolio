import dagre from '@dagrejs/dagre'
import { diagramStyles, nodeFill, nodeStroke, edgeColor } from './diagramStyles.js'

const RECT_W = 240
const RECT_H_SINGLE = 72
const RECT_H_DOUBLE = 92
const DIAMOND_HALF = 28
const PAD = 32

function nodeSize(node) {
  if (node.type === 'diamond') return { w: DIAMOND_HALF * 2 + 16, h: DIAMOND_HALF * 2 + 16 }
  return { w: RECT_W, h: node.sublabel ? RECT_H_DOUBLE : RECT_H_SINGLE }
}

function buildGraph(nodes, edges, rankdir) {
  const g = new dagre.graphlib.Graph()
  g.setGraph({ rankdir, nodesep: 32, ranksep: 40, marginx: PAD, marginy: PAD })
  g.setDefaultEdgeLabel(() => ({}))
  for (const node of nodes) {
    const { w, h } = nodeSize(node)
    g.setNode(node.id, { width: w, height: h })
  }
  for (const edge of edges) {
    g.setEdge(edge.from, edge.to)
  }
  dagre.layout(g)
  return g
}

function RectNode({ node, gNode }) {
  const fill = nodeFill(node.color)
  const stroke = nodeStroke(node.color)
  const x = gNode.x - RECT_W / 2
  const h = node.sublabel ? RECT_H_DOUBLE : RECT_H_SINGLE
  const y = gNode.y - h / 2
  return (
    <g>
      <rect
        x={x} y={y} width={RECT_W} height={h} rx={8}
        fill={fill}
        stroke={stroke}
        strokeWidth={stroke === 'none' ? 0 : 1.5}
      />
      {node.sublabel ? (
        <>
          <text x={gNode.x} y={gNode.y - 10} className="dg-label">{node.label}</text>
          <text x={gNode.x} y={gNode.y + 10} className="dg-sublabel">{node.sublabel}</text>
        </>
      ) : (
        <text x={gNode.x} y={gNode.y} className="dg-label">{node.label}</text>
      )}
    </g>
  )
}

function DiamondNode({ node, gNode }) {
  const h = DIAMOND_HALF
  const { x, y } = gNode
  const fill = nodeFill(node.color)
  const stroke = nodeStroke(node.color)
  const pts = `${x},${y - h} ${x + h},${y} ${x},${y + h} ${x - h},${y}`
  return (
    <g>
      <polygon
        points={pts}
        fill={fill}
        stroke={stroke}
        strokeWidth={stroke === 'none' ? 0 : 1.5}
        strokeLinejoin="miter"
      />
      {node.label && (
        <text x={x} y={y} className="dg-sublabel">{node.label}</text>
      )}
    </g>
  )
}

function EdgePath({ edge, points, color, dashed, markerId }) {
  if (points.length < 2) return null
  const d = points.reduce((acc, p, i) =>
    i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '')
  const stroke = edgeColor(color)
  return (
    <path
      d={d}
      stroke={stroke}
      strokeWidth={2}
      strokeDasharray={dashed ? '6 4' : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      markerEnd={`url(#${markerId})`}
    />
  )
}

const COLORS = ['error', 'caution', 'success', 'info', 'warning']

function ArrowMarkers({ edges }) {
  const needed = new Set(['default'])
  for (const e of edges) {
    if (e.color && COLORS.includes(e.color)) needed.add(e.color)
  }
  return [...needed].map(c => {
    const id = `dg-arrow-${c}`
    const stroke = c === 'default' ? 'var(--border)' : `var(--color-${c})`
    return (
      <marker key={id} id={id} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <polyline
          points="1 1, 6 4, 1 7"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    )
  })
}

export default function Flowchart({ nodes = [], edges = [], rankdir = 'TB', ...props }) {
  const g = buildGraph(nodes, edges, rankdir)
  const { width, height } = g.graph()

  const nodeMap = {}
  for (const node of nodes) nodeMap[node.id] = node

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ maxWidth: '100%', height: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>{diagramStyles}</style>
        <ArrowMarkers edges={edges} />
      </defs>

      {edges.map((edge, i) => {
        const e = g.edge(edge.from, edge.to)
        if (!e) return null
        const markerId = edge.color && COLORS.includes(edge.color)
          ? `dg-arrow-${edge.color}`
          : 'dg-arrow-default'
        return (
          <EdgePath
            key={i}
            edge={edge}
            points={e.points}
            color={edge.color}
            dashed={edge.style === 'dashed'}
            markerId={markerId}
          />
        )
      })}

      {nodes.map(node => {
        const gNode = g.node(node.id)
        if (!gNode) return null
        return node.type === 'diamond'
          ? <DiamondNode key={node.id} node={node} gNode={gNode} />
          : <RectNode key={node.id} node={node} gNode={gNode} />
      })}
    </svg>
  )
}
