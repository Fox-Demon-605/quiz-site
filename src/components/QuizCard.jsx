import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { isFavorite, toggleFavorite, getBestResultByQuiz } from '../utils/storage'

export default function QuizCard({ quiz }) {
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    setFavorite(isFavorite(quiz.id))
  }, [quiz.id])

  const handleFavorite = () => {
    const next = toggleFavorite(quiz.id)
    setFavorite(next.includes(quiz.id))
  }

  const best = getBestResultByQuiz(quiz.title)

  return (
    <div className="quiz-card">
      <div className="quiz-card-top">
        <span className="chip">{quiz.category}</span>
        <span className="chip difficulty">{quiz.difficulty}</span>
        <span className="chip">⭐ {quiz.rating}</span>
      </div>

      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>

      <div className="quiz-meta">
        <span>⏱ {quiz.timeLimit} сек</span>
        <span>❓ {quiz.questions.length} вопросов</span>
        <span>▶ {quiz.plays}</span>
      </div>

      {best && (
        <p className="small-note">
          Лучший результат: {best.score}/{best.total} ({best.percentage}%)
        </p>
      )}

      <div className="card-actions">
        <Link to={`/quiz/${quiz.id}/details`} className="btn btn-secondary full">
          Подробнее
        </Link>
        <Link to={`/quiz/${quiz.id}`} className="btn btn-primary full">
          Играть
        </Link>
        <button className="btn btn-secondary full" onClick={handleFavorite}>
          {favorite ? '★ В избранном' : '☆ В избранное'}
        </button>
      </div>
    </div>
  )
}

