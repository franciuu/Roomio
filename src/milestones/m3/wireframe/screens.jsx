import { WF_BY_ID } from "./data.js";

/* ---------- elementele de bază ale schiței ---------- */
// ecranele sunt doar de prezentare: butoanele sunt desenate, nu funcționează
const Btn = ({ children, primary, nav, on, className = "" }) => (
  <span className={`${nav ? "wf-tab" : "wf-btn"}${primary ? " primary" : ""}${on ? " on" : ""} ${className}`}>{children}</span>
);
// elementul explicat în nota cu numărul n: primește contur și număr când ecranul e prezentat
const Mark = ({ n, children, className = "", style }) => (
  <div className={`wf-hl ${className}`} data-n={n} style={{ "--i": n, ...style }}>
    {children}
    <i className="wf-pin">{n}</i>
  </div>
);
// imagine: dreptunghi tăiat în diagonală
const Img = ({ h = 80, label }) => (
  <div className="wf-img" style={{ height: h }}>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100" /><line x1="100" y1="0" x2="0" y2="100" /></svg>
    {label && <span>{label}</span>}
  </div>
);
const Field = ({ l, v, u }) => <div className="wf-field"><span>{l}</span><b>{v}{u && <em>{u}</em>}</b></div>;
const Check = ({ on, round, children, n }) => <div className={`wf-check${on ? " on" : ""}${round ? " round" : ""}`}><i />{children}{n != null && <small>{n}</small>}</div>;
const Switch = ({ on }) => <span className={`wf-switch${on ? " on" : ""}`} />;
// verdictul, cu formă diferită pentru fiecare stare (fără culoare)
const Verdict = ({ v, children }) => <span className={`wf-verdict ${v}`}><i />{children}</span>;
const Thumb = ({ w = 46, h = 34 }) => <span className="wf-thumb" style={{ width: w, height: h }} />;
const Link = ({ children }) => <span className="wf-link">{children}</span>;

