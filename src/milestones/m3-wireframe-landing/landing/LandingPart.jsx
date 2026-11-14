// Partea 2 din M3: landing page-ul, structura lui și indicatorii
import "./landing.css";
import { LandingPreview } from "./LandingPreview.jsx";
import { LANDING_HREF, LANDING_MEASURE, LANDING_PARTS, LANDING_URL } from "./landing-content.js";

export function LandingPart() {
  return (
    <main className="part-in">
      <section id="l-link" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Landing page</h2>
          <p className="intro">Prima pagină pe care o vede un vizitator nou. Are un singur obiectiv: înscrierea pe lista de așteptare. Poți naviga în ea direct de aici: derulează și apasă ca pe site.</p>
          <LandingPreview />
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
