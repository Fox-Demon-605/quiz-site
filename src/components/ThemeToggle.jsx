import { useEffect, useState } from 'react'

const THEME_KEY = 'quiz_theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button className="btn btn-secondary" onClick={toggleTheme}>
      {theme === 'dark' ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
    </button>
  )
}
