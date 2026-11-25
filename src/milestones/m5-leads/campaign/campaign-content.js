// Partea 3 din M5: postările din campanie, comparația surselor și concluziile.
// Câmpurile goale ("") apar în pagină ca spații de completat, cu indiciul de lângă ele.
// Cifrele postărilor vin din Meta Business Suite (Content), cele ale vizitatorilor din PostHog (ultimele 7 zile, până pe 25 noiembrie).

const LANDING = "https://franciuu.github.io/Roomio/landing.html";
export const FB_PAGE = "https://www.facebook.com/profile.php?id=61596324062769";
const utm = (source, content, medium = "paid_social") => `${LANDING}?utm_source=${source}&utm_medium=${medium}&utm_campaign=m5_lansare&utm_content=${content}`;

// canalele campaniei; id-ul este și valoarea din utm_source
// LinkedIn și TikTok se adaugă aici (și mai jos) când avem datele lor
export const CHANNELS = [
  { id: "facebook", name: "Facebook", icon: "page" },
];

// postările, pe canale; published = captura postării publicate, media = imaginea sau video-ul postat; fișierele se află în public/m5/; câmpurile goale apar ca spații de completat
// stats: [valoare, ce înseamnă]; group: aceeași postare distribuită în grup
export const POSTS = [
  {
    channel: "facebook",
    title: "Postarea cu imagine",
    where: "Pagina de Facebook Roomio",
    date: "24 noiembrie 2026, 12:43",
    published: "postare-imagine-publicata.jpg",
    media: { type: "image", src: "postare-imagine.jpg", alt: "Laptop cu o cameră mobilată și textul „Încape canapeaua?”" },
    text: "Ați cumpărat vreodată o canapea și ați descoperit acasă că nu încape? 🛋️",
    stats: [["2.281", "vizualizări"], ["2.106", "persoane"], ["61", "interacțiuni"]],
    group: ["Idei de Amenajari - Design & Artă", "12 vizualizări, 8 persoane"],
    link: utm("facebook", "imagine_laptop"),
    permalink: "https://www.facebook.com/share/1NFWmGWY7j/",
  },
  {
    channel: "facebook",
    title: "Reel-ul „Încape sau nu?”",
    where: "Pagina de Facebook Roomio",
    date: "24 noiembrie 2026, 12:44",
    published: "postare-reel-publicata.jpg",
    media: { type: "video", src: "reel-incape.mp4", poster: "reel-incape-poster.jpg" },
    text: "Ruletă, 3 magazine și tot nu știi dacă intră fotoliul? 😅 Cu Roomio îl vezi în camera ta înainte să-l cumperi.",
    stats: [["279", "vizualizări"], ["237", "persoane"], ["59", "au privit peste 3 secunde"], ["4 s", "timp mediu de vizionare"]],
    group: ["Idei de Amenajari - Design & Artă", "10 vizualizări, 10 persoane"],
    link: utm("facebook", "video_incape"),
    permalink: "https://www.facebook.com/reel/30083074157951882",
  },
];

// comparația celor două boost-uri, din Ads Manager (fără sumele cheltuite)
// image: din public/m5/; visits = vizite pe landing page („Landing page views”)
export const BOOSTS = [
  { name: "Boost pe reel", what: "Reel-ul „Încape sau nu?”", image: "reel-incape-poster.jpg", reach: "3.709", impressions: "3.709", visits: "61" },
  { name: "Boost pe imagine", what: "Postarea „Încape canapeaua?”", image: "postare-imagine.jpg", reach: "1.018", impressions: "1.109", visits: "19" },
];
export const BOOSTS_TEXT = "Boost-ul pe reel ne-a adus de trei ori mai multe vizite decât cel pe imagine. Ambele au convins cam la fel de mulți dintre cei care le-au văzut să intre pe pagină (1,6% și 1,7%), deci diferența a venit din faptul că reel-ul a ajuns la mult mai mulți oameni.";

// totalul de pe Facebook, din PostHog și din formular; [vizitatori, leaduri]
export const FACEBOOK_TOTAL = ["102", "2"];

// sursele vizitatorilor, din PostHog; [sursa, ce înseamnă, vizitatori, leaduri]
export const RESULTS = [
  ["Facebook", "Click-uri din postările noastre și din cele două boost-uri", "97", "2"],
  ["Direct", "Linkul deschis direct, în mare parte de noi, echipa", "12", "0"],
  ["Facebook, fără UTM", "Linkul nostru distribuit mai departe, fără parametri", "5", "0"],
  ["Alte site-uri", "Un vizitator venit de pe alt site", "1", "0"],
];

// capturile cu statisticile postărilor, din public/m5/; [canal, fișier, ce arată]; "" = încă lipsește
export const STAT_SHOTS = [
  ["facebook", "facebook-statistici.jpg", "Statisticile postărilor din Meta Business Suite. Vizualizările postării cu imagine includ și afișările din boost. Primele două postări, din 8 noiembrie, au fost înainte de campanie."],
  ["facebook", "ads-manager.png", "Rezultatele celor două boost-uri din Ads Manager, 24–25 noiembrie. Am urmărit câte vizite aduc pe landing page."],
];

// canalul care a mers cel mai bine: nume, de ce, imaginea (din public/m5/) și cifrele [valoare, ce înseamnă]
export const BEST_CHANNEL = {
  name: "Boost-ul pe reel, pe Facebook",
  why: "Reel-ul „Încape sau nu?” ne-a adus de trei ori mai mulți oameni pe landing page decât postarea cu imagine. Aproape toți vizitatorii noștri și ambele leaduri au venit de pe Facebook, de pe telefon.",
  image: "reel-incape-poster.jpg",
  stats: [["3.709", "persoane atinse"], ["61", "vizite pe landing page"], ["3×", "mai multe vizite decât boost-ul pe imagine"]],
};

// [concluzie, pe scurt]
export const CAMPAIGN_CONCLUSIONS = [
  ["Video-ul ne-a adus cei mai mulți vizitatori", "Din cele 80 de vizite aduse de boost-uri, 61 au venit de la reel și 19 de la imagine."],
  ["Postarea cu imagine a avut mai multe reacții", "Postarea cu imagine a strâns 61 de interacțiuni, reel-ul doar 5. Pe reel, timpul mediu de vizionare a fost de 4 secunde, deci în următoarele video-uri arătăm problema din primele secunde."],
  ["Vizitatorii vin de pe telefon", "100 din 116 vizitatori au intrat de pe telefon, deci ne concentrăm ca landing page-ul și formularul să meargă bine mai ales pe telefon."],
];
