// Partea 4 din M4: ce am schimbat în wireframe după interviuri.
// Fiecare ecran schimbat are lista modificărilor; numărul modificării este numărul de pe ecran.
// [ce am schimbat, cum era în M3, cum este acum, concluzia și participanta de la care vine]
export const WF_UPDATES = [
  {
    id: "camera", n: "1.2", title: "Construiește camera", url: "camera-1/construieste", h: 1350,
    changes: [
      ["Drumul până în cameră", "Doar ușile și ferestrele camerei.", "Ușa blocului, liftul sau scara, ușa apartamentului și ușa camerei, fiecare cu lățimea și înălțimea ei.", "C1 · I."],
    ],
  },
  {
    id: "mobileaza", n: "1.3", title: "Mobilează camera", url: "camera-1/mobileaza", h: 800,
    changes: [
      ["Piesă proprie", "Doar produse din catalog, marcate ca „am deja”.", "Orice piesă pe care o ai, adăugată cu o poză și dimensiunile ei.", "C3 · A., I."],
      ["Colțul canapelei", "Piesa se putea doar roti.", "Pentru canapelele de colț, alegi colțul pe stânga sau pe dreapta.", "I."],
      ["Trece pe drum", "Verdict doar pentru locul din cameră.", "Și verdictul pentru drumul până în cameră.", "C1 · I."],
    ],
  },
  {
    id: "catalog", n: "2.1", title: "Catalog și fișa produsului", url: "catalog", h: 820,
    changes: [
      ["Filtru după culoare", "Filtre doar după cameră, tip și furnizor.", "Alegi una sau mai multe culori.", "C2 · A., I."],
      ["Filtru după dimensiuni", "Doar comutatorul „Doar ce încape”.", "Introduci dimensiunile maxime ale locului liber.", "C4 · I."],
      ["Coletele și greutatea", "Doar dimensiunile piesei montate.", "Numărul de colete, cel mai mare colet și greutatea, verificate pe drumul până în cameră.", "C1 · I."],
    ],
  },
];
