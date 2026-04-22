import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="badge">🔥 Лучшая платформа для квизов</p>
          <h1>Проверь знания. Соревнуйся. Побеждай.</h1>
          <p>
            QuizVerse — это современный сайт для прохождения увлекательных
            квизов по HTML, CSS, JavaScript, React и другим темам.
          </p>
          <div className="hero-actions">
            <Link to="/quizzes" className="btn btn-primary">
              Начать играть
            </Link>
            <Link to="/results" className="btn btn-secondary">
              Мои результаты
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Будущих квизов</p>
          </div>
          <div className="stat-card">
            <h3>4</h3>
            <p>Категории уже сейчас</p>
          </div>
          <div className="stat-card">
            <h3>∞</h3>
            <p>Возможностей для роста</p>
          </div>
        </div>
      </div>
    </section>
  )
}
