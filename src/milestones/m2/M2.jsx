import "./m2.css";
import { Bars, Locked, Proof, Story } from "./components.jsx";
import { DIFFICULTIES, FINDINGS, FUNNEL, HYPOTHESES, IMPACT, M2_PARTS, NEXT, NOT_VALIDATED, PLAN, PROCESS, PROGRESS, QUOTES, Q_SCREEN, Q_STORY, SCREEN, SOLUTION_MEASURE, SOLUTION_METHOD, SOLUTION_TESTS, VALIDATED } from "./data.js";

export function M2({ part, onPart }) {
  const done = PROGRESS.filter((p) => p[2] === "done").length;
  return (
    <>
      <section id="top" className="hero-m2 wrap">
        <p className="eyebrow">Milestone 2 · Customer Discovery</p>
        <h1>Validarea ideii</h1>
        <p className="lead">Am verificat întâi dacă problema pe care vrea s-o rezolve Roomio există cu adevărat. Acum verificăm dacă soluția noastră o rezolvă.</p>

        <div className="progress" style={{ "--done": `${((done - 0.5) / (PROGRESS.length - 1)) * 100}%`, "--n": PROGRESS.length }}>
          <ol className="plain">
            {PROGRESS.map(([t, d, st]) => (
              <li key={t} className={st}><i aria-hidden="true" /><b>{t}</b><span>{d}</span></li>
            ))}
          </ol>
        </div>

        <div id="parti" className="parts" role="tablist" aria-label="Părțile din M2">
          {M2_PARTS.map((p, i) => (
            <button key={p.id} role="tab" aria-selected={part === p.id} className="part-card" onClick={() => onPart(p.id)}>
              <span className="part-num">Partea {i + 1}</span>
              <b>{p.label}</b>
              <span className={`part-status ${p.state}`}>{p.status}</span>
              <small>{p.sub}</small>
            </button>
          ))}
        </div>
      </section>

      {part === "problema" ? <M2Problem onPart={onPart} /> : <M2Solution />}
    </>
  );
}

