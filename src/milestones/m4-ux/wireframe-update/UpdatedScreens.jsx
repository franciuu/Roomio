// Ecranele din wireframe, actualizate după interviuri. Doar elementele noi sunt marcate și numerotate;
// restul ecranului este cel din M3.
import { AppBar, Btn, Check, Field, Img, Link, Mark, RoomBar, RoomPlan, Switch, Thumb, Verdict } from "../../m3-wireframe-landing/wireframe/SketchElements.jsx";
import { WF_UPDATES } from "./wireframe-update-content.js";

const SHAPES = [
  ["Dreptunghi", "M4 4H36V26H4Z"],
  ["Formă de L", "M4 4H22V14H36V26H4Z"],
  ["Trapez", "M10 4H30L36 26H4Z"],
  ["Colț teșit", "M4 4H28L36 12V26H4Z"],
];
const PIECES = ["Piesa 1", "Piesa 2", "Piesa 3", "Piesa 4", "Piesa 5", "Piesa 6"];
// punctele de trecere de pe drumul piesei până în cameră, câte două pe rând
const ROUTE = [["Ușa blocului", "Liftul sau scara"], ["Ușa apartamentului", "Ușa camerei"]];

const SCREENS = {
  camera: () => (
    <>
      <AppBar active="proiecte" room="Camera 1" />
      <div className="wf-sub"><RoomBar mode="build" /></div>
      <div className="wf-cols build">
        <aside className="wf-panel">
          <Mark n={2} className="wf-stack">
            <div className="wf-row between"><h6>Pornește mai repede</h6><span className="wf-tag">Funcție viitoare</span></div>
            <Btn>Scanează camera cu telefonul</Btn>
            <small>Sau completează de mână dimensiunile de mai jos.</small>
          </Mark>
          <div className="wf-stack">
            <h6>Tipul și numele</h6>
            <div className="wf-row"><Field l="Tipul camerei" v="Tip ▾" /><Field l="Numele camerei" v="Camera 1" /></div>
          </div>
          <div className="wf-stack">
            <h6>Dimensiuni</h6>
            <div className="wf-row"><Field l="Lungime" v="0,00" u="m" /><Field l="Lățime" v="0,00" u="m" /><Field l="Înălțime" v="0,00" u="m" /></div>
          </div>
          <div className="wf-stack">
            <h6>Forma</h6>
            <div className="wf-shapes">
              {SHAPES.map(([t, d], i) => <span key={t} className={i === 0 ? "on" : ""}><svg viewBox="0 0 40 30" aria-hidden="true"><path d={d} /></svg>{t}</span>)}
            </div>
          </div>
          <div className="wf-stack">
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
          </div>
          <div className="wf-stack">
            <h6>Uși și ferestre</h6>
            <div className="wf-irow"><b>Ușă</b><small>90 cm · perete nordic · 200 cm de colț</small><Link>Editează</Link></div>
            <div className="wf-irow"><b>Fereastră</b><small>170 cm · perete vestic · 105 cm de colț</small><Link>Editează</Link></div>
            <Btn>+ Adaugă ușă sau fereastră</Btn>
          </div>
          <Mark n={1} className="wf-stack">
            <h6>Drumul până în cameră</h6>
            <small>Pe unde trece mobila de la stradă până în cameră.</small>
            {ROUTE.map((pair) => <div key={pair[0]} className="wf-row">{pair.map((n) => <Field key={n} l={n} v="L × Î" u="cm" />)}</div>)}
            <Btn>+ Adaugă un punct de trecere</Btn>
          </Mark>
          <div className="wf-panel-foot">
            <div className="wf-stack"><small>Suprafață utilă</small><b className="wf-big">0,0 m²</b></div>
            <Btn primary>Continuă cu mobila</Btn>
          </div>
        </aside>
        <div className="wf-canvas">
          <span className="wf-float"><span className="wf-seg"><b>3D</b><span>Plan</span></span></span>
          <div className="wf-planbox"><RoomPlan /></div>
        </div>
      </div>
    </>
  ),

  mobileaza: () => (
    <>
      <AppBar active="proiecte" room="Camera 1" right={<span className="wf-total">De cumpărat <b>total</b></span>} />
      <div className="wf-sub"><RoomBar mode="furnish" /></div>
      <div className="wf-cols furnish">
        <aside className="wf-panel tight">
          <div className="wf-stack">
            <div className="wf-search">⌕ Caută o piesă</div>
            <Mark n={1} className="wf-stack">
              <Btn>+ Piesă pe care o am</Btn>
              <small>Poză și L × l × Î</small>
            </Mark>
            <div className="wf-chips"><b>Toate</b><span>Categoria 1</span><span>Categoria 2</span><span>Categoria 3</span></div>
            {PIECES.map((n) => (
              <div key={n} className="wf-erow"><Thumb w={50} h={40} /><div><b>{n}</b><small>L × l × Î</small><small>preț</small></div><span className="wf-plus">+</span></div>
            ))}
          </div>
          <small className="wf-hint">Trage în cameră sau apasă + pentru plasare automată.</small>
        </aside>
        <div className="wf-canvas">
          <span className="wf-vctl"><span>↺ ↻</span><span>− 100% +</span><span>Pereți</span></span>
          <span className="wf-compass">N</span>
          <span className="wf-otb"><span>L × l</span><span>↺</span><span>↻</span><span>⌫</span></span>
          <RoomPlan furnish />
          <div className="wf-legend"><span><i className="fit" />Încape</span><span><i className="clash" />Nu încape</span><span><i className="own" />Mobilier existent</span><Mark n={4}><span><i className="swing" />Spațiu de deschidere</span></Mark></div>
          <small className="wf-hint corner">Click dreapta pe o piesă: opțiuni · R: rotire · Q, E: vedere</small>
        </div>
        <aside className="wf-panel">
          <div className="wf-stack">
            <h6>Detalii piesă</h6>
            <small>Furnizor</small>
            <h6 className="flat">Nume piesă</h6>
            <span>Preț</span>
            <div className="wf-own"><div><b>Am deja acest produs</b><small>Nu intră în totalul de cumpărat</small></div><Switch /></div>
            <Mark n={2} className="wf-stack">
              <small>Colțul canapelei</small>
              <span className="wf-seg"><Btn on>Stânga</Btn><Btn>Dreapta</Btn></span>
            </Mark>
            <div className="wf-vrow"><span>Locul din cameră</span><Verdict v="fit">Încape</Verdict></div>
            <Mark n={3}><div className="wf-vrow"><span>Drumul până în cameră</span><Verdict v="fit">Trece</Verdict></div></Mark>
            <Mark n={4}><div className="wf-vrow"><span>Ușile se deschid</span><Verdict v="clash">Pe jumătate</Verdict></div></Mark>
            <small>Distanța până la cea mai apropiată piesă.</small>
            <dl className="wf-kv"><dt>Lățime</dt><dd>— cm</dd><dt>Adâncime</dt><dd>— cm</dd><dt>Înălțime</dt><dd>— cm</dd><dt>Rotație</dt><dd>↺ 0° ↻</dd></dl>
          </div>
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
          <div className="wf-stack">
            <h6>Cameră</h6>
            <Check round>Toate camerele</Check><Check round on n="N">Camera 1</Check><Check round n="N">Camera 2</Check><Check round n="N">Camera 3</Check>
            <h6>Tipul produsului</h6>
            <Check n="N">Tip 1</Check><Check n="N">Tip 2</Check><Check n="N">Tip 3</Check><Check n="N">Tip 4</Check>
            <h6>Furnizor</h6>
            <Check n="N">Furnizor 1</Check><Check n="N">Furnizor 2</Check><Check n="N">Furnizor 3</Check>
          </div>
          <Mark n={1} className="wf-stack">
            <h6>Culoare</h6>
            <Check n="N">Culoare 1</Check><Check on n="N">Culoare 2</Check><Check n="N">Culoare 3</Check>
          </Mark>
          <Mark n={2} className="wf-stack">
            <h6>Dimensiuni maxime</h6>
            <div className="wf-row"><Field l="L" v="—" u="cm" /><Field l="l" v="—" u="cm" /><Field l="Î" v="—" u="cm" /></div>
          </Mark>
        </aside>
        <div className="wf-main">
          <div className="wf-row between"><div className="wf-search wide">⌕ Caută după nume, furnizor sau tip</div><div className="wf-row"><small>Doar ce încape</small><Switch /><Mark n={4} className="wf-row"><small>Doar ce e în stoc</small><Switch /></Mark></div></div>
          <div className="wf-ctx"><span>Verdict pentru <b>Camera 1, locul ales</b>: spațiul liber</span><small>N piese</small></div>
          <div className="wf-grid3">
            {[["fit", "x cm liberi"], ["fit", "x cm liberi"], ["clash", "lipsesc x cm"], ["fit", "x cm liberi", true], ["clash", "lipsesc x cm"], ["fit", "x cm liberi"]].map(([v, t, sel], i) => (
              <div key={i} className={`wf-pc${sel ? " sel" : ""}${v === "clash" ? " dim" : ""}`}><Img h={92} /><b>Nume piesă</b><small>în stoc · N zile</small><div className="wf-row between"><small>preț</small><Verdict v={v}>{t}</Verdict></div></div>
            ))}
          </div>
        </div>
        <aside className="wf-panel">
          <div className="wf-stack">
            <Img h={130} label="model 3D" />
            <small>Furnizor · tip</small>
            <h6 className="flat">Nume piesă</h6>
            <Mark n={4}><div className="wf-vrow"><span>În stoc</span><small>ajunge în N zile</small></div></Mark>
          </div>
          <Mark n={5} className="wf-stack">
            <h6>Unde o găsești</h6>
            <small>De la cel mai mic preț</small>
            {["Furnizor 1", "Furnizor 2", "Furnizor 3"].map((f) => <div key={f} className="wf-vrow"><span>{f}</span><b>preț</b></div>)}
          </Mark>
          <div className="wf-stack">
            <h6>Dimensiuni</h6>
            <dl className="wf-kv"><dt>Piesa montată</dt><dd>L × l × Î</dd><dt>Potrivită pentru</dt><dd>tipuri de camere</dd></dl>
            <Mark n={3}>
              <dl className="wf-kv"><dt>Colete</dt><dd>N</dd><dt>Cel mai mare</dt><dd>L × l × Î</dd><dt>Greutate</dt><dd>— kg</dd></dl>
            </Mark>
          </div>
          <div className="wf-stack">
            <h6>Verificare</h6>
            <div className="wf-vrow"><span>Locul ales</span><Verdict v="fit">Încape</Verdict></div>
            <div className="wf-vrow"><span>Drumul până în cameră</span><Verdict v="fit">Trece</Verdict></div>
          </div>
          <div className="wf-panel-foot col"><Btn primary>Adaugă în cameră</Btn></div>
        </aside>
      </div>
    </>
  ),

};

const BY_ID = Object.fromEntries(WF_UPDATES.map((s) => [s.id, s]));

// un ecran actualizat în rama de browser
export function UpdatedScreen({ id }) {
  return (
    <div className="wf">
      <div className="wf-chrome"><i /><i /><i /><span>roomio.app/{BY_ID[id].url}</span></div>
      <div className="wf-page">{SCREENS[id]()}</div>
    </div>
  );
}
