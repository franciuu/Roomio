// Tema light / dark: se reține alegerea, altfel urmează sistemul
import { useState, useEffect } from "react";

const savedTheme = () => { try { return localStorage.getItem("roomio-theme"); } catch { return null; } };
export function useTheme() {
  const [theme, setTheme] = useState(() => savedTheme() || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("roomio-theme", theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme(theme === "dark" ? "light" : "dark")];
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>
);

export function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme" onClick={onToggle} aria-label={theme === "dark" ? "Treci la modul luminos" : "Treci la modul întunecat"}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
