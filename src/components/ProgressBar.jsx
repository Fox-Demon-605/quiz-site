export default function ProgressBar({ current, total }) {
  const percent = ((current + 1) / total) * 100

  return (
    <div className="progress-wrap">
      <div className="progress-info">
        <span>
          Вопрос {current + 1} / {total}
        </span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
