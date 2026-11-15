// Partea 3 din M4: user stories, cazurile de utilizare și fluxurile, toate din ce au spus participanții.
// Câmpurile goale ("") apar în pagină ca spații de completat.

// „Ca <rol>, vreau <acțiune>, ca să <beneficiu>.”; story-ul vine din interviuri, prioritatea = la câți participanți apare nevoia,
// iar criteriile de acceptare sunt stabilite de echipă
export const USER_STORIES = [
  { id: "US1", role: "proprietar care mobilează o cameră în care are deja mobilă", want: "să adaug piesele pe care le păstrez", benefit: "văd cât loc rămâne pentru cele noi", priority: "2 din 5 participanți", criteria: ["Pot adăuga o piesă proprie cu nume, lățime, adâncime și înălțime, opțional cu o poză.", "Piesa proprie apare în cameră la scară și nu intră în totalul de cumpărat."] },
  { id: "US2", role: "persoană care caută mobilă online", want: "să filtrez produsele după dimensiuni și culoare", benefit: "nu mai pierd timp vizitând magazine", priority: "3 din 5 participanți", criteria: ["Pot introduce dimensiunile maxime ale locului liber, iar catalogul arată doar piesele care încap.", "Pot alege una sau mai multe culori, iar catalogul arată doar piesele în acele culori."] },
  { id: "US3", role: "persoană care combină piese de la mai multe magazine", want: "să văd piesele împreună, în camera mea", benefit: "verific dacă nuanțele se potrivesc", priority: "3 din 5 participanți", criteria: ["Pot pune în aceeași cameră piese de la cel puțin doi furnizori diferiți.", "Fiecare piesă apare în culoarea și materialul produsului real."] },
  { id: "US4", role: "cumpărător care comandă online", want: "să aflu înainte de comandă dacă piesa trece pe ușă", benefit: "nu ajung să demontez ușa sau să fac retur", priority: "1 din 5 participanți", criteria: ["Pot introduce lățimea și înălțimea ușilor de pe drum: bloc, apartament, cameră.", "Înainte de comandă, fiecare piesă are verdictul „trece” sau „nu trece”, calculat după dimensiunile coletelor."] },
  { id: "US5", role: "utilizator", want: "să mut și să rotesc piesele în cameră, în 3D", benefit: "văd cum arată în poziții diferite", priority: "2 din 5 participanți", criteria: ["Pot muta o piesă prin tragere și o pot roti din 90 în 90 de grade.", "Verificarea „încape / nu încape” se actualizează imediat după fiecare mutare."] },
  { id: "US6", role: "cumpărător care comandă online", want: "să văd dacă piesa e în stoc și când ajunge", benefit: "nu aștept luni de zile fără să știu", priority: "1 din 5 participanți", criteria: ["Fiecare piesă din catalog arată dacă e în stoc și în cât timp ajunge.", "Pot filtra catalogul ca să văd doar piesele aflate în stoc."] },
  { id: "US7", role: "persoană care mobilează camera în care trăiește", want: "să văd dacă pot folosi piesele după ce le pun în cameră", benefit: "nu rămân cu un dulap care se deschide pe jumătate", priority: "1 din 5 participanți", criteria: ["Pentru dulapuri și sertare, camera arată spațiul de care au nevoie ușile ca să se deschidă.", "Verificarea semnalează când o piesă blochează deschiderea alteia."] },
  { id: "US8", role: "cumpărător cu buget limitat", want: "să văd unde găsesc piesa la cel mai bun preț", benefit: "nu mai fac poze prețurilor prin magazine", priority: "2 din 5 participanți", criteria: ["Pentru fiecare piesă văd prețul la toți furnizorii care o au.", "Pot sorta rezultatele după preț."] },
];

