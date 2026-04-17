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
    return localStorage.getItem('theme') ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const [authed, setAuthed] = useState(() => {
    return sessionStorage.getItem('site-authed') === 'true'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
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
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <main className="site-main page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
