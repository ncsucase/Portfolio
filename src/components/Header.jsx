import { NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon'
import ThemeToggle from './ThemeToggle'
import './Header.css'

export default function Header({ theme, onThemeChange }) {
  const location = useLocation()
  const isStory = location.pathname.startsWith('/stories/')

  return (
    <header className="site-header">
      <div className="header-inner page-container">
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" className="site-logo">
            {isStory && <Icon name="arrow-left" size="0.9em" />}
            Home
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Work
          </NavLink>
        </nav>
        <ThemeToggle theme={theme} onChange={onThemeChange} />
      </div>
    </header>
  )
}
