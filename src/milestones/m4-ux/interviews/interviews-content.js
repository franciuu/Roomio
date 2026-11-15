// Partea 1 din M4: planul, ghidul, participanții și concluziile interviurilor.
// Totul vine din transcrierile interviurilor (fiki_code/interviuri). Câmpurile goale ("") apar în pagină ca spații de completat.

// [etichetă, valoare, indiciu]
export const INTERVIEW_PLAN = [
  ["Obiectivul", "Să aflăm cum a decurs ultima amenajare a unei camere și ce ar avea nevoie participanții de la o aplicație ca Roomio.", "Ce vrem să aflăm din interviuri."],
  ["Participanții", "Toți cei cinci au mobilat sau renovat o cameră în ultimii doi ani și au căutat mobilier în ultima lună.", "Cine sunt și de ce fac parte din segmentul principal."],
  ["Locul și formatul", "Interviuri înregistrate audio: două apeluri Google (A. și I.) și trei înregistrate de Franceska (An., R. și M.).", "Unde și cum au avut loc interviurile."],
  ["Durata", "Între 6 și 20 de minute.", "Cât a durat, în medie, un interviu."],
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
    "Ce ai făcut când nu erai sigur(ă) dacă două piese se potrivesc între ele?",
    "Care a fost cea mai mare dificultate întâmpinată?",
    "Cum ai gestionat momentul?",
    "Cât te-a costat rezolvarea problemei, în timp sau bani?",
    "Cât timp a trecut de când ai început să cauți până ai cumpărat?",
    "Ai mai cumpărat mobilier după aceea? Ce ai face diferit acum?",
  ]],
  ["Despre participant și Roomio", [
    "Ce vârstă ai?",
    "Cât de familiarizat(ă) ești cu tehnologia?",
    "Locuiești singur(ă), cu familia sau cu partenerul? Stai în chirie?",
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
    date: "14 noiembrie 2026", duration: "15 minute",
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
    date: "14 noiembrie 2026", duration: "20 de minute",
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
    name: "An.", age: "32 de ani", job: "", tech: "interviu luat de Franceska",
    situation: "Locuiește singur, în apartamentul lui, în care s-a mutat în ultimii doi ani. Ultima amenajare a fost bucătăria, cu mobilă pe comandă, împreună cu un arhitect.",
    date: "15 noiembrie 2026", duration: "7 minute",
    findings: [
      "Pereții au rămas strâmbi după renovare, așa că măsurătorile au ieșit greșit și mobila pe comandă a trebuit ajustată la fața locului.",
      "Masa, scaunele și alte piese care nu se fac pe comandă le-a căutat online, cu măsurători și calcule complicate ca să vadă ce încape în spațiul rămas.",
      "Multe magazine online nu spun nimic despre stoc sau data livrării; unele piese le-a așteptat una-două luni.",
      "Arhitectul a ales piesele și a verificat dacă încap; culorile le-au negociat împreună cu cei care au făcut mobila.",
      "Nu toate site-urile au filtre după dimensiuni.",
      "Și-ar dori o aplicație cu toată mobila, în care să caute după cuvinte-cheie și să vadă piesa în 3D, direct în cameră, prin camera telefonului.",
    ],
    quote: "M-ar ajuta pentru calcularea spațiului mult mai mult decât măsurarea clasică.",
  },
  {
    name: "R.", age: "24 de ani", job: "", tech: "familiarizată cu tehnologia",
    situation: "Locuiește cu familia, în locuința lor, în care s-a mutat în ultimii doi ani. Acum câteva luni a reamenajat dormitorul.",
    date: "15 noiembrie 2026", duration: "6 minute",
    findings: [
      "A mers cu o bucată de parchet prin magazine, ca să vadă dacă piesele se potrivesc cu podeaua.",
      "A măsurat spațiul cu ruleta, dar când nu era sigură dacă două piese se potrivesc le-a cumpărat și a văzut abia acasă; nu au ieșit 100% bine.",
      "A returnat o masă prea mare și a trebuit să refacă măsurătorile; a plătit transportul pentru retur.",
      "De la prima căutare până la cumpărare a trecut o lună și jumătate – două.",
      "Până la urmă se hotărăște din impuls, după ce a văzut foarte multă mobilă pe internet.",
      "Și-ar dori să vadă mai multe piese una lângă alta, fără să umble prin magazine cu o imagine.",
    ],
    quote: "M-am gândit că ar fi fost cazul să fac ceva diferit, doar că nu am găsit o soluție eficientă.",
  },
  {
    name: "M.", age: "24 de ani", job: "", tech: "foarte familiarizat cu tehnologia",
    situation: "Stă singur în chirie, într-un apartament cu două camere în care s-a mutat acum opt luni. A mobilat dormitorul și acum caută o canapea pentru sufragerie.",
    date: "15 noiembrie 2026", duration: "6 minute",
    findings: [
      "Alege după preț și recenzii: a făcut poze prețurilor la IKEA și Dedeman și seara a cumpărat de pe telefon. Mobilă pe comandă nu și-a permis.",
      "A măsurat camera cu ruleta, dar nu și spațiul dintre piese: ușile dulapului se loveau de pat și se deschideau doar pe jumătate.",
      "A trăit câteva săptămâni așa, apoi a mutat patul, iar noptiera a ajuns în sufragerie, fără rost.",
      "A returnat un birou de gaming: cu cele două monitoare nu mai avea loc pentru mouse.",
      "Pozele de pe site sunt făcute în camere uriașe, cu lumină de studio, iar acasă piesele arată complet diferit.",
      "Și-ar dori să scaneze camera cu telefonul, să pună mobila la dimensiunile exacte, cu monitoare și scaun, și să se plimbe prin ea ca într-un joc.",
    ],
    quote: "Să știu dacă am loc să trăiesc acolo, nu doar să încapă.",
  },
];

