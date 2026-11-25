// Partea 3 din M5: postările din campanie, sursele vizitatorilor și concluziile
import { Placeholder } from "../../../shared/Placeholder.jsx";
import { Icon } from "../components/Icon.jsx";
import { BEST_CHANNEL, BOOSTS, BOOSTS_TEXT, CAMPAIGN_CONCLUSIONS, CHANNELS, FACEBOOK_TOTAL, FB_PAGE, POSTS, RESULTS, STAT_SHOTS, TIKTOK } from "./campaign-content.js";

const LANDING_CLEAN = "https://franciuu.github.io/Roomio/landing.html";

const CH = { ...Object.fromEntries(CHANNELS.map((c) => [c.id, c])), tiktok: { name: "TikTok" } };

const file = (f) => `${import.meta.env.BASE_URL}m5/${f}`;
const TOTAL = RESULTS.reduce((s, r) => s + Number(r[2] || 0), 0);
const num = (v) => Number(String(v).replace(".", ""));
const pct = (a, b) => `${((num(a) / num(b)) * 100).toFixed(1).replace(".", ",")}%`;
const MAX_VISITS = Math.max(...BOOSTS.map((x) => num(x.visits)));

function Media({ m }) {
  if (!m) return <div className="m5-post-media m5-post-empty slot">captura postării</div>;
  return m.type === "video"
    ? <video className="m5-post-media" src={file(m.src)} poster={file(m.poster)} controls playsInline preload="none" />
    : <img className="m5-post-media" src={file(m.src)} alt={m.alt} loading="lazy" />;
}

