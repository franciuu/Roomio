// Milestone-urile din Fiki și legătura lor cu adresa (#m2, #m3-landing)
import { M2_PARTS } from "../milestones/m2-validation/m2-content.js";
import { M3_PARTS } from "../milestones/m3-wireframe-landing/m3-content.js";

export const PARTS = { m2: M2_PARTS, m3: M3_PARTS };

export const MILESTONES = [
  { id: "m1", label: "M1", ready: true, sections: [["echipa", "Echipa"], ["problema", "Problema"], ["solutia", "Soluția"], ["clienti", "Clienți"], ["concurenta", "Concurența"], ["avantaj", "Avantaj"], ["metrici", "Metrici"], ["costuri", "Costuri"], ["venituri", "Venituri"]] },
  { id: "m2", label: "M2", ready: true },
  { id: "m3", label: "M3", ready: true },
  ...Array.from({ length: 7 }, (_, i) => ({ id: `m${i + 4}`, label: `M${i + 4}`, ready: false })),
];

// #m2 → partea 1, #m2-solutie → partea 2; #m3-landing → partea 2 din M3
export const fromHash = () => {
  const h = window.location.hash.slice(1).split("-")[0];
  return MILESTONES.some((m) => m.id === h && m.ready) ? h : "m1";
};
export const partFromHash = () => {
  const [ms, sub] = window.location.hash.slice(1).split("-");
  const parts = PARTS[ms];
  if (!parts) return null;
  return parts.some((p) => p.id === sub) ? sub : parts[0].id;
};
