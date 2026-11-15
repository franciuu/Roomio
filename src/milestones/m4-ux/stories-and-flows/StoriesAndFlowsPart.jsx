// Partea 3 din M4: user stories, cazurile de utilizare și fluxurile
import { Placeholder } from "../../../shared/Placeholder.jsx";
import { USE_CASES, USER_FLOWS, USER_STORIES } from "./stories-and-flows-content.js";

export function StoriesAndFlowsPart() {
  return (
    <main className="part-in">
      <section id="f-stories" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>User stories</h2>
          <p className="intro">Ce vrea să facă utilizatorul în Roomio și de ce, din ce au cerut participanții. Eticheta arată la câți participanți apare nevoia, iar criteriile de acceptare sunt stabilite de echipă.</p>
          <ol className="plain m4-stories">
            {USER_STORIES.map((s) => (
              <li key={s.id} className="m4-story-card">
                <header>
                  <span className="m4-tag">{s.id}</span>
                  <Placeholder className={`m4-prio${s.priority.startsWith("2") ? " all" : ""}`} v={s.priority} hint="prioritate" />
                </header>
                <p className="m4-story">
                  Ca <b><Placeholder v={s.role} hint="rol" /></b>, vreau <b><Placeholder v={s.want} hint="acțiune" /></b>, ca să <Placeholder v={s.benefit} hint="beneficiu" />.
                </p>
                <div className="m4-criteria">
                  <h4 className="m4-label">Criterii de acceptare</h4>
                  <ul className="checks ok">{s.criteria.map((c, i) => <li key={i}><Placeholder v={c} hint={`Criteriul ${i + 1}`} /></li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="f-cazuri">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Cazuri de utilizare</h2>
          <p className="intro">Ce face utilizatorul în aplicație, pas cu pas, așa cum au descris participanții.</p>
          <div className="m4-cases">
            {USE_CASES.map((u) => u.name ? (
              <article key={u.id} className="m4-case">
                <span className="m4-tag">{u.id}</span>
                <h3>{u.name}</h3>
                <dl className="m4-meta">
                  <div><dt>Actor</dt><dd>{u.actor}</dd></div>
                  <div><dt>Înainte</dt><dd>{u.pre}</dd></div>
                  <div><dt>Din interviul cu</dt><dd>{u.source}</dd></div>
                </dl>
                <ol className="m4-steps">{u.steps.map((x, i) => <li key={i}><Placeholder v={x} hint={`Pasul ${i + 1}`} /></li>)}</ol>
                <dl className="m4-meta">
                  <div><dt>Rezultat</dt><dd>{u.result}</dd></div>
                  <div><dt>Alternativ</dt><Placeholder as="dd" v={u.alt} hint="ce se întâmplă dacă ceva nu merge" /></div>
                </dl>
              </article>
            ) : (
              <div key={u.id} className="m4-empty"><b>{u.id}</b><span className="slot">Un caz de utilizare nou.</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="f-fluxuri" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Fluxuri</h2>
          <p className="intro">Cum au mobilat participanții o cameră, pas cu pas, așa cum au povestit în interviuri.</p>
          <div className="m4-flows">
            {USER_FLOWS.map((f, i) => (
              <div key={i} className="m4-flow">
                <Placeholder as="h3" v={f.name} hint={`Fluxul ${i + 1}`} />
                <ol className="plain m4-timeline">
                  {f.steps.map((x, j) => <li key={j}><span aria-hidden="true">{j + 1}</span><Placeholder as="p" v={x} hint={`Pasul ${j + 1}`} /></li>)}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
