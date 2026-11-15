// Partea 1 din M5: câte leaduri am strâns, cum arată secțiunea de înscriere de pe landing page și ce date colectăm.
// Câmpurile goale ("") apar în pagină ca spații de completat, cu indiciul de lângă ele.

// [etichetă, valoare, indiciu]
export const LEAD_FORM = [
  ["Unealta", "", "Formspree sau PostHog Surveys"],
  ["Unde apare", "", "Secțiunea de înscriere de pe landing page"],
  ["Ce promitem", "", "Newsletter cu progresul și anunțul lansării"],
  ["Acordul GDPR", "", "Bifa de consimțământ și informarea despre date"],
];

// câmpurile formularului; [iconiță, câmp, obligatoriu sau opțional, de ce îl cerem]
export const LEAD_FIELDS = [
  ["mail", "Email", "", ""],
  ["phone", "Telefon", "", ""],
  ["bell", "Abonare la newsletter", "", ""],
  ["shield", "Acord GDPR", "", ""],
];

// [valoare, ce înseamnă]
export const LEAD_STATS = [
  ["", "leaduri colectate"],
  ["", "abonați la newsletter"],
  ["", "dintre vizitatori s-au înscris"],
  ["", "zile de campanie"],
];

// leadurile pe zile, ca să le putem pune lângă datele postărilor; [data, leaduri]
export const LEADS_BY_DAY = [];
