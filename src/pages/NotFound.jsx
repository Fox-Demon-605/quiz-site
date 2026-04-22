import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <div className="play-card">
          <h2>404</h2>
          <p>Страница не найдена.</p>
          <Link to="/" className="btn btn-primary">
            На главную
          </Link>
        </div>
      </div>
    </section>
  )
}
