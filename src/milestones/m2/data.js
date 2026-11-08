// Datele din M2: părțile paginii, întrebările din formular, rezultatele și dovezile
// M2 are două părți, fiecare cu secțiunile ei
export const M2_PARTS = [
  { id: "problema", label: "Confirmarea problemei", status: "Finalizată", state: "done", sub: "35 de răspunsuri analizate", sections: [["problema", "Problema"], ["solutia", "Soluția"], ["plan", "Planul"], ["proces", "Procesul"], ["rezultate", "Rezultate"], ["impact", "Impact"], ["concluzie", "Concluzie"], ["dovezi", "Dovezi"]] },
  { id: "solutie", label: "Validarea soluției", status: "În curs", state: "next", sub: "6 funcții testate într-un formular nou", sections: [["s-teste", "Ce testăm"], ["s-metoda", "Metoda"], ["s-masuram", "Ce măsurăm"], ["s-rezultate", "Rezultate"]] },
];

/* ---------- date M2 ---------- */
export const Q_SCREEN = [
  "Te-ai mutat într-o locuință nouă în ultimii 2 ani?",
  "Ți-ai luat vreodată mobilă pe comandă?",
  "Ai returnat vreodată o piesă de mobilier pentru că nu se potrivea ca dimensiune, culoare sau stil?",
  "Ai plătit vreodată pentru un designer de interior sau pentru un proiect 3D al unei camere?",
  "Ai mobilat sau renovat o cameră în ultimii 2 ani?",
  "În ultima lună ai căutat mobilier pentru o cameră (în magazine sau pe site-uri)?",
];

