// Partea 3 din M5: postările din campanie, comparația canalelor și concluziile.
// Câmpurile goale ("") apar în pagină ca spații de completat, cu indiciul de lângă ele.
// Fiecare canal are linkul lui spre landing page, cu utm_source, ca PostHog să arate de unde vin vizitatorii.

const LANDING = "https://franciuu.github.io/Roomio/landing.html";

// canalele; id-ul este și valoarea din utm_source
export const CHANNELS = [
  { id: "facebook_pagina", name: "Pagina de Facebook", icon: "page", where: "Pagina Roomio" },
  { id: "facebook_grupuri", name: "Grupuri de Facebook", icon: "group", where: "Grupuri despre amenajări și mobilă" },
  { id: "reddit", name: "Reddit", icon: "reddit", where: "Subreddit-uri relevante" },
  { id: "instagram", name: "Instagram", icon: "camera", where: "Profilul Roomio" },
].map((c) => ({ ...c, link: `${LANDING}?utm_source=${c.id}` }));

// o intrare pentru fiecare postare; captura se pune în public/m5/ și se scrie aici doar numele fișierului
export const POSTS = CHANNELS.map((c) => ({
  channel: c.id, where: "", date: "", permalink: "", screenshot: "", reach: "", reactions: "",
}));

// rezultatele pe canale, din PostHog (vizitatori, click-uri) și din formular (leaduri)
export const RESULTS = CHANNELS.map((c) => ({
  channel: c.id, posts: "", visitors: "", clicks: "", leads: "",
}));

// [canalul care a mers cel mai bine, de ce]
export const BEST_CHANNEL = ["", ""];

// [concluzie, pe scurt]
export const CAMPAIGN_CONCLUSIONS = [
  ["", ""],
  ["", ""],
  ["", ""],
];
