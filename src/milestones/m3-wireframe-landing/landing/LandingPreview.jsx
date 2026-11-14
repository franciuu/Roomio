// Landing page-ul, navigabil direct din Fiki: pe desktop e afișat la 1440 px și micșorat, pe telefon la 390 px
import { useState } from "react";
import { ScaledFrame } from "../../../shared/ScaledFrame.jsx";
import { LANDING_HREF, LANDING_URL } from "./landing-content.js";

export function LandingPreview() {
  const [device, setDevice] = useState("desktop");
  return (
    <div className={`lp-browser ${device}`}>
      <div className="lp-browser-bar">
        <span className="lp-dots"><i /><i /><i /></span>
        <span className="lp-url">{LANDING_URL.replace("https://", "")}</span>
        <div className="lp-device" role="group" aria-label="Dispozitiv">
          <button type="button" aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}>Desktop</button>
          <button type="button" aria-pressed={device === "phone"} onClick={() => setDevice("phone")}>Telefon</button>
        </div>
        <a className="lp-open" href={LANDING_HREF} target="_blank" rel="noopener">Deschide separat ↗</a>
      </div>
      {device === "desktop"
        ? <ScaledFrame w={1440} h={900}><iframe src={LANDING_HREF} title="Landing page Roomio, versiunea desktop" width="1440" height="900" /></ScaledFrame>
        : <div className="lp-phone"><iframe src={LANDING_HREF} title="Landing page Roomio, versiunea pentru telefon" width="390" height="760" /></div>}
    </div>
  );
}
