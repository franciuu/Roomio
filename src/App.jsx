import { useState, useEffect, useRef } from "react";

/* ---------- date M1 ---------- */
const TEAM = [
  { name: "Stan Ariana-Maria", role: "AI & 3D", task: "Piesele 3D generate cu AI și datele.", mail: "ariana_maria.stan@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/ariana.jpeg` },
  { name: "Ruse Teodor", role: "Developer", task: "Aplicația web și editorul de camere.", mail: "teodor.ruse@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/teodor.jpeg` },
  { name: "Balint Franceska", role: "UI/UX Designer", task: "Interfața și testarea cu utilizatori.", mail: "franceska.balint@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/franceska.png` },
  { name: "Păștinică Costinela-Beatrice", role: "Marketing & Comunicare", task: "Promovarea și relația cu furnizorii.", mail: "costinela.pastinica@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/beatrice.PNG` },
];

const PROBLEMS = [
  ["Mărimea", "Știi că o canapea are 220 cm, dar nu vezi dacă mai rămâne loc de trecere, dacă se mai deschide ușa sau dacă acoperă caloriferul."],
  ["Stilul", "Piesa arată bine în poza furnizorului, dar nu știi cum se potrivește cu podeaua, culoarea pereților și mobila pe care o ai deja."],
  ["Comparația", "Dacă te uiți la produse de la mai mulți furnizori, ajungi cu multe tab-uri deschise și nu poți vedea piesele împreună."],
];

const STEPS = [
  ["Design it", "Introduci dimensiunile camerei și poziția ușilor și a ferestrelor. Poți adăuga și mobila pe care o ai deja și vrei s-o păstrezi."],
  ["See it", "Alegi piese din cataloagele furnizorilor. Fiecare piesă 3D are dimensiunile produsului real, așa că vezi exact cât spațiu ocupă."],
  ["Live it", "Când ești mulțumit de cameră, comanzi piesele direct din Roomio. Comanda este plasată direct la furnizorii lor."],
];

const SEGMENTS = [
  ["Tineri care se mută", "22–35 de ani. Se mută în prima locuință sau într-o chirie nouă și cumpără multă mobilă deodată, cu un buget limitat."],
  ["Familii care reamenajează", "Schimbă mobila într-o cameră și vor să vadă varianta finală, ca să se pună de acord înainte de comandă."],
  ["Proprietari și designeri de interior", "Mobilează locuințe de închiriat sau proiectează camere pentru alte persoane și trebuie să arate cum va arăta spațiul."],
];

const COMPETITORS = [
  ["IKEA Kreativ", "Scanezi camera, ștergi mobila existentă și pui produse IKEA în locul ei.", "Doar produse IKEA."],
  ["Planner 5D", "Planificator 2D/3D cu un catalog de peste 5.000 de obiecte.", "În varianta gratuită, majoritatea obiectelor sunt blocate; catalogul complet și personalizarea cer abonament."],
  ["Roomstyler", "Planificator 3D online, cu peste 120.000 de obiecte de la mărci cunoscute.", "Tehnologie veche: extensia de browser nu a mai fost actualizată din 2016."],
  ["Homestyler", "Bibliotecă mare de piese de mobilier 3D și randări foto-realiste.", "Randările la rezoluție mare (4K) sunt contra cost."],
  ["RoomSketcher", "Planuri la scară, vizualizare 3D, măsurători precise.", "Bibliotecă de mobilier limitată în varianta gratuită; planurile 2D sunt contra cost."],
];

const ADVANTAGES = [
  ["Mai mulți furnizori", "Poți pune în aceeași cameră o canapea de la un furnizor și o masă de la altul. IKEA Kreativ arată doar produse IKEA, iar în celelalte aplicații piesele nu se pot comanda direct din aplicație."],
  ["Totul la scară", "Atât camera, cât și piesele au dimensiunile reale, deci verificarea spațiului e corectă."],
  ["Comanzi din aplicație", "Plasezi comanda din Roomio și ea ajunge direct la furnizorul fiecărei piese. Nu mai cauți produsele pe fiecare site."],
];

const METRICS = [
  ["Utilizatori activi", "Câți oameni își fac cont și încep să lucreze la o cameră."],
  ["Camere finalizate", "Câți dintre ei termină de mobilat camera. Arată dacă aplicația e ușor de folosit până la capăt."],
  ["Comenzi plasate", "Câți utilizatori comandă piese prin Roomio și valoarea comenzilor. De aici vine comisionul."],
  ["Furnizori parteneri", "Câți furnizori au catalogul integrat în Roomio. Cu cât sunt mai mulți, cu atât utilizatorii au de unde alege."],
];

// [cost, %, descriere, de ce depinde]
const COSTS = [
  ["Echipa și dezvoltarea", 60, "Echipa de patru oameni construiește produsul: aplicația web, piesele de mobilier 3D generate cu AI, interfața și promovarea. În prima fază, aici se concentrează cea mai mare parte a muncii.", "cost fix"],
  ["Marketing", 14, "Reclame pe rețelele sociale și colaborări cu creatori de conținut din zona de design interior, pentru a atrage primii utilizatori.", "buget stabilit de noi"],
  ["Generare 3D cu AI", 9, "Puterea de procesare din spatele tehnologiei care transformă fotografiile produselor în piese de mobilier 3D.", "crește odată cu catalogul"],
  ["Cloud, stocare, trafic", 7, "Serverele, spațiul de stocare și transferul de date necesare pentru ca piesele de mobilier 3D, care sunt fișiere mari, să se încarce rapid.", "crește odată cu utilizatorii"],
  ["Juridic, contabilitate, parteneriate", 6, "Serviciile de contabilitate, conformitatea cu GDPR, termenii și condițiile pentru comenzi și contractele încheiate cu furnizorii.", "crește odată cu furnizorii"],
  ["Plăți și suport comenzi", 4, "Comisioanele percepute de procesatorul de plăți și asistența oferită utilizatorilor pentru comenzi și retururi.", "crește odată cu comenzile"],
];

const REVENUE = [
  ["Comision de afiliere", "Un procent din fiecare comandă plasată prin Roomio la furnizori. Este sursa principală de venit."],
  ["Promovare pentru furnizori", "Furnizorii pot plăti ca produsele lor să apară evidențiate sau mai sus în căutare."],
  ["Roomio Pro", "Abonament cu randări de calitate mai bună, proiecte nelimitate și export de planuri. Gândit pentru cei care fac des randări, cum sunt designerii și arhitecții de interior."],
  ["Camere de prezentare pentru furnizori", "Furnizorii plătesc un abonament ca să afișeze în Roomio camere mobilate complet cu produsele lor. Utilizatorii le pot folosi ca inspirație sau ca punct de plecare pentru propria cameră."],
];

const STYLES = {
  Scandinav: { wall: "#E6ECEF", floor: "#DCC7A3", sofa: "#8DA8C8", rug: "#F2EFE7", table: "#B58B5A", chair: "#E2B94B", shelf: "#F4F3EF", plant: "#5C8A5A", lamp: "#F1EBE0" },
  Industrial: { wall: "#B7BCC4", floor: "#76706B", sofa: "#3D424A", rug: "#8C929B", table: "#23272D", chair: "#B06C3E", shelf: "#2D3139", plant: "#4E7A52", lamp: "#34383F" },
  Boem: { wall: "#F0DCCB", floor: "#C99A6B", sofa: "#C0654A", rug: "#F4D35E", table: "#7A4E2D", chair: "#3F7F72", shelf: "#E8CFAF", plant: "#3E7B4C", lamp: "#D9A441" },
};

/* ---------- camera izometrică ---------- */
const iso = (a, b, z = 0) => [260 + (a - b) * 33, 130 + (a + b) * 18.5 - z];
const pts = (arr) => arr.map((p) => p.join(",")).join(" ");
const shade = (hex, f) => {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.round(f < 0 ? v * (1 + f) : v + (255 - v) * f));
  return `rgb(${ch.join(",")})`;
};

// cutie izometrică: fețele vizibile (stânga-față, dreapta, sus)
function Box({ a, b, w, d, h, c, z0 = 0 }) {
  const top = [iso(a, b, z0 + h), iso(a + w, b, z0 + h), iso(a + w, b + d, z0 + h), iso(a, b + d, z0 + h)];
  const right = [iso(a + w, b, z0), iso(a + w, b + d, z0), iso(a + w, b + d, z0 + h), iso(a + w, b, z0 + h)];
  const left = [iso(a, b + d, z0), iso(a + w, b + d, z0), iso(a + w, b + d, z0 + h), iso(a, b + d, z0 + h)];
  return (
    <g>
      <polygon points={pts(left)} style={{ fill: shade(c, -0.12) }} />
      <polygon points={pts(right)} style={{ fill: shade(c, -0.28) }} />
      <polygon points={pts(top)} style={{ fill: shade(c, 0.08) }} />
    </g>
  );
}

// umbră moale pe podea, sub o piesă
const Shadow = ({ a, b, w, d }) => (
  <polygon className="shadow" filter="url(#soft)" points={pts([iso(a + 0.06, b + 0.06), iso(a + w + 0.16, b + 0.06), iso(a + w + 0.16, b + d + 0.16), iso(a + 0.06, b + d + 0.16)])} />
);

// piesă de mobilier care „cade” în cameră
const Piece = ({ delay, children }) => <g className="drop" style={{ animationDelay: `${delay}ms` }}>{children}</g>;

// dreptunghiuri pe peretele stâng (a = 0) și pe cel drept (b = 0)
const onLeft = (b1, b2, z1, z2) => pts([iso(0, b1, z1), iso(0, b2, z1), iso(0, b2, z2), iso(0, b1, z2)]);
const onRight = (a1, a2, z1, z2) => pts([iso(a1, 0, z1), iso(a2, 0, z1), iso(a2, 0, z2), iso(a1, 0, z2)]);

function Sofa({ s }) {
  const c = s.sofa, cushion = shade(s.sofa, 0.1);
  return (
    <>
      <Shadow a={0.3} b={1.3} w={1.7} d={3.2} />
      <Box a={0.3} b={1.3} w={1.7} d={0.4} h={24} c={c} />
      <Box a={0.3} b={1.7} w={0.45} d={2.4} h={34} c={c} />
      <Box a={0.75} b={1.7} w={1.25} d={2.4} h={10} c={c} />
      <Box a={0.75} b={1.72} w={1.22} d={1.17} h={7} z0={10} c={cushion} />
      <Box a={0.75} b={2.91} w={1.22} d={1.17} h={7} z0={10} c={cushion} />
      <Box a={0.8} b={2.0} w={0.18} d={0.55} h={13} z0={17} c={s.chair} />
      <Box a={0.8} b={3.3} w={0.18} d={0.55} h={13} z0={17} c={s.rug} />
      <Box a={0.3} b={4.1} w={1.7} d={0.4} h={24} c={c} />
    </>
  );
}

function Table({ s }) {
  const legC = shade(s.table, -0.15);
  const leg = (a, b) => <Box a={a} b={b} w={0.07} d={0.07} h={12} c={legC} />;
  return (
    <>
      <Shadow a={2.9} b={2.4} w={1.2} d={1.2} />
      {leg(2.95, 2.45)}{leg(3.98, 2.45)}{leg(2.95, 3.48)}{leg(3.98, 3.48)}
      <Box a={2.9} b={2.4} w={1.2} d={1.2} h={3} z0={12} c={s.table} />
      <Box a={3.15} b={2.65} w={0.45} d={0.32} h={3} z0={15} c={s.sofa} />
      <Box a={3.2} b={2.68} w={0.38} d={0.26} h={2} z0={18} c={s.chair} />
    </>
  );
}

function Chair({ s }) {
  const c = s.chair, legC = shade(s.table, -0.2);
  return (
    <>
      <Shadow a={4.2} b={3.9} w={1.3} d={1.3} />
      <Box a={4.25} b={3.95} w={0.07} d={0.07} h={7} c={legC} />
      <Box a={5.4} b={3.95} w={0.07} d={0.07} h={7} c={legC} />
      <Box a={4.25} b={5.1} w={0.07} d={0.07} h={7} c={legC} />
      <Box a={4.2} b={3.9} w={1.3} d={0.25} h={16} z0={7} c={c} />
      <Box a={4.2} b={4.15} w={1.0} d={0.8} h={8} z0={7} c={c} />
      <Box a={4.22} b={4.17} w={0.96} d={0.76} h={5} z0={15} c={shade(c, 0.12)} />
      <Box a={5.2} b={4.15} w={0.3} d={0.8} h={28} z0={7} c={c} />
      <Box a={4.2} b={4.95} w={1.3} d={0.25} h={16} z0={7} c={c} />
      <Box a={5.4} b={5.1} w={0.07} d={0.07} h={7} c={legC} />
    </>
  );
}

const BOOKS = [[0.14, 14], [0.1, 16], [0.16, 13], [0.12, 15], [0.1, 12]]; // [lățime, înălțime]

function Shelf({ s }) {
  const colors = [s.chair, s.sofa, s.table, s.plant, shade(s.rug, -0.25)];
  return (
    <>
      <Shadow a={2.4} b={0.1} w={2.2} d={0.6} />
      <Box a={2.4} b={0.1} w={2.2} d={0.06} h={64} c={s.shelf} />
      <Box a={2.4} b={0.1} w={0.05} d={0.6} h={64} c={s.shelf} />
      {[0, 20, 40].map((z0, li) => {
        let a = 2.52 + li * 0.35;
        return (
          <g key={z0}>
            <Box a={2.4} b={0.16} w={2.2} d={0.54} h={3} z0={z0} c={s.shelf} />
            {BOOKS.map(([bw, bh], i) => {
              const book = <Box key={i} a={a} b={0.22} w={bw} d={0.4} h={bh} z0={z0 + 3} c={colors[(i + li) % colors.length]} />;
              a += bw + 0.02;
              return book;
            })}
          </g>
        );
      })}
      <Box a={2.4} b={0.16} w={2.2} d={0.54} h={3} z0={61} c={s.shelf} />
      <Box a={4.55} b={0.1} w={0.05} d={0.6} h={64} c={s.shelf} />
    </>
  );
}

function Plant({ s }) {
  const [cx, cy] = iso(0.65, 0.55, 22);
  const leaves = [[0, -6, 13, -0.1], [-12, -12, 13, -0.15], [12, -14, 13, 0.08], [-7, -26, 12, 0], [8, -28, 11, -0.22], [0, -38, 9, 0.12]];
  return (
    <>
      <Shadow a={0.4} b={0.3} w={0.5} d={0.5} />
      <Box a={0.4} b={0.3} w={0.5} d={0.5} h={22} c={shade(s.wall, -0.3)} />
      {leaves.map(([dx, dy, r, f], i) => <ellipse key={i} cx={cx + dx} cy={cy + dy} rx={r} ry={r * 0.8} style={{ fill: shade(s.plant, f) }} />)}
    </>
  );
}

function Lamp({ s }) {
  const metal = shade(s.table, -0.25);
  const [gx, gy] = iso(0.6, 4.9, 72);
  return (
    <>
      <Box a={0.45} b={4.75} w={0.3} d={0.3} h={2} c={metal} />
      <Box a={0.57} b={4.87} w={0.06} d={0.06} h={64} z0={2} c={metal} />
      <circle className="glow" cx={gx} cy={gy} r="42" fill="url(#glow)" />
      <Box a={0.38} b={4.68} w={0.44} d={0.44} h={16} z0={64} c={s.lamp} />
    </>
  );
}

function Room({ s }) {
  const floor = [iso(0, 0), iso(6, 0), iso(6, 6), iso(0, 6)];
  const wallL = [iso(0, 6), iso(0, 0), iso(0, 0, 120), iso(0, 6, 120)];
  const wallR = [iso(0, 0), iso(6, 0), iso(6, 0, 120), iso(0, 0, 120)];
  const sun = [iso(3.2, 0.9), iso(5.0, 0.9), iso(5.7, 3.3), iso(3.9, 3.3)];
  const frame = shade(s.wall, -0.35);
  const ln = (p, q, style) => <line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} style={style} />;
  const dim = (p1, p2, t1, t2) => (
    <g className="dimline">
      <line pathLength="1" x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} />
      <line pathLength="1" x1={t1[0][0]} y1={t1[0][1]} x2={t1[1][0]} y2={t1[1][1]} />
      <line pathLength="1" x1={t2[0][0]} y1={t2[0][1]} x2={t2[1][0]} y2={t2[1][1]} />
    </g>
  );
  return (
    <svg viewBox="0 0 520 380" role="img" aria-label="Cameră izometrică amenajată cu canapea, măsuță, fotoliu, bibliotecă, lampă și plantă">
      <defs>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" /></filter>
        <radialGradient id="glow"><stop offset="0" stopColor="#FFE6A8" stopOpacity="0.9" /><stop offset="1" stopColor="#FFE6A8" stopOpacity="0" /></radialGradient>
      </defs>

      <polygon className="rise" points={pts(wallL)} style={{ fill: shade(s.wall, -0.04) }} />
      <polygon className="rise" points={pts(wallR)} style={{ fill: shade(s.wall, -0.16) }} />
      <g className="art">
        <polygon points={onLeft(2.3, 3.5, 56, 92)} style={{ fill: shade(s.table, -0.15) }} />
        <polygon points={onLeft(2.38, 3.42, 60, 88)} style={{ fill: "#F7F4EE" }} />
        <polygon points={onLeft(2.6, 3.2, 66, 82)} style={{ fill: s.chair }} />
      </g>
      <g className="win">
        <polygon points={onRight(3.4, 5.4, 70, 110)} style={{ fill: shade(s.wall, 0.6), stroke: frame }} />
        {ln(iso(4.4, 0, 70), iso(4.4, 0, 110), { stroke: frame })}
        {ln(iso(3.4, 0, 90), iso(5.4, 0, 90), { stroke: frame })}
      </g>

      <polygon className="floor" pathLength="1" points={pts(floor)} style={{ fill: s.floor }} />
      <g className="planks">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <g key={i}>{ln(iso(0, i * 0.6), iso(6, i * 0.6), { stroke: shade(s.floor, -0.12) })}</g>)}
      </g>

      <Piece delay={1250}>
        <Box a={2.1} b={1.5} w={2.6} d={2.8} h={1.5} c={s.rug} />
        <polygon className="rug-border" points={pts([iso(2.28, 1.68, 1.5), iso(4.52, 1.68, 1.5), iso(4.52, 4.12, 1.5), iso(2.28, 4.12, 1.5)])} style={{ stroke: shade(s.rug, -0.18) }} />
      </Piece>
      <polygon className="sun" points={pts(sun)} />
      <Piece delay={1350}><Plant s={s} /></Piece>
      <Piece delay={1450}><Shelf s={s} /></Piece>
      <Piece delay={1650}><Sofa s={s} /></Piece>
      <Piece delay={1900}><Table s={s} /></Piece>
      <Piece delay={2050}><Lamp s={s} /></Piece>
      <Piece delay={2200}><Chair s={s} /></Piece>

      {dim(iso(6.7, 0), iso(6.7, 6), [iso(6.4, 0), iso(7, 0)], [iso(6.4, 6), iso(7, 6)])}
      {dim(iso(0, 6.7), iso(6, 6.7), [iso(0, 6.4), iso(0, 7)], [iso(6, 6.4), iso(6, 7)])}
      <g className="dimtext">
        <text x={iso(7.2, 3)[0]} y={iso(7.2, 3)[1] + 4}>360 cm</text>
        <text x={iso(3, 7.3)[0]} y={iso(3, 7.3)[1] + 14} textAnchor="middle">360 cm</text>
      </g>
    </svg>
  );
}

