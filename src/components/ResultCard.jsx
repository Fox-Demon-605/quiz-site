export default function ResultCard({ result }) {
  const difficultyMap = {
    easy: 'Лёгкий',
    medium: 'Средний',
    hard: 'Сложный',
  }

  return (
    <div className="result-card">
      <h3>{result.quizTitle}</h3>
      <p>Игрок: {result.player}</p>
      <p>Сложность прохождения: {difficultyMap[result.playDifficulty] || 'Лёгкий'}</p>
      <p>Счёт: {result.score}</p>
      <p>Всего вопросов: {result.total}</p>
      <p>Процент: {result.percentage}%</p>
      <p>Дата: {new Date(result.date).toLocaleString()}</p>
    </div>
  )
}

