import "./styles/base.css";
import { useState, useEffect } from "react";
import { M1 } from "./milestones/m1/M1.jsx";
import { M2 } from "./milestones/m2/M2.jsx";
import { M2_PARTS } from "./milestones/m2/data.js";
import { M3 } from "./milestones/m3/M3.jsx";
import { M3_PARTS } from "./milestones/m3/data.js";

/* ---------- navigare ---------- */
const PARTS = { m2: M2_PARTS, m3: M3_PARTS };

const MILESTONES = [
  { id: "m1", label: "M1", ready: true, sections: [["echipa", "Echipa"], ["problema", "Problema"], ["solutia", "Soluția"], ["clienti", "Clienți"], ["concurenta", "Concurența"], ["avantaj", "Avantaj"], ["metrici", "Metrici"], ["costuri", "Costuri"], ["venituri", "Venituri"]] },
  { id: "m2", label: "M2", ready: true },
  { id: "m3", label: "M3", ready: true },
  ...Array.from({ length: 7 }, (_, i) => ({ id: `m${i + 4}`, label: `M${i + 4}`, ready: false })),
];

// #m2 → partea 1, #m2-solutie → partea 2; #m3-landing → partea 2 din M3
const fromHash = () => {
  const h = window.location.hash.slice(1).split("-")[0];
  return MILESTONES.some((m) => m.id === h && m.ready) ? h : "m1";
};
const partFromHash = () => {
  const [ms, sub] = window.location.hash.slice(1).split("-");
  const parts = PARTS[ms];
  if (!parts) return null;
  return parts.some((p) => p.id === sub) ? sub : parts[0].id;
};

/* ---------- temă light / dark ---------- */
const savedTheme = () => { try { return localStorage.getItem("roomio-theme"); } catch { return null; } };
function useTheme() {
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

export default function App() {
  const [ms, setMs] = useState(fromHash);
  const [part, setPart] = useState(partFromHash);
  const [theme, toggleTheme] = useTheme();
  const current = MILESTONES.find((m) => m.id === ms);
  const parts = PARTS[ms];
  const sections = parts ? (parts.find((p) => p.id === part) || parts[0]).sections : current.sections;
  const open = (id) => { setMs(id); setPart(PARTS[id]?.[0].id ?? null); history.replaceState(null, "", `#${id}`); window.scrollTo(0, 0); };
  const openPart = (id) => {
    setPart(id);
    history.replaceState(null, "", id === parts[0].id ? `#${ms}` : `#${ms}-${id}`);
    document.getElementById("parti")?.scrollIntoView({ behavior: "smooth" });
  };

  // un link de tipul #m2 sau #m3-landing deschide milestone-ul și partea lui
  useEffect(() => {
    const onHash = () => {
      if (/^#m\d+(-|$)/.test(window.location.hash)) { setMs(fromHash()); setPart(partFromHash()); }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="fiki">

      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="logo">Roomio</a>
          <div className="nav-right">
            <div className="ms" role="tablist" aria-label="Milestone">
              {MILESTONES.map((m) => (
                <button key={m.id} role="tab" aria-selected={ms === m.id} disabled={!m.ready} title={m.ready ? `Milestone ${m.label.slice(1)}` : "În curând"} onClick={() => open(m.id)}>{m.label}</button>
              ))}
            </div>
            <select id="milestone" className="ms-select" aria-label="Milestone" value={ms} onChange={(e) => open(e.target.value)}>
              {MILESTONES.map((m) => <option key={m.id} value={m.id} disabled={!m.ready}>{m.ready ? `Milestone ${m.label.slice(1)}` : `${m.label} · în curând`}</option>)}
            </select>
            <button className="theme" onClick={toggleTheme} aria-label={theme === "dark" ? "Treci la modul luminos" : "Treci la modul întunecat"}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
        <div className="wrap sub">
          <nav>{sections.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        </div>
      </header>

      {ms === "m1" && <M1 />}
      {ms === "m2" && <M2 part={part} onPart={openPart} />}
      {ms === "m3" && <M3 part={part} onPart={openPart} />}

      <footer className="wrap foot">
        <span className="logo">Roomio</span>
        <span>{current.label} · SE Startup · UPB</span>
      </footer>
    </div>
  );
}
