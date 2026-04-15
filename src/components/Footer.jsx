import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Mikey Cestari</span>
      <span>Enjoy what you can, automate everything else.</span>
      <a
        href="https://www.linkedin.com/in/mikeycestari"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        LinkedIn
      </a>
    </footer>
  )
}
