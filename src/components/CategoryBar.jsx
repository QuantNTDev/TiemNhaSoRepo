export default function CategoryBar({ items, active, onChange }) {
  return (
    <div className="cats" role="tablist">
      {items.map((c) => (
        <button key={c} role="tab" aria-selected={c === active}
                className={'cat' + (c === active ? ' on' : '')} onClick={() => onChange(c)}>{c}</button>
      ))}
    </div>
  )
}
