import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          QuizVerse
        </Link>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink to="/quizzes" className="nav-link">
            Квизы
          </NavLink>
          <NavLink to="/results" className="nav-link">
            Результаты
          </NavLink>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link to="/quizzes" className="btn btn-primary">
            Играть
          </Link>
        </div>
      </div>
    </header>
  )
}

