// Partea 1 din M3: wireframe-ul, ecran cu ecran, harta și toate ecranele
import "./wireframe.css";
import { useState } from "react";
import { ScaledFrame } from "../../../shared/ScaledFrame.jsx";
import { ScreenMap } from "./ScreenMap.jsx";
import { WireframeScreen } from "./WireframeScreens.jsx";
import { WF_BY_ID, WF_SCREENS } from "./wireframe-content.js";

// ecranele sunt desenate la 1200 × 720 (sau la înălțimea lor, dacă sunt mai înalte)
const W = 1200, H = 720;
const Screen = ({ id, h = H }) => <ScaledFrame w={W} h={h}><WireframeScreen id={id} /></ScaledFrame>;

export function WireframePart() {
  const [screen, setScreen] = useState("proiecte");
  const [focus, setFocus] = useState(null);
  const at = WF_SCREENS.findIndex((x) => x.id === screen);
  const s = WF_SCREENS[at];
  const pick = (id) => { setScreen(id); setFocus(null); };
  const show = (id) => { pick(id); document.getElementById("w-ecran")?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <main className="part-in">
      <section id="w-ecran">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Ecranele, pe rând</h2>
          <p className="intro">Fiecare ecran al aplicației, cu elementele principale numerotate și explicate.</p>
          <p className="wf-disclaimer"><i aria-hidden="true">i</i>Toate ecranele presupun că utilizatorul este deja autentificat în contul său.</p>
          <div className="wf-tabs" role="tablist" aria-label="Ecrane">
            {WF_SCREENS.map((x) => (
              <button key={x.id} role="tab" aria-selected={screen === x.id} onClick={() => pick(x.id)}>{x.n} <span>{x.short}</span></button>
            ))}
          </div>
          <div className="proto marks" data-focus={focus ?? undefined}><Screen key={screen} id={screen} h={s.h} /></div>
          <div className="proto-nav">
            <button type="button" disabled={at === 0} onClick={() => pick(WF_SCREENS[at - 1].id)}>← Ecranul anterior</button>
            <span>{at + 1} din {WF_SCREENS.length}</span>
            <button type="button" disabled={at === WF_SCREENS.length - 1} onClick={() => pick(WF_SCREENS[at + 1].id)}>Ecranul următor →</button>
          </div>
          <div className="proto-notes">
            <div>
              <span className="num">{s.n}{s.step && ` · ${s.step}`}</span>
              <h3>{s.title}</h3>
              <p>{s.what}</p>
              <ol className="plain anno" style={{ "--rows": Math.ceil(s.notes.length / 2) }}>
                {s.notes.map(([t, d], i) => (
                  <li key={t} onMouseEnter={() => setFocus(i + 1)} onMouseLeave={() => setFocus(null)}><i>{i + 1}</i><div><b>{t}</b>{d}</div></li>
                ))}
              </ol>
            </div>
            <aside>
              <h4>Legături cu alte ecrane</h4>
              <ul className="plain">
                {s.actions.map(([btn, to]) => <li key={btn}><b>{btn}</b><span>→ {WF_BY_ID[to].n} {WF_BY_ID[to].title}</span></li>)}
              </ul>
              <p className="proto-hint">Din orice ecran, bara de sus duce la Proiecte, Catalog sau Listă.</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="w-harta" className="band">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Harta ecranelor</h2>
          <p className="intro">Aplicația are cinci ecrane, grupate în trei secțiuni: Proiecte, Catalog și Listă. Pe fiecare săgeată scrie numele butonului care face trecerea. Apasă pe un ecran ca să-l vezi în detaliu.</p>
          <ScreenMap active={screen} onPick={show} />
        </div>
      </section>

      <section id="w-ecrane">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Toate ecranele</h2>
          <p className="intro">În ordinea în care le parcurge utilizatorul. Apasă pe un ecran ca să-l vezi în detaliu.</p>
          <ul className="plain thumbs">
            {WF_SCREENS.map((x) => (
              <li key={x.id}>
                <button type="button" className="thumb" onClick={() => show(x.id)} aria-label={`Vezi ${x.n} ${x.title} în detaliu`}><Screen id={x.id} h={x.h} /></button>
                <span className="num">{x.n}{x.step && ` · ${x.step}`}</span>
                <h3>{x.title}</h3>
                <p>{x.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