function M2Solution() {
  return (
    <main className="part-in">
      <section id="s-teste" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Ce testăm</h2>
          <p className="intro">Pentru fiecare problemă confirmată în partea 1 am ales o funcție a soluției. În formular nu prezentăm Roomio: întrebăm despre o situație concretă în care funcția ar ajuta.</p>
          <ol className="plain tests">
            {SOLUTION_TESTS.map(([ev, feat, q], i) => (
              <li key={feat} className="test">
                <span className="test-label">Problema confirmată</span>
                <p className="test-ev">{ev}</p>
                <span className="test-arrow" aria-hidden="true">↓</span>
                <span className="test-label">Funcția testată · {String(i + 1).padStart(2, "0")}</span>
                <h3>{feat}</h3>
                <p className="test-q">„{q}”</p>
                <span className="part-status next">în așteptare</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="s-metoda">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Metoda</h2>
          <ol className="plain steps">
            {SOLUTION_METHOD.map(([t, d, st], i) => (
              <li key={t}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className={`part-status ${st === "în curs" ? "next" : "todo"}`}>{st}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="s-masuram" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Ce măsurăm</h2>
          <ul className="plain metrics">
            {SOLUTION_MEASURE.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
          </ul>
        </div>
      </section>

      <section id="s-rezultate">
        <div className="wrap">
          <span className="num">04</span>
          <h2>Rezultate</h2>
          <p className="intro">Formularul este deschis. Rezultatele apar aici după ce îl închidem și analizăm răspunsurile.</p>
          <ul className="plain bars pending" aria-label="Rezultate în așteptare">
            {SOLUTION_TESTS.map(([, feat]) => (
              <li key={feat}>
                <span className="bar-label">{feat}</span>
                <span className="bar-track"><i /></span>
                <span className="bar-val">–</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function M2Problem({ onPart }) {
  return (
    <>
      <section className="wrap p1-stats part-in">
        <ul className="plain stats">
          <li><b>35</b><span>de răspunsuri în 7 zile</span></li>
          <li><b>24</b><span>de povești despre ultima amenajare</span></li>
          <li><b>14 <small>din 35</small></b><span>au returnat o piesă care nu se potrivea</span></li>
          <li><b>21 <small>din 24</small></b><span>au măsurat cu ruleta</span></li>
        </ul>
      </section>

      <main>
        <section id="problema" className="band">
          <div className="wrap">
            <span className="num">01</span>
            <h2>Cum am identificat problema</h2>
            <p className="intro">Totul a pornit de la o experiență personală.</p>
            <Story />
            <div className="split2 hyp-wrap">
              <div>
                <h3>Ce am dedus</h3>
                <p className="intro">Mobila se alege din poze și din fișa produsului, iar abia după livrare afli dacă încape și dacă se potrivește cu restul. Am pornit de la trei ipoteze, pe care le-am verificat în formular:</p>
              </div>
              <ol className="plain hyp">
                {HYPOTHESES.map(([h, r], i) => <li key={i}><span className="num">I{i + 1}</span><p>{h}</p><em className={r === "parțial" ? "part" : ""}>{r}</em></li>)}
              </ol>
            </div>
          </div>
        </section>

        <section id="solutia">
          <div className="wrap split2">
            <div>
              <span className="num">02</span>
              <h2>Ce credeam că e soluția</h2>
            </div>
            <p className="big">O aplicație în care îți reproduci camera la dimensiunile reale, o mobilezi cu piese 3D de la mai mulți furnizori și comanzi direct din ea.</p>
          </div>
        </section>

        <section id="plan" className="band">
          <div className="wrap">
            <span className="num">03</span>
            <h2>Planul</h2>
            <ol className="plain steps steps4">
              {PLAN.map(([t, d], i) => <li key={t}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="proces">
          <div className="wrap">
            <span className="num">04</span>
            <h2>Procesul</h2>
            <ul className="plain cols3">
              {PROCESS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
            <ol className="plain funnel">
              {FUNNEL.map(([n, t]) => <li key={t} style={{ "--w": `${(n / FUNNEL[0][0]) * 100}%` }}><b>{n}</b><span>{t}</span></li>)}
            </ol>
            <div className="cols2 qs">
              <div>
                <h3>Întrebări da / nu</h3>
                <ol>{Q_SCREEN.map((q) => <li key={q}>{q}</li>)}</ol>
              </div>
              <div>
                <h3>Întrebări despre ultima amenajare</h3>
                <ol>{Q_STORY.map((q) => <li key={q}>{q}</li>)}</ol>
              </div>
            </div>
          </div>
        </section>

        <section id="rezultate" className="band">
          <div className="wrap">
            <span className="num">05</span>
            <h2>Ce am aflat</h2>
            <ul className="plain findings">
              {FINDINGS.map(([n, d]) => <li key={n + d}><b>{n}</b><p>{d}</p></li>)}
            </ul>
            <div className="cols2 charts">
              <div>
                <h3 className="sub-h">Răspunsurile da / nu</h3>
                <Bars items={SCREEN} />
              </div>
              <div>
                <h3 className="sub-h">Cea mai mare dificultate</h3>
                <Bars items={DIFFICULTIES.map(([l, n]) => [l, n, 24])} />
              </div>
            </div>
            <ul className="plain quotes">
              {QUOTES.map((q) => <li key={q}><blockquote>„{q}”</blockquote></li>)}
            </ul>
          </div>
        </section>

        <section id="impact">
          <div className="wrap">
            <span className="num">06</span>
            <h2>Ce schimbăm în Roomio</h2>
            <ul className="plain cols2 impact">
              {IMPACT.map(([t, d, why]) => <li key={t}><h3>{t}</h3><p>{d}</p><p className="why"><span>De ce</span>{why}</p></li>)}
            </ul>
          </div>
        </section>

        <section id="concluzie" className="band">
          <div className="wrap">
            <span className="num">07</span>
            <h2>Suntem pregătiți să validăm soluția?</h2>
            <p className="verdict">Da.</p>
            <p className="intro">Problema este validată. Următorul pas este validarea soluției.</p>
            <div className="cols2">
              <div>
                <h3>Problema validată</h3>
                <ul className="checks ok">{VALIDATED.map((v) => <li key={v}>{v}</li>)}</ul>
              </div>
              <div>
                <h3>Ce validăm acum</h3>
                <ul className="checks next">{NOT_VALIDATED.map((v) => <li key={v}>{v}</li>)}</ul>
              </div>
            </div>
            <button className="go" onClick={() => onPart("solutie")}>Vezi validarea soluției →</button>
            <h3 className="sub-h">Pașii următori</h3>
            <ol className="plain steps">
              {NEXT.map(([t, d], i) => <li key={t}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="dovezi">
          <div className="wrap">
            <span className="num">08</span>
            <h2>Dovezi</h2>
            <p className="intro">Capturi din Google Forms. Răspunsurile individuale sunt doar de la persoane care au fost de acord să apară cu prenumele și vârsta.</p>
            <Locked><Proof /></Locked>
          </div>
        </section>
      </main>
    </>
  );
}
