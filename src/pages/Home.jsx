import headshot from '../assets/home/Profile-transparent-background.png'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import './Home.css'

const skills = [
  { label: 'Lead and grow design orgs across UI, UX, and content disciplines', icon: 'skill-org' },
  { label: 'Build workflow systems and tooling that give design teams operational leverage', icon: 'skill-gears' },
  { label: 'Work across org boundaries to solve shared problems', icon: 'skill-venn' },
  { label: 'Structure teams for craft quality, not managerial convenience', icon: 'skill-compass' },
  { label: 'Make design impact measurable in terms engineering and product respect', icon: 'skill-chart' },
]

export default function Home() {
  return (
    <div className="home">
      <title>Mikey Cestari | Design Director</title>

      <section className="home-bio">
        <h1>Mikey Cestari</h1>
        <div className="home-bio-photo">
          <img src={headshot} alt="Mikey Cestari" />
        </div>
        <div className="home-bio-card">
          <p>Design leadership is a craft, not a rank.</p>
          <p>I lead by knowing the work, making decisions with evidence, and partnering across the org to make better outcomes for everyone.</p>
        </div>
      </section>

      <section className="home-section home-section--wide">
        <div className="home-about">
          <div className="home-about-col">
            <h2>About Me</h2>
            <div className="home-about-prose">
              <p>I'm a Design Director leading design at Truist's authenticated digital banking organization — a 44-person team spanning UI, UX, and Content design. I focus on building the structures, processes, and systems that let design teams do their best work and make their impact legible to the people around them.</p>
              <p>I grew into this role through one of the most complex integration challenges in banking history: the BB&T and SunTrust merger that created Truist. Navigating that — two cultures, two legacy systems, two design organizations finding common ground — shaped how I think about ambiguity, alignment, and what it actually takes to build something durable inside a large institution.</p>
              <p>Today my team designs the authenticated web and mobile experiences for Truist's consumer, wealth, and small business clients — over 7 million people managing real money, real decisions, and real stress. That scale makes craft non-negotiable and makes getting the organizational conditions right a business problem, not just a design management one.</p>
              <p>The stories on this site share a common thread: a problem others had accepted, a solution worth building, and results that measured up.</p>
            </div>
          </div>
          <div className="home-about-col home-skills-container">
            <h2>What I Do</h2>
            <ul className="home-about-skills">
              {skills.map((skill, i) => (
                <li key={i}>
                  <Icon name={skill.icon} size="1.5em" color="var(--accent)" />
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CTA to="/work">
          Read the stories
          <Icon name="arrow-right" />
        </CTA>
      </section>

    </div>
  )
}
