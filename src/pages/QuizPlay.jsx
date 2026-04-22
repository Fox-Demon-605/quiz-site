import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'
import {
  clearQuizProgress,
  getQuizProgress,
  saveQuizProgress,
  saveResult,
} from '../utils/storage'

export default function QuizPlay() {
  const { id } = useParams()
  const navigate = useNavigate()

  const quiz = useMemo(() => quizzes.find((q) => q.id === id), [id])

  const savedProgress = quiz ? getQuizProgress(quiz.id) : null

  const [player, setPlayer] = useState(savedProgress?.player || '')
  const [started, setStarted] = useState(savedProgress?.started || false)
  const [currentQuestion, setCurrentQuestion] = useState(savedProgress?.currentQuestion || 0)
  const [selected, setSelected] = useState(savedProgress?.selected || null)
  const [answers, setAnswers] = useState(savedProgress?.answers || [])
  const [score, setScore] = useState(savedProgress?.score || 0)
  const [timeLeft, setTimeLeft] = useState(savedProgress?.timeLeft || quiz?.timeLimit || 0)

  useEffect(() => {
    if (!quiz) return

    saveQuizProgress(quiz.id, {
      player,
      started,
      currentQuestion,
      selected,
      answers,
      score,
      timeLeft,
    })
  }, [quiz, player, started, currentQuestion, selected, answers, score, timeLeft])

  useEffect(() => {
    if (!started || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [started, timeLeft])

  useEffect(() => {
    if (started && timeLeft <= 0) {
      finishQuiz()
    }
  }, [timeLeft, started])

  if (!quiz) {
    return (
      <section className="section">
        <div className="container">
          <h2>Квиз не найден</h2>
        </div>
      </section>
    )
  }

  const question = quiz.questions[currentQuestion]
  const isLastQuestion = currentQuestion === quiz.questions.length - 1

  const startQuiz = () => {
    if (!player.trim()) {
      alert('Введите имя игрока')
      return
    }
    setStarted(true)
  }

  const handleNext = () => {
    if (!selected) {
      alert('Выбери ответ')
      return
    }

    const isCorrect = selected === question.answer
    const updatedAnswers = [
      ...answers,
      {
        question: question.question,
        selected,
        correct: question.answer,
        isCorrect,
      },
    ]

    const nextScore = isCorrect ? score + 1 : score

    setAnswers(updatedAnswers)
    setScore(nextScore)
    setSelected(null)

    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1)
      return
    }

    const percentage = Math.round((nextScore / quiz.questions.length) * 100)

    saveResult({
      quizId: quiz.id,
      quizTitle: quiz.title,
      player,
      score: nextScore,
      total: quiz.questions.length,
      percentage,
      date: new Date().toISOString(),
      answers: updatedAnswers,
    })

    clearQuizProgress(quiz.id)

    navigate('/results', {
      state: {
        latestResult: {
          quizId: quiz.id,
          quizTitle: quiz.title,
          player,
          score: nextScore,
          total: quiz.questions.length,
          percentage,
          date: new Date().toISOString(),
          answers: updatedAnswers,
        },
      },
    })
  }

  const handleSkip = () => {
    const updatedAnswers = [
      ...answers,
      {
        question: question.question,
        selected: 'Пропущено',
        correct: question.answer,
        isCorrect: false,
      },
    ]

    setAnswers(updatedAnswers)
    setSelected(null)

    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1)
      return
    }

    const percentage = Math.round((score / quiz.questions.length) * 100)

    saveResult({
      quizId: quiz.id,
      quizTitle: quiz.title,
      player,
      score,
      total: quiz.questions.length,
      percentage,
      date: new Date().toISOString(),
      answers: updatedAnswers,
    })

    clearQuizProgress(quiz.id)

    navigate('/results', {
      state: {
        latestResult: {
          quizId: quiz.id,
          quizTitle: quiz.title,
          player,
          score,
          total: quiz.questions.length,
          percentage,
          date: new Date().toISOString(),
          answers: updatedAnswers,
        },
      },
    })
  }

  const finishQuiz = () => {
    const percentage = Math.round((score / quiz.questions.length) * 100)

    saveResult({
      quizId: quiz.id,
      quizTitle: quiz.title,
      player: player || 'Гость',
      score,
      total: quiz.questions.length,
      percentage,
      date: new Date().toISOString(),
      answers,
    })

    clearQuizProgress(quiz.id)

    navigate('/results')
  }

  if (!started) {
    return (
      <section className="section">
        <div className="container narrow">
          <div className="play-card">
            <h2>{quiz.title}</h2>
            <p>{quiz.longDescription}</p>
            <p>Сложность: {quiz.difficulty}</p>
            <p>Рейтинг: {quiz.rating}</p>
            <p>Вопросов: {quiz.questions.length}</p>
            <p>Время: {quiz.timeLimit} сек</p>

            <input
              type="text"
              placeholder="Введите ваше имя"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              className="search-input"
            />

            <button className="btn btn-primary full" onClick={startQuiz}>
              {savedProgress?.started ? 'Продолжить квиз' : 'Начать квиз'}
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container narrow">
        <div className="play-card">
          <div className="play-top">
            <Timer timeLeft={timeLeft} />
            <ProgressBar current={currentQuestion} total={quiz.questions.length} />
          </div>

          <h2 className="question-title">{question.question}</h2>

          <div className="options">
            {question.options.map((option) => (
              <button
                key={option}
                className={`option-btn ${selected === option ? 'selected' : ''}`}
                onClick={() => setSelected(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="card-actions">
            <button className="btn btn-secondary full" onClick={handleSkip}>
              Пропустить
            </button>
            <button className="btn btn-primary full" onClick={handleNext}>
              {isLastQuestion ? 'Завершить' : 'Следующий вопрос'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
