import { Link, useParams } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import { getBestResultByQuiz, isFavorite, toggleFavorite } from '../utils/storage'
import { useEffect, useMemo, useState } from 'react'

export default function QuizDetails() {
  const { id } = useParams()
  const quiz = useMemo(() => quizzes.find((q) => q.id === id), [id])
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    if (quiz) {
      setFavorite(isFavorite(quiz.id))
    }
  }, [quiz])

  if (!quiz) {
    return (
      <section className="section">
        <div className="container narrow">
          <div className="play-card">
            <h2>Квиз не найден</h2>
            <Link to="/quizzes" className="btn btn-primary">
              К списку квизов
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const best = getBestResultByQuiz(quiz.title)

  const handleFavorite = () => {
    const next = toggleFavorite(quiz.id)
    setFavorite(next.includes(quiz.id))
  }

  return (
    <section className="section">
      <div className="container narrow">
        <div className="play-card">
          <div className="quiz-card-top">
            <span className="chip">{quiz.category}</span>
            <span className="chip difficulty">{quiz.difficulty}</span>
            <span className="chip">⭐ {quiz.rating}</span>
            <span className="chip">▶ {quiz.plays}</span>
          </div>

          <h2 className="question-title">{quiz.title}</h2>
          <p>{quiz.longDescription}</p>

          <div className="details-list">
            <p>Время: {quiz.timeLimit} сек</p>
            <p>Количество вопросов: {quiz.questions.length}</p>
          </div>

          <div className="section-head">
            <h3>Примеры вопросов</h3>
          </div>

          <div className="preview-list">
            {quiz.questions.slice(0, 3).map((item, index) => (
              <div className="preview-item" key={index}>
                {index + 1}. {item.question}
              </div>
            ))}
          </div>

          {best && (
            <div className="best-box">
              <strong>Лучший результат:</strong> {best.score}/{best.total} ({best.percentage}%)
            </div>
          )}

          <div className="card-actions">
            <button className="btn btn-secondary full" onClick={handleFavorite}>
              {favorite ? '★ В избранном' : '☆ В избранное'}
            </button>
            <Link to={`/quiz/${quiz.id}`} className="btn btn-primary full">
              Начать квиз
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
