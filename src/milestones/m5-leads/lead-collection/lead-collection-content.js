// Partea 1 din M5: câte leaduri am strâns, cum arată secțiunea de înscriere de pe landing page și ce date colectăm.
// Câmpurile goale ("") apar în pagină ca spații de completat, cu indiciul de lângă ele.

// [etichetă, valoare, indiciu]
export const LEAD_FORM = [
  ["Unealta", "Un singur Google Form în spate. Pe landing page, vizitatorul poate lăsa doar emailul sau poate completa și chestionarul; dacă lasă doar emailul, restul câmpurilor rămân goale. PostHog numără trimiterile", "Formspree sau PostHog Surveys"],
  ["Unde apare", "Secțiunea „Aproape gata”, deschisă de fiecare buton de înscriere de pe pagină", "Secțiunea de înscriere de pe landing page"],
  ["Ce promitem", "Cine lasă emailul află primul când se lansează Roomio și primește actualizări periodice. Cine răspunde la chestionar primește o lună de Roomio gratuit", "Newsletter cu progresul și anunțul lansării"],
  ["Acordul GDPR", "Informarea privind prelucrarea datelor și acordul explicit; fără acord, răspunsurile nu se trimit", "Bifa de consimțământ și informarea despre date"],
];

// câmpurile formularului; [iconiță, câmp, obligatoriu sau opțional, de ce îl cerem]
export const LEAD_FIELDS = [
  ["mail", "Email", "obligatoriu", "Singurul contact pe care îl cerem. Îl folosim pentru anunțul lansării, actualizări și luna gratuită."],
  ["bell", "Abonare la noutăți", "doar emailul", "Cine nu are timp de chestionar lasă doar emailul și apasă „Anunță-mă”; răspunsul ajunge în același formular, cu celelalte câmpuri goale."],
  ["shield", "Acord GDPR", "obligatoriu", "Acordul pentru prelucrarea datelor, după informarea despre ce facem cu ele."],
  ["group", "Vârsta de cel puțin 18 ani", "obligatoriu", "Colectăm date doar de la persoane adulte."],
];

// [valoare, ce înseamnă]
export const LEAD_STATS = [
  ["2", "leaduri colectate, ambele pe 24 noiembrie"],
  ["1", "a completat tot chestionarul, celălalt doar emailul"],
  ["1,9%", "dintre vizitatori s-au înscris (2 din 106)"],
  ["2", "zile de campanie, 24–25 noiembrie"],
];

// leadurile pe zile, ca să le putem pune lângă datele postărilor; [data, leaduri]
export const LEADS_BY_DAY = [["24 nov.", 2], ["25 nov.", 0]];
// cine sunt leadurile rămâne anonim: pe pagină apar doar cifrele, fără emailuri
