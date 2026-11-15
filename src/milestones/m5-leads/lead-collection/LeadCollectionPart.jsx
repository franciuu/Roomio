// Partea 1 din M5: câte leaduri am colectat și cum arată secțiunea de înscriere de pe landing page.
// Formularul în sine este pe landing page; aici doar documentăm rezultatele.
import { Placeholder } from "../../../shared/Placeholder.jsx";
import { Icon } from "../components/Icon.jsx";
import { LANDING_HREF } from "../../m3-wireframe-landing/landing/landing-content.js";
import { LEAD_FIELDS, LEAD_FORM, LEAD_STATS, LEADS_BY_DAY } from "./lead-collection-content.js";

// înălțimi pentru graficul gol, până avem datele
const GHOST = [3, 5, 4, 8, 6, 9, 7, 5, 10, 8, 6, 9, 7, 11];

export function LeadCollectionPart() {
  const max = Math.max(1, ...LEADS_BY_DAY.map(([, n]) => n));
  return (
    <main className="part-in">
      <section id="c-rezultate" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Leadurile colectate</h2>
          <p className="intro">Câte persoane și-au lăsat datele de contact pe landing page pe durata campaniei și în ce zile.</p>
          <ul className="plain m5-stats">
            {LEAD_STATS.map(([v, t]) => <li key={t}><Placeholder as="b" v={v} hint="—" /><span>{t}</span></li>)}
          </ul>
          <div className="m5-chart">
            <h3>Înscrierile pe zile</h3>
            {LEADS_BY_DAY.length ? (
              <ol className="plain m5-days">
                {LEADS_BY_DAY.map(([d, n]) => <li key={d}><b style={{ height: `${(n / max) * 100}%` }} title={`${n} înscrieri`} /><span>{d}</span></li>)}
              </ol>
            ) : (
              <div className="m5-ghost">
                <ol className="plain m5-days" aria-hidden="true">{GHOST.map((n, i) => <li key={i}><b style={{ height: `${n * 9}%` }} /></li>)}</ol>
                <span className="slot">Înscrierile pe fiecare zi, puse lângă datele postărilor</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="c-formular">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Secțiunea de înscriere de pe landing page</h2>
          <p className="intro">Vizitatorii își lasă datele direct pe landing page și se abonează la newsletter, ca să afle de progresul și lansarea Roomio.</p>
          <div className="m5-split">
            <div>
              <dl className="m5-list">
                {LEAD_FORM.map(([t, v, hint]) => <div key={t}><dt>{t}</dt><Placeholder as="dd" v={v} hint={hint} /></div>)}
              </dl>
              <a className="m5-link" href={LANDING_HREF} target="_blank" rel="noopener">Vezi landing page-ul ↗</a>
            </div>
            <div className="m5-shot tall slot">Captura secțiunii de înscriere de pe landing page</div>
          </div>
        </div>
      </section>

      <section id="c-date" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Ce date colectăm</h2>
          <p className="intro">Cerem doar ce folosim: un contact pentru a anunța lansarea și acordul pentru prelucrarea datelor.</p>
          <ul className="plain m5-fields">
            {LEAD_FIELDS.map(([icon, f, req, why]) => (
              <li key={f}>
                <span className="m5-icon-box"><Icon name={icon} /></span>
                <div>
                  <h3>{f}</h3>
                  <Placeholder className="m5-req" v={req} hint="obligatoriu / opțional" />
                </div>
                <Placeholder as="p" v={why} hint="La ce folosim câmpul" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
