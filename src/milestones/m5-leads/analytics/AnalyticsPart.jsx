// Partea 2 din M5: vizitatorii, funnel-ul de conversie și ce am văzut în session replay (PostHog)
import { Placeholder } from "../../../shared/Placeholder.jsx";
import { Icon } from "../components/Icon.jsx";
import { FUNNEL, FUNNEL_SHOT, REPLAY, TOOLS, WEB_METRICS, WEB_NOTES, WEB_SHOT } from "./analytics-content.js";

const file = (f) => `${import.meta.env.BASE_URL}m5/${f}`;

const share = (n, of) => (n && of ? Math.round((Number(n) / Number(of)) * 100) : null);

export function AnalyticsPart() {
  const first = FUNNEL[0][2];
  return (
    <main className="part-in">
      <section id="a-vizitatori" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Ce urmărim cu PostHog</h2>
          <p className="intro">Pe landing page urmărim cu PostHog cele trei lucruri cerute în acest milestone.</p>
          <ul className="plain m5-tools">
            {TOOLS.map(([icon, t, d, id]) => (
              <li key={t}>
                <span className="m5-icon-box"><Icon name={icon} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
                <a href={`#${id === "a-vizitatori" ? "a-web" : id}`} className="m5-more">Vezi rezultatele ↓</a>
              </li>
            ))}
          </ul>

          <h3 id="a-web" className="m5-sub">Vizitatorii landing page-ului</h3>
          <ul className="plain m5-stats">
            {WEB_METRICS.map(([v, t]) => <li key={t}><Placeholder as="b" v={v} hint="—" /><span>{t}</span></li>)}
          </ul>
          {WEB_SHOT
            ? <figure className="m5-figure"><img src={file(WEB_SHOT)} alt="PostHog Web analytics pentru landing page" loading="lazy" /><figcaption>PostHog Web analytics, ultimele 7 zile. Totalul de 116 include și câteva vizite pe alte pagini ale site-ului.</figcaption></figure>
            : <div className="m5-shot slot">Captura din PostHog Web analytics</div>}
          <ul className="plain m5-notes">
            {WEB_NOTES.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
          </ul>
        </div>
      </section>

      <section id="a-funnel">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Funnel-ul de conversie</h2>
          <p className="intro">Câți vizitatori ajung la fiecare pas, de la intrarea pe pagină până la înscriere, și câți continuă de la un pas la următorul.</p>
          <ol className="plain m5-funnel">
            {FUNNEL.map(([step, ev, n], i) => {
              const of = share(n, first);
              const next = i > 0 ? share(n, FUNNEL[i - 1][2]) : null;
              return (
                <li key={step} className={n ? "" : "empty"} style={{ "--w": `${of ?? 100 - i * 20}%` }}>
                  {i > 0 && <span className="m5-funnel-drop">{next != null ? `${next}% continuă` : "— continuă"}</span>}
                  <div className="m5-funnel-row">
                    <span className="m5-funnel-bar" />
                    <span className="m5-funnel-step"><i>{i + 1}</i>{step}<code>{ev}</code></span>
                    <span className="m5-funnel-val"><Placeholder as="b" v={n} hint="—" />{of != null && <small>{of}%</small>}</span>
                  </div>
                </li>
              );
            })}
          </ol>
          {FUNNEL_SHOT
            ? <figure className="m5-figure"><img src={file(FUNNEL_SHOT)} alt="Vizitatorii unici și apăsările pe butonul de înscriere, pe zile, în PostHog Product analytics" loading="lazy" /><figcaption>PostHog Product analytics: vizitatorii unici (Pageview) și cei care au apăsat un buton de înscriere (signup_open), pe zile. Pe 24 noiembrie, 91 de vizitatori și 2 înscrieri deschise; pe 25 noiembrie, 33 de vizitatori și nicio înscriere. Cele câteva vizite din 19 și 23 noiembrie au fost înainte de campanie, cel mai probabil teste de-ale noastre.</figcaption></figure>
            : <div className="m5-shot slot">Captura funnel-ului din PostHog Product analytics</div>}
        </div>
      </section>

      <section id="a-replay" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Ce am văzut în session replay</h2>
          <p className="intro">Din înregistrările campaniei am ales trei sesiuni: cele două în care vizitatorii s-au înscris și o sesiune lungă fără înscriere. Toate sunt de pe telefon și au venit de pe Facebook.</p>
          <ol className="plain m5-replay">
            {REPLAY.map(([shot, title, seen, next], i) => (
              <li key={i}>
                <a className="m5-replay-shot" href={file(shot)} target="_blank" rel="noopener"><img src={file(shot)} alt={`Session replay: ${title}`} loading="lazy" /></a>
                <span className="m5-tag">Sesiunea {i + 1}</span>
                <h3>{title}</h3>
                <p>{seen}</p>
                <p><span className="m5-label">Ce schimbăm</span>{next}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
