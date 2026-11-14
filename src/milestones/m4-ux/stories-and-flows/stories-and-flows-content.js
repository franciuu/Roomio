// Partea 3 din M4: user stories, cazurile de utilizare și fluxurile, toate din ce au spus participantele.
// Câmpurile goale ("") apar în pagină ca spații de completat.

// „Ca <rol>, vreau <acțiune>, ca să <beneficiu>.”; story-ul vine din interviuri, prioritatea = la câte participante apare nevoia,
// iar criteriile de acceptare sunt stabilite de echipă
export const USER_STORIES = [
  { id: "US1", role: "proprietar care mobilează o cameră în care are deja mobilă", want: "să adaug piesele pe care le păstrez", benefit: "văd cât loc rămâne pentru cele noi", priority: "2 din 2 participante", criteria: ["Pot adăuga o piesă proprie cu nume, lățime, adâncime și înălțime, opțional cu o poză.", "Piesa proprie apare în cameră la scară și nu intră în totalul de cumpărat."] },
  { id: "US2", role: "persoană care caută mobilă online", want: "să filtrez produsele după dimensiuni și culoare", benefit: "nu mai pierd timp vizitând magazine", priority: "2 din 2 participante", criteria: ["Pot introduce dimensiunile maxime ale locului liber, iar catalogul arată doar piesele care încap.", "Pot alege una sau mai multe culori, iar catalogul arată doar piesele în acele culori."] },
  { id: "US3", role: "persoană care combină piese de la mai multe magazine", want: "să văd piesele împreună, în camera mea", benefit: "verific dacă nuanțele se potrivesc", priority: "2 din 2 participante", criteria: ["Pot pune în aceeași cameră piese de la cel puțin doi furnizori diferiți.", "Fiecare piesă apare în culoarea și materialul produsului real."] },
  { id: "US4", role: "cumpărător care comandă online", want: "să aflu înainte de comandă dacă piesa trece pe ușă", benefit: "nu ajung să demontez ușa sau să fac retur", priority: "1 din 2 participante", criteria: ["Pot introduce lățimea și înălțimea ușilor de pe drum: bloc, apartament, cameră.", "Înainte de comandă, fiecare piesă are verdictul „trece” sau „nu trece”, calculat după dimensiunile coletelor."] },
  { id: "US5", role: "utilizator", want: "să mut și să rotesc piesele în cameră, în 3D", benefit: "văd cum arată în poziții diferite", priority: "1 din 2 participante", criteria: ["Pot muta o piesă prin tragere și o pot roti din 90 în 90 de grade.", "Verificarea „încape / nu încape” se actualizează imediat după fiecare mutare."] },
];

// pașii sunt cei descriși de participante
export const USE_CASES = [
  {
    id: "UC1", name: "Verifică dacă o piesă găsită încape în cameră", actor: "Utilizatorul", source: "I.",
    pre: "Știe dimensiunile camerei și are poza și dimensiunile piesei.",
    steps: ["Adaugă piesa găsită, cu poza și dimensiunile ei.", "Piesa este încadrată în planul camerei.", "Vede dacă piesa încape și cum se potrivește în spațiu."],
    alt: "", result: "Știe dacă piesa se încadrează, înainte să o cumpere.",
  },
  {
    id: "UC2", name: "Caută o piesă potrivită", actor: "Utilizatorul", source: "I.",
    pre: "Are o cameră cu un loc liber și o paletă de culori.",
    steps: ["Filtrează produsele după dimensiuni.", "Filtrează produsele după culoare.", "Vede doar piesele care corespund nevoilor lui."],
    alt: "", result: "Găsește o piesă fără să viziteze magazinele.",
  },
  { id: "UC3", name: "", actor: "", pre: "", steps: ["", "", ""], alt: "", result: "" },
];

// cum au mobilat participantele o cameră, așa cum au povestit
export const USER_FLOWS = [
  {
    name: "Cum alege A. o piesă de mobilier",
    steps: ["Măsoară spațiul cu ruleta.", "Caută pe mai multe site-uri piese pe dimensiunile respective.", "Face un top: întâi după preț, apoi după material.", "Întreabă alte persoane dacă piesele se potrivesc.", "Cumpără varianta cea mai convenabilă ca preț."],
  },
  {
    name: "Cum a mobilat I. sufrageria",
    steps: ["Alege paleta de culori a camerei.", "Măsoară camera și locul rămas liber.", "Vede peste 50 de canapele în magazine.", "Comandă canapeaua online, după descrierea de pe site.", "Canapeaua nu trece pe ușă.", "Demontează ușa ca să o aducă în cameră."],
  },
];
