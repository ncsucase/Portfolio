import './About.css'

export default function About() {
  return (
    <div className="about">
      <title>About — Mikey Cestari</title>

      <header className="about-header">
        <h1 className="about-title">About</h1>
      </header>

      <div className="about-body">
        <section className="about-bio">
          <p>
            I'm Mikey Cestari, a Design Director with experience leading design teams
            across product, brand, and systems work. I'm focused on building cultures
            where design has clear impact — where the work is rigorous, the team is
            trusted, and outcomes are measurable.
          </p>
          <p>
            This site collects stories from that work: the decisions made, the teams
            built, and the results that followed.
          </p>
        </section>

        <section className="about-section">
          <h2>What I do</h2>
          <ul className="about-list">
            <li>Lead and grow design teams</li>
            <li>Build and scale design systems</li>
            <li>Partner with product and engineering on strategy</li>
            <li>Establish design culture and process</li>
          </ul>
        </section>

        <section className="about-section about-contact">
          <h2>Get in touch</h2>
          <div className="about-links">
            <a
              href="https://www.linkedin.com/in/mikeycestari"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
