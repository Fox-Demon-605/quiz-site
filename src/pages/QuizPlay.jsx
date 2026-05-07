import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'
import QuestionCard from '../components/QuestionCard'
import {
  clearQuizProgress,
  getQuizProgress,
  saveQuizProgress,
  saveResult,
} from '../utils/storage'

const playLevels = {
  easy: {
    label: 'Лёгкий',
    count: 5,
  },
  medium: {
    label: 'Средний',
    count: 10,
  },
  hard: {
    label: 'Сложный',
    count: 15,
  },
}

function shuffleArray(array) {
  const copy = [...array]

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

export default function QuizPlay() {
  const { id } = useParams()
  const navigate = useNavigate()

  const quiz = useMemo(() => quizzes.find((q) => q.id === id), [id])

  const [player, setPlayer] = useState('')
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [hasSavedProgress, setHasSavedProgress] = useState(false)
  const [playDifficulty, setPlayDifficulty] = useState('easy')
  const [activeQuestions, setActiveQuestions] = useState([])

  useEffect(() => {
    if (!quiz) return

    const savedProgress = getQuizProgress(quiz.id)

    if (savedProgress?.started) {
      setHasSavedProgress(true)
      setPlayer(savedProgress.player || '')
      setStarted(true)
      setCurrentQuestion(savedProgress.currentQuestion || 0)
      setSelected(savedProgress.selected || null)
      setAnswers(savedProgress.answers || [])
      setScore(savedProgress.score || 0)
      setTimeLeft(savedProgress.timeLeft ?? quiz.timeLimit)
      setPlayDifficulty(savedProgress.playDifficulty || 'easy')
      setActiveQuestions(savedProgress.activeQuestions || [])
    } else {
      setHasSavedProgress(false)
      setPlayer('')
      setStarted(false)
      setCurrentQuestion(0)
      setSelected(null)
      setAnswers([])
      setScore(0)
      setTimeLeft(quiz.timeLimit)
      setPlayDifficulty('easy')
      setActiveQuestions([])
    }
  }, [quiz, id])

  useEffect(() => {
    if (!quiz || !started) return

    saveQuizProgress(quiz.id, {
      player,
      started,
      currentQuestion,
      selected,
      answers,
      score,
      timeLeft,
      playDifficulty,
      activeQuestions,
    })
  }, [
    quiz,
    player,
    started,
    currentQuestion,
    selected,
    answers,
    score,
    timeLeft,
    playDifficulty,
    activeQuestions,
  ])

  useEffect(() => {
    if (!started || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [started, timeLeft])

  if (!quiz) {
    return (
      <section className="section">
        <div className="container">
          <h2>Квиз не найден</h2>
        </div>
      </section>
    )
  }

  const questionsToUse = activeQuestions.length > 0 ? activeQuestions : []
  const question = questionsToUse[currentQuestion]
  const isLastQuestion = currentQuestion === questionsToUse.length - 1

  const resetQuizState = () => {
    setPlayer('')
    setStarted(false)
    setCurrentQuestion(0)
    setSelected(null)
    setAnswers([])
    setScore(0)
    setTimeLeft(quiz.timeLimit)
    setHasSavedProgress(false)
    setPlayDifficulty('easy')
    setActiveQuestions([])
  }

  const startQuiz = () => {
    if (!player.trim()) {
      alert('Введите имя игрока')
      return
    }

    const requestedCount = playLevels[playDifficulty].count
    const randomQuestions = shuffleArray(quiz.questions).slice(
      0,
      Math.min(requestedCount, quiz.questions.length)
    )

    clearQuizProgress(quiz.id)
    setHasSavedProgress(false)
    setStarted(true)
    setCurrentQuestion(0)
    setSelected(null)
    setAnswers([])
    setScore(0)
    setTimeLeft(quiz.timeLimit)
    setActiveQuestions(randomQuestions)
  }

  const finalizeQuiz = (finalAnswers, finalScore, finalPlayer = player || 'Гость') => {
    const totalQuestions = activeQuestions.length || 1

    const result = {
      quizId: quiz.id,
      quizTitle: quiz.title,
      player: finalPlayer,
      score: finalScore,
      total: totalQuestions,
      percentage: Math.round((finalScore / totalQuestions) * 100),
      date: new Date().toISOString(),
      answers: finalAnswers,
      playDifficulty,
    }

    saveResult(result)
    clearQuizProgress(quiz.id)
    resetQuizState()

    navigate('/results', {
      state: {
        latestResult: result,
      },
    })
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

    if (isLastQuestion) {
      finalizeQuiz(updatedAnswers, nextScore)
      return
    }

    setAnswers(updatedAnswers)
    setScore(nextScore)
    setSelected(null)
    setCurrentQuestion((prev) => prev + 1)
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

    if (isLastQuestion) {
      finalizeQuiz(updatedAnswers, score)
      return
    }

    setAnswers(updatedAnswers)
    setSelected(null)
    setCurrentQuestion((prev) => prev + 1)
  }

  useEffect(() => {
    if (started && timeLeft <= 0) {
      finalizeQuiz(answers, score, player || 'Гость')
    }
  }, [timeLeft])

  if (!started) {
    return (
      <section className="section">
        <div className="container narrow">
          <div className="play-card">
            <h2>{quiz.title}</h2>
            <p>{quiz.longDescription}</p>
            <p>Сложность квиза: {quiz.difficulty}</p>
            <p>Рейтинг: {quiz.rating}</p>
            <p>Всего вопросов в банке: {quiz.questions.length}</p>
            <p>Время: {quiz.timeLimit} сек</p>

            <input
              type="text"
              placeholder="Введите ваше имя"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              className="search-input"
            />

            <div className="difficulty-picker">
              <p className="small-note">Выбери сложность прохождения:</p>

              <div className="filter-row">
                <button
                  className={`filter-btn ${playDifficulty === 'easy' ? 'active' : ''}`}
                  onClick={() => setPlayDifficulty('easy')}
                >
                  Лёгкий — 5 вопросов
                </button>
                <button
                  className={`filter-btn ${playDifficulty === 'medium' ? 'active' : ''}`}
                  onClick={() => setPlayDifficulty('medium')}
                >
                  Средний — 10 вопросов
                </button>
                <button
                  className={`filter-btn ${playDifficulty === 'hard' ? 'active' : ''}`}
                  onClick={() => setPlayDifficulty('hard')}
                >
                  Сложный — 15 вопросов
                </button>
              </div>
            </div>

            <button className="btn btn-primary full" onClick={startQuiz}>
              {hasSavedProgress ? 'Начать заново' : 'Начать квиз'}
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
            <ProgressBar current={currentQuestion} total={questionsToUse.length} />
          </div>

          <p className="small-note">
            Режим: {playLevels[playDifficulty].label} · Вопросов: {questionsToUse.length}
          </p>

          <QuestionCard
            question={question}
            selected={selected}
            onSelect={setSelected}
            onSkip={handleSkip}
            onNext={handleNext}
            isLastQuestion={isLastQuestion}
          />
        </div>
      </div>
    </section>
  )
}