export function CampaignPart() {
  const max = Math.max(1, ...RESULTS.map((r) => Number(r[2]) || 0));
  return (
    <main className="part-in">
      <section id="k-postari" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Postările</h2>
          <p className="intro">Am promovat landing page-ul pe Facebook: am creat <a href={FB_PAGE} target="_blank" rel="noopener">pagina Roomio</a> și am publicat o postare cu imagine și un reel, distribuite apoi și într-un grup despre amenajări. Fiecare postare are linkul ei cu UTM. Am postat și pe TikTok, dar acolo nu am făcut promovări, ci doar postări cu hashtag-uri.</p>
          {CHANNELS.map((c) => (
            <div key={c.id} className="m5-channel">
              <h3 className="m5-channel-name"><span className="m5-icon-box"><Icon name={c.icon} /></span>{c.name}</h3>
              <div className="m5-posts">
                {POSTS.filter((p) => p.channel === c.id).map((p, i) => (
                  <article key={i} className="m5-post">
                    <header className="m5-post-head">
                      <div><Placeholder as="h3" v={p.title} hint="Postarea" /><span><Placeholder v={p.where} hint={`Profilul Roomio de pe ${c.name}`} /> · <Placeholder v={p.date} hint="data" /></span></div>
                    </header>
                    {p.published
                      ? <a href={p.permalink || file(p.published)} target="_blank" rel="noopener"><img className="m5-post-pub" src={file(p.published)} alt={`Postarea publicată: ${p.title}`} loading="lazy" /></a>
                      : <Media m={p.media} />}
                    {p.published && p.media?.type === "video" && (
                      <details className="m5-post-video"><summary>Pornește video-ul</summary><Media m={p.media} /></details>
                    )}
                    <Placeholder as="p" className="m5-post-text" v={p.text} hint="Textul postării" />
                    <ul className="plain m5-post-stats">
                      {p.stats.map(([v, t]) => <li key={t}><Placeholder as="b" v={v} hint="—" /><span>{t}</span></li>)}
                    </ul>
                    {p.group && <p className="m5-post-group"><Icon name="group" size={18} /><span>Distribuită în grupul <b>{p.group[0]}</b>: {p.group[1]}</span></p>}
                    <a className="m5-utm" href={LANDING_CLEAN} target="_blank" rel="noopener" title={p.link}>{LANDING_CLEAN.replace("https://", "")} ↗</a>
                    {p.permalink && <a className="m5-link" href={p.permalink} target="_blank" rel="noopener">Deschide postarea ↗</a>}
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="m5-channel">
            <h3 className="m5-channel-name"><span className="m5-icon-box"><Icon name="play" /></span>TikTok</h3>
            <p className="intro">{TIKTOK.text} <a href={TIKTOK.profile} target="_blank" rel="noopener">{TIKTOK.handle}</a></p>
            <ul className="plain m5-tt-list">
              {TIKTOK.posts.map((p) => (
                <li key={p.title} className={p.best ? "best" : ""}>
                  <div className="m5-tt-title">
                    {p.best && <span className="m5-tag">Sunet viral · cea mai văzută</span>}
                    <b>{p.title}</b>
                    <span className="m5-muted">Postat {p.date}</span>
                    <span className="m5-tt-window">Vizualizări în: {p.window}</span>
                  </div>
                  <ul className="plain m5-post-stats">
                    <li><Placeholder as="b" v={p.views} hint="—" /><span>vizualizări</span></li>
                    <li><Placeholder as="b" v={p.likes} hint="—" /><span>aprecieri</span></li>
                    <li><Placeholder as="b" v={p.comments} hint="—" /><span>comentarii</span></li>
                  </ul>
                </li>
              ))}
            </ul>
            <p className="m5-note">{TIKTOK.best} Cele trei video-uri postate pe 25 noiembrie, între 21:11 și 22:30, au strâns împreună 280 de vizualizări în mai puțin de 3 ore, mai mult decât celelalte trei video-uri (66) în 2 zile.</p>
            <div className="m5-shots">
              {TIKTOK.shots.map(([f, what]) => (
                <figure key={f} className="wide">
                  <a href={file(f)} target="_blank" rel="noopener" className="m5-shot-img"><img src={file(f)} alt={what} loading="lazy" /></a>
                  <figcaption>{what}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="k-statistici">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Statisticile postărilor</h2>
          <p className="intro">Capturile din statisticile fiecărei rețele, ca să se vadă de unde vin cifrele de mai sus.</p>
          <div className="m5-shots">
            {STAT_SHOTS.map(([ch, f, what], i) => (
              <figure key={i} className={f ? "wide" : ""}>
                <span className="m5-label">{CH[ch].name}</span>
                {f
                  ? <a href={file(f)} target="_blank" rel="noopener" className="m5-shot-img"><img src={file(f)} alt={what} loading="lazy" /></a>
                  : <div className="m5-shot slot">{what}</div>}
                {f && <figcaption>{what}</figcaption>}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="k-canale" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Comparația canalelor</h2>
          <p className="intro">Am promovat ambele postări de pe pagina Roomio printr-un boost pe Facebook, ca să ajungă și la oameni care nu ne urmăresc încă. Aici comparăm ce ne-a adus fiecare boost și de unde au venit vizitatorii landing page-ului.</p>

          <h3 className="m5-sub m5-sub-first">Cele două boost-uri</h3>
          <div className="m5-boosts">
            {BOOSTS.map((b, i) => (
              <article key={b.name} className={`m5-boost${i === 0 ? " best" : ""}`}>
                <img src={file(b.image)} alt={b.what} loading="lazy" />
                <div className="m5-boost-body">
                  {i === 0 && <span className="m5-tag">Ne-a adus cele mai multe vizite</span>}
                  <h4>{b.name}</h4>
                  <span className="m5-muted">{b.what}</span>
                  <div className="m5-boost-big"><b>{b.visits}</b><span>vizite pe landing page</span></div>
                  <span className="m5-boost-track"><i style={{ width: `${(num(b.visits) / MAX_VISITS) * 100}%` }} /></span>
                  <dl className="m5-boost-stats">
                    <div><dt>Persoane atinse</dt><dd>{b.reach}</dd></div>
                    <div><dt>Afișări</dt><dd>{b.impressions}</dd></div>
                    <div><dt>Au intrat pe pagină</dt><dd>{pct(b.visits, b.impressions)}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
          <p className="m5-note">{BOOSTS_TEXT}</p>

          <h3 className="m5-sub">De unde au venit vizitatorii</h3>
          <ul className="plain m5-sources" aria-label="Vizitatori pe sursă">
            {RESULTS.map(([name, what, v, leads], i) => (
              <li key={name} className={i === 0 ? "best" : ""}>
                <div className="m5-sources-name"><b>{name}</b><span>{what}</span></div>
                <span className="m5-bars-track"><i style={{ width: `${(Number(v) / max) * 100}%` }} /></span>
                <div className="m5-sources-val"><b>{v}</b><span>{Math.round((Number(v) / TOTAL) * 100)}% · {leads === "0" ? "fără leaduri" : `${leads} leaduri`}</span></div>
              </li>
            ))}
          </ul>
          <p className="m5-note">Din vizitatorii numărați de PostHog, {FACEBOOK_TOTAL[0]} au venit de pe Facebook și tot de acolo au venit ambele leaduri. Nu putem spune din ce boost a venit fiecare lead, pentru că amândoi au intrat pe un link de Facebook fără UTM.</p>

          <div className="m5-best">
            <img className="m5-best-img" src={file(BEST_CHANNEL.image)} alt="Primul cadru din reel-ul „Încape sau nu?”" loading="lazy" />
            <div className="m5-best-body">
              <span className="m5-label"><Icon name="star" size={15} /> Canalul care a mers cel mai bine</span>
              <h3>{BEST_CHANNEL.name}</h3>
              <p>{BEST_CHANNEL.why}</p>
              <ul className="plain m5-best-stats">
                {BEST_CHANNEL.stats.map(([v, t]) => <li key={t}><b>{v}</b><span>{t}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="k-concluzii">
        <div className="wrap">
          <span className="num">04</span>
          <h2>Concluzii</h2>
          <p className="intro">Ce am învățat din campanie, pe scurt.</p>
          <ol className="plain m5-conclusions">
            {CAMPAIGN_CONCLUSIONS.map(([t, d], i) => (
              <li key={i}>
                <span className="m5-tag">Concluzia {i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
