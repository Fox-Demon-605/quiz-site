import Hero from '../components/Hero'
import QuizCard from '../components/QuizCard'
import { quizzes } from '../data/quizzes'
import { getFavorites, getStats } from '../utils/storage'

export default function Home() {
  const featured = quizzes.slice(0, 3)
  const favorites = getFavorites()
  const stats = getStats()

  const favoriteQuizzes = quizzes.filter((quiz) => favorites.includes(quiz.id)).slice(0, 3)

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="stat-card">
              <h3>{quizzes.length}</h3>
              <p>Квизов на платформе</p>
            </div>
            <div className="stat-card">
              <h3>{stats.totalGames}</h3>
              <p>Всего прохождений</p>
            </div>
            <div className="stat-card">
              <h3>{stats.averageScore}%</h3>
              <p>Средний процент правильных ответов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Популярные квизы</h2>
            <p>Выбери лучший квиз и начни прямо сейчас.</p>
          </div>

          <div className="grid">
            {featured.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </div>
      </section>

      {favoriteQuizzes.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>Твоё избранное</h2>
              <p>Быстрый доступ к любимым квизам.</p>
            </div>

            <div className="grid">
              {favoriteQuizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

