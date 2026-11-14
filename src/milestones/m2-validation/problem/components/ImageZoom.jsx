// Captura mărită peste pagină; se închide cu click sau Escape
import { useEffect } from "react";

export function ImageZoom({ src, onClose }) {
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
