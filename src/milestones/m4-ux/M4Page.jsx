// M4: antetul și cele patru părți (interviuri, persona, user stories și fluxuri, wireframe actualizat)
import "./m4.css";
import { InterviewsPart } from "./interviews/InterviewsPart.jsx";
import { PersonaPart } from "./persona/PersonaPart.jsx";
import { StoriesAndFlowsPart } from "./stories-and-flows/StoriesAndFlowsPart.jsx";
import { WireframeUpdatePart } from "./wireframe-update/WireframeUpdatePart.jsx";
import { M4_PARTS } from "./m4-content.js";

const PART = { interviuri: InterviewsPart, persona: PersonaPart, fluxuri: StoriesAndFlowsPart, wireframe: WireframeUpdatePart };

export function M4Page({ part, onPart }) {
  const Part = PART[part] || InterviewsPart;
  return (
    <>
      <section id="top" className="hero-m2 wrap">
        <p className="eyebrow">Milestone 4 · UX</p>
        <h1>Cine folosește Roomio</h1>
        <p className="lead">Am vorbit față în față cu oameni din segmentul principal, am construit persona lor și am actualizat wireframe-ul după ce am aflat.</p>
        <div id="parti" className="parts" role="tablist" aria-label="Părțile din M4">
          {M4_PARTS.map((p, i) => (
            <button key={p.id} role="tab" aria-selected={part === p.id} className="part-card" onClick={() => onPart(p.id)}>
              <span className="part-num">Partea {i + 1}</span>
              <b>{p.label}</b>
              <small>{p.sub}</small>
            </button>
          ))}
        </div>
      </section>
      <Part />
    </>
  );
}
