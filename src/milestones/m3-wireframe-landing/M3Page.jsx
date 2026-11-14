// M3: antetul și cele două părți (wireframe, landing page)
import { WireframePart } from "./wireframe/WireframePart.jsx";
import { LandingPart } from "./landing/LandingPart.jsx";
import { M3_PARTS } from "./m3-content.js";

export function M3Page({ part, onPart }) {
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
      {part === "landing" ? <LandingPart /> : <WireframePart />}
    </>
  );
}