// pașii sunt cei descriși de participanți
export const USE_CASES = [
  {
    id: "UC1", name: "Verifică dacă o piesă găsită încape în cameră", actor: "Utilizatorul", source: "I.",
    pre: "Știe dimensiunile camerei și are poza și dimensiunile piesei.",
    steps: ["Adaugă piesa găsită, cu poza și dimensiunile ei.", "Piesa este încadrată în planul camerei.", "Vede dacă piesa încape și cum se potrivește în spațiu."],
    alt: "Dacă piesa nu încape, aplicația arată câți centimetri lipsesc și propune piese asemănătoare, mai mici.",
    result: "Știe dacă piesa se încadrează, înainte să o cumpere.",
  },
  {
    id: "UC2", name: "Caută o piesă potrivită", actor: "Utilizatorul", source: "I.",
    pre: "Are o cameră cu un loc liber și o paletă de culori.",
    steps: ["Filtrează produsele după dimensiuni.", "Filtrează produsele după culoare.", "Vede doar piesele care corespund nevoilor lui."],
    alt: "Dacă nicio piesă nu se potrivește filtrelor, aplicația îi propune să lărgească dimensiunile sau să aleagă o culoare apropiată.",
    result: "Găsește o piesă fără să viziteze magazinele.",
  },
  {
    id: "UC3", name: "Vede o piesă direct în cameră", actor: "Utilizatorul", source: "An.",
    pre: "Are telefonul la el și se află în camera pe care o mobilează.",
    steps: ["Caută piesa după cuvinte-cheie, în mobila tuturor magazinelor.", "Alege o piesă din rezultate.", "Îndreaptă camera telefonului spre locul liber.", "Vede piesa în 3D, direct în cameră."],
    alt: "Dacă telefonul nu poate arăta piesa în cameră, o vede în 3D, în planul camerei din aplicație.",
    result: "Își dă seama dacă piesa încape, fără măsurători și calcule.",
  },
  {
    id: "UC4", name: "Verifică dacă se poate folosi camera", actor: "Utilizatorul", source: "M.",
    pre: "Are telefonul la el și se află în camera pe care o mobilează.",
    steps: ["Scanează camera cu telefonul.", "Pune mobila în cameră, la dimensiunile exacte.", "Adaugă și lucrurile pe care le are: monitoare, scaun.", "Se plimbă prin cameră în 3D, ca într-un joc."],
    alt: "Dacă scanarea nu reușește, introduce de mână dimensiunile camerei.",
    result: "Știe dacă are loc să trăiască în cameră, nu doar dacă încape mobila.",
  },
];

// cum au mobilat participanții o cameră, așa cum au povestit
export const USER_FLOWS = [
  {
    name: "Cum alege A. o piesă de mobilier",
    steps: ["Măsoară spațiul cu ruleta.", "Caută pe mai multe site-uri piese pe dimensiunile respective.", "Face un top: întâi după preț, apoi după material.", "Întreabă alte persoane dacă piesele se potrivesc.", "Cumpără varianta cea mai convenabilă ca preț."],
  },
  {
    name: "Cum a mobilat I. sufrageria",
    steps: ["Alege paleta de culori a camerei.", "Măsoară camera și locul rămas liber.", "Vede peste 50 de canapele în magazine.", "Comandă canapeaua online, după descrierea de pe site.", "Canapeaua nu trece pe ușă.", "Demontează ușa ca să o aducă în cameră."],
  },
  {
    name: "Cum a amenajat An. bucătăria",
    steps: ["Lucrează cu un arhitect, care face planurile apartamentului.", "Comandă mobila de bucătărie pe comandă.", "Pereții strâmbi cer corecții la fața locului.", "Caută online masa, scaunele și celelalte piese.", "Măsoară spațiul rămas și face calcule ca să vadă ce încape.", "Așteaptă una-două luni unele piese, fără să știe când ajung."],
  },
  {
    name: "Cum a reamenajat R. dormitorul",
    steps: ["Caută mobila pe mai multe site-uri și în magazine.", "Merge cu o bucată de parchet prin magazine, ca să potrivească piesele cu podeaua.", "Măsoară cu ruleta.", "Cumpără piesele fără să știe dacă se potrivesc între ele.", "O masă iese prea mare: o returnează și reface măsurătorile.", "Caută o piesă nouă; totul durează o lună și jumătate – două."],
  },
  {
    name: "Cum a mobilat M. dormitorul",
    steps: ["Caută după preț și recenzii, la IKEA, la Dedeman și pe OLX.", "Face poze prețurilor în magazin și cumpără seara de pe telefon.", "Măsoară camera cu ruleta, dar nu și spațiul dintre piese.", "Montează totul: ușile dulapului se lovesc de pat.", "Trăiește câteva săptămâni așa, apoi mută patul.", "Noptiera nu mai încape și ajunge în sufragerie."],
  },
];
