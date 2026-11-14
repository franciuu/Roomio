// Partea 1 din M4: planul, ghidul, participanții și concluziile interviurilor.
// Totul vine din transcrierile interviurilor (fiki_code/interviuri). Câmpurile goale ("") apar în pagină ca spații de completat.

// [etichetă, valoare, indiciu]
export const INTERVIEW_PLAN = [
  ["Obiectivul", "Să aflăm cum a decurs ultima amenajare a unei camere și ce ar avea nevoie participanții de la o aplicație ca Roomio.", "Ce vrem să aflăm din interviuri."],
  ["Participanții", "Amândouă au mobilat sau renovat o cameră în ultimii doi ani și au căutat mobilier în ultima lună.", "Cine sunt și de ce fac parte din segmentul principal."],
  ["Locul și formatul", "Apel Google, doar audio, înregistrat.", "Unde și cum au avut loc interviurile."],
  ["Durata", "Între 15 și 20 de minute.", "Cât a durat, în medie, un interviu."],
];

// întrebările puse în interviuri, în ordinea lor; [temă, întrebări]
export const INTERVIEW_GUIDE = [
  ["Întrebări da / nu", [
    "Te-ai mutat într-o locuință nouă în ultimii doi ani?",
    "Ți-ai luat vreodată mobilă pe comandă?",
    "Ai returnat vreodată o piesă de mobilier pentru că nu se potrivea ca dimensiune, culoare sau stil?",
    "Ai plătit vreodată pentru un designer de interior sau pentru un proiect 3D al unei camere?",
    "Ai mobilat sau renovat o cameră în ultimii doi ani?",
    "În ultima lună ai căutat mobilier pentru o cameră, în magazine sau pe site-uri?",
  ]],
  ["Ultima amenajare", [
    "Cum a decurs ultima amenajare a unei camere? Ce cameră a fost și când?",
    "Cum ai decis ce mobilier să alegi?",
    "Cum ai comparat piesele găsite în magazine diferite?",
    "Cum ai verificat dacă piesele încap în spațiu? Ce ai folosit concret?",
    "Ce ai făcut când nu erai sigură dacă două piese se potrivesc între ele?",
    "Care a fost cea mai mare dificultate întâmpinată?",
    "Cum ai gestionat momentul?",
    "Cât te-a costat rezolvarea problemei, în timp sau bani?",
    "Cât timp a trecut de când ai început să cauți până ai cumpărat?",
    "Ai mai cumpărat mobilier după aceea? Ce ai face diferit acum?",
  ]],
  ["Despre participant și Roomio", [
    "Ce vârstă ai?",
    "Cât de familiarizată ești cu tehnologia?",
    "Locuiești singură, cu familia sau cu partenerul? Stai în chirie?",
    "Ce ai avea nevoie de la o aplicație care să răspundă problemelor tale?",
    "Care ar fi funcționalitățile ei principale?",
    "Ți se pare greu să găsești mobilă? De ce?",
    "Cum găsești mobila și cum te hotărăști să o cumperi?",
  ]],
];

