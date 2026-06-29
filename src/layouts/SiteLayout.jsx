import { useState, useEffect } from 'react'
import { useOutlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/AuthContext'
import './SiteLayout.css'

function AnimatedOutlet() {
  const [outlet] = useState(useOutlet())
  return outlet
}

export default function SiteLayout() {
  const { authed } = useAuth()
  const location = useLocation()

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
  }, [theme])

  return (
    <div className="site-layout">
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <main className="site-main page-container">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer authed={authed} />
    </div>
  )
}
