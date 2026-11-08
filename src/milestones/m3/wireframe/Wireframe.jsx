import "./wireframe.css";
import { useState, useEffect, useRef } from "react";
import { FLOW_EDGES, FLOW_LANES, FLOW_POS, WF_BY_ID, WF_SCREENS } from "./data.js";
import { WFScreen } from "./screens.jsx";

// ecranul e desenat la 1200 × 720 (sau la înălțimea lui, dacă e mai înalt) și scalat la lățimea containerului
const W = 1200, H = 720;
function Fit({ h = H, children }) {
  const ref = useRef(null);
  const [k, setK] = useState(0);
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setK(e.contentRect.width / W));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} className="wf-fit" style={{ aspectRatio: `${W} / ${h}` }}>
      <div style={{ width: W, height: h, transform: `scale(${k})` }}>{children}</div>
    </div>
  );
}

/* ---------- harta ecranelor ---------- */
const NW = 150, NH = 52;
// capătul săgeții, pe marginea dreptunghiului
const edge = ([x, y], [tx, ty]) => {
  const dx = tx - x, dy = ty - y;
  const t = Math.min((NW / 2 + 5) / Math.abs(dx || 1e-6), (NH / 2 + 5) / Math.abs(dy || 1e-6));
  return [x + dx * t, y + dy * t];
};
function Flow({ active, onPick }) {
  const [px, py] = FLOW_POS.proiecte, [mx, my] = FLOW_POS.mobileaza;
  return (
    <div className="flow-wrap">
      <svg className="flow" viewBox="0 0 900 380" role="img" aria-label="Harta ecranelor Roomio">
        <defs><marker id="wfArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" /></marker></defs>
        {FLOW_LANES.map(([t, y0, y1], i) => (
          <g key={t}>
            {i > 0 && <line className="lane-sep" x1="0" y1={y0} x2="900" y2={y0} />}
            <text className="lane" x="0" y={y0 + 18}>{t}</text>
          </g>
        ))}
        {FLOW_EDGES.map(([a, b, label, two, [ox, oy] = [0, 0]]) => {
          const [x1, y1] = edge(FLOW_POS[a], FLOW_POS[b]), [x2, y2] = edge(FLOW_POS[b], FLOW_POS[a]);
          const on = active === a || active === b;
          return (
            <g key={a + b} className={on ? "on" : ""}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} markerEnd="url(#wfArr)" markerStart={two ? "url(#wfArr)" : undefined} />
              <text className="el" x={(x1 + x2) / 2 + (x1 === x2 ? 10 : 0) + ox} y={(y1 + y2) / 2 - (y1 === y2 ? 8 : -4) + oy} textAnchor={x1 === x2 ? "start" : "middle"}>{label}</text>
            </g>
          );
        })}
        {/* click pe o cameră: din listă direct în Mobilează */}
        <g className={active === "proiecte" || active === "mobileaza" ? "on" : ""}>
          <path d={`M${px} ${py - NH / 2 - 4} C${px} 30 ${mx} 30 ${mx} ${my - NH / 2 - 4}`} markerEnd="url(#wfArr)" />
          <text className="el" x="410" y="34" textAnchor="middle">Click pe o cameră</text>
        </g>
        {WF_SCREENS.map((s) => {
          const [x, y] = FLOW_POS[s.id];
          return (
            <g key={s.id} className={`node${active === s.id ? " on" : ""}`} transform={`translate(${x - NW / 2} ${y - NH / 2})`} onClick={() => onPick(s.id)} onKeyDown={(e) => e.key === "Enter" && onPick(s.id)} role="button" tabIndex="0" aria-label={`${s.n} ${s.title}`}>
              <rect width={NW} height={NH} rx="6" />
              <text x="12" y="20" className="nn">{s.n}</text>
              <text x="12" y="39" className="nt">{s.short}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ---------- partea 1 din M3 ---------- */
export function Wireframe() {
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
          <div className="proto marks" data-focus={focus ?? undefined}><Fit h={s.h}><WFScreen key={screen} id={screen} /></Fit></div>
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
          <Flow active={screen} onPick={show} />
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
                <button type="button" className="thumb" onClick={() => show(x.id)} aria-label={`Vezi ${x.n} ${x.title} în detaliu`}><Fit h={x.h}><WFScreen id={x.id} /></Fit></button>
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
