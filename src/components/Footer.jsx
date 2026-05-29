import './Footer.css'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-container">
        <div className="footer-cta">
          <p className="footer-headline">Good design leadership is hard to find.</p>
          <p className="footer-tagline">I'm available.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mikeycestari"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <Icon name="linkedin" /> 
            /mikeycestari
          </a>
          <a
            href="mailto:design@mikeycestari.com"
            className="footer-link"
          >
            {/* <span className="footer-link-icon">@</span> */}
            <Icon name="email" />
            design@mikeycestari.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mikey Cestari</span>
      </div>
    </footer>
  )
}
