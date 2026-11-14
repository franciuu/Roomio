import { useState, useEffect, useRef } from "react";

// conținut desenat la o mărime fixă (w × h) și scalat la lățimea containerului
export function ScaledFrame({ w = 960, h = 600, children }) {
  const ref = useRef(null);
  const [k, setK] = useState(0);
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setK(e.contentRect.width / w));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={ref} className="scaled-frame" style={{ aspectRatio: `${w} / ${h}` }}>
      <div style={{ width: w, height: h, transform: `scale(${k})` }}>{children}</div>
    </div>
  );
}
