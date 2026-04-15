import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Header.css'

export default function Header({ theme, onThemeChange }) {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-logo">Mikey Cestari</NavLink>
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          About
        </NavLink>
      </nav>
      <ThemeToggle theme={theme} onChange={onThemeChange} />
    </header>
  )
}
