// planul de sus din secțiunea Problema
/* ---------- plan: canapeaua blochează ușa ---------- */
export function Plan() {
  return (
    <svg className="plan" viewBox="0 0 320 236" role="img" aria-label="Plan de sus: perete de 290 cm, canapea de 220 cm în colț și o ușă care are nevoie de 80 cm ca să se deschidă; se suprapun 10 cm">
      <g className="dim">
        <line x1="20" y1="18" x2="300" y2="18" /><line x1="20" y1="13" x2="20" y2="23" /><line x1="300" y1="13" x2="300" y2="23" />
      </g>
      <text className="lbl" x="160" y="11" textAnchor="middle">perete 290 cm</text>
      <path className="wall" d="M223 190 H20 V30 H300 V190" />
      <rect className="sofa" x="20" y="108" width="212" height="82" />
      <text className="lbl" x="126" y="146" textAnchor="middle">canapea</text>
      <text className="lbl" x="126" y="161" textAnchor="middle">220 cm</text>
      <path className="swing-area" d="M300 190 L223 190 A77 77 0 0 1 300 113 Z" />
      <line className="door" x1="300" y1="190" x2="300" y2="113" />
      <path className="swing" d="M223 190 A77 77 0 0 1 300 113" />
      <text className="lbl" x="268" y="98" textAnchor="middle">ușă 80 cm</text>
      <path className="clash" d="M223 190 H232 V154 A77 77 0 0 0 223 190 Z" />
      <g className="dim warn-line">
        <line x1="223" y1="204" x2="232" y2="204" /><line x1="223" y1="199" x2="223" y2="209" /><line x1="232" y1="199" x2="232" y2="209" />
      </g>
      <text className="lbl warn" x="228" y="224" textAnchor="middle">lipsesc 10 cm</text>
    </svg>
  );
}
