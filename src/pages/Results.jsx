import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ResultCard from '../components/ResultCard'
import { clearResults, getResults, getStats } from '../utils/storage'

export default function Results() {
  const location = useLocation()
  const latestResult = location.state?.latestResult || null

  const [refresh, setRefresh] = useState(false)
  const results = useMemo(() => getResults().reverse(), [refresh])
  const stats = getStats()

  const handleClear = () => {
    clearResults()
    setRefresh((prev) => !prev)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Результаты</h2>
          <p>История всех пройденных квизов.</p>
        </div>

        <div className="grid">
          <div className="stat-card">
            <h3>{stats.totalGames}</h3>
            <p>Всего игр</p>
          </div>
          <div className="stat-card">
            <h3>{stats.totalCorrect}</h3>
            <p>Правильных ответов</p>
          </div>
          <div className="stat-card">
            <h3>{stats.averageScore}%</h3>
            <p>Средний результат</p>
          </div>
        </div>

        {results.length > 0 && (
          <div className="results-actions">
            <button className="btn btn-secondary" onClick={handleClear}>
              Очистить историю
            </button>
          </div>
        )}

        {latestResult && (
          <div className="latest-result-box">
            <h3>Последний результат</h3>
            <p>
              <strong>{latestResult.player}</strong>, квиз{' '}
              <strong>{latestResult.quizTitle}</strong>
            </p>
            <p>
              Счёт: {latestResult.score}/{latestResult.total} —{' '}
              {latestResult.percentage}%
            </p>

            {latestResult.answers?.length > 0 && (
              <div className="review-list">
                {latestResult.answers.map((item, index) => (
                  <div
                    key={index}
                    className={`review-item ${item.isCorrect ? 'correct' : 'wrong'}`}
                  >
                    <p>
                      <strong>{index + 1}. {item.question}</strong>
                    </p>
                    <p>Твой ответ: {item.selected}</p>
                    <p>Правильный ответ: {item.correct}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid">
          {results.length > 0 ? (
            results.map((result, index) => (
              <ResultCard key={`${result.date}-${index}`} result={result} />
            ))
          ) : (
            <p className="empty-text">Пока нет результатов.</p>
          )}
        </div>
      </div>
    </section>
  )
}

