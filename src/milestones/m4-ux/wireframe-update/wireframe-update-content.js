// Partea 4 din M4: ce am schimbat în wireframe după interviuri.
// Fiecare ecran schimbat are lista modificărilor; numărul modificării este numărul de pe ecran.
// [ce am schimbat, cum era în M3, cum este acum, concluzia sau user story-ul și participantul de la care vine]
export const WF_UPDATES = [
  {
    id: "camera", n: "1.2", title: "Construiește camera", url: "camera-1/construieste", h: 1450,
    changes: [
      ["Drumul până în cameră", "Doar ușile și ferestrele camerei.", "Ușa blocului, liftul sau scara, ușa apartamentului și ușa camerei, fiecare cu lățimea și înălțimea ei.", "Concluzia 1 · I."],
      ["Scanarea camerei", "Camera se desena doar de mână, din dimensiuni și formă.", "Funcție viitoare: pornești camera scanând-o cu telefonul.", "Concluzia 5 · M., An."],
    ],
  },
  {
    id: "mobileaza", n: "1.3", title: "Mobilează camera", url: "camera-1/mobileaza", h: 840,
    // observație afișată sub ecran, fără să fie desenată în wireframe: [titlu, text, sursa]
    note: ["Vezi prin camera telefonului", "Funcție viitoare: piesa aleasă se vede direct în cameră, prin camera telefonului. Nu este desenată în wireframe.", "Concluzia 5 · An."],
    changes: [
      ["Piesă proprie", "Doar produse din catalog, marcate ca „am deja”.", "Orice piesă pe care o ai, adăugată cu o poză și dimensiunile ei.", "Concluzia 3 · A., I."],
      ["Colțul canapelei", "Piesa se putea doar roti.", "Pentru canapelele de colț, alegi colțul pe stânga sau pe dreapta.", "I."],
      ["Trece pe drum", "Verdict doar pentru locul din cameră.", "Și verdictul pentru drumul până în cameră.", "Concluzia 1 · I."],
      ["Se poate folosi", "Verdictul spunea doar dacă piesa încape.", "Planul arată spațiul de care au nevoie ușile și sertarele ca să se deschidă, iar verdictul semnalează când o piesă blochează deschiderea alteia.", "Concluzia 6 · User story 7 · M."],
    ],
  },
  {
    id: "catalog", n: "2.1", title: "Catalog și fișa produsului", url: "catalog", h: 900,
    changes: [
      ["Filtru după culoare", "Filtre doar după cameră, tip și furnizor.", "Alegi una sau mai multe culori.", "Concluzia 2 · A., I."],
      ["Filtru după dimensiuni", "Doar comutatorul „Doar ce încape”.", "Introduci dimensiunile maxime ale locului liber.", "Concluzia 4 · I."],
      ["Coletele și greutatea", "Doar dimensiunile piesei montate.", "Numărul de colete, cel mai mare colet și greutatea, verificate pe drumul până în cameră.", "Concluzia 1 · I."],
      ["Stoc și livrare", "Livrarea apărea doar la comandă.", "Fiecare piesă arată dacă e în stoc și în câte zile ajunge; comutatorul „Doar ce e în stoc” ascunde restul.", "User story 6 · An."],
      ["Unde o găsești", "Fiecare produs avea un singur preț.", "Fișa produsului arată prețul la fiecare magazin care îl are, ordonat de la cel mai mic.", "User story 8 · M."],
    ],
  },
];
