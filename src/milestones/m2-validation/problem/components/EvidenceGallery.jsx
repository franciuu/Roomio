// Dovezile din M2: formularul, graficele din Google Forms și răspunsurile individuale
import { useState } from "react";
import { CHARTS, PEOPLE, shot } from "../problem-content.js";
import { ImageZoom } from "./ImageZoom.jsx";

export function EvidenceGallery() {
  const [big, setBig] = useState(null);
  const Img = ({ src, alt }) => (
    <button className="shot" onClick={() => setBig(src)} aria-label={`Mărește: ${alt}`}><img src={src} alt={alt} loading="lazy" /></button>
  );
  return (
    <>
      <figure className="shot-form">
        <Img src={shot("form.jpg")} alt="Începutul formularului: Cum ți-ai mobilat locuința?" />
        <figcaption>Formularul trimis respondenților.</figcaption>
      </figure>

      <h3 className="sub-h">Rezumatul din Google Forms</h3>
      <div className="charts-grid">
        {CHARTS.map((c) => <Img key={c} src={shot(`charts/${c}.jpg`)} alt={`Graficul din Google Forms: ${c}`} />)}
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
            {imgs.map((f) => <Img key={f} src={shot(`responses/${f}.jpg`)} alt={`Răspunsul lui ${name} în formular`} />)}
          </article>
        ))}
      </div>
      {big && <ImageZoom src={big} onClose={() => setBig(null)} />}
    </>
  );
}
