import "./m1.css";
import { useState, useEffect, useRef } from "react";
import { Plan } from "./Plan.jsx";
import { ADVANTAGES, COMPETITORS, COSTS, METRICS, PROBLEMS, REVENUE, SEGMENTS, TEAM } from "./data.js";
import { Room, STYLES } from "../../shared/Room.jsx";
import { reducedMotion } from "../../shared/motion.js";
import { STEPS } from "../../shared/product.js";

/* ---------- M1 ---------- */
const STYLE_ORDER = Object.keys(STYLES);
const PHASES = ["Design it", "See it", "Live it"];

export function M1() {
  const [style, setStyle] = useState("Scandinav");
  const [phase, setPhase] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [out, setOut] = useState(false);
  const auto = useRef(true);

  // buclă: Design it (plan, pereți) → See it (mobila) → Live it (lumină), apoi camera se reconstruiește
  // în stilul următor; după ce utilizatorul alege un stil, bucla continuă în stilul ales
  useEffect(() => {
    if (reducedMotion()) { setPhase(2); return; }
    const t = [
      setTimeout(() => setPhase(1), 1250),
      setTimeout(() => setPhase(2), 2700),
      setTimeout(() => setOut(true), 6600),
      setTimeout(() => {
        if (auto.current) setStyle((s) => STYLE_ORDER[(STYLE_ORDER.indexOf(s) + 1) % STYLE_ORDER.length]);
        setOut(false); setPhase(0); setCycle((c) => c + 1);
      }, 7200),
    ];
    return () => t.forEach(clearTimeout);
  }, [cycle]);
  const pick = (k) => { auto.current = false; setStyle(k); };

  return (
    <>
      <section id="top" className="hero wrap">
        <div className="hero-text">
          <p className="eyebrow">Milestone 1</p>
          <h1>Roomio</h1>
          <p className="lead">Aplicație de design interior în care îți construiești camera la dimensiunile reale și încerci în ea mobilă de la mai mulți furnizori, înainte s-o cumperi.</p>
        </div>
        <div className="hero-room">
          <p className="phase" aria-label="Design it. See it. Live it.">
            {PHASES.map((p, i) => <span key={p} className={i === phase ? "on" : i < phase ? "done" : ""}>{p}</span>)}
          </p>
          <div className={`room${out ? " out" : ""}`}><Room key={cycle} s={STYLES[style]} /></div>
          <div className="toggle" role="group" aria-label="Alege stilul camerei">
            {STYLE_ORDER.map((k) => (
              <button key={k} onClick={() => pick(k)} aria-pressed={style === k}>{k}</button>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section id="echipa" className="band">
          <div className="wrap">
            <h2>Echipa</h2>
            <ul className="plain team">
              {TEAM.map((m) => (
                <li key={m.name}>
                  <img src={m.photo} alt={m.name} />
                  <div className="who">
                    <h3>{m.name}</h3>
                    <p className="role">{m.role}</p>
                    <p className="task">{m.task}</p>
                    <a href={`mailto:${m.mail}`}>{m.mail}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="problema">
          <div className="wrap">
            <h2>Problema</h2>
            <p className="intro">Când cumperi mobilă, mai ales online, decizi pe baza unor poze și a dimensiunilor din fișa produsului. Din ele e greu să-ți dai seama cum va arăta piesa în camera ta.</p>
            <div className="problem">
              <ul className="plain list">
                {PROBLEMS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
              </ul>
              <figure className="plan-card">
                <Plan />
                <figcaption>Peretele are 290 cm. Canapeaua are 220 cm, iar ușa are nevoie de 80 cm ca să se deschidă. Împreună au nevoie de 300 cm, deci lipsesc 10 cm și ușa lovește canapeaua. Din fișa produsului nu ai cum să vezi asta.</figcaption>
              </figure>
            </div>
            <p className="note">Dacă piesa nu se potrivește, returul e complicat: mobila e mare, transportul costă și uneori trebuie demontată. Mulți o păstrează chiar dacă nu e ce și-au dorit.</p>
          </div>
        </section>

        <section id="solutia" className="band">
          <div className="wrap">
            <h2>Soluția</h2>
            <p className="intro">Roomio este o aplicație în care îți reproduci camera la dimensiunile reale și o mobilezi cu versiunile 3D ale produselor de la mai mulți furnizori. Vezi dacă piesele încap și cum arată împreună, apoi le comanzi direct din aplicație.</p>
            <ol className="plain steps">
              {STEPS.map(([t, d], i) => (
                <li key={t}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></li>
              ))}
            </ol>
            <div className="value">
              <span>Propunerea de valoare</span>
              <p>Știi înainte de cumpărare dacă mobila încape și dacă se potrivește cu restul camerei.</p>
            </div>
          </div>
        </section>

        <section id="clienti">
          <div className="wrap">
            <h2>Segmente de clienți</h2>
            <ul className="plain cols3">
              {SEGMENTS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>

        <section id="concurenta" className="band">
          <div className="wrap">
            <h2>Concurența</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Aplicație</th><th>Ce oferă</th><th>Ce îi lipsește</th></tr></thead>
                <tbody>{COMPETITORS.map(([n, w, l]) => <tr key={n}><td>{n}</td><td>{w}</td><td>{l}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="avantaj">
          <div className="wrap">
            <h2>Avantajul nostru</h2>
            <ul className="plain cols3 adv">
              {ADVANTAGES.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>

        <section id="metrici" className="band">
          <div className="wrap">
            <h2>Metrici cheie</h2>
            <ul className="plain metrics">
              {METRICS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>

        <section id="costuri">
          <div className="wrap">
            <h2>Structura costurilor</h2>
            <p className="intro">În prima fază, cea mai mare parte a bugetului este alocată echipei care dezvoltă produsul. Celelalte costuri sunt reduse la început și cresc pe măsură ce se extind catalogul, numărul de utilizatori, numărul de furnizori și volumul comenzilor.</p>
            <div className="split" aria-hidden="true">
              <span style={{ width: `${COSTS[0][1]}%` }}>Echipa · {COSTS[0][1]}%</span>
              <span>Restul · {100 - COSTS[0][1]}%</span>
            </div>
            <div className="stack" role="img" aria-label="Distribuția costurilor">
              {COSTS.map(([n, p], i) => <i key={n} className={`s${i}`} style={{ width: `${p}%` }} />)}
            </div>
            <ul className="plain legend">
              {COSTS.map(([n, p, d, dep], i) => (
                <li key={n} className={i === 0 ? "lead-cost" : ""}>
                  <b className={`s${i}`} />
                  <div><h3>{n}</h3><p>{d}</p><span className="dep">{dep}</span></div>
                  <em>{p}%</em>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="venituri" className="band">
          <div className="wrap">
            <h2>Surse de venit</h2>
            <ul className="plain cols2">
              {REVENUE.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
