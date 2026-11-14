// Partea 2 din M2: validarea soluției
import { SOLUTION_MEASURE, SOLUTION_METHOD, SOLUTION_TESTS } from "./solution-content.js";

export function SolutionPart() {
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
