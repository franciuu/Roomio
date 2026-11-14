// Partea 2 din M4: persona principală, construită din interviuri
import { Placeholder } from "../components/Placeholder.jsx";
import { PERSONA as P } from "./persona-content.js";

// [cheie, titlu, indiciu, stilul listei]
const LISTS = [
  ["goals", "Ce vrea", "Obiectivul", "ok"],
  ["frustrations", "Ce o frustrează", "Frustrarea", "no"],
  ["habits", "Cum alege mobila azi", "Obiceiul", "next"],
  ["tools", "Ce folosește", "Aplicația sau site-ul", "next"],
];

export function PersonaPart() {
  return (
    <main className="part-in">
      <section id="p-persona" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Persona</h2>
          <p className="intro">Utilizatorul principal al Roomio, adunat din ce au povestit participantele.</p>
          <article className="m4-persona">
            <div className="m4-persona-id">
              <span className="m4-persona-photo" aria-hidden="true">{P.name ? P.name[0] : "?"}</span>
              <Placeholder as="h3" v={P.name} hint="Nume" />
              <dl className="m4-meta">
                <div><dt>Vârsta</dt><Placeholder as="dd" v={P.age} hint="ani" /></div>
                <div><dt>Locuința</dt><Placeholder as="dd" v={P.home} hint="tipul locuinței" /></div>
                <div><dt>Ocupația</dt><Placeholder as="dd" v={P.job} hint="ocupație" /></div>
                <div><dt>Orașul</dt><Placeholder as="dd" v={P.city} hint="oraș" /></div>
              </dl>
            </div>
            <div className="m4-persona-story">
              <Placeholder as="blockquote" v={P.quote && `„${P.quote}”`} hint="O frază care o descrie" />
              <Placeholder as="p" v={P.bio} hint="Câteva rânduri despre situația persoanei și de ce mobilează acum." />
            </div>
          </article>
        </div>
      </section>

      <section id="p-nevoi">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Nevoi și frustrări</h2>
          <div className="m4-lists">
            {LISTS.map(([k, t, hint, style]) => (
              <div key={k} className="m4-box">
                <h3>{t}</h3>
                <ul className={`checks ${style}`}>{P[k].map((x, i) => <li key={i}><Placeholder v={x} hint={`${hint} ${i + 1}`} /></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
