// Layout-ul Fiki: bara de sus cu milestone-urile, pagina milestone-ului ales și subsolul
import "../styles/global.css";
import { useState, useEffect } from "react";
import { M1Page } from "../milestones/m1-idea/M1Page.jsx";
import { M2Page } from "../milestones/m2-validation/M2Page.jsx";
import { M3Page } from "../milestones/m3-wireframe-landing/M3Page.jsx";
import { M4Page } from "../milestones/m4-ux/M4Page.jsx";
import { MILESTONES, PARTS, fromHash, partFromHash } from "./navigation.js";
import { ThemeToggle, useTheme } from "./ThemeToggle.jsx";

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
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
        <div className="wrap sub">
          <nav>{sections.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        </div>
      </header>

      {ms === "m1" && <M1Page />}
      {ms === "m2" && <M2Page part={part} onPart={openPart} />}
      {ms === "m3" && <M3Page part={part} onPart={openPart} />}
      {ms === "m4" && <M4Page part={part} onPart={openPart} />}

      <footer className="wrap foot">
        <span className="logo">Roomio</span>
        <span>{current.label} · SE Startup · UPB</span>
      </footer>
    </div>
  );
}
