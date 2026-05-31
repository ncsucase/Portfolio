import headshot from '../assets/heashot.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <title>Mikey Cestari | Design Director</title>

      <section className="home-bio">
        <div className="home-bio-text">
          <span className="home-bio-eyebrow">I'm</span>
          <h1>Mikey Cestari</h1>
          <span className="home-bio-role">Design Director</span>
        </div>
        <p className="home-bio-description">My background is in behavioral science, not fine arts. The difference shows up in how I think about problems, evidence, and what design is actually for.</p>
        <div className="home-bio-photo">
          <img src={headshot} alt="Mikey Cestari" />
        </div>
      </section>

      <section className="home-stats home-section--wide">
        <div className="home-stats-grid">
          {[
            { value: '40+',  label: 'Team of designers' },
            { value: '400+', label: 'Features annually' },
            { value: '7M+',  label: 'Active users' },
            { value: '+13%', label: 'VOC satisfaction' },
          ].map(stat => (
            <div key={stat.label} className="home-stat">
              <span className="home-stat-value">{stat.value}</span>
              <span className="home-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-section--wide">
        <div className="home-about">
          <div className="home-about-col">
            <h2>About Me</h2>
            <div className="home-about-prose">
              <p>I grew into this role through one of the most complex integration challenges in banking history: the BB&T and SunTrust merger that created Truist. I've never stopped approaching problems the way my human factors training taught me to: </p>
              <ol>
                <li>Identify what's actually broken.</li>
                <li>Build something testable.</li>
                <li>Let the evidence decide.</li>
              </ol>
              <p>Today that means leading a 44-person design organization building authenticated banking experiences for over 7 million people managing real money, real decisions, and real stress.</p>
            </div>
          </div>
          <div className="home-about-col home-skills-container">
            <h2>Philosophy</h2>
            <p>Design is not a visual discipline and design thinking isn't just for designers. Design applies to anything where humans are involved.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
