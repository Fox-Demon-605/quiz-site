import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import QuizList from './pages/QuizList'
import QuizDetails from './pages/QuizDetails'
import QuizPlay from './pages/QuizPlay'
import Results from './pages/Results'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizPlay />} />
          <Route path="/quiz/:id/details" element={<QuizDetails />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
