import "./m3.css";
import { useState } from "react";
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

// landing page-ul, navigabil direct din Fiki: pe desktop e afișat la 1440 px și micșorat, pe telefon la 390 px
const LANDING_HREF = `${import.meta.env.BASE_URL}landing.html`;
function LandingBrowser() {
  const [device, setDevice] = useState("desktop");
  return (
    <div className={`lp-browser ${device}`}>
      <div className="lp-browser-bar">
        <span className="lp-dots"><i /><i /><i /></span>
        <span className="lp-url">{LANDING_URL.replace("https://", "")}</span>
        <div className="lp-device" role="group" aria-label="Dispozitiv">
          <button type="button" aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}>Desktop</button>
          <button type="button" aria-pressed={device === "phone"} onClick={() => setDevice("phone")}>Telefon</button>
        </div>
        <a className="lp-open" href={LANDING_HREF} target="_blank" rel="noopener">Deschide separat ↗</a>
      </div>
      {device === "desktop"
        ? <Scaled w={1440} h={900}><iframe src={LANDING_HREF} title="Landing page Roomio, versiunea desktop" width="1440" height="900" /></Scaled>
        : <div className="lp-phone"><iframe src={LANDING_HREF} title="Landing page Roomio, versiunea pentru telefon" width="390" height="760" /></div>}
    </div>
  );
}

function M3Landing() {
  return (
    <main className="part-in">
      <section id="l-link" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Landing page</h2>
          <p className="intro">Prima pagină pe care o vede un vizitator nou. Are un singur obiectiv: înscrierea pe lista de așteptare. Poți naviga în ea direct de aici: derulează și apasă ca pe site.</p>
          <LandingBrowser />
          <p className="lp-link">Link separat: <a href={LANDING_HREF} target="_blank" rel="noopener">{LANDING_URL}</a></p>
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
