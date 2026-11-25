// Antetul din M5: cele trei părți, secțiunile lor și rezumatul campaniei

export const M5_PARTS = [
  { id: "colectare", label: "Colectarea leadurilor", sub: "Câte contacte am strâns de pe landing page", sections: [["c-rezultate", "Leaduri"], ["c-formular", "Secțiunea de înscriere"], ["c-date", "Ce colectăm"]] },
  { id: "analytics", label: "Analytics", sub: "Vizitatori, funnel și session replay", sections: [["a-vizitatori", "Vizitatori"], ["a-funnel", "Funnel"], ["a-replay", "Session replay"]] },
  { id: "campanie", label: "Campania", sub: "Unde am promovat landing page-ul", sections: [["k-postari", "Postările"], ["k-statistici", "Statisticile"], ["k-canale", "Comparația canalelor"], ["k-concluzii", "Concluzii"]] },
];

// cifrele din antet; [valoare, ce înseamnă]; câmpurile goale apar ca „—”
export const SUMMARY = [
  ["106", "vizitatori pe landing page"],
  ["2", "leaduri colectate"],
  ["1,9%", "dintre vizitatori s-au înscris"],
  ["Facebook", "cel mai bun canal, reclama cu reel-ul"],
];
