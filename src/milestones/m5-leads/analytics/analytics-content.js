// Partea 2 din M5: ce arată PostHog despre landing page.
// Câmpurile goale ("") apar în pagină ca spații de completat, cu indiciul de lângă ele.

// cele trei funcții PostHog cerute în M5; [iconiță, nume, ce urmărim cu ea, secțiunea]
export const TOOLS = [
  ["chart", "Web analytics", "Câți vizitatori avem, de unde vin și de pe ce dispozitiv.", "a-vizitatori"],
  ["funnel", "Product analytics", "Funnel-ul de la intrarea pe pagină până la înscriere.", "a-funnel"],
  ["play", "Session replay", "Cum folosesc vizitatorii pagina, ca să vedem unde se opresc.", "a-replay"],
];

// Web analytics, ultimele 7 zile (18–25 noiembrie); [valoare, ce înseamnă]
export const WEB_METRICS = [
  ["106", "vizitatori unici pe landing page"],
  ["109", "vizualizări ale landing page-ului"],
  ["1m 21s", "durata medie a unei sesiuni"],
  ["86%", "dintre vizitatori, de pe telefon"],
];
// capturile din PostHog, din public/m5/; "" = încă lipsește
export const WEB_SHOT = "posthog-web-analytics.jpg";
export const FUNNEL_SHOT = "posthog-funnel.jpg";

// observațiile din captura Web analytics; [titlu, detaliu]
export const WEB_NOTES = [
  ["Aproape totul pe 24 noiembrie", "Vizitele au crescut de la 0 la peste 90 în ziua postărilor și au scăzut în ziua următoare."],
  ["Mai ales din Facebook", "97 din 116 vizitatori au venit din linkurile postărilor."],
  ["Puțini pleacă imediat", "Rata de respingere este de 17%, iar o sesiune durează în medie 1 minut și 21 de secunde."],
];

// Product analytics: funnel-ul de la vizită la înscriere, din evenimentele trimise de landing page; [pas, evenimentul, câți au ajuns acolo]
export const FUNNEL = [
  ["Au intrat pe landing page", "$pageview", "106"],
  ["Au apăsat un buton de înscriere", "signup_open", "2"],
  ["Au trimis formularul (cu tot chestionarul sau doar cu emailul)", "survey_submit / notify_submit", "2"],
];

// Session replay: cele trei sesiuni cele mai relevante, toate de pe telefon, venite de pe Facebook
// [captura din public/m5/, titlu, ce am observat, ce schimbăm pe landing page]
export const REPLAY = [
  ["replay-chestionar.jpg", "A completat tot chestionarul",
    "După 10 secunde a apăsat „Solicită perioada de probă”, a încercat pașii din „Pas cu pas”, apoi a completat cele 22 de întrebări în aproximativ trei minute. Sesiunea a durat aproape 9 minute.",
    "Oferta cu luna gratuită funcționează. Punem demo-ul „Pas cu pas” mai sus, lângă primul buton de înscriere."],
  ["replay-email.jpg", "A lăsat doar emailul",
    "A apăsat „Încearcă Roomio”, care duce la prețuri, apoi „Cumpără” de două ori. Butonul deschide doar înscrierea, așa că a lăsat emailul la „Anunță-mă” și a mai apăsat o dată „Cumpără”.",
    "Vrea să cumpere, dar aplicația nu e lansată. Schimbăm „Cumpără” în „Rezervă prețul” și spunem clar că plata vine la lansare."],
  ["replay-fara-inscriere.jpg", "A citit tot, dar nu s-a înscris",
    "A deschis patru întrebări frecvente, de la proveniența mobilei la data lansării, și a atins numerele pașilor și „Prototipul 3D”, care nu se pot apăsa. A plecat după aproape 3 minute fără să apese un buton de înscriere.",
    "Adăugăm un buton de înscriere imediat după întrebările frecvente și facem pașii din „Cum funcționează” clicabili."],
];
