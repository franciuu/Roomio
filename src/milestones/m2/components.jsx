// Componentele din M2: povestea, barele, parola pentru dovezi și capturile
import { useState, useEffect, useRef } from "react";
import { CHARTS, PEOPLE, STORY, STORY_END, shot } from "./data.js";
import { reducedMotion } from "../../shared/motion.js";

// pașii se aprind pe rând, pe măsură ce ajung în ecran
export function Story() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(0);
  useEffect(() => {
    const items = [...ref.current.querySelectorAll("li")];
    if (reducedMotion() || !("IntersectionObserver" in window)) { setSeen(items.length); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      setSeen((s) => Math.max(s, items.indexOf(e.target) + 1));
      io.unobserve(e.target);
    }), { rootMargin: "0px 0px -20% 0px" });
    items.forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <ol ref={ref} className="plain story" style={{ "--seen": Math.max(0, seen - 1) / (STORY.length - 1) }}>
        {STORY.map(([t, d], i) => (
          <li key={t} className={i < seen ? "in" : ""}>
            <span className="story-dot">{i + 1}</span>
            <div><h3>{t}</h3><p>{d}</p></div>
          </li>
        ))}
      </ol>
      <p className={`story-end${seen === STORY.length ? " in" : ""}`}>{STORY_END}</p>
    </>
  );
}

export function Bars({ items }) {
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
export const PROOF_HASH = "bf4403ae94febabaa85d6ec2f425ce91a041327d5f1a0e2804eb86c17ebc28d7";
export const sha256 = async (text) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

export function Locked({ children }) {
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
export function Zoom({ src, onClose }) {
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

export function Proof() {
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
