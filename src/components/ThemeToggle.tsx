import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check initial state from HTML or localStorage
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('theme')
        if (stored) return stored === 'dark'
        // Check if HTML already has dark class
        return document.documentElement.classList.contains('dark')
      } catch {
        return document.documentElement.classList.contains('dark')
      }
    }
    return true
  })

  useEffect(() => {
    // Sync with HTML initial state
    const isCurrentlyDark = document.documentElement.classList.contains('dark')
    if (isCurrentlyDark !== isDark) {
      setIsDark(isCurrentlyDark)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }, [isDark])

  return (
    <motion.button
      aria-label="Toggle dark mode"
      onClick={() => setIsDark((v) => !v)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm p-2 text-sm shadow-sm transition-all hover:bg-gray-50 dark:border-blue-500/30 dark:bg-blue-900/20 dark:hover:bg-blue-900/30"
    >
      {isDark ? (
        <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300">
          <SunIcon /> <span className="hidden md:inline">Light</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2 text-gray-700 dark:text-blue-300">
          <MoonIcon /> <span className="hidden md:inline">Dark</span>
        </span>
      )}
    </motion.button>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}


