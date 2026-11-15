// Partea 2 din M4: persona principală.
// Un personaj imaginar care reprezintă segmentul principal din M1, „Tineri care se mută”;
// nevoile, frustrările și obiceiurile vin din formularul din M2 și din interviuri.

export const PERSONA = {
  name: "Andrei Maria",
  age: "27 de ani",
  segment: "Client potențial · Tineri care se mută",
  home: "Primul apartament, s-a mutat de curând",
  family: "Locuiește cu partenerul",
  budget: "Limitat: compară întâi prețul",
  traits: ["Se mută în prima locuință", "Buget limitat", "Cumpără online", "Folosește multe aplicații"],
  quote: "Mergi cumva la risc.",
  story: [
    "Maria s-a mutat de curând, împreună cu partenerul, în primul lor apartament. Au de mobilat mai multe camere deodată, cu un buget limitat, și vor să păstreze câteva piese pe care le au deja.",
    "Caută mobila mai ales online, pe mai multe site-uri, și compară întâi prețul. Măsoară cu ruleta și compară cu dimensiunile de pe site, dar nu poate vedea dinainte dacă o piesă încape, trece pe ușă sau se potrivește cu restul camerei.",
    "Căutarea durează săptămâni sau chiar luni, iar o piesă aleasă greșit înseamnă un retur sau un compromis cu care rămâne. Nu vrea să plătească un designer: vrea să poată decide singură, de acasă.",
  ],
  // [ce măsurăm, capătul din stânga, capătul din dreapta, poziția în procente]
  scales: [
    ["Unde caută mobila", "În magazin", "Online", 70],
    ["Tehnologie", "Puține aplicații", "Multe aplicații", 90],
    ["Designer sau comandă", "Nu vrea", "Ar plăti", 15],
  ],
  goals: [
    "Să știe sigur că piesa încape și trece pe ușă înainte să o comande.",
    "Să vadă camera completă, cu piese de la magazine diferite.",
    "Să potrivească piesele noi cu mobila pe care o are deja.",
    "Să se încadreze în buget și să termine mai repede căutarea.",
    "Să poată folosi camera după ce o mobilează, nu doar să încapă piesele.",
  ],
  frustrations: [
    "Dimensiunile de pe site nu-i spun dacă piesa chiar încape sau trece pe ușă.",
    "Nu poate vedea împreună piese de la magazine diferite.",
    "Culorile și nuanțele nu se potrivesc între magazine.",
    "Un retur o costă timp și bani.",
    "Magazinele nu spun clar dacă piesa e în stoc și când ajunge.",
    "În poze, piesele arată altfel decât acasă.",
  ],
  habits: [
    "Măsoară cu ruleta și compară cu dimensiunile de pe site.",
    "Caută pe mai multe site-uri și compară întâi prețul.",
    "Pornește de la culorile camerei și se inspiră de pe Pinterest.",
    "Cere părerea altor persoane când nu e sigură.",
    "După ce vede multă mobilă online, se hotărăște uneori din impuls.",
  ],
  tools: [
    "Site-uri de mobilă: IKEA, Dedeman, Favi, OLX",
    "Pinterest, YouTube și Reddit, pentru inspirație",
    "Magazinele fizice, ca să vadă piesele",
    "Ruleta",
  ],
  wishes: [
    "Să vadă piesa în camera ei, la dimensiunile reale.",
    "Să pornească de la o poză, o scanare sau planul camerei.",
    "Să filtreze produsele după dimensiuni și culoare.",
    "Să mute și să rotească piesele în 3D.",
  ],
  source: "Andrei Maria este un personaj imaginar care reprezintă segmentul principal din M1, „Tineri care se mută”. Nevoile, frustrările și obiceiurile ei vin din formularul din M2 și din interviuri.",
};
