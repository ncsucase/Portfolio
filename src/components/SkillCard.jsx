import './SkillCard.css'

export default function SkillCard({ image: Image, label }) {
  return (
    <div className="skill-card">
      <div className="skill-card-image">
        {Image && <Image aria-hidden="true" />}
      </div>
      <p className="skill-card-label">{label}</p>
    </div>
  )
}
