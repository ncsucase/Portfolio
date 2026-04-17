import './Footer.css'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-container">
        <div className="footer-cta">
          <p className="footer-headline">Let's build the future together.</p>
          <p className="footer-tagline">Open for collaboration and design leadership opportunities.</p>
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
            href="mailto:ncsucase@gmail.com"
            className="footer-link"
          >
            {/* <span className="footer-link-icon">@</span> */}
            <Icon name="email" />
            ncsucase@gmail.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mikey Cestari</span>
      </div>
    </footer>
  )
}
