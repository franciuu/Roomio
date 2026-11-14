// Partea 4 din M4: ce am schimbat în wireframe după interviuri, cu ecranele înainte și după
import "../../m3-wireframe-landing/wireframe/wireframe.css";
import { useState } from "react";
import { ScaledFrame } from "../../../shared/ScaledFrame.jsx";
import { WireframeScreen } from "../../m3-wireframe-landing/wireframe/WireframeScreens.jsx";
import { WF_BY_ID } from "../../m3-wireframe-landing/wireframe/wireframe-content.js";
import { UpdatedScreen } from "./UpdatedScreens.jsx";
import { WF_UPDATES } from "./wireframe-update-content.js";

const W = 1200, H = 720;

export function WireframeUpdatePart() {
  const [id, setId] = useState(WF_UPDATES[0].id);
  const [after, setAfter] = useState(true);
  const [focus, setFocus] = useState(null);
  const s = WF_UPDATES.find((x) => x.id === id);
  // înălțimea ecranului: cea nouă, dacă ecranul a crescut, altfel cea din M3
  const h = after ? (s.h || WF_BY_ID[id].h || H) : (WF_BY_ID[id].h || H);
  const pick = (next) => { setId(next); setFocus(null); };

  return (
    <main className="part-in">
      <section id="w4-schimbari" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Ce am schimbat</h2>
          <p className="intro">Fiecare schimbare din wireframe vine dintr-o concluzie a interviurilor. Ecranele 1.1 Lista proiectelor și 3.1 Lista de cumpărături au rămas la fel.</p>
          <div className="m4-table">
            <table>
              <thead><tr><th>Ecranul</th><th>Schimbarea</th><th>Înainte</th><th>Acum</th><th>De unde vine</th></tr></thead>
              <tbody>
                {WF_UPDATES.flatMap((x) => x.changes.map(([t, before, now, src], i) => (
                  <tr key={x.id + t}>
                    {i === 0 && <th scope="rowgroup" rowSpan={x.changes.length} className="m4-screen">{x.n} {x.title}</th>}
                    <td><b>{t}</b></td>
                    <td className="m4-muted">{before}</td>
                    <td>{now}</td>
                    <td><span className="m4-tag">{src}</span></td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="w4-ecrane">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Ecranele actualizate</h2>
          <p className="intro">Comută între ecranul din M3 și cel de după interviuri. Elementele noi sunt numerotate și explicate dedesubt.</p>
          <div className="m4-wf-bar">
            <div className="wf-tabs" role="tablist" aria-label="Ecrane actualizate">
              {WF_UPDATES.map((x) => (
                <button key={x.id} role="tab" aria-selected={id === x.id} onClick={() => pick(x.id)}>{x.n} <span>{x.title}</span></button>
              ))}
            </div>
            <div className="m4-toggle" role="group" aria-label="Versiunea ecranului">
              <button type="button" aria-pressed={!after} onClick={() => setAfter(false)}>Înainte (M3)</button>
              <button type="button" aria-pressed={after} onClick={() => setAfter(true)}>După interviuri</button>
            </div>
          </div>
          <div className={`proto${after ? " marks" : ""}`} data-focus={focus ?? undefined}>
            <ScaledFrame key={id + after} w={W} h={h}>
              {after ? <UpdatedScreen id={id} /> : <WireframeScreen id={id} />}
            </ScaledFrame>
          </div>
          <div className="m4-wf-notes">
            <h3>{s.n} {s.title}</h3>
            <ol className="plain anno" style={{ "--rows": Math.ceil(s.changes.length / 2) }}>
              {s.changes.map(([t, , now, src], i) => (
                <li key={t} onMouseEnter={() => setFocus(i + 1)} onMouseLeave={() => setFocus(null)}>
                  <i>{i + 1}</i>
                  <div><b>{t}</b>{now} <span className="m4-src">{src}</span></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
