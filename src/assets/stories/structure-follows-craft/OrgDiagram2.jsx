import OrgDiagram from './OrgDiagram.jsx'

export default function OrgDiagram2(props) {
  return (
    <OrgDiagram
      subtitle="Leads feature area, only manages designers of same discipline"
      connectorLabel="PM rotates, designers stay"
      direct={[true, false, false]}
      {...props}
    />
  )
}
