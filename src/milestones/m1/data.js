// Datele din M1: echipa, problema, piața, concurența, metricile, costurile și veniturile
export const TEAM = [
  { name: "Stan Ariana-Maria", role: "AI & 3D", task: "Piesele 3D generate cu AI și datele.", mail: "ariana_maria.stan@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/ariana.jpeg` },
  { name: "Ruse Teodor", role: "Developer", task: "Aplicația web și editorul de camere.", mail: "teodor.ruse@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/teodor.jpeg` },
  { name: "Balint Franceska", role: "UI/UX Designer", task: "Interfața și testarea cu utilizatori.", mail: "franceska.balint@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/franceska.png` },
  { name: "Păștinică Costinela-Beatrice", role: "Marketing & Comunicare", task: "Promovarea și relația cu furnizorii.", mail: "costinela.pastinica@stud.acs.upb.ro", photo: `${import.meta.env.BASE_URL}team/beatrice.PNG` },
];

export const PROBLEMS = [
  ["Mărimea", "Știi că o canapea are 220 cm, dar nu vezi dacă mai rămâne loc de trecere, dacă se mai deschide ușa sau dacă acoperă caloriferul."],
  ["Stilul", "Piesa arată bine în poza furnizorului, dar nu știi cum se potrivește cu podeaua, culoarea pereților și mobila pe care o ai deja."],
  ["Comparația", "Dacă te uiți la produse de la mai mulți furnizori, ajungi cu multe tab-uri deschise și nu poți vedea piesele împreună."],
];

export const SEGMENTS = [
  ["Tineri care se mută", "22–35 de ani. Se mută în prima locuință sau într-o chirie nouă și cumpără multă mobilă deodată, cu un buget limitat."],
  ["Familii care reamenajează", "Schimbă mobila într-o cameră și vor să vadă varianta finală, ca să se pună de acord înainte de comandă."],
  ["Proprietari și designeri de interior", "Mobilează locuințe de închiriat sau proiectează camere pentru alte persoane și trebuie să arate cum va arăta spațiul."],
];

export const COMPETITORS = [
  ["IKEA Kreativ", "Scanezi camera, ștergi mobila existentă și pui produse IKEA în locul ei.", "Doar produse IKEA."],
  ["Planner 5D", "Planificator 2D/3D cu un catalog de peste 5.000 de obiecte.", "În varianta gratuită, majoritatea obiectelor sunt blocate; catalogul complet și personalizarea cer abonament."],
  ["Roomstyler", "Planificator 3D online, cu peste 120.000 de obiecte de la mărci cunoscute.", "Tehnologie veche: extensia de browser nu a mai fost actualizată din 2016."],
  ["Homestyler", "Bibliotecă mare de piese de mobilier 3D și randări foto-realiste.", "Randările la rezoluție mare (4K) sunt contra cost."],
  ["RoomSketcher", "Planuri la scară, vizualizare 3D, măsurători precise.", "Bibliotecă de mobilier limitată în varianta gratuită; planurile 2D sunt contra cost."],
];

export const ADVANTAGES = [
  ["Mai mulți furnizori", "Poți pune în aceeași cameră o canapea de la un furnizor și o masă de la altul. IKEA Kreativ arată doar produse IKEA, iar în celelalte aplicații piesele nu se pot comanda direct din aplicație."],
  ["Totul la scară", "Atât camera, cât și piesele au dimensiunile reale, deci verificarea spațiului e corectă."],
  ["Comanzi din aplicație", "Plasezi comanda din Roomio și ea ajunge direct la furnizorul fiecărei piese. Nu mai cauți produsele pe fiecare site."],
];

export const METRICS = [
  ["Utilizatori activi", "Câți oameni își fac cont și încep să lucreze la o cameră."],
  ["Camere finalizate", "Câți dintre ei termină de mobilat camera. Arată dacă aplicația e ușor de folosit până la capăt."],
  ["Comenzi plasate", "Câți utilizatori comandă piese prin Roomio și valoarea comenzilor. De aici vine comisionul."],
  ["Furnizori parteneri", "Câți furnizori au catalogul integrat în Roomio. Cu cât sunt mai mulți, cu atât utilizatorii au de unde alege."],
];

// [cost, %, descriere, de ce depinde]
export const COSTS = [
  ["Echipa și dezvoltarea", 60, "Echipa de patru oameni construiește produsul: aplicația web, piesele de mobilier 3D generate cu AI, interfața și promovarea. În prima fază, aici se concentrează cea mai mare parte a muncii.", "cost fix"],
  ["Marketing", 14, "Reclame pe rețelele sociale și colaborări cu creatori de conținut din zona de design interior, pentru a atrage primii utilizatori.", "buget stabilit de noi"],
  ["Generare 3D cu AI", 9, "Puterea de procesare din spatele tehnologiei care transformă fotografiile produselor în piese de mobilier 3D.", "crește odată cu catalogul"],
  ["Cloud, stocare, trafic", 7, "Serverele, spațiul de stocare și transferul de date necesare pentru ca piesele de mobilier 3D, care sunt fișiere mari, să se încarce rapid.", "crește odată cu utilizatorii"],
  ["Juridic, contabilitate, parteneriate", 6, "Serviciile de contabilitate, conformitatea cu GDPR, termenii și condițiile pentru comenzi și contractele încheiate cu furnizorii.", "crește odată cu furnizorii"],
  ["Plăți și suport comenzi", 4, "Comisioanele percepute de procesatorul de plăți și asistența oferită utilizatorilor pentru comenzi și retururi.", "crește odată cu comenzile"],
];

export const REVENUE = [
  ["Comision de afiliere", "Un procent din fiecare comandă plasată prin Roomio la furnizori. Este sursa principală de venit."],
  ["Promovare pentru furnizori", "Furnizorii pot plăti ca produsele lor să apară evidențiate sau mai sus în căutare."],
  ["Roomio Pro", "Abonament cu randări de calitate mai bună, proiecte nelimitate și export de planuri. Gândit pentru cei care fac des randări, cum sunt designerii și arhitecții de interior."],
  ["Camere de prezentare pentru furnizori", "Furnizorii plătesc un abonament ca să afișeze în Roomio camere mobilate complet cu produsele lor. Utilizatorii le pot folosi ca inspirație sau ca punct de plecare pentru propria cameră."],
];
