export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="filter-row">
      <button
        className={`filter-btn ${selected === 'All' ? 'active' : ''}`}
        onClick={() => onSelect('All')}
      >
        Все
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${selected === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
