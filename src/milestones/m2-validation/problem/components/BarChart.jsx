// Bare orizontale: câte răspunsuri din total
export function BarChart({ items }) {
  return (
    <ul className="plain bars">
      {items.map(([label, n, total]) => (
        <li key={label}>
          <span className="bar-label">{label}</span>
          <span className="bar-track"><i style={{ width: `${(n / total) * 100}%` }} /></span>
          <span className="bar-val">{n} <small>din {total}</small></span>
        </li>
      ))}
    </ul>
  );
}
