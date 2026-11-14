// Harta ecranelor: cum se ajunge de la un ecran la altul
import { FLOW_EDGES, FLOW_LANES, FLOW_POS, WF_SCREENS } from "./wireframe-content.js";

const NW = 150, NH = 52;
// capătul săgeții, pe marginea dreptunghiului
const edge = ([x, y], [tx, ty]) => {
  const dx = tx - x, dy = ty - y;
  const t = Math.min((NW / 2 + 5) / Math.abs(dx || 1e-6), (NH / 2 + 5) / Math.abs(dy || 1e-6));
  return [x + dx * t, y + dy * t];
};
export function ScreenMap({ active, onPick }) {
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
