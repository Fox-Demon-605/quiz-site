const RESULTS_KEY = 'quiz_results'
const FAVORITES_KEY = 'quiz_favorites'
const PROGRESS_KEY = 'quiz_progress'

export const saveResult = (result) => {
  const prev = JSON.parse(localStorage.getItem(RESULTS_KEY)) || []
  prev.push(result)
  localStorage.setItem(RESULTS_KEY, JSON.stringify(prev))
}

export const getResults = () => {
  return JSON.parse(localStorage.getItem(RESULTS_KEY)) || []
}

export const clearResults = () => {
  localStorage.removeItem(RESULTS_KEY)
}

export const getBestResultByQuiz = (quizTitle) => {
  const results = getResults().filter((item) => item.quizTitle === quizTitle)
  if (!results.length) return null
  return results.reduce((best, current) =>
    current.score > best.score ? current : best
  )
}

export const getStats = () => {
  const results = getResults()
  const totalGames = results.length
  const totalCorrect = results.reduce((sum, item) => sum + item.score, 0)
  const totalQuestions = results.reduce((sum, item) => sum + item.total, 0)
  const averageScore = totalQuestions
    ? Math.round((totalCorrect / totalQuestions) * 100)
    : 0

  return {
    totalGames,
    totalCorrect,
    totalQuestions,
    averageScore,
  }
}

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
}

export const isFavorite = (quizId) => {
  return getFavorites().includes(quizId)
}

export const toggleFavorite = (quizId) => {
  const favorites = getFavorites()
  const exists = favorites.includes(quizId)

  const next = exists
    ? favorites.filter((id) => id !== quizId)
    : [...favorites, quizId]

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(next))
  return next
}

export const saveQuizProgress = (quizId, progress) => {
  const all = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}
  all[quizId] = progress
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(all))
}

export const getQuizProgress = (quizId) => {
  const all = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}
  return all[quizId] || null
}

export const clearQuizProgress = (quizId) => {
  const all = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}
  delete all[quizId]
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(all))
}
