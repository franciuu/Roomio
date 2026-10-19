import { useState } from "react";

/* ---------- date ---------- */
const TEAM = [
  { name: "Stan Ariana-Maria", role: "Developer", mail: "ariana_maria.stan@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/ariana.jpeg` },
  { name: "Ruse Teodor", role: "Inginer 3D & Modelare", mail: "teodor.ruse@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/teodor.jpeg` },
  { name: "Balint Franceska", role: "UI/UX Designer", mail: "franceska.balint@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/franceska.png` },
  { name: "Păștinică Costinela-Beatrice", role: "Marketing & Comunicare", mail: "costinela.pastinica@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/beatrice.PNG` },
];

const COMPETITORS = [
  ["IKEA Place / IKEA Kreativ", "Plasezi mobilă în cameră prin realitate augmentată sau o planifici în 3D.", "Doar produsele IKEA."],
  ["Planner 5D", "Planificator 2D/3D cu catalog mare de obiecte, ușor de folosit.", "Catalog propriu, nelegat de ofertele reale ale furnizorilor; cataloagul complet e în abonament."],
  ["Roomstyler", "Planificator 3D în browser, cu obiecte de la mărci cunoscute.", "Nu poți edita direct în vizualizarea 3D; interfață mai veche."],
  ["Homestyler", "Bibliotecă mare de modele 3D și randări foto-realiste.", "Randările de calitate și volumul mare sunt în planuri plătite; orientat spre designeri."],
  ["RoomSketcher", "Planuri la scară, vizualizare 3D, măsurători precise.", "Bibliotecă de mobilier limitată în varianta gratuită; accent pe planuri, nu pe cumpărare."],
  ["Houzz (View in My Room 3D)", "Previzualizare AR a produselor din marketplace.", "Doar produsele suportate din platformă; fără construirea camerei la dimensiuni reale."],
];

const METRICS = [
  ["Utilizatori", "Câți oameni își fac cont și proiectează o cameră în Roomio.", "3.000"],
  ["Camere finalizate", "Procentul de utilizatori care ajung de la camera goală la una complet amenajată.", "40%"],
  ["Click-uri către furnizor", "Câți utilizatori trec de la randare la pagina de cumpărare a piesei.", "12%"],
  ["Furnizori parteneri", "Dimensiunea și diversitatea cataloagelor integrate în aplicație.", "15"],
];

const COSTS = [
  ["Dezvoltare și mentenanță", 35, "Aplicația trebuie construită, testată și ținută la zi: editorul de camere, catalogul, conturile utilizatorilor. E cea mai mare cheltuială, pentru că produsul e software și se îmbunătățește continuu."],
  ["Modelare 3D a pieselor", 25, "Fiecare piesă e modelată sau convertită la dimensiunile reale ale produsului și verificată să arate ca în realitate. Pe măsură ce catalogul crește, crește și acest cost."],
  ["Cloud, randare și stocare", 15, "Modelele 3D sunt fișiere grele, iar randarea consumă resurse. Plătim servere, stocare și CDN ca încărcarea camerei să fie rapidă și pe telefon."],
  ["Marketing", 15, "La început puțini oameni știu de Roomio. Banii merg spre social media, colaborări cu creatori de conținut despre amenajări și reclame către cei care tocmai se mută."],
  ["Parteneriate și juridic", 10, "Contractele cu furnizorii, drepturile asupra modelelor 3D și GDPR pentru datele utilizatorilor. Sunt costuri mici, dar fără ele nu putem integra cataloagele în siguranță."],
];

const REVENUE = [
  ["Comision de afiliere", "Primim un procent din valoarea cumpărăturilor făcute de utilizatori pe site-urile furnizorilor, după ce și-au validat camera în Roomio."],
  ["Prezență premium pentru furnizori", "Furnizorii pot plăti pentru modele evidențiate, colecții sezoniere sau poziții recomandate în căutare."],
  ["Roomio Pro", "Abonament pentru randări în calitate înaltă, proiecte nelimitate și export al planurilor, util pentru amenajori și designeri."],
  ["Widget pentru magazine", "Magazinele de mobilă pot integra camera 3D Roomio direct pe site-ul lor, contra unui abonament."],
];

const STYLES = {
  Scandinav: { wall: "#E6ECEF", floor: "#DCC7A3", sofa: "#8DA8C8", rug: "#F2EFE7", table: "#B58B5A", chair: "#E2B94B", shelf: "#F4F3EF", plant: "#5C8A5A" },
  Industrial: { wall: "#B7BCC4", floor: "#76706B", sofa: "#3D424A", rug: "#8C929B", table: "#23272D", chair: "#B06C3E", shelf: "#2D3139", plant: "#4E7A52" },
  Boem: { wall: "#F0DCCB", floor: "#C99A6B", sofa: "#C0654A", rug: "#F4D35E", table: "#7A4E2D", chair: "#3F7F72", shelf: "#E8CFAF", plant: "#3E7B4C" },
};

/* ---------- camera izometrică ---------- */
const iso = (a, b, z = 0) => [260 + (a - b) * 33, 130 + (a + b) * 18.5 - z];
const pts = (arr) => arr.map((p) => p.join(",")).join(" ");
const shade = (hex, f) => {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.round(f < 0 ? v * (1 + f) : v + (255 - v) * f));
  return `rgb(${ch.join(",")})`;
};

function Box({ a, b, w, d, h, c, z0 = 0, delay = 0 }) {
  const top = [iso(a, b, z0 + h), iso(a + w, b, z0 + h), iso(a + w, b + d, z0 + h), iso(a, b + d, z0 + h)];
  const right = [iso(a + w, b, z0), iso(a + w, b + d, z0), iso(a + w, b + d, z0 + h), iso(a + w, b, z0 + h)];
  const left = [iso(a, b + d, z0), iso(a + w, b + d, z0), iso(a + w, b + d, z0 + h), iso(a, b + d, z0 + h)];
  return (
    <g className="drop" style={{ animationDelay: `${delay}ms` }}>
      <polygon points={pts(left)} fill={shade(c, -0.12)} />
      <polygon points={pts(right)} fill={shade(c, -0.28)} />
      <polygon points={pts(top)} fill={shade(c, 0.08)} />
    </g>
  );
}

function Room({ s }) {
  const floor = [iso(0, 0), iso(6, 0), iso(6, 6), iso(0, 6)];
  const wallL = [iso(0, 6), iso(0, 0), iso(0, 0, 120), iso(0, 6, 120)];
  const wallR = [iso(0, 0), iso(6, 0), iso(6, 0, 120), iso(0, 0, 120)];
  const dim = (p1, p2, t1, t2) => (
    <g stroke="#0B4F4A" strokeWidth="1.5" fill="none">
      <line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} />
      <line x1={t1[0][0]} y1={t1[0][1]} x2={t1[1][0]} y2={t1[1][1]} />
      <line x1={t2[0][0]} y1={t2[0][1]} x2={t2[1][0]} y2={t2[1][1]} />
    </g>
  );
  return (
    <svg viewBox="0 0 520 380" role="img" aria-label="Cameră izometrică amenajată cu canapea, măsuță, fotoliu și bibliotecă">
      <polygon points={pts(wallL)} fill={shade(s.wall, -0.04)} />
      <polygon points={pts(wallR)} fill={shade(s.wall, -0.16)} />
      <polygon points={pts(floor)} fill={s.floor} />
      <Box a={2.1} b={1.5} w={2.6} d={2.8} h={1.5} c={s.rug} delay={100} />
      <Box a={0.3} b={0.2} w={0.7} d={0.7} h={32} c={s.plant} delay={200} />
      <Box a={2.4} b={0.1} w={2.2} d={0.7} h={62} c={s.shelf} delay={300} />
      <Box a={0.3} b={1.3} w={1.7} d={3.2} h={22} c={s.sofa} delay={450} />
      <Box a={0.3} b={1.3} w={0.5} d={3.2} h={26} z0={22} c={s.sofa} delay={550} />
      <Box a={2.9} b={2.4} w={1.2} d={1.2} h={14} c={s.table} delay={700} />
      <Box a={4.2} b={3.9} w={1.3} d={1.3} h={26} c={s.chair} delay={850} />
      {dim(iso(6.7, 0), iso(6.7, 6), [iso(6.4, 0), iso(7, 0)], [iso(6.4, 6), iso(7, 6)])}
      {dim(iso(0, 6.7), iso(6, 6.7), [iso(0, 6.4), iso(0, 7)], [iso(6, 6.4), iso(6, 7)])}
      <g className="dimtext" fontSize="13" fill="#0B4F4A" fontWeight="600">
        <text x={iso(7.2, 3)[0]} y={iso(7.2, 3)[1] + 4}>3,60 m</text>
        <text x={iso(3, 7.3)[0]} y={iso(3, 7.3)[1] + 14} textAnchor="middle">3,60 m</text>
      </g>
    </svg>
  );
}

/* ---------- pagina ---------- */
export default function App() {
  const [style, setStyle] = useState("Scandinav");
  const initials = (n) => n.split(" ").map((x) => x[0]).join("");

  return (
    <div className="fiki">
      <style>{CSS}</style>

      <header className="nav">
        <nav>
          <a href="#top" className="logo">Roomio</a>
          <a href="#echipa" className="logo">M1</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-text">
          <h1>Roomio</h1>
          <p className="sub">Aplicație de proiectare design interior</p>
          <p className="slogan">Design it. See it. Live it.</p>
          <p className="lead">
            Îți construiești camera la dimensiunile reale, o completezi cu randări 3D ale pieselor de la diferiți furnizori și vezi pe loc dacă se potrivesc, atât ca stil, cât și ca mărime, înainte să cumperi mobila.
          </p>
        </div>
        <div className="hero-room">
          <div key={style} className="room"><Room s={STYLES[style]} /></div>
          <div className="toggle" role="group" aria-label="Alege stilul camerei">
            {Object.keys(STYLES).map((k) => (
              <button key={k} onClick={() => setStyle(k)} aria-pressed={style === k} className={style === k ? "on" : ""}>{k}</button>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section id="echipa">
          <h2>Echipa</h2>
          <div className="team">
            {TEAM.map((m, i) => (
              <article key={i} className="member">
                <div className="photo" style={{ background: ["#BFD3B5", "#F4D35E", "#F7D6CE", "#F0DCCB"][i] }}>
                  {m.photo ? <img src={m.photo} alt={m.name} /> : <span>{initials(m.name)}</span>}
                </div>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <a href={`mailto:${m.mail}`}>{m.mail}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="problema">
          <h2>Problema</h2>
          <div className="two">
            <p className="big">Cumperi o canapea pe baza câtorva poze și a unor cifre dintr-o fișă de produs, apoi speri că arată bine în camera ta.</p>
            <div className="prose">
              <p>Nu știi dacă piesa încape. Dimensiunile din fișa produsului sunt doar cifre, ele nu îți arată cum se așază canapeaua lângă pereți, uși și restul mobilierului, câtă libertate de mișcare rămâne sau dacă blochează o fereastră.</p>
              <p>Nu știi nici dacă se potrivește ca stil. O piesă care arată bine în showroom poate părea nelalocul ei acasă, lângă culorile și materialele pe care le ai deja. Pe deasupra, compari greu: ajungi cu zeci de tab-uri deschise, de la mai mulți furnizori, fără să le poți pune în aceeași cameră.</p>
              <p>Iar greșelile costă. Mobila voluminoasă înseamnă transport scump, retururi complicate sau o piesă ținută în casă degeaba, doar pentru că returnarea e prea greoaie.</p>
            </div>
          </div>
        </section>

        <section id="solutia">
          <h2>Soluția noastră</h2>
          <p className="story">Roomio rezolvă problema prezentată mai sus prin faptul că mută verificarea piesei înaintea cumpărării, într-un spațiu virtual construit la dimensiunile reale ale camerei utilizatorului. Aplicația funcționează în trei pași: utilizatorul își reproduce camera, o amenajează cu piese de mobilier de la mai mulți furnizori și, abia după ce a văzut rezultatul, decide ce cumpără. Astfel sunt acoperite deodată cele două nesiguranțe de la care pornește problema, respectiv dacă piesa încape și dacă se potrivește ca stil.</p>
          <ol className="steps">
            <li><h3>Design it</h3><p>Se introduc măsurătorile camerei și se poziționează pereții, ușile și ferestrele exact acolo unde se află în realitate, iar aplicația construiește un spațiu la scară, cu aceleași proporții. Tot în acest pas poate adăuga în cameră piesele pe care le are deja și pe care vrea să le păstreze, de exemplu un dulap sau un covor, astfel încât punctul de plecare să fie camera așa cum arată de fapt, nu una goală. Faptul că spațiul este la scară contează mult, pentru că toate verificările din pașii următori se bazează pe el.</p></li>
            <li><h3>See it</h3><p>În camera construită, utilizatorul adaugă randări 3D ale pieselor de la diferiți furnizori, păstrate la dimensiunile lor reale. Poate muta canapeaua, schimba măsuța sau încerca alt stil și vede imediat două lucruri: dacă piesa încape, adică dacă lasă loc de trecere și nu blochează o ușă sau o fereastră, și dacă se potrivește vizual cu restul mobilierului. Faptul că piesele vin de la mai mulți furnizori îi permite să compare variante într-un singur loc, în loc să jongleze cu mai multe site-uri.</p></li>
            <li><h3>Live it</h3><p>După ce camera arată cum și-a dorit, utilizatorul știe exact ce are de cumpărat și de la cine. Decizia de cumpărare se bazează acum pe o simulare, nu pe o presupunere, așa că riscul unui retur scade, iar camera finală seamănă cu cea văzută în aplicație.</p></li>
          </ol>
        </section>

        <section id="clienti">
          <h2>Segmente de clienți</h2>
          <div className="segments">
            <div className="seg a"><h3>Tineri care se mută</h3><p>Între 22 și 35 de ani, la prima locuință sau la o chirie nouă. Buget limitat, deci greșelile costă mult.</p></div>
            <div className="seg b"><h3>Familii care reamenajează</h3><p>Vor să schimbe o cameră fără surprize și să se pună de acord rapid cu toții pe o variantă.</p></div>
            <div className="seg c"><h3>Proprietari și amenajori</h3><p>Gândesc spații pentru închiriere sau pentru alții și au nevoie de randări rapide, ușor de arătat.</p></div>          </div>
        </section>

        <section id="concurenta">
          <h2>Concurența</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Competitor</th><th>Ce oferă</th><th>Limita față de Roomio</th></tr></thead>
              <tbody>{COMPETITORS.map(([n, w, l]) => <tr key={n}><td>{n}</td><td>{w}</td><td>{l}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section id="avantaj">
          <h2>Avantajul nostru</h2>
          <p className="big">Un singur loc, mai mulți furnizori. Compari piese din magazine diferite în aceeași cameră.</p>
          <div className="adv">
            <div><h3>Mai mulți furnizori într-o singură cameră</h3><p>Nu ești legat de catalogul unui singur magazin. Poți pune alături piese de la furnizori diferiți și alegi combinația care arată cel mai bine, nu doar ce există într-un singur loc.</p></div>
            <div><h3>Dimensiuni reale</h3><p>Camera și piesele sunt la scară, deci vezi dacă o canapea trece pe lângă fereastră sau dacă măsuța lasă loc de trecere. Potrivirea ca mărime e verificată, nu ghicită.</p></div>
            <div><h3>Stil și mărime împreună</h3><p>Multe aplicații ajută fie la măsurat, fie la inspirație. Roomio le pune la un loc: vezi dintr-o privire cum arată piesa și dacă încape, deci nu mai alegi între frumos și potrivit.</p></div>
            <div><h3>De la randare la cumpărare</h3><p>Aplicația e gândită pentru decizie. Când ai ales piesele, mergi direct la furnizorul fiecăreia, fără să le cauți din nou prin zeci de site-uri.</p></div>
          </div>
        </section>

        <section id="metrici">
          <h2>Metrici cheie</h2>
          <div className="metrics">
            {/* {METRICS.map(([n, d, v]) => (
              <div key={n} className="metric"><strong>{v}</strong><div><h3>{n}</h3><p>{d}</p></div></div>
            ))} */}
            {METRICS.map(([n, d, v]) => (
              <div key={n} className="metric"><div><h3>{n}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </section>

        <section id="costuri">
          <h2>Structura costurilor</h2>
          <p className="intro">Distribuție estimată a bugetului în prima fază.</p>
          <div className="costs">
            {COSTS.map(([n, p, d], i) => (
              <div key={n} className={`cost c${i}`}>
                <div className="cost-top"><h3>{n}</h3><span>{p}%</span></div>
                <div className="bar"><i style={{ width: `${p * 2.5}%` }} /></div>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="venituri">
          <h2>Surse de venit</h2>
          <div className="revenue">
            {REVENUE.map(([n, d]) => <div key={n}><h3>{n}</h3><p>{d}</p></div>)}
          </div>
        </section>
      </main>

          </div>
  );
}

/* ---------- stiluri ---------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap');
html{scroll-behavior:smooth;scroll-padding-top:72px}
*{box-sizing:border-box}
body{margin:0}
.fiki{--bg:#F3F5F2;--ink:#12182B;--accent:#0F766E;--deep:#0B4F4A;--plum:#3A1D3F;--sage:#BFD3B5;--butter:#F4D35E;--line:rgba(18,24,43,.16);
 background:var(--bg);color:var(--ink);font-family:'Instrument Sans',system-ui,sans-serif;font-size:17px;line-height:1.6}
.fiki h1,.fiki h2,.fiki h3,.logo{font-family:'Bricolage Grotesque',system-ui,sans-serif;margin:0;letter-spacing:-.02em}
.fiki a{color:inherit}
.nav{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:28px;padding:14px clamp(18px,4vw,56px);background:rgba(243,245,242,.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.logo{font-weight:800;font-size:22px;text-decoration:none;color:var(--accent)!important}
.nav nav{display:flex;gap:20px;overflow-x:auto;white-space:nowrap;scrollbar-width:none}
.nav nav a{text-decoration:none;font-size:15px;font-weight:500;opacity:.75}
.nav nav a.logo{font-size:22px;opacity:1}
.nav nav a:hover,.nav nav a:focus-visible{opacity:1;color:var(--accent)}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}
.hero{display:grid;grid-template-columns:1fr 1.1fr;gap:clamp(24px,5vw,72px);align-items:center;padding:clamp(28px,4vw,56px) clamp(18px,4vw,56px);max-width:1280px;margin:0 auto}
.pill{display:inline-block;background:var(--butter);padding:4px 14px;border-radius:99px;font-size:14px;font-weight:600}
.hero h1{font-size:clamp(64px,11vw,148px);font-weight:800;line-height:.95;margin:0 0 8px;color:var(--accent)}
.sub{font-size:clamp(20px,2.4vw,28px);font-weight:500;margin:0 0 18px}
.slogan{font-family:'Bricolage Grotesque';font-weight:700;font-size:clamp(22px,3vw,34px);margin:0 0 18px;letter-spacing:-.01em}
.lead{max-width:52ch;margin:0 0 14px}
.hero-room{position:relative}.hero-room::before{content:'';position:absolute;inset:6% 4% 14% 8%;background:var(--butter);border-radius:46% 54% 40% 60%/55% 45% 55% 45%;z-index:0}.hero-room::after{content:'';position:absolute;width:22%;aspect-ratio:1;right:0;top:0;background:var(--sage);border-radius:50%;z-index:0}.room,.toggle{position:relative;z-index:1}
.room svg{width:100%;height:auto;display:block;overflow:visible}
.drop{animation:drop .7s cubic-bezier(.2,.8,.2,1) both}
.dimtext{animation:fade .6s 1.1s both}
@keyframes drop{from{opacity:0;transform:translateY(-26px)}to{opacity:1;transform:none}}
@keyframes fade{from{opacity:0}to{opacity:1}}
.toggle{display:flex;gap:8px;justify-content:center;margin-top:10px}
.toggle button{font:inherit;font-weight:600;font-size:15px;padding:8px 18px;border-radius:99px;border:1.5px solid var(--ink);background:transparent;color:var(--ink);cursor:pointer;transition:background .2s,color .2s}
.toggle button:hover{background:rgba(18,24,43,.08)}
.toggle button.on{background:var(--ink);color:#fff}
main section{padding:clamp(32px,4.5vw,60px) max(clamp(18px,4vw,56px),calc((100% - 1200px)/2))}
#problema{background:var(--plum);color:#fff;--line:rgba(255,255,255,.25)}
#solutia{background:var(--deep);color:#fff;--line:rgba(255,255,255,.35)}
#concurenta,#venituri{background:#fff}
#avantaj{background:var(--sage)}
#costuri{background:#FBF1C4}
h2{font-size:clamp(34px,5vw,60px);font-weight:800;margin-bottom:18px}
h3{font-size:21px;font-weight:700}
.intro{max-width:60ch;margin:0 0 24px;opacity:.8}
.team{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.member{transition:transform .25s}.member:hover{transform:translateY(-6px)}
.member .photo{width:100%;aspect-ratio:1;border-radius:22px 22px 22px 4px;display:grid;place-items:center;overflow:hidden;margin-bottom:14px}
.member .photo span{font-family:'Bricolage Grotesque';font-size:48px;font-weight:800;opacity:.45}
.member .photo img{width:100%;height:100%;object-fit:cover}
.role{margin:2px 0 6px;color:var(--accent);font-weight:600}
.member a{font-size:15px;opacity:.75;word-break:break-all}
.two{display:grid;grid-template-columns:1fr 1.2fr;gap:clamp(24px,5vw,72px);align-items:start}
.big{font-family:'Bricolage Grotesque';font-size:clamp(24px,3vw,36px);font-weight:700;line-height:1.2;letter-spacing:-.015em;margin:0}
.prose p{margin:0 0 14px;font-size:18px;opacity:.9}.prose p:last-child{margin:0}
.big{max-width:30ch}#problema .big{color:var(--butter)}
.story{font-size:clamp(19px,2.2vw,24px);line-height:1.45;max-width:90ch;margin:0 0 28px;font-family:'Bricolage Grotesque';font-weight:500}
.steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-left:3px solid var(--butter)}
.steps li{padding:6px 28px 6px 24px}
.steps li+li{border-left:1px solid var(--line)}
.steps h3{font-size:clamp(26px,3vw,38px);color:var(--butter);margin-bottom:8px}
.steps p{margin:0}
.segments{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.seg{padding:26px;border-radius:6px 26px 6px 26px;transition:transform .25s}.seg:hover{transform:rotate(-1deg) translateY(-4px)}
.seg p{margin:8px 0 0;font-size:16px}
.seg.a{background:var(--sage)}
.seg.b{background:var(--butter);border-radius:26px 6px 26px 6px}
.seg.c{background:#F7D6CE}
.adv{display:grid;grid-template-columns:1fr 1fr;gap:20px 48px;margin-top:24px}.adv div{border-top:2px solid var(--ink);padding-top:12px}.adv h3{font-size:19px;margin-bottom:6px}.adv p{margin:0;font-size:16px}
.table-wrap{overflow-x:auto}
table{border-collapse:collapse;width:100%;min-width:640px;font-size:16px}
th,td{text-align:left;padding:14px 16px 14px 0;vertical-align:top;border-bottom:1px solid var(--line)}
th{font-family:'Bricolage Grotesque';font-size:17px;border-bottom:2px solid var(--ink)}
td:first-child{font-weight:600;white-space:nowrap}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.metric{display:flex;flex-direction:column;gap:6px;padding:18px 0;border-top:3px solid var(--accent)}
.metric strong{font-family:'Bricolage Grotesque';font-size:clamp(40px,5vw,64px);font-weight:800;color:var(--accent);letter-spacing:-.04em;line-height:1}
.metric h3{font-size:19px}
.metric p{margin:2px 0 0;font-size:15.5px;opacity:.75}
.costs{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
.cost{grid-column:span 2;background:#fff;padding:18px 20px;border-radius:16px 16px 16px 4px}
.cost.c0,.cost.c1{grid-column:span 3}
.cost-top{display:flex;justify-content:space-between;align-items:baseline;gap:10px}
.cost-top h3{font-size:18px}
.cost-top span{font-family:'Bricolage Grotesque';font-weight:800;font-size:26px;color:var(--accent)}
.bar{height:8px;background:rgba(18,24,43,.1);border-radius:99px;margin:8px 0 10px;overflow:hidden}
.bar i{display:block;height:100%;background:var(--accent);border-radius:99px}
.cost p{margin:0;font-size:15px;opacity:.8;line-height:1.5}
.revenue{display:grid;grid-template-columns:1fr 1fr;gap:0}
.revenue div{padding:20px 32px 20px 0;border-top:2px solid var(--ink)}
.revenue div:nth-child(even){padding-left:32px;padding-right:0}
.revenue h3{margin-bottom:8px}
.revenue p{margin:0;opacity:.8}
main section:not(#echipa){font-size:.9em}
main section:not(#echipa) h2{font-size:clamp(30.6px,4.5vw,54px)}
main section:not(#echipa) h3{font-size:18.9px}
main section:not(#echipa) .big{font-size:clamp(21.6px,2.7vw,32.4px)}
main section:not(#echipa) .prose p{font-size:16.2px}
main section:not(#echipa) .story{font-size:clamp(17.1px,1.98vw,21.6px)}
main section:not(#echipa) .steps h3{font-size:clamp(23.4px,2.7vw,34.2px)}
main section:not(#echipa) .seg p,main section:not(#echipa) .adv p{font-size:14.4px}
main section:not(#echipa) .adv h3,.metric h3{font-size:17.1px}
main section:not(#echipa) table{font-size:14.4px}
main section:not(#echipa) th{font-size:15.3px}
main section:not(#echipa) .metric strong{font-size:clamp(36px,4.5vw,57.6px)}
main section:not(#echipa) .metric p{font-size:13.95px}
main section:not(#echipa) .cost-top h3{font-size:16.2px}
main section:not(#echipa) .cost-top span{font-size:23.4px}
main section:not(#echipa) .cost p{font-size:13.5px}
@media(max-width:860px){
 .hero,.two{grid-template-columns:1fr}
 .team,.adv{grid-template-columns:repeat(2,1fr)}.metrics{grid-template-columns:repeat(2,1fr)}.costs{grid-template-columns:1fr}.cost,.cost.c0,.cost.c1{grid-column:auto}
 .steps{grid-template-columns:1fr;gap:20px}.steps li+li{border-left:0}
 .segments{grid-template-columns:1fr}
 .revenue{grid-template-columns:1fr}
 .revenue div,.revenue div:nth-child(even){padding:24px 0}
 .nav{gap:16px}
}
@media(max-width:480px){.team,.adv,.metrics{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.drop,.dimtext{animation:none}}
`;
