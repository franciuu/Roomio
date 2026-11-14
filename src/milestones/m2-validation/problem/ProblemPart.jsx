// Partea 1 din M2: confirmarea problemei
import { BarChart } from "./components/BarChart.jsx";
import { EvidenceGallery } from "./components/EvidenceGallery.jsx";
import { PasswordGate } from "./components/PasswordGate.jsx";
import { ResearchStory } from "./components/ResearchStory.jsx";
import { DIFFICULTIES, FINDINGS, FUNNEL, HYPOTHESES, IMPACT, NEXT, NOT_VALIDATED, PLAN, PROCESS, QUOTES, Q_SCREEN, Q_STORY, SCREEN, VALIDATED } from "./problem-content.js";

export function ProblemPart({ onPart }) {
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
            <ResearchStory />
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
                <BarChart items={SCREEN} />
              </div>
              <div>
                <h3 className="sub-h">Cea mai mare dificultate</h3>
                <BarChart items={DIFFICULTIES.map(([l, n]) => [l, n, 24])} />
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
            <PasswordGate><EvidenceGallery /></PasswordGate>
          </div>
        </section>
      </main>
    </>
  );
}
