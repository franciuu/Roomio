// Ecranele din wireframe, în ordinea în care le parcurge utilizatorul.
// Conținutul e generic (nume de proiect, camere, piese); fiecare notă corespunde elementului cu același număr de pe ecran.
export const WF_SCREENS = [
  {
    id: "proiecte", n: "1.1", title: "Lista proiectelor", short: "Lista proiectelor", url: "proiecte",
    what: "Ecranul de start. Arată camerele proiectului și starea fiecăreia.",
    notes: [
      ["Proiectul", "Arată numele proiectului, numărul de camere și suprafața utilă."],
      ["Cameră nouă", "Deschide ecranul în care se construiește o cameră nouă."],
      ["Miniatura camerei", "Arată camera în 3D. La click, camera se deschide."],
      ["Starea camerei", "Arată dacă piesele încap, dacă există un conflict sau dacă camera e goală."],
      ["Alte proiecte", "Listează celelalte proiecte ale utilizatorului și camerele lor."],
    ],
    actions: [["+ Cameră nouă", "camera"], ["Adaugă o cameră", "camera"], ["Click pe o cameră", "mobileaza"]],
  },
  {
    id: "camera", n: "1.2", h: 1120, title: "Construiește camera", short: "Construiește camera", url: "camera-1/construieste",
    what: "Utilizatorul descrie camera: tipul, dimensiunile, forma, ușile și ferestrele.",
    notes: [
      ["Bara camerei", "Duce la lista de camere și comută între Construiește și Mobilează."],
      ["Tipul și numele", "Tipul camerei (de exemplu living, dormitor, birou sau baie) propune dimensiuni obișnuite."],
      ["Dimensiunile", "Lungimea, lățimea și înălțimea se introduc în metri."],
      ["Forma", "Utilizatorul alege una dintre formele obișnuite: dreptunghi, L, trapez sau colț teșit."],
      ["Imperfecțiunile", "Dacă există ghene sau stâlpi, fiecare se adaugă cu dimensiunile și poziția lui."],
      ["Uși și ferestre", "Fiecare are o lățime și o poziție pe perete. Butonul adaugă una nouă."],
      ["Suprafața utilă", "Se calculează fără ghene și stâlpi."],
      ["Previzualizarea", "Desenează camera la scară, în 3D sau ca plan."],
    ],
    actions: [["Continuă cu mobila", "mobileaza"], ["Mobilează", "mobileaza"], ["← Toate camerele", "proiecte"]],
  },
  {
    id: "mobileaza", n: "1.3", title: "Mobilează camera", short: "Mobilează camera", url: "camera-1/mobileaza",
    what: "Editorul camerei. Utilizatorul adaugă piese și vede imediat dacă încap. Camera poate conține și mobilă pe care clientul o are deja, marcată din panoul Detalii piesă (5).",
    notes: [
      ["De cumpărat", "Totalul pieselor noi din cameră. Mobilierul existent al clientului nu este inclus."],
      ["Piesele", "Grupate pe categorii după tipul camerei, de exemplu living sau baie. Se adaugă cu + sau prin tragere."],
      ["Vederea", "Rotește și mărește camera. Pereții pot fi coborâți pentru o vedere de ansamblu."],
      ["Piesa selectată", "Afișează dimensiunile piesei, butoanele de rotire și distanța până la pereți."],
      ["Detalii piesă", "Verdictul de potrivire, dimensiunile și opțiunea de a marca piesa ca mobilier existent."],
    ],
    actions: [["Deschide lista completă", "lista"], ["Construiește", "camera"], ["← Toate camerele", "proiecte"]],
  },
  {
    id: "catalog", n: "2.1", title: "Catalog și fișa produsului", short: "Catalog și fișa", url: "catalog",
    what: "Catalogul reunește piesele tuturor furnizorilor și verifică dacă încap în locul ales.",
    notes: [
      ["Filtrele", "Filtrează piesele după cameră, tip și furnizor."],
      ["Căutarea", "Caută după nume, furnizor sau tip. „Doar ce încape” ascunde piesele prea mari."],
      ["Locul ales", "Arată spațiul liber pentru care se calculează verdictul."],
      ["Produsul", "Arată prețul și verdictul. Piesele care nu încap sunt estompate."],
      ["Fișa produsului", "Arată modelul 3D, dimensiunile și dacă piesa trece prin ușă."],
    ],
    actions: [["Adaugă în cameră", "mobileaza"]],
  },
  {
    id: "lista", n: "3.1", title: "Lista de cumpărături", short: "Lista de cumpărături", url: "lista",
    what: "Lista arată ce trebuie cumpărat din toate camerele, de la ce furnizor și cât costă.",
    notes: [
      ["Camerele", "Filtrează lista pe camere."],
      ["Camera", "Arată totalul camerei și duce în Mobilează."],
      ["Produsele", "Separă ce trebuie cumpărat de ce există deja."],
      ["Totalul", "Include produsele și livrarea."],
      ["Comenzile", "Fiecare furnizor primește o comandă separată."],
    ],
    actions: [["Deschide în Mobilează", "mobileaza"]],
  },
];
export const WF_BY_ID = Object.fromEntries(WF_SCREENS.map((s) => [s.id, s]));

// harta ecranelor: centrul fiecărui ecran
export const FLOW_POS = {
  proiecte: [150, 110], camera: [410, 110], mobileaza: [670, 110], catalog: [410, 225], lista: [670, 330],
};
// [de la, la, eticheta, dus-întors, deplasarea etichetei]
export const FLOW_EDGES = [
  ["proiecte", "camera", "Cameră nouă"],
  ["camera", "mobileaza", "Continuă cu mobila", true],
  ["catalog", "mobileaza", "Adaugă în cameră", false, [70, 6]],
  ["mobileaza", "lista", "Deschide lista completă", true],
];
// [secțiunea, de la y, până la y]
export const FLOW_LANES = [["Proiecte", 30, 170], ["Catalog", 170, 280], ["Listă", 280, 380]];
