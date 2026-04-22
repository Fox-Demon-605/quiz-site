export default function Timer({ timeLeft }) {
  return (
    <div className={`timer ${timeLeft <= 10 ? 'danger' : ''}`}>
      ⏳ Осталось: {timeLeft} сек
    </div>
  )
}
