// M5: antetul cu rezumatul campaniei și cele trei părți (colectarea leadurilor, analytics, campania)
import "./m5.css";
import { Placeholder } from "../../shared/Placeholder.jsx";
import { LeadCollectionPart } from "./lead-collection/LeadCollectionPart.jsx";
import { AnalyticsPart } from "./analytics/AnalyticsPart.jsx";
import { CampaignPart } from "./campaign/CampaignPart.jsx";
import { M5_PARTS, SUMMARY } from "./m5-content.js";

const PART = { colectare: LeadCollectionPart, analytics: AnalyticsPart, campanie: CampaignPart };

export function M5Page({ part, onPart }) {
  const Part = PART[part] || LeadCollectionPart;
  return (
    <>
      <section id="top" className="hero-m2 wrap">
        <p className="eyebrow">Milestone 5 · Validation 2</p>
        <h1>Primii utilizatori</h1>
        <p className="lead">Cum am adus oameni pe landing page, câți s-au înscris și ce canal a funcționat cel mai bine.</p>
        <ul className="plain m5-score" aria-label="Rezumatul campaniei">
          {SUMMARY.map(([v, t]) => <li key={t}><Placeholder as="b" v={v} hint="—" /><span>{t}</span></li>)}
        </ul>
        <div id="parti" className="parts m5-parts" role="tablist" aria-label="Părțile din M5">
          {M5_PARTS.map((p, i) => (
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
