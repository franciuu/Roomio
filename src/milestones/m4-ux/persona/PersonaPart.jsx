// Partea 2 din M4: persona principală, cu povestea ei și cu nevoile adunate din interviuri
import { PERSONA as P } from "./persona-content.js";

// [cheie, titlu, stilul listei]
const LISTS = [
  ["goals", "Ce vrea", "ok"],
  ["frustrations", "Ce o frustrează", "no"],
  ["habits", "Cum alege mobila azi", "next"],
  ["tools", "Ce folosește", "next"],
  ["wishes", "Ce își dorește de la o aplicație", "ok"],
];

const initials = (name) => name.split(" ").map((w) => w[0]).join("");

export function PersonaPart() {
  return (
    <main className="part-in">
      <section id="p-persona" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Persona</h2>
          <p className="intro">Utilizatorul principal al Roomio: un personaj imaginar care reprezintă segmentul nostru principal de clienți.</p>

          <article className="m4-persona">
            <div className="m4-persona-id">
              <span className="m4-persona-photo" aria-hidden="true">{initials(P.name)}</span>
              <h3>{P.name}</h3>
              <p className="m4-persona-role">{P.segment}</p>
              <dl className="m4-meta">
                <div><dt>Vârsta</dt><dd>{P.age}</dd></div>
                <div><dt>Locuința</dt><dd>{P.home}</dd></div>
                <div><dt>Familia</dt><dd>{P.family}</dd></div>
                <div><dt>Bugetul</dt><dd>{P.budget}</dd></div>
              </dl>
              <ul className="plain m4-traits">{P.traits.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>

            <div className="m4-persona-story">
              <blockquote>„{P.quote}”</blockquote>
              <div className="m4-persona-text">{P.story.map((s) => <p key={s}>{s}</p>)}</div>
              <ul className="plain m4-scales">
                {P.scales.map(([t, l, r, v]) => (
                  <li key={t}>
                    <span className="m4-label">{t}</span>
                    <div className="m4-scale" style={{ "--v": `${v}%` }}><i /></div>
                    <div className="m4-scale-ends"><span>{l}</span><span>{r}</span></div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="p-nevoi">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Nevoi și frustrări</h2>
          <p className="intro">Adunate din formularul din M2 și din interviuri.</p>
          <div className="m4-lists">
            {LISTS.map(([k, t, style]) => (
              <div key={k} className="m4-box">
                <h3>{t}</h3>
                <ul className={`checks ${style}`}>{P[k].map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="m4-persona-source">{P.source}</p>
        </div>
      </section>
    </main>
  );
}
