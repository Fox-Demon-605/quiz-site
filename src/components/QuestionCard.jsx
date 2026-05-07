export default function QuestionCard({
  question,
  selected,
  onSelect,
  onSkip,
  onNext,
  isLastQuestion,
}) {
  return (
    <>
      <h2 className="question-title">{question.question}</h2>

      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            className={`option-btn ${selected === option ? 'selected' : ''}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="card-actions">
        <button className="btn btn-secondary full" onClick={onSkip}>
          Пропустить
        </button>
        <button className="btn btn-primary full" onClick={onNext}>
          {isLastQuestion ? 'Завершить' : 'Следующий вопрос'}
        </button>
      </div>
    </>
  )
}
