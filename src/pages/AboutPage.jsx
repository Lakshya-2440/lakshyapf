import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { emailAddress, operatingModes, socialLinks, timeline } from '../data/siteData'

export default function AboutPage({ signals }) {
  const primaryLinks = socialLinks.filter((item) =>
    ['GitHub', 'LinkedIn', 'Email'].includes(item.label),
  )

  const mapNodes = [
    { id: 'simplicity', label: 'Simplicity', x: 19, y: 27 },
    { id: 'craft', label: 'Craft', x: 56, y: 17 },
    { id: 'performance', label: 'Performance', x: 87, y: 32 },
    { id: 'empathy', label: 'Empathy', x: 33, y: 61 },
    { id: 'systems', label: 'Systems', x: 66, y: 56 },
    { id: 'curiosity', label: 'Curiosity', x: 52, y: 84 },
  ]

  const mapLinks = [
    ['simplicity', 'craft'],
    ['craft', 'performance'],
    ['simplicity', 'empathy'],
    ['empathy', 'systems'],
    ['systems', 'craft'],
    ['systems', 'performance'],
    ['empathy', 'curiosity'],
    ['curiosity', 'systems'],
  ]

  const getNode = (id) => mapNodes.find((node) => node.id === id)

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
              Human-centered maker blending design sense with engineering rigor. I turn complex
              problems into simple, beautiful, and intuitive experiences from concept to
              production.
            </p>

            <div className="hero-actions">
              <Link className="button primary" to="/connect">
                Start an email thread
              </Link>
              <Link className="button secondary" to="/projects">
                Review projects
              </Link>
            </div>
          </div>

          <div className="availability-card availability-card-compact" data-reveal>
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

      <section className="section-block philosophy-map-block">
        <div className="container">
          <div className="philosophy-map-surface" data-reveal>
            <div className="philosophy-map-frame" role="img" aria-label="Philosophy map">
              <p className="eyebrow">Philosophy map</p>
              <svg
                className="philosophy-map-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {mapLinks.map(([from, to]) => {
                  const fromNode = getNode(from)
                  const toNode = getNode(to)

                  if (!fromNode || !toNode) {
                    return null
                  }

                  return (
                    <line
                      key={`${from}-${to}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                    />
                  )
                })}
              </svg>

              <div className="philosophy-map-nodes">
                {mapNodes.map((node) => (
                  <div
                    key={node.id}
                    className="philosophy-node"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <span aria-hidden="true" />
                    <strong>{node.label}</strong>
                  </div>
                ))}
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
              <Link to="/projects#project-categories">Browse project categories</Link>
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
