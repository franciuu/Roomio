// M2: antetul cu progresul și cele două părți (problema, soluția)
import "./m2.css";
import { ProblemPart } from "./problem/ProblemPart.jsx";
import { SolutionPart } from "./solution/SolutionPart.jsx";
import { M2_PARTS, PROGRESS } from "./m2-content.js";

export function M2Page({ part, onPart }) {
  const done = PROGRESS.filter((p) => p[2] === "done").length;
  return (
    <>
      <section id="top" className="hero-m2 wrap">
        <p className="eyebrow">Milestone 2 · Customer Discovery</p>
        <h1>Validarea ideii</h1>
        <p className="lead">Am verificat întâi dacă problema pe care vrea s-o rezolve Roomio există cu adevărat. Acum verificăm dacă soluția noastră o rezolvă.</p>

        <div className="progress" style={{ "--done": `${((done - 0.5) / (PROGRESS.length - 1)) * 100}%`, "--n": PROGRESS.length }}>
          <ol className="plain">
            {PROGRESS.map(([t, d, st]) => (
              <li key={t} className={st}><i aria-hidden="true" /><b>{t}</b><span>{d}</span></li>
            ))}
          </ol>
        </div>

        <div id="parti" className="parts" role="tablist" aria-label="Părțile din M2">
          {M2_PARTS.map((p, i) => (
            <button key={p.id} role="tab" aria-selected={part === p.id} className="part-card" disabled={p.locked} onClick={() => onPart(p.id)}>
              <span className="part-num">Partea {i + 1}</span>
              <b>{p.label}</b>
              <span className={`part-status ${p.state}`}>{p.status}</span>
              <small>{p.sub}</small>
            </button>
          ))}
        </div>
      </section>

      {part === "solutie" ? <SolutionPart /> : <ProblemPart />}
    </>
  );
}
