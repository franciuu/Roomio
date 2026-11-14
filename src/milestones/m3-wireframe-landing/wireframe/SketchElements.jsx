// Piesele din care sunt desenate ecranele: butoane, câmpuri, puncte numerotate, bara de sus, planul camerei
// ecranele sunt doar de prezentare: butoanele sunt desenate, nu funcționează
export const Btn = ({ children, primary, nav, on, className = "" }) => (
  <span className={`${nav ? "wf-tab" : "wf-btn"}${primary ? " primary" : ""}${on ? " on" : ""} ${className}`}>{children}</span>
);
// elementul explicat în nota cu numărul n: primește contur și număr când ecranul e prezentat
export const Mark = ({ n, children, className = "", style }) => (
  <div className={`wf-hl ${className}`} data-n={n} style={{ "--i": n, ...style }}>
    {children}
    <i className="wf-pin">{n}</i>
  </div>
);
// imagine: dreptunghi tăiat în diagonală
export const Img = ({ h = 80, label }) => (
  <div className="wf-img" style={{ height: h }}>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100" /><line x1="100" y1="0" x2="0" y2="100" /></svg>
    {label && <span>{label}</span>}
  </div>
);
export const Field = ({ l, v, u }) => <div className="wf-field"><span>{l}</span><b>{v}{u && <em>{u}</em>}</b></div>;
export const Check = ({ on, round, children, n }) => <div className={`wf-check${on ? " on" : ""}${round ? " round" : ""}`}><i />{children}{n != null && <small>{n}</small>}</div>;
export const Switch = ({ on }) => <span className={`wf-switch${on ? " on" : ""}`} />;
// verdictul, cu formă diferită pentru fiecare stare (fără culoare)
export const Verdict = ({ v, children }) => <span className={`wf-verdict ${v}`}><i />{children}</span>;
export const Thumb = ({ w = 46, h = 34 }) => <span className="wf-thumb" style={{ width: w, height: h }} />;
export const Link = ({ children }) => <span className="wf-link">{children}</span>;

// bara de sus, aceeași în toată aplicația
export function AppBar({ active, room, right }) {
  return (
    <div className="wf-top">
      <b className="wf-logo"><span className="wf-logomark" />Roomio</b>
      <span className="wf-crumb">Nume proiect{room && <> / <b>{room}</b></>}</span>
      <nav className="wf-nav">
        <Btn nav on={active === "proiecte"}>Proiecte</Btn>
        <Btn nav on={active === "catalog"}>Catalog</Btn>
        <Btn nav on={active === "lista"}>Listă</Btn>
      </nav>
      <div className="wf-top-right">{right}<span className="wf-avatar">M</span></div>
    </div>
  );
}
// a doua bară, în interiorul unei camere
export function RoomBar({ mode }) {
  return (
    <div className="wf-sub-in">
      <Link>← Toate camerele</Link>
      <b>Camera 1</b>
      <span className="wf-seg">
        <Btn on={mode === "build"}>Construiește</Btn>
        <Btn on={mode === "furnish"}>Mobilează</Btn>
      </span>
    </div>
  );
}

/* ---------- planul camerei, cu etichete generice ---------- */
// o cameră dreptunghiulară cu două imperfecțiuni, o ușă și o fereastră; 1 cm = 1 unitate
export function RoomPlan({ furnish }) {
  return (
    <svg className="wf-plan" viewBox="-70 -60 560 490" aria-hidden="true">
      <defs>
        <pattern id="wfHatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" /></pattern>
        <pattern id="wfCross" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M0 0L10 10M10 0L0 10" /></pattern>
      </defs>
      <path className="p-wall" d="M200 0 H0 V360 H420 V0 H290" />
      <line className="p-win" x1="0" y1="105" x2="0" y2="275" />
      <line className="p-winl" x1="-5" y1="105" x2="-5" y2="275" /><line className="p-winl" x1="5" y1="105" x2="5" y2="275" />
      <path className="p-swing" d="M200 0 V90 A90 90 0 0 0 290 0" />
      <rect className="p-block" x="340" y="0" width="80" height="70" />
      <rect className="p-block" x="0" y="300" width="25" height="30" />
      {!furnish && <>
        <line className="p-dim" x1="0" y1="-30" x2="420" y2="-30" /><line className="p-dim" x1="0" y1="-36" x2="0" y2="-24" /><line className="p-dim" x1="420" y1="-36" x2="420" y2="-24" />
        <text className="p-dimt" x="210" y="-38">lungime</text>
        <line className="p-dim" x1="-34" y1="0" x2="-34" y2="360" /><line className="p-dim" x1="-40" y1="0" x2="-28" y2="0" /><line className="p-dim" x1="-40" y1="360" x2="-28" y2="360" />
        <text className="p-dimt" x="-44" y="184" transform="rotate(-90 -44 184)">lățime</text>
        <text className="p-lbl" x="380" y="32">element 1</text><text className="p-lbl" x="380" y="50">80 × 70</text>
        <text className="p-lbl" x="70" y="312">element 2</text><text className="p-lbl" x="70" y="330">30 × 25</text>
        <text className="p-lbl" x="245" y="-8">ușă</text>
        <text className="p-lbl" x="-14" y="190" transform="rotate(-90 -14 190)">fereastră</text>
        <text className="p-lbl big" x="210" y="190">Camera 1</text>
        <text className="p-lbl" x="210" y="212">suprafață utilă</text>
      </>}
      {/* exemplul din Mobilează: o piesă care încape, una care nu încape și una pe care clientul o are deja */}
      {furnish && <>
        <rect className="p-item sel" x="12" y="100" width="90" height="190" />
        <text className="p-lbl" x="57" y="200" transform="rotate(-90 57 200)">Piesa 1</text>
        <rect className="p-item clash" x="290" y="20" width="115" height="60" />
        <text className="p-lbl" x="347" y="104">Piesa 2</text>
        <rect className="p-item own" x="230" y="230" width="140" height="95" />
        <text className="p-lbl" x="300" y="283">Piesa 3</text>
        {/* cotele piesei selectate până la piesa vecină și până la perete */}
        <line className="p-meas" x1="102" y1="195" x2="230" y2="195" /><text className="p-mt" x="166" y="189">x cm</text>
        <line className="p-meas" x1="57" y1="290" x2="57" y2="360" /><text className="p-mt" x="69" y="330" textAnchor="start">x cm</text>
      </>}
    </svg>
  );
}
