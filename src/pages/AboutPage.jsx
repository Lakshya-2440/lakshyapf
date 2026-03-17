import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { emailAddress, operatingModes, socialLinks, timeline } from '../data/siteData'

export default function AboutPage({ signals }) {
  const primaryLinks = socialLinks.filter((item) =>
    ['GitHub', 'LinkedIn', 'Email'].includes(item.label),
  )

  return (
    <div className="page about-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">About / studio profile / working style</p>
            <h1>
              Multi-disciplinary by design,
              <span className="accent-serif"> not by accident.</span>
            </h1>
            <p className="hero-body">
              The public work spans front-end systems, AI tools, campaign surfaces, 3D
              experiments, and robotics-adjacent prototypes. The common thread is a bias for
              specific interfaces with a point of view.
            </p>

            <div className="hero-actions">
              <a className="button primary" href={`mailto:${emailAddress}`}>
                Start an email thread
              </a>
              <Link className="button secondary" to="/projects">
                Review projects
              </Link>
            </div>
          </div>

          <div className="availability-card" data-reveal>
            <p className="eyebrow">Live profile snapshot</p>
            <div className="fact-list">
              <div>
                <span>Public repos</span>
                <strong>{signals.publicRepos}</strong>
              </div>
              <div>
                <span>Followers</span>
                <strong>{signals.followers}</strong>
              </div>
              <div>
                <span>Building since</span>
                <strong>{signals.started}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container split-layout">
          <div>
          <SectionHeading
            eyebrow="Timeline"
            title="Public work, sharper signal."
            body="A short path through how the work evolved."
            align="stacked"
          />

            <div className="timeline-grid">
              {timeline.map((item) => (
                <article key={item.year} className="timeline-item" data-reveal>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="contact-panel" data-reveal>
            <p className="eyebrow">Best fit</p>
            <h3>Good briefs usually need both technical depth and visual nerve.</h3>
            <p>
              Realtime product work, portfolio redesigns, AI tools, ambitious landing pages,
              interactive demos, or anything that needs a more authored interface language.
            </p>
            <div className="note-links">
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              <Link to="/domains">Browse practice areas</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Working principles"
              title="A few principles carry across the work."
              body="Short enough to scan, strong enough to be useful."
              align="stacked"
            />

            <div className="process-grid">
              {operatingModes.slice(0, 3).map((mode) => (
                <article key={mode.title} className="process-card" data-reveal>
                  <h3>{mode.title}</h3>
                  <p>{mode.body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="social-panel" data-reveal>
            <p className="eyebrow">Elsewhere</p>
            <div className="related-links">
              {primaryLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  <strong>{item.label}</strong>
                  <span>Open profile</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