// bara de sus, aceeași în toată aplicația
function AppBar({ active, room, right }) {
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
function RoomBar({ mode }) {
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
function RoomPlan({ furnish }) {
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

/* ---------- ecranele, în ordinea parcurgerii ---------- */
// formele de cameră din care alege utilizatorul: doar cele obișnuite
const SHAPES = [
  ["Dreptunghi", "M4 4H36V26H4Z"],
  ["Formă de L", "M4 4H22V14H36V26H4Z"],
  ["Trapez", "M10 4H30L36 26H4Z"],
  ["Colț teșit", "M4 4H28L36 12V26H4Z"],
];
const PIECES = ["Piesa 1", "Piesa 2", "Piesa 3", "Piesa 4", "Piesa 5", "Piesa 6"];

export const SCREENS = {
  proiecte: () => (
    <>
      <AppBar active="proiecte" />
      <div className="wf-body">
        <div className="wf-row between">
          <Mark n={1}><h4>Nume proiect</h4><small>3 camere · suprafață utilă</small></Mark>
          <Mark n={2}><Btn primary>+ Cameră nouă</Btn></Mark>
        </div>
        <div className="wf-grid4">
          <div className="wf-card">
            <Mark n={3}><Img h={200} label="miniatură 3D" /></Mark>
            <b>Camera 1</b>
            <div className="wf-row between"><small>N piese · total</small><Mark n={4}><Verdict v="fit">Totul încape</Verdict></Mark></div>
          </div>
          <div className="wf-card"><Img h={200} /><b>Camera 2</b><div className="wf-row between"><small>N piese · total</small><Verdict v="clash">Conflict</Verdict></div></div>
          <div className="wf-card"><Img h={200} /><b>Camera 3</b><div className="wf-row between"><small>Doar pereții</small><Verdict v="none">Nemobilată</Verdict></div></div>
          <div className="wf-card dashed"><div className="wf-empty">+ Adaugă o cameră</div></div>
        </div>
        <Mark n={5} className="wf-stack">
          <h6>Alte proiecte</h6>
          <div className="wf-irow wide"><Thumb w={56} h={40} /><b>Nume proiect</b><small>Camera 1 · Camera 2</small><Link>Deschide</Link></div>
          <div className="wf-irow wide"><Thumb w={56} h={40} /><b>Nume proiect</b><small>Camera 1</small><Link>Deschide</Link></div>
          <Link>+ Proiect nou</Link>
        </Mark>
      </div>
    </>
  ),

  camera: () => (
    <>
      <AppBar active="proiecte" room="Camera 1" />
      <Mark n={1} className="wf-sub"><RoomBar mode="build" /></Mark>
      <div className="wf-cols build">
        <aside className="wf-panel">
          <Mark n={2} className="wf-stack">
            <h6>Tipul și numele</h6>
            <div className="wf-row"><Field l="Tipul camerei" v="Tip ▾" /><Field l="Numele camerei" v="Camera 1" /></div>
          </Mark>
          <Mark n={3} className="wf-stack">
            <h6>Dimensiuni</h6>
            <div className="wf-row"><Field l="Lungime" v="0,00" u="m" /><Field l="Lățime" v="0,00" u="m" /><Field l="Înălțime" v="0,00" u="m" /></div>
          </Mark>
          <Mark n={4} className="wf-stack">
            <h6>Forma</h6>
            <div className="wf-shapes">
              {SHAPES.map(([t, d], i) => <span key={t} className={i === 0 ? "on" : ""}><svg viewBox="0 0 40 30" aria-hidden="true"><path d={d} /></svg>{t}</span>)}
            </div>
          </Mark>
          <Mark n={5} className="wf-stack">
            <h6>Imperfecțiuni</h6>
            <div className="wf-row"><small>Are ghene sau stâlpi?</small><Check round>Nu</Check><Check round on>Da</Check></div>
            {[["Element 1", "Ghenă", "80", "70", "Nordic", "340"], ["Element 2", "Stâlp", "30", "25", "Vestic", "300"]].map(([n, t, w, d, wall, p]) => (
              <div key={n} className="wf-elem">
                <div className="wf-row between"><b>{n}</b><Link>Scoate</Link></div>
                <div className="wf-row"><Field l="Tip" v={`${t} ▾`} /><Field l="Lățime" v={w} u="cm" /><Field l="Adâncime" v={d} u="cm" /></div>
                <div className="wf-row"><Field l="Perete" v={`${wall} ▾`} /><Field l="Distanța de la colț" v={p} u="cm" /></div>
              </div>
            ))}
            <Btn>+ Adaugă element</Btn>
          </Mark>
          <Mark n={6} className="wf-stack">
            <h6>Uși și ferestre</h6>
            <div className="wf-irow"><b>Ușă</b><small>90 cm · perete nordic · 200 cm de colț</small><Link>Editează</Link></div>
            <div className="wf-irow"><b>Fereastră</b><small>170 cm · perete vestic · 105 cm de colț</small><Link>Editează</Link></div>
            <Btn>+ Adaugă ușă sau fereastră</Btn>
          </Mark>
          <div className="wf-panel-foot">
            <Mark n={7} className="wf-stack"><small>Suprafață utilă</small><b className="wf-big">0,0 m²</b></Mark>
            <Btn primary>Continuă cu mobila</Btn>
          </div>
        </aside>
        <div className="wf-canvas">
          <span className="wf-float"><span className="wf-seg"><b>3D</b><span>Plan</span></span></span>
          <Mark n={8} className="wf-planbox"><RoomPlan /></Mark>
        </div>
      </div>
    </>
  ),

  mobileaza: () => (
    <>
      <AppBar active="proiecte" room="Camera 1" right={<Mark n={1}><span className="wf-total">De cumpărat <b>total</b></span></Mark>} />
      <div className="wf-sub"><RoomBar mode="furnish" /></div>
      <div className="wf-cols furnish">
        <aside className="wf-panel tight">
          <Mark n={2} className="wf-stack">
            <div className="wf-search">⌕ Caută o piesă</div>
            <div className="wf-chips"><b>Toate</b><span>Categoria 1</span><span>Categoria 2</span><span>Categoria 3</span></div>
            {PIECES.map((n) => (
              <div key={n} className="wf-erow"><Thumb w={50} h={40} /><div><b>{n}</b><small>L × l × Î</small><small>preț</small></div><span className="wf-plus">+</span></div>
            ))}
          </Mark>
          <small className="wf-hint">Trage în cameră sau apasă + pentru plasare automată.</small>
        </aside>
        <div className="wf-canvas">
          <Mark n={3} className="wf-vctl"><span>↺ ↻</span><span>− 100% +</span><span>Pereți</span></Mark>
          <span className="wf-compass">N</span>
          <Mark n={4} className="wf-otb"><span>L × l</span><span>↺</span><span>↻</span><span>⌫</span></Mark>
          <RoomPlan furnish />
          <div className="wf-legend"><span><i className="fit" />Încape</span><span><i className="clash" />Nu încape</span><span><i className="own" />Mobilier existent</span></div>
          <small className="wf-hint corner">Click dreapta pe o piesă: opțiuni · R: rotire · Q, E: vedere</small>
        </div>
        <aside className="wf-panel">
          <Mark n={5} className="wf-stack">
            <h6>Detalii piesă</h6>
            <small>Furnizor</small>
            <h6 className="flat">Nume piesă</h6>
            <span>Preț</span>
            <div className="wf-own"><div><b>Am deja acest produs</b><small>Nu intră în totalul de cumpărat</small></div><Switch /></div>
            <Verdict v="fit">Încape</Verdict>
            <small>Distanța până la cea mai apropiată piesă.</small>
            <dl className="wf-kv"><dt>Lățime</dt><dd>— cm</dd><dt>Adâncime</dt><dd>— cm</dd><dt>Înălțime</dt><dd>— cm</dd><dt>Rotație</dt><dd>↺ 0° ↻</dd></dl>
          </Mark>
          <div className="wf-panel-foot col">
            <Btn>Mută într-un loc liber</Btn>
            <Btn primary>Deschide lista completă</Btn>
          </div>
        </aside>
      </div>
    </>
  ),

  catalog: () => (
    <>
      <AppBar active="catalog" room="Camera 1" />
      <div className="wf-cols catalog">
        <aside className="wf-panel tight">
          <Mark n={1} className="wf-stack">
            <h6>Cameră</h6>
            <Check round>Toate camerele</Check><Check round on n="N">Camera 1</Check><Check round n="N">Camera 2</Check><Check round n="N">Camera 3</Check>
            <h6>Tipul produsului</h6>
            <Check n="N">Tip 1</Check><Check n="N">Tip 2</Check><Check n="N">Tip 3</Check><Check n="N">Tip 4</Check>
            <h6>Furnizor</h6>
            <Check n="N">Furnizor 1</Check><Check n="N">Furnizor 2</Check><Check n="N">Furnizor 3</Check>
          </Mark>
        </aside>
        <div className="wf-main">
          <Mark n={2}><div className="wf-row between"><div className="wf-search wide">⌕ Caută după nume, furnizor sau tip</div><div className="wf-row"><small>Doar ce încape</small><Switch /></div></div></Mark>
          <Mark n={3}><div className="wf-ctx"><span>Verdict pentru <b>Camera 1, locul ales</b>: spațiul liber</span><small>N piese</small></div></Mark>
          <div className="wf-grid3">
            {[["fit", "x cm liberi"], ["fit", "x cm liberi"], ["clash", "lipsesc x cm"], ["fit", "x cm liberi", true], ["clash", "lipsesc x cm"], ["fit", "x cm liberi"]].map(([v, t, sel], i) => {
              const card = <><Img h={92} /><b>Nume piesă</b><div className="wf-row between"><small>preț</small><Verdict v={v}>{t}</Verdict></div></>;
              return sel ? <Mark key={i} n={4} className="wf-pc sel">{card}</Mark> : <div key={i} className={`wf-pc${v === "clash" ? " dim" : ""}`}>{card}</div>;
            })}
          </div>
        </div>
        <aside className="wf-panel">
          <Mark n={5} className="wf-stack">
            <Img h={170} label="model 3D" />
            <small>Furnizor · tip</small>
            <h6 className="flat">Nume piesă</h6>
            <span>Preț</span>
            <dl className="wf-kv"><dt>Dimensiuni</dt><dd>L × l × Î</dd><dt>Potrivită pentru</dt><dd>tipuri de camere</dd></dl>
            <div className="wf-vrow"><span>Locul ales</span><Verdict v="fit">Încape</Verdict></div>
            <div className="wf-vrow"><span>Ușa de la intrare</span><Verdict v="fit">Trece</Verdict></div>
          </Mark>
          <div className="wf-panel-foot col"><Btn primary>Adaugă în cameră</Btn></div>
        </aside>
      </div>
    </>
  ),

  lista: () => (
    <>
      <AppBar active="lista" />
      <div className="wf-cols list">
        <div className="wf-main">
          <Mark n={1}><div className="wf-tabsline"><b>Toate camerele</b><span>Camera 1</span><span>Camera 2</span><span>Camera 3</span></div></Mark>
          <Mark n={2}><div className="wf-room"><Thumb w={64} h={46} /><div><b>Camera 1</b><small>N de cumpărat · N deja cumpărate</small></div><b>total</b><Link>Deschide în Mobilează</Link></div></Mark>
          <Mark n={3} className="wf-stack">
            <small className="wf-sec">De cumpărat</small>
            {["Piesa 1", "Piesa 2", "Piesa 3"].map((n) => (
              <div key={n} className="wf-item"><Thumb /><span>{n}</span><small>Furnizor</small><small>L × l × Î</small><b>preț</b></div>
            ))}
            <small className="wf-sec">Deja cumpărate</small>
            <div className="wf-item own"><Thumb /><span>Piesa 4</span><small>Furnizor</small><small>L × l × Î</small><b>deja cumpărată</b></div>
          </Mark>
          <div className="wf-room"><Thumb w={64} h={46} /><div><b>Camera 2</b><small>N de cumpărat · N deja cumpărate</small></div><b>total</b><Link>Deschide în Mobilează</Link></div>
        </div>
        <aside className="wf-panel">
          <Mark n={4} className="wf-stack">
            <small>De cumpărat, tot proiectul</small>
            <b className="wf-big">Total</b>
            <small>produse + livrare</small>
            <span className="wf-tag">Deja cumpărate: N produse</span>
          </Mark>
          <Mark n={5} className="wf-stack">
            <h6>Comenzi pe furnizori</h6>
            {["Furnizor 1", "Furnizor 2", "Furnizor 3"].map((n) => (
              <div key={n} className="wf-sup"><div className="wf-row between"><b>{n}</b><b>total</b></div><div className="wf-row between"><small>N produse · livrare</small><Btn className="sm">Comandă</Btn></div></div>
            ))}
          </Mark>
          <div className="wf-panel-foot col"><Btn>Exportă lista</Btn></div>
        </aside>
      </div>
    </>
  ),
};

// un ecran în rama de browser
export function WFScreen({ id }) {
  const s = WF_BY_ID[id];
  return (
    <div className="wf">
      <div className="wf-chrome"><i /><i /><i /><span>roomio.app/{s.url}</span></div>
      <div className="wf-page">{SCREENS[id]()}</div>
    </div>
  );
}