// doar inițiale, până confirmăm acordul participanților pentru prenume
export const INTERVIEWS = [
  {
    name: "A.", age: "24 de ani", job: "", tech: "tehnologie: 10 din 10",
    situation: "Locuiește singură, în apartamentul ei. A mobilat dormitorul de la zero.",
    date: "", place: "", duration: "15 minute",
    findings: [
      "A verificat dimensiunile doar cu ruleta, apoi cu rigla, când ruleta s-a stricat.",
      "A comparat piesele pe mai multe site-uri: întâi prețul, apoi materialul.",
      "În magazine găsește aceleași modele, în negru, maro, alb sau bej.",
      "Caută un birou de jumătate de an și momentan a renunțat.",
      "Nu a vrut designer sau mobilă pe comandă, pentru că durează mult și costă mai mult. O comandă anterioară a durat aproape șapte luni.",
      "Și-ar dori să poată muta și roti piesele în 3D.",
    ],
    quote: "Posibilitatea ca eu să găsesc mobilă pe culoarea respectivă este zero barat în momentul de față.",
  },
  {
    name: "I.", age: "28 de ani", job: "", tech: "folosește multe aplicații",
    situation: "Locuiește cu partenerul și nu stă în chirie. Acum un an și jumătate a renovat de la zero o sufragerie de circa 10 m², cu balcon. Renovează des.",
    date: "", place: "", duration: "20 de minute",
    findings: [
      "A trebuit să încadreze în cameră două fotolii și o bibliotecă pe care le avea deja.",
      "A văzut peste 50 de canapele în magazine, iar biroul l-a ales fără să măsoare locul din cameră.",
      "Canapeaua comandată online nu a trecut pe ușă: au demontat ușa și au fost aproape de retur.",
      "Pe site nu apăreau dimensiunile coletelor.",
      "Nuanța canapelei nu s-a potrivit perfect cu fotoliile, dar a păstrat-o: returul era un efort prea mare.",
      "Și-ar dori să filtreze produsele după dimensiuni și culoare și să vadă piesa în cameră.",
    ],
    quote: "Poate dimensiunile pe hârtie ți se potrivesc, dar la fața locului realizezi că unghiurile nu te ajută.",
  },
  {
    name: "", age: "", job: "", tech: "", situation: "", date: "", place: "", duration: "",
    findings: ["", "", ""],
    quote: "",
  },
];

// cifrele care ies în evidență; [valoare, ce înseamnă]
export const INTERVIEW_STATS = [
  ["2 din 2", "au verificat dimensiunile cu ruleta"],
  ["6 luni", "de când A. caută un birou potrivit"],
  ["50+", "canapele văzute de I. în magazine"],
  ["2–3 săptămâni", "a căutat I. mobilierul pentru sufragerie"],
];

// răspunsurile la întrebările da / nu; [întrebare, răspunsuri în ordinea participantelor, notă]
export const SCREENER = [
  ["S-a mutat într-o locuință nouă în ultimii doi ani", ["Da", "Nu"]],
  ["Și-a luat vreodată mobilă pe comandă", ["Nu", "Da"], "A. a povestit apoi o comandă la producător, de acum mai bine de doi ani."],
  ["A returnat o piesă care nu se potrivea", ["Nu", "Da"]],
  ["A plătit un designer sau un proiect 3D", ["Nu", "Nu"]],
  ["A mobilat sau renovat o cameră în ultimii doi ani", ["Da", "Da"]],
  ["A căutat mobilier în ultima lună", ["Da", "Da"]],
];

// ce și-ar dori de la o aplicație, spus de ele; [dorință, cine a spus-o]
export const WISHES = [
  ["Să vadă cum arată și dacă încape piesa în camera ei", ["A.", "I."]],
  ["Să pornească de la o poză, o scanare sau planul camerei", ["A.", "I."]],
  ["Să adauge o piesă găsită, cu poza și dimensiunile ei", ["I."]],
  ["Să filtreze produsele după dimensiuni și culoare", ["I."]],
  ["Să măsoare mobila și spațiul din aplicație", ["A."]],
  ["Să mute și să rotească piesele în 3D", ["A."]],
  ["Să fie ușor de folosit", ["A."]],
  ["Să descrie ce vrea să adauge și să primească o imagine cu ce s-ar potrivi", ["A."]],
  ["Să nu inventeze lucruri care nu există", ["A."]],
];

// [concluzie, pe scurt]
export const INTERVIEW_CONCLUSIONS = [
  ["Dimensiunile se verifică cu ruleta", "Un birou ales la ghici, o canapea care n-a trecut pe ușă."],
  ["Culorile nu se pot potrivi între magazine", "Puține culori și nuanțe care nu se potrivesc."],
  ["Mobila existentă contează", "Amândouă au piese pe care le păstrează."],
  ["Căutarea durează luni", "Un birou căutat de jumătate de an, încă negăsit."],
  ["Vor să vadă piesa în cameră", "Simplu, în 3D, fără lucruri inventate."],
];
