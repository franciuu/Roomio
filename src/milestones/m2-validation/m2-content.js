// Antetul din M2: cele două părți și etapele validării

// M2 are două părți, fiecare cu secțiunile ei; o parte cu locked: true apare în antet, dar nu se poate deschide
export const M2_PARTS = [
  { id: "problema", label: "Confirmarea problemei", status: "Finalizată", state: "done", sub: "35 de răspunsuri analizate", sections: [["problema", "Problema"], ["solutia", "Soluția"], ["plan", "Planul"], ["proces", "Procesul"], ["rezultate", "Rezultate"], ["impact", "Impact"], ["concluzie", "Concluzie"], ["dovezi", "Dovezi"]] },
  { id: "solutie", label: "Validarea soluției", status: "În curs", state: "next", locked: true, sub: "6 funcții testate într-un formular nou", sections: [["s-teste", "Ce testăm"], ["s-metoda", "Metoda"], ["s-masuram", "Ce măsurăm"], ["s-rezultate", "Rezultate"]] },
];

// [etapă, dată, stare]
export const PROGRESS = [
  ["Ipoteze", "M1", "done"],
  ["Formular: problema", "31 oct", "done"],
  ["35 de răspunsuri", "31 oct – 2 nov", "done"],
  ["Problema confirmată", "nov", "done"],
  ["Formular: soluția", "în curs", "next"],
  ["Interviuri cu prototip", "urmează", "todo"],
  ["Customer Validation", "după validare", "todo"],
];
