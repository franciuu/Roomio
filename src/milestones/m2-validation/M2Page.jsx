// M2: antetul (titlul, etapele validării, cifrele principale) și confirmarea problemei
import "./m2.css";
import { ProblemPart } from "./problem/ProblemPart.jsx";
import { HERO_STATS, PROGRESS } from "./m2-content.js";

export function M2Page() {
  return (
    <>
      <section id="top" className="hero-m2 m2-hero wrap">
        <div className="m2-hero-grid">
          <div>
            <p className="eyebrow">Milestone 2 · Validation 1</p>
            <h1>Confirmarea problemei</h1>
            <p className="lead">Am verificat dacă problema pe care vrea s-o rezolve Roomio există cu adevărat, întrebând oameni care și-au mobilat recent o cameră.</p>
          </div>

          <aside className="m2-timeline" aria-label="Etapele validării">
            <span className="m2-timeline-label">Etapele validării</span>
            <ol className="plain">
              {PROGRESS.map(([t, d, st]) => (
                <li key={t} className={st}><i aria-hidden="true" /><b>{t}</b><span>{d}</span></li>
              ))}
            </ol>
          </aside>
        </div>

        <ul className="plain m2-hero-stats">
          {HERO_STATS.map(([n, of, t]) => (
            <li key={t}><b>{n}{of && <small> din {of}</small>}</b><span>{t}</span></li>
          ))}
        </ul>
      </section>

      <ProblemPart />
    </>
  );
}
