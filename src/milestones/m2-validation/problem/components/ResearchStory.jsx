// Povestea din spatele ideii: pașii se aprind pe rând, pe măsură ce ajung în ecran
import { useState, useEffect, useRef } from "react";
import { STORY, STORY_END } from "../problem-content.js";
import { reducedMotion } from "../../../../shared/reducedMotion.js";

export function ResearchStory() {
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
