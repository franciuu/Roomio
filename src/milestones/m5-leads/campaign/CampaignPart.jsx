// Partea 3 din M5: postările din campanie, comparația canalelor și concluziile
import { Placeholder } from "../../../shared/Placeholder.jsx";
import { Icon } from "../components/Icon.jsx";
import { BEST_CHANNEL, CAMPAIGN_CONCLUSIONS, CHANNELS, POSTS, RESULTS } from "./campaign-content.js";

const CH = Object.fromEntries(CHANNELS.map((c) => [c.id, c]));
const shot = (f) => `${import.meta.env.BASE_URL}m5/${f}`;
// conversia vizitator → lead, doar când avem cifrele
const conv = (r) => (r.visitors && r.leads ? `${Math.round((Number(r.leads) / Number(r.visitors)) * 100)}%` : "");

// schița unei postări, până avem captura
function PostSketch() {
  return (
    <div className="m5-post-sketch" aria-hidden="true">
      <span className="m5-sk-head"><i /><span><b /><b /></span></span>
      <b className="m5-sk-line" /><b className="m5-sk-line short" />
      <span className="m5-sk-img">captura postării</span>
      <span className="m5-sk-foot"><b /><b /><b /></span>
    </div>
  );
}

export function CampaignPart() {
  const maxLeads = Math.max(1, ...RESULTS.map((r) => Number(r.leads) || 0));
  return (
    <main className="part-in">
      <section id="k-postari" className="band">
        <div className="wrap">
          <span className="num">01</span>
          <h2>Postările</h2>
          <p className="intro">Unde am distribuit landing page-ul. Fiecare canal are linkul lui, ca să vedem în PostHog câți vizitatori și câte înscrieri a adus.</p>
          <div className="m5-posts">
            {POSTS.map((p, i) => {
              const c = CH[p.channel];
              return (
                <article key={i} className="m5-post">
                  <header className="m5-post-head">
                    <span className="m5-icon-box"><Icon name={c.icon} /></span>
                    <div><h3>{c.name}</h3><span><Placeholder v={p.where} hint={c.where} /> · <Placeholder v={p.date} hint="data" /></span></div>
                  </header>
                  {p.screenshot
                    ? <a className="m5-post-img" href={p.permalink || shot(p.screenshot)} target="_blank" rel="noopener"><img src={shot(p.screenshot)} alt={`Postarea pe ${c.name}`} loading="lazy" /></a>
                    : <PostSketch />}
                  <ul className="plain m5-post-stats">
                    <li><Placeholder as="b" v={p.reach} hint="—" /><span>reach</span></li>
                    <li><Placeholder as="b" v={p.reactions} hint="—" /><span>reacții</span></li>
                    <li>{p.permalink ? <a href={p.permalink} target="_blank" rel="noopener">Deschide postarea ↗</a> : <span className="slot">linkul postării</span>}</li>
                  </ul>
                  <code className="m5-utm" title="Linkul folosit în postare">{c.link.replace("https://", "")}</code>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="k-canale">
        <div className="wrap">
          <span className="num">02</span>
          <h2>Comparația canalelor</h2>
          <p className="intro">Vizitatorii și click-urile vin din PostHog, leadurile din formular. Conversia este procentul de vizitatori care s-au înscris.</p>
          <ul className="plain m5-bars" aria-label="Leaduri pe canal">
            {RESULTS.map((r) => {
              const c = CH[r.channel];
              return (
                <li key={r.channel} className={BEST_CHANNEL[0] === c.name ? "best" : ""}>
                  <span className="m5-bars-name"><Icon name={c.icon} size={18} />{c.name}</span>
                  <span className="m5-bars-track"><i style={{ width: r.leads ? `${(Number(r.leads) / maxLeads) * 100}%` : "0" }} /></span>
                  <span className="m5-bars-val"><Placeholder v={r.leads} hint="—" /> <small>leaduri</small></span>
                </li>
              );
            })}
          </ul>
          <div className="m5-table">
            <table>
              <thead><tr><th>Canalul</th><th>Postări</th><th>Vizitatori</th><th>Click „Intră în listă”</th><th>Leaduri</th><th>Conversie</th></tr></thead>
              <tbody>
                {RESULTS.map((r) => (
                  <tr key={r.channel} className={BEST_CHANNEL[0] === CH[r.channel].name ? "best" : ""}>
                    <th scope="row">{CH[r.channel].name}</th>
                    <td><Placeholder v={r.posts} hint="—" /></td>
                    <td><Placeholder v={r.visitors} hint="—" /></td>
                    <td><Placeholder v={r.clicks} hint="—" /></td>
                    <td><Placeholder v={r.leads} hint="—" /></td>
                    <td><Placeholder v={conv(r)} hint="—" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="m5-best">
            <span className="m5-icon-box"><Icon name="star" /></span>
            <div>
              <span className="m5-label">Canalul care a mers cel mai bine</span>
              <Placeholder as="h3" v={BEST_CHANNEL[0]} hint="Numele canalului" />
              <Placeholder as="p" v={BEST_CHANNEL[1]} hint="De ce a mers cel mai bine: mai mulți vizitatori, o conversie mai mare sau ambele." />
            </div>
          </div>
        </div>
      </section>

      <section id="k-concluzii" className="band">
        <div className="wrap">
          <span className="num">03</span>
          <h2>Concluzii</h2>
          <p className="intro">Ce am învățat din campanie, pe scurt.</p>
          <ol className="plain m5-conclusions">
            {CAMPAIGN_CONCLUSIONS.map(([t, d], i) => (
              <li key={i}>
                <span className="m5-tag">C{i + 1}</span>
                <Placeholder as="h3" v={t} hint={`Concluzia ${i + 1}`} />
                <Placeholder as="p" v={d} hint="Pe scurt" />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
