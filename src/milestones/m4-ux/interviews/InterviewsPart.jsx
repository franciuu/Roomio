// Partea 1 din M4: interviurile, documentate, și concluziile lor
import { Placeholder } from "../../../shared/Placeholder.jsx";
import { PasswordGate } from "../../../shared/PasswordGate.jsx";
import { INTERVIEWS, INTERVIEW_CONCLUSIONS, INTERVIEW_GUIDE, INTERVIEW_PLAN, INTERVIEW_STATS, PROOF_DRIVE_URL, SCREENER, WISHES } from "./interviews-content.js";

// un interviu e făcut când are cel puțin vârsta participantului
const done = (p) => Boolean(p.age);

function Person({ p }) {
  return (
    <article className="m4-person">
      <header className="m4-person-head">
        <span className="m4-avatar" aria-hidden="true">{p.name[0]}</span>
        <div>
          <h3>{p.name}</h3>
          <span>{p.age} · {p.tech}</span>
        </div>
        <ul className="plain m4-chips">
          <li>{p.duration}</li>
          <li><Placeholder v={p.date} hint="data" /></li>
        </ul>
      </header>
      <p className="m4-person-sit">{p.situation}</p>
      <h4 className="m4-label">Ce am aflat</h4>
      <ul className="plain m4-findings">{p.findings.map((f) => <li key={f}>{f}</li>)}</ul>
      <blockquote className="m4-quote">„{p.quote}”</blockquote>
    </article>
  );
}

export function InterviewsPart() {
  const held = INTERVIEWS.filter(done).length;
  return (
    <main className="part-in">
      <section id="i-plan" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Planul interviurilor</h2>
          <p className="intro">Am discutat cu {held} persoane din segmentul principal de clienți despre ultima lor amenajare.</p>
          <dl className="m4-facts">
            {INTERVIEW_PLAN.map(([t, v, hint]) => <div key={t}><dt>{t}</dt><Placeholder as="dd" v={v} hint={hint} /></div>)}
          </dl>
          <h3 className="m4-sub">Pe scurt</h3>
          <ul className="plain m4-stats">
            {INTERVIEW_STATS.map(([v, t]) => <li key={t}><b>{v}</b><span>{t}</span></li>)}
          </ul>
        </div>
      </section>

      <section id="i-ghid">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Ghidul de interviu</h2>
          <p className="intro">Întrebările, în ordinea în care le-am pus. Ideea aplicației a fost prezentată abia după povestea ultimei amenajări.</p>
          <div className="m4-guide">
            {INTERVIEW_GUIDE.map(([theme, qs]) => (
              <div key={theme} className="m4-guide-col">
                <h3>{theme}<small>{qs.length} întrebări</small></h3>
                <ol>{qs.map((q, i) => <li key={i}><Placeholder v={q} hint={`Întrebarea ${i + 1}`} /></li>)}</ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="i-participanti" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Participanții și ce am aflat</h2>
          <p className="intro">Cine sunt participanții, ce am aflat de la fiecare și o frază din interviu.</p>
          <div className="m4-people">
            {INTERVIEWS.map((p, i) => done(p)
              ? <Person key={i} p={p} />
              : <div key={i} className="m4-empty"><b>Participant {i + 1}</b><span className="slot">Interviul următor, cu aceeași structură.</span></div>)}
          </div>

          <h3 className="m4-sub">Răspunsurile da / nu</h3>
          <div className="m4-table">
            <table>
              <thead><tr><th>Întrebarea</th>{INTERVIEWS.filter(done).map((p) => <th key={p.name}>{p.name}</th>)}</tr></thead>
              <tbody>
                {SCREENER.map(([q, answers, note]) => (
                  <tr key={q}>
                    <th scope="row">{q}{note && <small>{note}</small>}</th>
                    {answers.map((a, i) => <td key={i}><span className={`m4-yn ${a === "Da" ? "yes" : "no"}`}>{a}</span></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="i-dorinte">
        <div className="wrap">
          <span className="num">04</span>
          <h2>Ce își doresc de la o aplicație</h2>
          <p className="intro">Ce au răspuns participanții când i-am întrebat de ce ar avea nevoie de la o aplicație. Cele cerute de mai mulți sunt evidențiate.</p>
          <ul className="plain m4-wishes">
            {WISHES.map(([w, who]) => (
              <li key={w} className={who.length > 1 ? "all" : ""}>
                <span>{w}</span>
                <span className="m4-who">{who.map((n) => <i key={n}>{n}</i>)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="i-concluzii" className="band">
        <div className="wrap">
          <span className="num">05</span>
          <h2>Concluzii</h2>
          <p className="intro">Ce am aflat, pe scurt.</p>
          <ol className="plain m4-conclusions">
            {INTERVIEW_CONCLUSIONS.map(([t, d], i) => (
              <li key={i}>
                <span className="m4-tag">C{i + 1}</span>
                <Placeholder as="h3" v={t} hint={`Concluzia ${i + 1}`} />
                <Placeholder as="p" v={d} hint="Pe scurt" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="i-dovezi">
        <div className="wrap">
          <span className="num">06</span>
          <h2>Dovezi</h2>
          <p className="intro">Înregistrările și transcrierile interviurilor sunt într-un folder de Google Drive. După ce introduci parola, apare linkul către folder și îl poți deschide.</p>
          <PasswordGate id="m4-proof-pass">
            <div className="m4-proof">
              <span className="m4-label">Folderul cu dovezi</span>
              {PROOF_DRIVE_URL
                ? <a className="m4-proof-link" href={PROOF_DRIVE_URL} target="_blank" rel="noopener">Deschide folderul de Google Drive ↗</a>
                : <span className="slot">Linkul către folderul de Google Drive</span>}
              <p>Conține înregistrările audio și transcrierile tuturor interviurilor.</p>
            </div>
          </PasswordGate>
        </div>
      </section>
    </main>
  );
}
