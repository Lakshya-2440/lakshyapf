import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { getDomainBySlug, getProjectsByDomain } from '../data/siteData'

export default function DomainDetailPage() {
  const { domainSlug } = useParams()
  const domain = getDomainBySlug(domainSlug)

  if (!domain) {
    return <Navigate to="/domains" replace />
  }

  const domainProjects = getProjectsByDomain(domain.slug)

  return (
    <div className="page domain-detail-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Domain page / {domain.title}</p>
            <h1>
              {domain.title}
              <span className="accent-serif"> in focus.</span>
            </h1>
            <p className="hero-body">{domain.description}</p>

            <div className="hero-actions">
              <Link className="button primary" to="/projects">
                Open all projects
              </Link>
              <Link className="button secondary" to="/domains">
                Back to domains
              </Link>
            </div>
          </div>

          <div className={`domain-profile tone-${domain.accent}`} data-reveal>
            <div>
              <p className="eyebrow">What this lane is good for</p>
              <div className="domain-list emphasis">
                {domain.capabilities.map((item) => (
                  <span key={`${domain.slug}-capability-${item}`}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Ideal briefs</p>
              <div className="domain-list">
                {domain.idealBriefs.map((item) => (
                  <span key={`${domain.slug}-brief-${item}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Projects in this domain"
            title={`Work that builds the ${domain.title.toLowerCase()} story.`}
            body="These projects reinforce the same capability cluster from different angles, which makes the portfolio read as a practice rather than a set of unrelated repos."
          />

          <div className="project-grid compact-grid">
            {domainProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
