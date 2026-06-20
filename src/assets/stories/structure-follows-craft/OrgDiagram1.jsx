import OrgDiagram from '../../../components/diagrams/OrgDiagram.jsx'

export default function OrgDiagram1(props) {
  return (
    <OrgDiagram
      subtitle="Leads feature area, manages all designers"
      connectorLabel="PM and designers rotate"
      direct={[true, true, true]}
      {...props}
    />
  )
}
