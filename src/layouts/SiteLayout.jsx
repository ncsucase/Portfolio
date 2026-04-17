import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './SiteLayout.css'
import PasswordGate from '../components/PasswordGate'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function SiteLayout() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ?? 'system'
  })

  const [authed, setAuthed] = useState(() => {
    return sessionStorage.getItem('site-authed') === 'true'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.remove('dark', 'light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  if (!authed) {
    return (
      <PasswordGate onSuccess={() => {
        sessionStorage.setItem('site-authed', 'true')
        setAuthed(true)
      }} />
    )
  }

  return (
    <div className="site-layout">
      <ScrollToTop />
      <Header theme={theme} onThemeChange={setTheme} />
      <main className="site-main page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
