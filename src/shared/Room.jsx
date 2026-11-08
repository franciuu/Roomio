import "./room.css";

// camera izometrică animată: în M1 și pe landing page
export const STYLES = {
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

export function Room({ s }) {
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
