import "./m3.css";
import { Wireframe } from "./wireframe/Wireframe.jsx";
import { Scaled } from "./Scaled.jsx";
import { LANDING_MEASURE, LANDING_PARTS, LANDING_URL, M3_PARTS } from "./data.js";

export function M3({ part, onPart }) {
  return (
    <>
      <section id="top" className="hero-m2 wrap">
        <p className="eyebrow">Milestone 3 · Wireframe și landing page</p>
        <h1>Cum arată Roomio</h1>
        <p className="lead">Structura aplicației, pagină cu pagină, și pagina prin care prezentăm Roomio viitorilor utilizatori.</p>
        <div id="parti" className="parts" role="tablist" aria-label="Părțile din M3">
          {M3_PARTS.map((p, i) => (
            <button key={p.id} role="tab" aria-selected={part === p.id} className="part-card" onClick={() => onPart(p.id)}>
              <span className="part-num">Partea {i + 1}</span>
              <b>{p.label}</b>
              <small>{p.sub}</small>
            </button>
          ))}
        </div>
      </section>
      {part === "landing" ? <M3Landing /> : <Wireframe />}
    </>
  );
}

function M3Landing() {
  return (
    <main className="part-in">
      <section id="l-link" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Landing page</h2>
          <p className="intro">Prima pagină pe care o vede un vizitator nou. Are un singur obiectiv: înscrierea pe lista de așteptare.</p>
          <div className="lp-preview">
            <div className="wf-chrome big"><i /><i /><i /><span>{LANDING_URL.replace("https://", "")}</span></div>
            <Scaled w={1280} h={760}><iframe src={`${import.meta.env.BASE_URL}landing.html`} title="Landing page Roomio" width="1280" height="760" tabIndex="-1" scrolling="no" /></Scaled>
          </div>
          <div className="lp-link">
            <a className="go" href={`${import.meta.env.BASE_URL}landing.html`} target="_blank" rel="noopener">Deschide landing page-ul ↗</a>
            <code>{LANDING_URL}</code>
          </div>
        </div>
      </section>

      <section id="l-structura">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Structura</h2>
          <ol className="plain lp-parts">
            {LANDING_PARTS.map(([t, d], i) => <li key={t}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="l-masuram" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Indicatori</h2>
          <p className="intro">Butonul de pe landing page deschide un Google Form. Din răspunsuri extragem indicatorii de mai jos.</p>
          <ul className="plain metrics lp-measure">
            {LANDING_MEASURE.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