/* ---------- plan: canapeaua blochează ușa ---------- */
function Plan() {
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

/* ---------- navigare ---------- */
const MILESTONES = [
  { id: "m1", label: "M1", ready: true, sections: [["echipa", "Echipa"], ["problema", "Problema"], ["solutia", "Soluția"], ["clienti", "Clienți"], ["concurenta", "Concurența"], ["avantaj", "Avantaj"], ["metrici", "Metrici"], ["costuri", "Costuri"], ["venituri", "Venituri"]] },
  { id: "m2", label: "M2", ready: true, sections: [["problema", "Problema"], ["solutia", "Soluția"], ["plan", "Planul"], ["proces", "Procesul"], ["rezultate", "Rezultate"], ["impact", "Impact"], ["concluzie", "Concluzie"], ["dovezi", "Dovezi"]] },
  ...Array.from({ length: 8 }, (_, i) => ({ id: `m${i + 3}`, label: `M${i + 3}`, ready: false })),
];

const fromHash = () => {
  const h = window.location.hash.slice(1);
  return MILESTONES.some((m) => m.id === h && m.ready) ? h : "m1";
};

/* ---------- temă light / dark ---------- */
const savedTheme = () => { try { return localStorage.getItem("roomio-theme"); } catch { return null; } };
function useTheme() {
  const [theme, setTheme] = useState(() => savedTheme() || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("roomio-theme", theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme(theme === "dark" ? "light" : "dark")];
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>
);

export default function App() {
  const [ms, setMs] = useState(fromHash);
  const [theme, toggleTheme] = useTheme();
  const current = MILESTONES.find((m) => m.id === ms);
  const open = (id) => { setMs(id); history.replaceState(null, "", `#${id}`); window.scrollTo(0, 0); };

  return (
    <div className="fiki">
      <style>{CSS}</style>

      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="logo">Roomio</a>
          <div className="nav-right">
            <div className="ms" role="tablist" aria-label="Milestone">
              {MILESTONES.map((m) => (
                <button key={m.id} role="tab" aria-selected={ms === m.id} disabled={!m.ready} title={m.ready ? `Milestone ${m.label.slice(1)}` : "În curând"} onClick={() => open(m.id)}>{m.label}</button>
              ))}
            </div>
            <select id="milestone" className="ms-select" aria-label="Milestone" value={ms} onChange={(e) => open(e.target.value)}>
              {MILESTONES.map((m) => <option key={m.id} value={m.id} disabled={!m.ready}>{m.ready ? `Milestone ${m.label.slice(1)}` : `${m.label} · în curând`}</option>)}
            </select>
            <button className="theme" onClick={toggleTheme} aria-label={theme === "dark" ? "Treci la modul luminos" : "Treci la modul întunecat"}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
        <div className="wrap sub">
          <nav>{current.sections.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        </div>
      </header>

      {ms === "m1" && <M1 />}
      {ms === "m2" && <M2 />}

      <footer className="wrap foot">
        <span className="logo">Roomio</span>
        <span>{current.label} · SE Startup · UPB</span>
      </footer>
    </div>
  );
}

/* ---------- M1 ---------- */
const STYLE_ORDER = Object.keys(STYLES);
const PHASES = ["Design it", "See it", "Live it"];
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function M1() {
  const [style, setStyle] = useState("Scandinav");
  const [phase, setPhase] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [out, setOut] = useState(false);
  const auto = useRef(true);

  // buclă: Design it (plan, pereți) → See it (mobila) → Live it (lumină), apoi camera se reconstruiește
  // în stilul următor; după ce utilizatorul alege un stil, bucla continuă în stilul ales
  useEffect(() => {
    if (reducedMotion()) { setPhase(2); return; }
    const t = [
      setTimeout(() => setPhase(1), 1250),
      setTimeout(() => setPhase(2), 2700),
      setTimeout(() => setOut(true), 6600),
      setTimeout(() => {
        if (auto.current) setStyle((s) => STYLE_ORDER[(STYLE_ORDER.indexOf(s) + 1) % STYLE_ORDER.length]);
        setOut(false); setPhase(0); setCycle((c) => c + 1);
      }, 7200),
    ];
    return () => t.forEach(clearTimeout);
  }, [cycle]);
  const pick = (k) => { auto.current = false; setStyle(k); };

  return (
    <>
      <section id="top" className="hero wrap">
        <div className="hero-text">
          <p className="eyebrow">Milestone 1</p>
          <h1>Roomio</h1>
          <p className="lead">Aplicație de design interior în care îți construiești camera la dimensiunile reale și încerci în ea mobilă de la mai mulți furnizori, înainte s-o cumperi.</p>
        </div>
        <div className="hero-room">
          <p className="phase" aria-label="Design it. See it. Live it.">
            {PHASES.map((p, i) => <span key={p} className={i === phase ? "on" : i < phase ? "done" : ""}>{p}</span>)}
          </p>
          <div className={`room${out ? " out" : ""}`}><Room key={cycle} s={STYLES[style]} /></div>
          <div className="toggle" role="group" aria-label="Alege stilul camerei">
            {STYLE_ORDER.map((k) => (
              <button key={k} onClick={() => pick(k)} aria-pressed={style === k}>{k}</button>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section id="echipa" className="band">
          <div className="wrap">
            <h2>Echipa</h2>
            <ul className="plain team">
              {TEAM.map((m) => (
                <li key={m.name}>
                  <img src={m.photo} alt={m.name} />
                  <div className="who">
                    <h3>{m.name}</h3>
                    <p className="role">{m.role}</p>
                    <p className="task">{m.task}</p>
                    <a href={`mailto:${m.mail}`}>{m.mail}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="problema">
          <div className="wrap">
            <h2>Problema</h2>
            <p className="intro">Când cumperi mobilă, mai ales online, decizi pe baza unor poze și a dimensiunilor din fișa produsului. Din ele e greu să-ți dai seama cum va arăta piesa în camera ta.</p>
            <div className="problem">
              <ul className="plain list">
                {PROBLEMS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
              </ul>
              <figure className="plan-card">
                <Plan />
                <figcaption>Peretele are 290 cm. Canapeaua are 220 cm, iar ușa are nevoie de 80 cm ca să se deschidă. Împreună au nevoie de 300 cm, deci lipsesc 10 cm și ușa lovește canapeaua. Din fișa produsului nu ai cum să vezi asta.</figcaption>
              </figure>
            </div>
            <p className="note">Dacă piesa nu se potrivește, returul e complicat: mobila e mare, transportul costă și uneori trebuie demontată. Mulți o păstrează chiar dacă nu e ce și-au dorit.</p>
          </div>
        </section>

        <section id="solutia" className="band">
          <div className="wrap">
            <h2>Soluția</h2>
            <p className="intro">Roomio este o aplicație în care îți reproduci camera la dimensiunile reale și o mobilezi cu versiunile 3D ale produselor de la mai mulți furnizori. Vezi dacă piesele încap și cum arată împreună, apoi le comanzi direct din aplicație.</p>
            <ol className="plain steps">
              {STEPS.map(([t, d], i) => (
                <li key={t}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></li>
              ))}
            </ol>
            <div className="value">
              <span>Propunerea de valoare</span>
              <p>Știi înainte de cumpărare dacă mobila încape și dacă se potrivește cu restul camerei.</p>
            </div>
          </div>
        </section>

        <section id="clienti">
          <div className="wrap">
            <h2>Segmente de clienți</h2>
            <ul className="plain cols3">
              {SEGMENTS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>

        <section id="concurenta" className="band">
          <div className="wrap">
            <h2>Concurența</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Aplicație</th><th>Ce oferă</th><th>Ce îi lipsește</th></tr></thead>
                <tbody>{COMPETITORS.map(([n, w, l]) => <tr key={n}><td>{n}</td><td>{w}</td><td>{l}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="avantaj">
          <div className="wrap">
            <h2>Avantajul nostru</h2>
            <ul className="plain cols3 adv">
              {ADVANTAGES.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>

        <section id="metrici" className="band">
          <div className="wrap">
            <h2>Metrici cheie</h2>
            <ul className="plain metrics">
              {METRICS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>

        <section id="costuri">
          <div className="wrap">
            <h2>Structura costurilor</h2>
            <p className="intro">În prima fază, cea mai mare parte a bugetului este alocată echipei care dezvoltă produsul. Celelalte costuri sunt reduse la început și cresc pe măsură ce se extind catalogul, numărul de utilizatori, numărul de furnizori și volumul comenzilor.</p>
            <div className="split" aria-hidden="true">
              <span style={{ width: `${COSTS[0][1]}%` }}>Echipa · {COSTS[0][1]}%</span>
              <span>Restul · {100 - COSTS[0][1]}%</span>
            </div>
            <div className="stack" role="img" aria-label="Distribuția costurilor">
              {COSTS.map(([n, p], i) => <i key={n} className={`s${i}`} style={{ width: `${p}%` }} />)}
            </div>
            <ul className="plain legend">
              {COSTS.map(([n, p, d, dep], i) => (
                <li key={n} className={i === 0 ? "lead-cost" : ""}>
                  <b className={`s${i}`} />
                  <div><h3>{n}</h3><p>{d}</p><span className="dep">{dep}</span></div>
                  <em>{p}%</em>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="venituri" className="band">
          <div className="wrap">
            <h2>Surse de venit</h2>
            <ul className="plain cols2">
              {REVENUE.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- date M2 ---------- */
const Q_SCREEN = [
  "Te-ai mutat într-o locuință nouă în ultimii 2 ani?",
  "Ți-ai luat vreodată mobilă pe comandă?",
  "Ai returnat vreodată o piesă de mobilier pentru că nu se potrivea ca dimensiune, culoare sau stil?",
  "Ai plătit vreodată pentru un designer de interior sau pentru un proiect 3D al unei camere?",
  "Ai mobilat sau renovat o cameră în ultimii 2 ani?",
  "În ultima lună ai căutat mobilier pentru o cameră (în magazine sau pe site-uri)?",
];

const Q_STORY = [
  "Povestește-ne cum a decurs ultima amenajare a unei camere: ce cameră a fost și când s-a întâmplat?",
  "Cum ai decis ce mobilier să alegi pentru ea?",
  "Cum ai comparat piesele de mobilier găsite la magazine diferite?",
  "Cum ai verificat dacă piesele de mobilier încap în spațiu? Ce ai folosit concret (ruletă, schiță, aplicație, altceva)?",
  "Ce ai făcut în momentul în care nu erai sigur dacă două piese se potrivesc între ele?",
  "Care a fost cea mai mare dificultate întâmpinată?",
  "Cum ai gestionat acel moment? În cazul în care a existat un impediment.",
  "Cât timp sau câți bani te-a costat rezolvarea ei?",
  "Cât timp a trecut de când ai început să cauți mobilier până când ai finalizat achiziția?",
  "Dacă ai mai cumpărat mobilier după aceea, ce ai făcut altfel?",
];

// [etapă, dată, stare]
const PROGRESS = [
  ["Ipoteze", "M1", "done"],
  ["Formular", "31 oct", "done"],
  ["35 de răspunsuri", "31 oct – 2 nov", "done"],
  ["Analiză", "nov", "done"],
  ["Interviuri cu prototip", "urmează", "next"],
  ["Customer Validation", "după interviuri", "todo"],
];

// [ipoteză, ce a ieșit din formular]
const HYPOTHESES = [
  ["Oamenii verifică dacă mobila încape mai ales cu ruleta.", "confirmată"],
  ["Nu pot vedea dinainte cum arată piesele împreună.", "confirmată"],
  ["Compararea produselor de la mai mulți furnizori durează mult.", "parțial"],
];

const PLAN = [
  ["Ipoteze", "Am scris ce credem despre problemă."],
  ["Formular", "Întrebări despre ultima cameră mobilată, fără să pomenim Roomio."],
  ["Distribuire", "WhatsApp, prieteni, familie și grupuri de facultate."],
  ["Analiză", "Am grupat răspunsurile pe teme."],
];

const PROCESS = [
  ["Pe cine am căutat", "Oameni care au mobilat o cameră în ultimii 2 ani sau caută mobilă acum."],
  ["Cum am ajuns la ei", "Am trimis linkul pe WhatsApp și în grupurile de facultate, între 31 octombrie și 2 noiembrie 2026."],
  ["Cum am strâns informația", "Un formular Google Forms: 6 întrebări da/nu, apoi 10 întrebări despre ultima amenajare, doar pentru cei care au mobilat recent."],
];

const FUNNEL = [
  [35, "au completat formularul"],
  [25, "au mobilat recent sau caută mobilă acum"],
  [24, "au povestit ultima amenajare"],
];

// [întrebare scurtă, „Da”, câți au primit întrebarea]
const SCREEN = [
  ["S-au mutat în ultimii 2 ani", 21, 35],
  ["Și-au luat mobilă pe comandă", 23, 35],
  ["Au returnat o piesă care nu se potrivea", 14, 35],
  ["Au plătit un designer sau un proiect 3D", 9, 35],
  ["Au mobilat o cameră în ultimii 2 ani", 19, 35],
  ["Caută mobilă acum (dintre cei care n-au mobilat)", 6, 16],
];

// grupate manual din răspunsurile la „Care a fost cea mai mare dificultate întâmpinată?”
const DIFFICULTIES = [
  ["Bugetul, prețurile prea mari", 5],
  ["Nu știau dacă piesa încape sau se potrivește", 5],
  ["Alegerea stilului și a culorilor", 4],
  ["Transportul, căratul, montajul", 3],
  ["Timpul de așteptare, lipsa din stoc", 3],
  ["Execuția nu a respectat planul", 2],
  ["Nicio dificultate", 2],
];

const FINDINGS = [
  ["21 din 24", "au măsurat cu ruleta. Doar 3 au folosit și o aplicație: planificatorul IKEA, un configurator 3D și Measure de pe iPhone."],
  ["5 din 24", "au văzut piesele în cameră înainte să cumpere. Ceilalți și-au imaginat camera, au întrebat pe cineva sau au renunțat."],
  ["13 din 24", "au căutat mobilă două luni sau mai mult. O persoană a renunțat de tot."],
  ["14 din 35", "au returnat cel puțin o piesă pentru că nu se potrivea ca dimensiune, culoare sau stil."],
];

// doar de la persoane care au fost de acord să apară în prezentare
const QUOTES = [
  "Nu știam dacă se va potrivi cu dimensiunile camerei sau cu mobila pe care o mai aveam.",
  "Am încercat să-l pun pe ChatGPT să mi le proiecteze, să pot vizualiza imaginea.",
  "M-am uitat la telefon și mi-am imaginat.",
];

const IMPACT = [
  ["Bugetul camerei", "Vezi costul total al camerei pe măsură ce adaugi piese.", "Bugetul a fost cea mai mare dificultate pentru 5 din 24."],
  ["Mobila existentă", "Adăugarea mobilei pe care o ai deja devine primul pas.", "Mai mulți au ales piese după ce aveau deja: parchet, covor, mobila rămasă."],
  ["Drumul până în cameră", "Verificăm dacă piesa trece prin ușă și încape în lift.", "Un blat de 3 m nu a încăput în lift; altcineva s-a temut de ușă."],
  ["Stoc și livrare", "Vezi dacă piesa e în stoc și în cât timp ajunge.", "Pentru 3 din 24, problema a fost așteptarea sau lipsa din stoc."],
];

const VALIDATED = [
  "14 din 35 au returnat o piesă care nu se potrivea.",
  "21 din 24 au măsurat cu ruleta; doar 3 au folosit și o aplicație.",
  "13 din 24 au căutat mobilă două luni sau mai mult.",
];

const NOT_VALIDATED = [
  "Nimeni nu a văzut încă Roomio, deci soluția nu e testată.",
  "Nu știm dacă oamenii ar comanda prin aplicație.",
  "35 de respondenți, cei mai mulți din București și din cercul nostru.",
];

const NEXT = [
  ["Prototip", "Îl testăm cu cei 8 respondenți care au acceptat o discuție."],
  ["Respondenți noi", "Grupuri despre renovări, alte orașe, oameni peste 35 de ani."],
  ["Listă de așteptare", "O pagină cu înscriere pe email, ca să măsurăm interesul."],
];

// capturi din Google Forms; răspunsurile individuale doar de la cei care au fost de acord să apară
const shot = (f) => `${import.meta.env.BASE_URL}m2/${f}`;
const CHARTS = ["mutat", "comanda", "retur", "designer", "mobilat", "cauta", "varsta", "acord"];
// [prenume, vârstă, ce reiese din răspuns, capturi]
const PEOPLE = [
  ["Mihai", "25–34", "Nu a mai cumpărat piesele de care nu era sigur", ["mihai-1", "mihai-2"]],
  ["Alina", "25–34", "A renunțat după ce a comparat prețurile", ["alina"]],
  ["Luana", "18–24", "A încercat să vadă camera cu ChatGPT", ["luana"]],
  ["Roberta", "18–24", "Blatul de 3 m nu a încăput în lift", ["roberta"]],
  ["Andrei", "25–34", "Piesele din magazine nu se potrivesc spațiului", ["andrei"]],
  ["Mădălina", "18–24", "Piesele de pe site nu erau în magazin", ["madalina"]],
  ["Ionela", "25–34", "S-a temut că mobila nu trece prin ușă", ["ionela"]],
  ["Andreea", "25–34", "Aplicații 3D, AI și colaje", ["andreea"]],
  ["Elena", "18–24", "A folosit planificatorul IKEA", ["elena"]],
];

function Bars({ items }) {
  return (
    <ul className="plain bars">
      {items.map(([label, n, total]) => (
        <li key={label}>
          <span className="bar-label">{label}</span>
          <span className="bar-track"><i style={{ width: `${(n / total) * 100}%` }} /></span>
          <span className="bar-val">{n} <small>din {total}</small></span>
        </li>
      ))}
    </ul>
  );
}

// dovezile se deschid cu o parolă; în cod păstrăm doar hash-ul ei (SHA-256)
const PROOF_HASH = "bf4403ae94febabaa85d6ec2f425ce91a041327d5f1a0e2804eb86c17ebc28d7";
const sha256 = async (text) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

function Locked({ children }) {
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [wrong, setWrong] = useState(false);
  const unlock = async (e) => {
    e.preventDefault();
    if ((await sha256(pass)) === PROOF_HASH) setOpen(true);
    else setWrong(true);
  };
  if (open) return children;
  return (
    <form className="lock" onSubmit={unlock}>
      <label htmlFor="proof-pass">Parola pentru dovezi</label>
      <div>
        <input id="proof-pass" type="password" value={pass} onChange={(e) => { setPass(e.target.value); setWrong(false); }} autoComplete="off" />
        <button type="submit">Deschide</button>
      </div>
      {wrong && <p className="lock-err">Parola nu este corectă.</p>}
    </form>
  );
}

// captura mărită peste pagină; se închide cu click sau Escape
function Zoom({ src, onClose }) {
  useEffect(() => {
    const key = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onClose]);
  return (
    <button className="zoom" onClick={onClose} aria-label="Închide captura">
      <img src={src} alt="" />
    </button>
  );
}

function Proof() {
  const [big, setBig] = useState(null);
  const Img = ({ src, alt }) => (
    <button className="shot" onClick={() => setBig(src)} aria-label={`Mărește: ${alt}`}><img src={src} alt={alt} loading="lazy" /></button>
  );
  return (
    <>
      <figure className="shot-form">
        <Img src={shot("formular.jpg")} alt="Începutul formularului: Cum ți-ai mobilat locuința?" />
        <figcaption>Formularul trimis respondenților.</figcaption>
      </figure>

      <h3 className="sub-h">Rezumatul din Google Forms</h3>
      <div className="charts-grid">
        {CHARTS.map((c) => <Img key={c} src={shot(`grafic-${c}.jpg`)} alt={`Graficul din Google Forms: ${c}`} />)}
      </div>

      <h3 className="sub-h">Răspunsuri individuale</h3>
      <div className="people">
        {PEOPLE.map(([name, age, gist, imgs]) => (
          <article key={name + gist} className="person">
            <header>
              <span className="avatar" aria-hidden="true">{name[0]}</span>
              <div><h4>{name}</h4><span>{age} ani</span></div>
            </header>
            <p className="gist">{gist}</p>
            {imgs.map((f) => <Img key={f} src={shot(`${f}.jpg`)} alt={`Răspunsul lui ${name} în formular`} />)}
          </article>
        ))}
      </div>
      {big && <Zoom src={big} onClose={() => setBig(null)} />}
    </>
  );
}

function M2() {
  const done = PROGRESS.filter((p) => p[2] === "done").length;
  return (
    <>
      <section id="top" className="hero-m2 wrap">
        <p className="eyebrow">Milestone 2 · Customer Discovery</p>
        <h1>Validarea ideii</h1>
        <p className="lead">Am verificat dacă problema pe care vrea s-o rezolve Roomio există cu adevărat, înainte să construim soluția.</p>

        <div className="progress" style={{ "--done": `${((done - 0.5) / (PROGRESS.length - 1)) * 100}%` }}>
          <ol className="plain">
            {PROGRESS.map(([t, d, st]) => (
              <li key={t} className={st}><i aria-hidden="true" /><b>{t}</b><span>{d}</span></li>
            ))}
          </ol>
        </div>

        <ul className="plain stats">
          <li><b>35</b><span>de răspunsuri în 7 zile</span></li>
          <li><b>24</b><span>de povești despre ultima amenajare</span></li>
          <li><b>14 <small>din 35</small></b><span>au returnat o piesă care nu se potrivea</span></li>
          <li><b>21 <small>din 24</small></b><span>au măsurat cu ruleta</span></li>
        </ul>
      </section>

      <main>
        <section id="problema" className="band">
          <div className="wrap split2">
            <div>
              <span className="num">01</span>
              <h2>Cum am identificat problema</h2>
              <p className="intro">Mobila se alege din poze și din fișa produsului. Abia după livrare afli dacă încape și dacă se potrivește cu restul. Am pornit de la trei ipoteze:</p>
            </div>
            <ol className="plain hyp">
              {HYPOTHESES.map(([h, r], i) => <li key={i}><span className="num">I{i + 1}</span><p>{h}</p><em className={r === "parțial" ? "part" : ""}>{r}</em></li>)}
            </ol>
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
                <Bars items={SCREEN} />
              </div>
              <div>
                <h3 className="sub-h">Cea mai mare dificultate</h3>
                <Bars items={DIFFICULTIES.map(([l, n]) => [l, n, 24])} />
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
            <h2>Suntem gata pentru Customer Validation?</h2>
            <p className="verdict">Nu încă.</p>
            <p className="intro">Am validat problema, dar nu și soluția.</p>
            <div className="cols2">
              <div>
                <h3>Ce am validat</h3>
                <ul className="checks ok">{VALIDATED.map((v) => <li key={v}>{v}</li>)}</ul>
              </div>
              <div>
                <h3>Ce lipsește</h3>
                <ul className="checks no">{NOT_VALIDATED.map((v) => <li key={v}>{v}</li>)}</ul>
              </div>
            </div>
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
            <Locked><Proof /></Locked>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- stiluri ---------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&display=swap');
/* layout: o coloană aerisită, secțiuni alternate perete/in, titluri = cerințele milestone-ului */
/* paletă: interior minimalist — perete alb cald, gri, negru mat, stejar deschis ca singur accent */
:root{
 --bg:#FAF9F7;--surface:#F0EEEA;--ink:#1D1D1C;--muted:#75716B;--line:#E3E0DB;
 --wood:#B08D62;--wood-soft:#EDE5DA;--warn:#B0472F;
 --s0:#B08D62;--s1:#1D1D1C;--s2:#75716B;--s3:#B4B0AA;--s4:#D6D2CC;--s5:#E6E3DE;
 --font:'Albert Sans','Helvetica Neue',Arial,system-ui,sans-serif;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
 --bg:#161615;--surface:#1F1E1D;--ink:#ECEAE6;--muted:#9B978F;--line:#2D2C2A;
 --wood:#C8A87E;--wood-soft:#2A2621;--warn:#E08A6D;
 --s0:#C8A87E;--s1:#ECEAE6;--s2:#9B978F;--s3:#5F5C58;--s4:#3D3B39;--s5:#302F2D;color-scheme:dark}}
:root[data-theme="dark"]{
 --bg:#161615;--surface:#1F1E1D;--ink:#ECEAE6;--muted:#9B978F;--line:#2D2C2A;
 --wood:#C8A87E;--wood-soft:#2A2621;--warn:#E08A6D;
 --s0:#C8A87E;--s1:#ECEAE6;--s2:#9B978F;--s3:#5F5C58;--s4:#3D3B39;--s5:#302F2D;color-scheme:dark}
html{scroll-behavior:smooth;scroll-padding-top:104px}
*{box-sizing:border-box}
body{margin:0;background:var(--bg)}
.fiki{background:var(--bg);color:var(--ink);font-family:var(--font);font-size:17px;line-height:1.65;transition:background-color .3s,color .3s}
.fiki h1,.fiki h2,.fiki h3{margin:0;font-weight:500;letter-spacing:-.02em;text-wrap:balance}
.fiki p{margin:0}
.fiki a{color:inherit}
.plain{list-style:none;margin:0;padding:0}
.wrap{max-width:1120px;margin:0 auto;padding-inline:max(20px,env(safe-area-inset-left,0px)) max(20px,env(safe-area-inset-right,0px))}
:focus-visible{outline:2px solid var(--ink);outline-offset:3px;border-radius:2px}

.nav{position:sticky;top:0;z-index:10;background:color-mix(in srgb,var(--bg) 92%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.nav-in{display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px}
.logo{font-weight:600;font-size:19px;letter-spacing:-.02em;text-decoration:none;color:var(--ink)}
.nav-right{display:flex;align-items:center;gap:12px}
.ms{display:flex;gap:2px}
.ms button{font:inherit;font-size:13px;font-weight:500;padding:4px 7px;border:0;border-bottom:1.5px solid transparent;background:transparent;color:var(--muted);cursor:pointer;font-variant-numeric:tabular-nums}
.ms button[aria-selected="true"]{color:var(--ink);border-bottom-color:var(--ink)}
.ms button:disabled{opacity:.35;cursor:default}
.ms-select{display:none;font:inherit;font-size:14px;padding:6px 10px;border:1px solid var(--line);border-radius:2px;background:var(--bg);color:var(--ink)}
.theme{display:grid;place-items:center;width:34px;height:34px;border:1px solid var(--line);border-radius:50%;background:transparent;color:var(--ink);cursor:pointer}
.theme:hover{border-color:var(--ink)}
.theme svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.sub nav{display:flex;gap:24px;height:40px;align-items:center;overflow-x:auto;scrollbar-width:none;border-top:1px solid var(--line)}
.sub nav a{text-decoration:none;font-size:14px;color:var(--muted);white-space:nowrap}
.sub nav a:hover{color:var(--ink)}

.eyebrow{font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:14px!important}
h2{font-size:clamp(28px,3.2vw,38px);line-height:1.15;margin-bottom:28px!important}
h3{font-size:18px;line-height:1.35}
.intro{max-width:62ch;margin-bottom:48px!important;color:var(--muted)}

.hero{display:grid;grid-template-columns:1fr 1.05fr;gap:clamp(32px,6vw,80px);align-items:center;padding-block:clamp(48px,7vw,104px)}
.hero h1{font-size:clamp(56px,8.5vw,104px);line-height:1;letter-spacing:-.045em;margin-bottom:24px}
.lead{font-size:19px;max-width:42ch;color:var(--muted)}
.hero-room{background:var(--surface);border-radius:2px;padding:28px 20px 22px}
.room svg{width:100%;height:auto;display:block;overflow:visible}
/* intro cameră: plan (0–1s) → pereți (0.8s) → mobilă (1.3–2.8s) → lumină (2.7s) */
.room{transition:opacity .6s ease}
.room.out{opacity:0}
.room polygon,.room line,.room ellipse{transition:fill .8s ease,stroke .8s ease}
.room .shadow{fill:#000;opacity:.14}
.room .planks{opacity:0;animation:fade .5s .9s forwards}
.room .planks line{stroke-width:.8}
.room .art{opacity:0;animation:fade .5s 1.3s forwards}
.room .rug-border{fill:none;stroke-width:1.2}
.room .glow{opacity:0;animation:glowin 1.2s 2.7s ease forwards}
@keyframes glowin{to{opacity:.65}}
.room .floor{stroke:var(--ink);stroke-width:1.2;stroke-dasharray:1;stroke-dashoffset:1;fill-opacity:0;animation:draw .9s ease-out forwards,fillin .6s .6s ease forwards}
.room .rise{clip-path:inset(100% 0 0 0);animation:rise .7s .8s cubic-bezier(.3,.7,.2,1) forwards}
.room .win{opacity:0;animation:fade .5s 1.2s forwards}
.room .win polygon{stroke-width:1.5}
.room .win line{stroke-width:1.2}
.room .sun{fill:#FFFFFF;opacity:0;animation:sunin 1.4s 2.7s ease forwards;pointer-events:none}
.dimline{stroke:var(--muted);stroke-width:1.2;fill:none}
.dimline line{stroke-dasharray:1;stroke-dashoffset:1;animation:draw .7s .2s ease-out forwards}
.dimtext{font-family:var(--font);font-size:12.5px;letter-spacing:.04em;fill:var(--muted);animation:fade .5s .7s both}
.drop{animation:drop .6s cubic-bezier(.34,1.45,.64,1) both}
@keyframes drop{from{opacity:0;transform:translateY(-38px)}to{opacity:1;transform:none}}
@keyframes fade{from{opacity:0}to{opacity:1}}
@keyframes draw{to{stroke-dashoffset:0}}
@keyframes fillin{to{fill-opacity:1}}
@keyframes rise{to{clip-path:inset(0 0 0 0)}}
@keyframes sunin{to{opacity:.26}}
.phase{display:flex;justify-content:center;align-items:center;gap:10px;font-size:11.5px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:6px!important}
.phase span{opacity:.35;transition:opacity .5s,color .5s}
.phase span.done{opacity:.7}
.phase span.on{opacity:1;color:var(--ink)}
.phase span+span::before{content:'';display:inline-block;width:18px;height:1px;background:currentColor;opacity:.5;vertical-align:middle;margin-right:10px}
.toggle{display:flex;gap:4px;justify-content:center;margin-top:14px}
.toggle button{position:relative;font:inherit;font-size:13.5px;padding:5px 14px;border-radius:99px;border:1px solid transparent;background:transparent;color:var(--muted);cursor:pointer;transition:color .3s,border-color .3s}
.toggle button:hover{color:var(--ink)}
.toggle button[aria-pressed="true"]{border-color:var(--ink);color:var(--ink)}

main section{padding-block:clamp(64px,8vw,112px)}
.band{background:var(--surface)}
.list p,.cols3 p,.cols2 p,.steps p,.metrics p{color:var(--muted);margin-top:6px!important}

.team{display:grid;grid-template-columns:repeat(4,1fr);gap:32px}
.team li{display:flex;flex-direction:column;gap:16px}
.team img{width:100%;max-width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:2px;display:block;background:var(--bg)}
.team h3{font-size:17px}
.role{color:var(--wood);font-size:12px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;margin-top:4px!important}
.task{font-size:15px;color:var(--muted);margin:6px 0 10px!important}
.team a{font-size:13.5px;color:var(--muted);word-break:break-all;text-decoration:none;border-bottom:1px solid var(--line)}
.team a:hover{color:var(--ink);border-bottom-color:var(--ink)}

.list{display:grid;gap:28px}
.problem{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,6vw,80px);align-items:center}
.problem>*{min-width:0}
.plan-card{margin:0;background:var(--surface);border-radius:2px;padding:24px}
.plan{width:100%;height:auto;display:block}
.plan .wall{fill:none;stroke:var(--ink);stroke-width:3;stroke-linejoin:miter}
.plan .door{stroke:var(--ink);stroke-width:1.5}
.plan .swing{fill:none;stroke:var(--muted);stroke-width:1.2;stroke-dasharray:4 3}
.plan .swing-area{fill:var(--muted);opacity:.08}
.plan .sofa{fill:var(--wood-soft);stroke:var(--wood);stroke-width:1.2}
.plan .clash{fill:var(--warn);opacity:.75}
.plan .dim line{stroke:var(--muted);stroke-width:1}
.plan .warn-line line{stroke:var(--warn)}
.plan .lbl{font-family:var(--font);font-size:11.5px;letter-spacing:.03em;fill:var(--ink)}
.plan .muted{fill:var(--muted)}
.plan .warn{fill:var(--warn)}
.plan-card figcaption{font-size:14.5px;color:var(--muted);margin-top:14px}
.note{margin-top:48px!important;padding-top:28px;border-top:1px solid var(--line);max-width:62ch}

.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:48px}
.steps li{border-top:1px solid var(--ink);padding-top:18px}
.num{display:block;font-size:13px;font-weight:500;color:var(--wood);letter-spacing:.08em;margin-bottom:10px;font-variant-numeric:tabular-nums}
.steps h3{font-size:22px}
.value{margin-top:64px;padding:32px 36px;background:var(--bg);border-radius:2px;display:grid;gap:10px}
.value span{font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--wood)}
.value p{font-size:clamp(21px,2.3vw,26px);font-weight:500;letter-spacing:-.015em;line-height:1.35;max-width:42ch}

.cols3{display:grid;grid-template-columns:repeat(3,1fr);gap:48px}
.cols2{display:grid;grid-template-columns:repeat(2,1fr);gap:40px 64px}
.cols3 li,.cols2 li{border-top:1px solid var(--line);padding-top:18px}
.table-wrap{overflow-x:auto}
table{border-collapse:collapse;width:100%;min-width:600px;font-size:15.5px}
th,td{text-align:left;padding:16px 24px 16px 0;border-bottom:1px solid var(--line);vertical-align:top}
th{font-size:12px;font-weight:500;color:var(--muted);text-transform:uppercase;letter-spacing:.12em;border-bottom-color:var(--ink)}
td:first-child{font-weight:500}
td:last-child{color:var(--muted)}

.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:32px}
.metrics li{border-top:1px solid var(--ink);padding-top:18px}

.stack{display:flex;height:10px;overflow:hidden;gap:3px;margin-bottom:32px}
.stack i,.legend b{background:var(--s0)}
.s1{background:var(--s1)!important}.s2{background:var(--s2)!important}.s3{background:var(--s3)!important}.s4{background:var(--s4)!important}.s5{background:var(--s5)!important}
.split{display:flex;font-size:12px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.split span{flex:none;padding-left:10px;border-left:1px solid var(--line)}
.split span:first-child{color:var(--ink);padding-left:0;border-left:0}
.dep{display:inline-block;margin-top:10px;font-size:11.5px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);border:1px solid var(--line);border-radius:99px;padding:2px 10px}
.legend .lead-cost{grid-column:1/-1;padding:24px 0 28px}
.legend .lead-cost h3{font-size:22px}
.legend .lead-cost p{font-size:16px;max-width:60ch}
.legend .lead-cost em{font-size:clamp(44px,6vw,64px);line-height:1;letter-spacing:-.04em;color:var(--wood)}
.legend .lead-cost b{width:14px;height:14px;margin-top:8px}.legend{display:grid;grid-template-columns:repeat(2,1fr);gap:0 64px}
.legend li{display:grid;grid-template-columns:10px 1fr auto;gap:16px;align-items:start;padding:18px 0;border-bottom:1px solid var(--line)}
.legend b{width:10px;height:10px;margin-top:7px}
.legend h3{font-size:17px}
.legend p{color:var(--muted);font-size:15px;margin-top:2px!important}
.legend em{text-align:right;font-style:normal;font-size:20px;font-weight:500;line-height:1.2;font-variant-numeric:tabular-nums}

.foot{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-block:36px;color:var(--muted);font-size:13.5px;border-top:1px solid var(--line)}
.foot .logo{font-size:15px}

/* ---------- M2 ---------- */
.hero-m2{padding-block:clamp(48px,7vw,104px)}
.hero-m2 h1{font-size:clamp(48px,7.5vw,92px);line-height:1;letter-spacing:-.045em;margin-bottom:24px}
.hero-m2 .lead{max-width:48ch}
.wrap>.num,.split2 .num{margin-bottom:12px}
/* progres: linia se umple până la etapa curentă */
.progress{margin-top:clamp(40px,5vw,64px);overflow-x:auto}
.progress ol{position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:12px;min-width:0}
.progress ol::before,.progress ol::after{content:'';position:absolute;top:7px;left:8px;height:2px;background:var(--line)}
.progress ol::before{right:8px}
.progress ol::after{width:calc(var(--done) - 16px);background:var(--wood);animation:grow 1.4s .2s cubic-bezier(.3,.7,.2,1) both}
@keyframes grow{from{width:0}}
.progress li{position:relative;z-index:1;display:grid;gap:4px;align-content:start}
.progress i{width:16px;height:16px;border-radius:50%;border:2px solid var(--line);background:var(--bg);margin-bottom:10px}
.progress .done i{background:var(--wood);border-color:var(--wood)}
.progress .next i{border-color:var(--wood);box-shadow:0 0 0 5px var(--wood-soft)}
.progress b{font-size:15px;font-weight:500;line-height:1.3}
.progress span{font-size:13px;color:var(--muted)}
.progress .todo b{color:var(--muted)}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;margin-top:clamp(40px,5vw,64px)}
.stats li{border-top:1px solid var(--ink);padding-top:16px;display:grid;gap:6px;align-content:start}
.stats b{font-size:clamp(34px,4vw,48px);font-weight:500;line-height:1;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.stats b small,.bar-val small{font-size:.45em;font-weight:500;color:var(--muted);letter-spacing:0}
.stats span{font-size:15px;color:var(--muted)}
.split2{display:grid;grid-template-columns:1fr 1.2fr;gap:clamp(32px,6vw,80px);align-items:start}
.split2>*{min-width:0}
.split2 .intro{margin-bottom:0!important}
.big{font-size:clamp(21px,2.3vw,27px);font-weight:500;letter-spacing:-.015em;line-height:1.4}
.hyp li{display:grid;grid-template-columns:44px 1fr auto;gap:12px;align-items:baseline;padding:18px 0;border-bottom:1px solid var(--line)}
.hyp li:first-child{border-top:1px solid var(--line)}
.hyp .num{margin:0!important}
.hyp p{font-size:18px}
.hyp em{font-style:normal;font-size:11.5px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--wood);border:1px solid var(--wood);border-radius:99px;padding:2px 10px;white-space:nowrap}
.hyp em.part{color:var(--muted);border-color:var(--line)}
.steps4{grid-template-columns:repeat(4,1fr);gap:32px}
.cols3 p,.impact p{color:var(--muted);margin-top:6px!important}
.funnel{display:grid;gap:8px;margin-top:56px;max-width:760px}
.funnel li{display:flex;align-items:baseline;gap:14px;width:var(--w);min-width:min(100%,300px);background:var(--surface);padding:14px 18px;border-left:3px solid var(--wood)}
.funnel b{font-size:26px;font-weight:500;line-height:1;font-variant-numeric:tabular-nums}
.funnel span{font-size:15px;color:var(--muted)}
.qs{margin-top:64px}
.qs ol{margin:16px 0 0;padding-left:22px;display:grid;gap:10px;color:var(--muted);font-size:16px}
.qs ol li::marker{color:var(--ink)}
.findings{display:grid;grid-template-columns:repeat(4,1fr);gap:32px}
.findings li{background:var(--bg);padding:24px;display:grid;gap:10px;align-content:start}
.findings b{font-size:30px;font-weight:500;line-height:1;letter-spacing:-.02em;color:var(--wood);font-variant-numeric:tabular-nums}
.findings p{font-size:15px;color:var(--muted)}
.charts{margin-top:8px}
.bars{display:grid;gap:14px}
.bars li{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) 64px;gap:14px;align-items:center}
.bar-label{font-size:14.5px}
.bar-track{height:8px;background:var(--line);border-radius:0 4px 4px 0}
.bar-track i{display:block;height:100%;background:var(--wood);border-radius:0 4px 4px 0;min-width:4px;animation:grow 1s cubic-bezier(.3,.7,.2,1) both}
.bar-val{font-size:17px;font-weight:500;text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.quotes{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:64px}
.quotes li{background:var(--bg);padding:24px}
.quotes blockquote{margin:0;font-size:17.5px;line-height:1.5}
.impact .why{font-size:14.5px;margin-top:14px!important;padding-top:12px;border-top:1px dashed var(--line)}
.why span{display:block;font-size:11.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--wood);margin-bottom:2px}
.verdict{font-size:clamp(40px,5vw,60px);font-weight:500;letter-spacing:-.035em;line-height:1;margin-bottom:14px!important}
.checks{list-style:none;margin:16px 0 0;padding:0;display:grid;gap:12px}
.checks li,.cols2 .checks li{position:relative;padding:0 0 0 26px;border:0;color:var(--muted)}
.checks li::before{position:absolute;left:0;top:0;font-weight:600}
.checks.ok li::before{content:'✓';color:var(--wood)}
.checks.no li::before{content:'—';color:var(--warn)}
.sub-h{margin:56px 0 24px!important}
.lock{display:grid;gap:10px;max-width:420px;padding:28px;background:var(--surface);border-radius:2px}
.lock label{font-size:12px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.lock div{display:flex;gap:8px}
.lock input{flex:1;min-width:0;font:inherit;font-size:16px;padding:9px 12px;border:1px solid var(--line);border-radius:2px;background:var(--bg);color:var(--ink)}
.lock input:focus{outline:none;border-color:var(--ink)}
.lock button{font:inherit;font-size:15px;padding:9px 18px;border:1px solid var(--ink);border-radius:2px;background:var(--ink);color:var(--bg);cursor:pointer}
.lock-err{font-size:14px;color:var(--warn)}
.shot{display:block;width:100%;padding:0;border:1px solid var(--line);border-radius:4px;background:#fff;cursor:zoom-in;overflow:hidden;transition:border-color .2s,transform .2s}
.shot:hover{border-color:var(--wood);transform:translateY(-2px)}
.shot img{width:100%;max-width:100%;height:auto;display:block}
.shot-form{margin:0;max-width:720px}
.shot-form figcaption{font-size:14px;color:var(--muted);margin-top:10px}
.charts-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.people{columns:2 340px;column-gap:24px}
.person{break-inside:avoid;margin-bottom:24px;background:var(--surface);padding:20px;border-radius:4px;display:grid;gap:12px}
.person header{display:flex;align-items:center;gap:12px}
.avatar{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:var(--wood-soft);color:var(--wood);font-weight:600}
.person h4{margin:0;font-size:16px;font-weight:500}
.person header span{font-size:13px;color:var(--muted)}
.gist{font-size:15px;line-height:1.45}
.zoom{position:fixed;inset:0;z-index:50;display:grid;place-items:center;padding:max(16px,env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) max(16px,env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));border:0;background:rgba(20,20,19,.82);cursor:zoom-out;animation:fade .2s both}
.zoom img{max-width:min(1100px,100%);max-height:100%;border-radius:4px;background:#fff}
@media(max-width:860px){
 .ms{display:none}
 .ms-select{display:block}
 .hero,.problem{grid-template-columns:1fr}
 .steps,.cols3{grid-template-columns:1fr;gap:32px}
 .team,.metrics{grid-template-columns:repeat(2,1fr)}
 .legend,.cols2{grid-template-columns:1fr}
 .steps4,.stats,.findings{grid-template-columns:repeat(2,1fr)}
 .split2,.quotes{grid-template-columns:1fr}
 .charts-grid{grid-template-columns:repeat(2,1fr)}
 .charts{gap:0}
}
@media(max-width:600px){
 .fiki{font-size:16.5px}
 .sub nav{gap:18px;mask-image:linear-gradient(90deg,#000 85%,transparent)}
 main section{padding-block:56px}
 .hero{padding-block:36px 48px}
 .lead{font-size:17.5px}
 .hero-room{padding:18px 8px 16px}
 .plan-card{padding:16px}
 .intro{margin-bottom:32px!important}
 .value{padding:24px}
 table,thead,tbody,tr,td{display:block;min-width:0}
 thead{display:none}
 tr{padding:16px 0;border-bottom:1px solid var(--line)}
 td{border:0;padding:0}
 td:first-child{margin-bottom:4px}
 td:nth-child(2)::before{content:'Oferă: ';color:var(--muted);font-weight:500}
 td:last-child::before{content:'Îi lipsește: ';color:var(--warn);font-weight:500}
 .team{grid-template-columns:1fr;gap:24px}
 .team li{flex-direction:row;align-items:center;gap:18px}
 .team img{width:104px;flex:none;aspect-ratio:1}
 .metrics{grid-template-columns:1fr;gap:28px}
 .steps4,.findings{grid-template-columns:1fr}
 .stats{gap:24px 16px}
 .progress ol{grid-template-columns:1fr;gap:18px}
 .progress ol::before,.progress ol::after{display:none}
 .progress li{grid-template-columns:16px 1fr;column-gap:14px}
 .progress i{grid-row:span 2;margin:2px 0 0}
 .bars li{grid-template-columns:1fr auto;gap:6px 12px}
 .bar-label{grid-column:1/-1}
 .hyp li{grid-template-columns:36px 1fr}
 .hyp em{grid-column:2;justify-self:start}

}
@media(prefers-reduced-motion:reduce){
 html{scroll-behavior:auto}
 .room *,.room *::after,.toggle button::after{animation:none!important}
 .room .floor{fill-opacity:1;stroke-dashoffset:0}
 .room .rise{clip-path:none}
 .room .win{opacity:1}
 .room .sun{opacity:.26}
 .room .planks,.room .art{opacity:1}
 .room .glow{opacity:.65}
 .progress ol::after,.bar-track i{animation:none}
 .dimline line{stroke-dashoffset:0}
}
`;