export const Q_STORY = [
  "Povestește-ne cum a decurs ultima amenajare a unei camere: ce cameră a fost și când s-a întâmplat?",
  "Cum ai decis ce mobilier să alegi pentru ea?",
  "Cum ai comparat piesele de mobilier găsite la magazine diferite?",
  "Cum ai verificat dacă piesele de mobilier încap în spațiu? Ce ai folosit concret (ruletă, schiță, aplicație, altceva)?",
  "Ce ai făcut în momentul în care nu erai sigur dacă două piese se potrivesc între ele?",
  "Care a fost cea mai mare dificultate întâmpinată?",
  "Cum ai gestionat acel moment? În cazul în care a existat un impediment.",
  "Cât timp sau câți bani te-a costat rezolvarea ei?",
  "Cât timp a trecut de când ai început să cauți mobilier până când ai finalizat achiziția?",
  "Dacă ai mai cumpărat mobilier după aceea, ce ai făcut altfel?",
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

// partea 2: [ce am aflat în partea 1, funcția testată, întrebarea din formular]
export const SOLUTION_TESTS = [
  ["21 din 24 au măsurat cu ruleta", "Camera ta, la scară", "Înainte să comanzi o piesă, ai folosi o copie la scară a camerei tale ca să vezi dacă încape?"],
  ["Doar 5 din 24 au văzut piesele în cameră înainte să cumpere", "Piese de la mai mulți furnizori, împreună", "Ți-ar fi util să vezi împreună, în aceeași cameră, piese de la magazine diferite?"],
  ["Bugetul a fost cea mai mare dificultate pentru 5 din 24", "Costul total al camerei", "Ai vrea să vezi costul total al camerei pe măsură ce adaugi piese?"],
  ["Pentru 3 din 24, problema a fost transportul", "Ușa și liftul, verificate", "Ar conta pentru tine să afli înainte de comandă dacă piesa trece prin ușa de la intrare și încape în lift?"],
  ["13 din 24 au căutat mobilă două luni sau mai mult", "O singură comandă", "Ai comanda toate piesele dintr-un singur loc, chiar dacă vin de la magazine sau producători diferiți?"],
  ["Mai mulți au ales piese după mobila pe care o aveau deja", "Mobila ta, în aceeași cameră", "Ai vrea să adaugi în aceeași cameră și mobila pe care o ai deja, ca să vezi cum se potrivește cu piesele noi?"],
];

export const SOLUTION_METHOD = [
  ["Formularul 2", "Situații concrete, cu Da / Nu și „de ce”, fără să prezentăm Roomio. Păstrăm aceeași informare GDPR.", "în curs"],
  ["Interviuri cu prototip", "Cei 8 respondenți care au acceptat o discuție mobilează o cameră într-un prototip.", "urmează"],
  ["Lista de testeri", "Cei care vor să testeze primii aplicația își lasă datele de contact.", "urmează"],
];

export const SOLUTION_MEASURE = [
  ["Câți spun Da", "La fiecare dintre cele 6 situații."],
  ["De ce spun Nu", "Ce funcții nu interesează și de ce."],
  ["Câți vor să testeze", "Câți își lasă datele de contact pentru testare."],
  ["Cât ar plăti", "Ca să evite o greșeală la cumpărarea mobilei."],
];

// experiența de la care a pornit ideea
export const STORY = [
  ["O bucătărie nouă", "Am vrut să-mi schimb complet bucătăria: gresia, mobila, tot. O schimbare radicală, nu doar câteva piese."],
  ["Planificatorul IKEA", "Am descoperit că IKEA te lasă să-ți proiectezi bucătăria de acasă. Știam că se poate în magazin, dar nu și din fața calculatorului."],
  ["De acasă, în liniște", "Mi s-a părut un proces relaxant și plăcut: îmi organizam bucătăria în liniștea casei mele, în ritmul meu."],
  ["Restul casei", "Mi-a lipsit să pot face la fel și pentru celelalte camere."],
  ["Nu doar IKEA", "Apoi mi-am dat seama că vreau să păstrez unele piese pe care le am deja și să cumpăr mobilă și de la alte magazine."],
];
export const STORY_END = "De aici a pornit Roomio: un singur loc în care îți proiectezi de acasă orice cameră, cu mobila pe care o ai deja și cu piese de la mai mulți furnizori.";

// [ipoteză, ce a ieșit din formular]
export const HYPOTHESES = [
  ["Oamenii verifică dacă mobila încape mai ales cu ruleta.", "confirmată"],
  ["Nu pot vedea dinainte cum arată piesele împreună.", "confirmată"],
  ["Compararea produselor de la mai mulți furnizori durează mult.", "parțial"],
];

export const PLAN = [
  ["Ipoteze", "Am scris ce credem despre problemă."],
  ["Formular", "Întrebări despre ultima cameră mobilată, fără să pomenim Roomio."],
  ["Distribuire", "WhatsApp, prieteni, familie și grupuri de facultate."],
  ["Analiză", "Am grupat răspunsurile pe teme."],
];

export const PROCESS = [
  ["Pe cine am căutat", "Oameni care au mobilat o cameră în ultimii 2 ani sau caută mobilă acum."],
  ["Cum am ajuns la ei", "Am trimis linkul pe WhatsApp și în grupurile de facultate, între 31 octombrie și 2 noiembrie 2026."],
  ["Cum am strâns informația", "Un formular Google Forms: 6 întrebări da/nu, apoi 10 întrebări despre ultima amenajare, doar pentru cei care au mobilat recent."],
];

export const FUNNEL = [
  [35, "au completat formularul"],
  [25, "au mobilat recent sau caută mobilă acum"],
  [24, "au povestit ultima amenajare"],
];

// [întrebare scurtă, „Da”, câți au primit întrebarea]
export const SCREEN = [
  ["S-au mutat în ultimii 2 ani", 21, 35],
  ["Și-au luat mobilă pe comandă", 23, 35],
  ["Au returnat o piesă care nu se potrivea", 14, 35],
  ["Au plătit un designer sau un proiect 3D", 9, 35],
  ["Au mobilat o cameră în ultimii 2 ani", 19, 35],
  ["Caută mobilă acum (dintre cei care n-au mobilat)", 6, 16],
];

// grupate manual din răspunsurile la „Care a fost cea mai mare dificultate întâmpinată?”
export const DIFFICULTIES = [
  ["Bugetul, prețurile prea mari", 5],
  ["Nu știau dacă piesa încape sau se potrivește", 5],
  ["Alegerea stilului și a culorilor", 4],
  ["Transportul, căratul, montajul", 3],
  ["Timpul de așteptare, lipsa din stoc", 3],
  ["Execuția nu a respectat planul", 2],
  ["Nicio dificultate", 2],
];

export const FINDINGS = [
  ["21 din 24", "au măsurat cu ruleta. Doar 3 au folosit și o aplicație: planificatorul IKEA, un configurator 3D și Measure de pe iPhone."],
  ["5 din 24", "au văzut piesele în cameră înainte să cumpere. Ceilalți și-au imaginat camera, au întrebat pe cineva sau au renunțat."],
  ["13 din 24", "au căutat mobilă două luni sau mai mult. O persoană a renunțat de tot."],
  ["14 din 35", "au returnat cel puțin o piesă pentru că nu se potrivea ca dimensiune, culoare sau stil."],
];

// doar de la persoane care au fost de acord să apară în prezentare
export const QUOTES = [
  "Nu știam dacă se va potrivi cu dimensiunile camerei sau cu mobila pe care o mai aveam.",
  "Am încercat să-l pun pe ChatGPT să mi le proiecteze, să pot vizualiza imaginea.",
  "M-am uitat la telefon și mi-am imaginat.",
];

export const IMPACT = [
  ["Bugetul camerei", "Vezi costul total al camerei pe măsură ce adaugi piese.", "Bugetul a fost cea mai mare dificultate pentru 5 din 24."],
  ["Mobila existentă", "Adăugarea mobilei pe care o ai deja devine primul pas.", "Mai mulți au ales piese după ce aveau deja: parchet, covor, mobila rămasă."],
  ["Drumul până în cameră", "Verificăm dacă piesa trece prin ușă și încape în lift.", "Un blat de 3 m nu a încăput în lift; altcineva s-a temut de ușă."],
  ["Stoc și livrare", "Vezi dacă piesa e în stoc și în cât timp ajunge.", "Pentru 3 din 24, problema a fost așteptarea sau lipsa din stoc."],
];

export const VALIDATED = [
  "14 din 35 au returnat o piesă care nu se potrivea.",
  "21 din 24 au măsurat cu ruleta; doar 3 au folosit și o aplicație.",
  "13 din 24 au căutat mobilă două luni sau mai mult.",
];

export const NOT_VALIDATED = [
  "Dacă cele 6 funcții Roomio rezolvă problemele găsite, printr-un formular nou.",
  "Dacă oamenii ar comanda toate piesele prin aplicație.",
  "Un eșantion mai larg: alte orașe și oameni peste 35 de ani.",
];

export const NEXT = [
  ["Prototip", "Îl testăm cu cei 8 respondenți care au acceptat o discuție."],
  ["Respondenți noi", "Grupuri despre renovări, alte orașe, oameni peste 35 de ani."],
  ["Listă de așteptare", "O pagină cu înscriere pe email, ca să măsurăm interesul."],
];

// capturi din Google Forms; răspunsurile individuale doar de la cei care au fost de acord să apară
export const shot = (f) => `${import.meta.env.BASE_URL}m2/${f}`;
export const CHARTS = ["mutat", "comanda", "retur", "designer", "mobilat", "cauta", "varsta", "acord"];
// [prenume, vârstă, ce reiese din răspuns, capturi]
export const PEOPLE = [
  ["Mihai", "25–34", "Nu a mai cumpărat piesele de care nu era sigur", ["mihai-1", "mihai-2"]],
  ["Alina", "25–34", "A renunțat după ce a comparat prețurile", ["alina"]],
  ["Luana", "18–24", "A încercat să vadă camera cu ChatGPT", ["luana"]],
  ["Roberta", "18–24", "Blatul de 3 m nu a încăput în lift", ["roberta"]],
  ["Andrei", "25–34", "Piesele din magazine nu se potrivesc spațiului", ["andrei"]],
  ["Mădălina", "18–24", "Piesele de pe site nu erau în magazin", ["madalina"]],
  ["Ionela", "25–34", "S-a temut că mobila nu trece prin ușă", ["ionela"]],
  ["Andreea", "25–34", "Aplicații 3D, AI și colaje", ["andreea"]],
  ["Elena", "18–24", "A folosit planificatorul IKEA", ["elena"]],
];