// cifrele care ies în evidență; [valoare, ce înseamnă]
export const INTERVIEW_STATS = [
  ["5 din 5", "au măsurat de mână spațiul sau mobila"],
  ["3 din 5", "au returnat o piesă care nu se potrivea"],
  ["6 luni", "de când A. caută un birou potrivit"],
  ["1–2 luni", "a așteptat An. unele piese, fără să știe când ajung"],
];

// răspunsurile la întrebările da / nu; [întrebare, răspunsuri în ordinea participanților, notă]
export const SCREENER = [
  ["S-a mutat într-o locuință nouă în ultimii doi ani", ["Da", "Nu", "Da", "Da", "Da"]],
  ["Și-a luat vreodată mobilă pe comandă", ["Nu", "Da", "Da", "Da", "Nu"], "A. a povestit apoi o comandă la producător, de acum mai bine de doi ani."],
  ["A returnat o piesă care nu se potrivea", ["Nu", "Da", "—", "Da", "Da"], "An. a primit întrebarea împreună cu cea despre mobila pe comandă și nu a răspuns clar."],
  ["A plătit un designer sau un proiect 3D", ["Nu", "Nu", "Da", "Nu", "Nu"], "An. a lucrat cu un arhitect, care a făcut și designul interior."],
  ["A mobilat sau renovat o cameră în ultimii doi ani", ["Da", "Da", "Da", "Da", "Da"]],
  ["A căutat mobilier în ultima lună", ["Da", "Da", "Da", "Da", "Da"]],
];

// ce și-ar dori de la o aplicație, spus de participanți; [dorință, cine a spus-o]
export const WISHES = [
  ["Să vadă cum arată și dacă încape piesa în cameră", ["A.", "I.", "An.", "M."]],
  ["Să vadă mai multe piese una lângă alta", ["R."]],
  ["Să vadă piesa în 3D direct în cameră, prin camera telefonului", ["An."]],
  ["Să pornească de la o poză, o scanare sau planul camerei", ["A.", "I.", "M."]],
  ["Să pună în cameră tot ce are, inclusiv monitoare și scaun, ca să vadă dacă se poate trăi acolo, nu doar dacă încape", ["M."]],
  ["Să se plimbe prin camera în 3D, ca într-un joc", ["M."]],
  ["Să afle unde găsește piesa la cel mai bun preț", ["M."]],
  ["Să adauge o piesă găsită, cu poza și dimensiunile ei", ["I."]],
  ["Să filtreze produsele după dimensiuni", ["I.", "An."]],
  ["Să filtreze produsele după culoare", ["I."]],
  ["Să găsească toată mobila într-un singur loc și să caute după cuvinte-cheie", ["An."]],
  ["Să măsoare mobila și spațiul din aplicație", ["A."]],
  ["Să mute și să rotească piesele în 3D", ["A."]],
  ["Să fie ușor de folosit și să facă amenajarea mai ușoară", ["A.", "R."]],
  ["Să descrie ce vrea să adauge și să primească o imagine cu ce s-ar potrivi", ["A."]],
  ["Să nu inventeze lucruri care nu există", ["A."]],
];

// dovezile: folderul de Google Drive cu înregistrările și transcrierile; linkul apare doar după parolă
export const PROOF_DRIVE_URL = "https://drive.google.com/drive/folders/1yhgXg6ehiNDcbZbBTyHwm3mZyoB3Iqz8?usp=sharing";

// [concluzie, pe scurt]
export const INTERVIEW_CONCLUSIONS = [
  ["Dimensiunile se verifică de mână", "Toți cinci au măsurat cu ruleta; un birou ales la ghici, o canapea care n-a trecut pe ușă, o masă prea mare returnată."],
  ["Culorile nu se pot potrivi între magazine", "Puține culori, nuanțe care nu se potrivesc, o bucată de parchet dusă prin magazine; în poze piesele arată altfel decât acasă."],
  ["Mobila existentă contează", "A. și I. au piese pe care le păstrează și trebuie să le încadreze printre cele noi."],
  ["Căutarea durează luni", "Un birou căutat de jumătate de an, o lună și jumătate – două pentru un dormitor, piese așteptate una-două luni."],
  ["Vor să vadă piesa în cameră", "Toți: simplu, în 3D, prin camera telefonului, cu mai multe piese una lângă alta."],
  ["Nu e de ajuns să încapă", "Camera trebuie să se și poată folosi: uși de dulap care se deschid pe jumătate, un birou fără loc pentru mouse."],
];
