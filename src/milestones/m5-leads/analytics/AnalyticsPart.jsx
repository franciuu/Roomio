// Partea 2 din M5: vizitatorii, funnel-ul de conversie și ce am văzut în session replay (PostHog)
import { Placeholder } from "../../../shared/Placeholder.jsx";
import { Icon } from "../components/Icon.jsx";
import { FUNNEL, REPLAY, TOOLS, WEB_METRICS } from "./analytics-content.js";

const share = (n, of) => (n && of ? Math.round((Number(n) / Number(of)) * 100) : null);

export function AnalyticsPart() {
  const first = FUNNEL[0][1];
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
          <div className="m5-shot slot">Captura din PostHog Web analytics</div>
        </div>
      </section>

      <section id="a-funnel">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Funnel-ul de conversie</h2>
          <p className="intro">Câți vizitatori ajung la fiecare pas, de la intrarea pe pagină până la înscriere, și câți continuă de la un pas la următorul.</p>
          <ol className="plain m5-funnel">
            {FUNNEL.map(([step, n], i) => {
              const of = share(n, first);
              const next = i > 0 ? share(n, FUNNEL[i - 1][1]) : null;
              return (
                <li key={step} className={n ? "" : "empty"} style={{ "--w": `${of ?? 100 - i * 20}%` }}>
                  {i > 0 && <span className="m5-funnel-drop">{next != null ? `${next}% continuă` : "— continuă"}</span>}
                  <div className="m5-funnel-row">
                    <span className="m5-funnel-bar" />
                    <span className="m5-funnel-step"><i>{i + 1}</i>{step}</span>
                    <span className="m5-funnel-val"><Placeholder as="b" v={n} hint="—" />{of != null && <small>{of}%</small>}</span>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="m5-shot slot">Captura funnel-ului din PostHog Product analytics</div>
        </div>
      </section>

      <section id="a-replay" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Ce am văzut în session replay</h2>
          <p className="intro">Am urmărit cum folosesc vizitatorii pagina și am schimbat ce îi încurca.</p>
          <ol className="plain m5-replay">
            {REPLAY.map(([seen, changed], i) => (
              <li key={i}>
                <div className="m5-replay-shot" aria-hidden="true"><Icon name="play" size={28} /></div>
                <span className="m5-tag">Sesiunea {i + 1}</span>
                <Placeholder as="h3" v={seen} hint="Ce am observat" />
                <p><span className="m5-label">Ce am schimbat</span><Placeholder v={changed} hint="modificarea de pe landing page" /></p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
