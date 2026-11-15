// Partea 2 din M5: ce arată PostHog despre landing page.
// Câmpurile goale ("") apar în pagină ca spații de completat, cu indiciul de lângă ele.

// cele trei funcții PostHog cerute în M5; [iconiță, nume, ce urmărim cu ea, secțiunea]
export const TOOLS = [
  ["chart", "Web analytics", "Câți vizitatori avem, de unde vin și de pe ce dispozitiv.", "a-vizitatori"],
  ["funnel", "Product analytics", "Funnel-ul de la intrarea pe pagină până la înscriere.", "a-funnel"],
  ["play", "Session replay", "Cum folosesc vizitatorii pagina, ca să vedem unde se opresc.", "a-replay"],
];

// Web analytics; [valoare, ce înseamnă]
export const WEB_METRICS = [
  ["", "vizitatori unici"],
  ["", "vizualizări ale paginii"],
  ["", "timp mediu pe pagină"],
  ["", "dintre vizitatori, de pe telefon"],
];

// Product analytics: funnel-ul de la vizită la înscriere; [pas, câți au ajuns acolo]
export const FUNNEL = [
  ["Au intrat pe landing page", ""],
  ["Au derulat până la secțiunea de înscriere", ""],
  ["Au apăsat „Intră în listă”", ""],
  ["Au trimis formularul", ""],
];

// Session replay; [ce am observat, ce am schimbat pe landing page]
export const REPLAY = [
  ["", ""],
  ["", ""],
  ["", ""],
];
