import { useMemo, useState } from 'react'
import QuizCard from '../components/QuizCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import { quizzes } from '../data/quizzes'
import { getFavorites } from '../utils/storage'

export default function QuizList() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [favoritesOnly, setFavoritesOnly] = useState(false)

  const categories = [...new Set(quizzes.map((q) => q.category))]
  const difficulties = [...new Set(quizzes.map((q) => q.difficulty))]

  const filtered = useMemo(() => {
    const favorites = getFavorites()

    let result = quizzes.filter((quiz) => {
      const text = `${quiz.title} ${quiz.description} ${quiz.category}`.toLowerCase()
      const matchesSearch = text.includes(search.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || quiz.category === selectedCategory
      const matchesDifficulty =
        selectedDifficulty === 'All' || quiz.difficulty === selectedDifficulty
      const matchesFavorites = !favoritesOnly || favorites.includes(quiz.id)

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesFavorites
      )
    })

    if (sortBy === 'title') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title))
    }

    if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating)
    }

    if (sortBy === 'plays') {
      result = [...result].sort((a, b) => b.plays - a.plays)
    }

    if (sortBy === 'time') {
      result = [...result].sort((a, b) => a.timeLimit - b.timeLimit)
    }

    return result
  }, [search, selectedCategory, selectedDifficulty, sortBy, favoritesOnly])

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Все квизы</h2>
          <p>Найди квиз по интересующей теме.</p>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="filter-row">
          <button
            className={`filter-btn ${selectedDifficulty === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('All')}
          >
            Все уровни
          </button>
          {difficulties.map((level) => (
            <button
              key={level}
              className={`filter-btn ${selectedDifficulty === level ? 'active' : ''}`}
              onClick={() => setSelectedDifficulty(level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="toolbar">
          <select
            className="select-input"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Без сортировки</option>
            <option value="title">По названию</option>
            <option value="rating">По рейтингу</option>
            <option value="plays">По популярности</option>
            <option value="time">По времени</option>
          </select>

          <button
            className={`filter-btn ${favoritesOnly ? 'active' : ''}`}
            onClick={() => setFavoritesOnly((prev) => !prev)}
          >
            Только избранное
          </button>
        </div>

        <div className="grid">
          {filtered.length > 0 ? (
            filtered.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)
          ) : (
            <p className="empty-text">Ничего не найдено.</p>
          )}
        </div>
      </div>
    </section>
  )
}

