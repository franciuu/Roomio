// Un câmp din content.js: textul, dacă e completat, altfel indiciul, ca spațiu de completat
export function Placeholder({ v, hint, as: T = "span", className = "" }) {
  return v ? <T className={className}>{v}</T> : <T className={`slot ${className}`}>{hint}</T>;
}
