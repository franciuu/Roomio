// Un câmp din fișierele de texte: textul, dacă e completat, altfel indiciul, ca spațiu de completat (folosit în M4 și M5)
export function Placeholder({ v, hint, as: T = "span", className = "" }) {
  return v ? <T className={className}>{v}</T> : <T className={`slot ${className}`}>{hint}</T>;
}
