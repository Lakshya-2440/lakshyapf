import { Link } from 'react-router-dom'
import { domains } from '../data/siteData'
import ProjectArtwork from './ProjectArtwork'

function getDomainTitle(domainSlug) {
  return domains.find((domain) => domain.slug === domainSlug)?.title ?? 'Selected Work'
}

export default function ProjectCard({ project, variant = 'feature' }) {
  const domainTitle = getDomainTitle(project.domainSlug)
  const isCompact = variant === 'compact'
  const visibleOutcomes = project.outcomes.slice(0, isCompact ? 1 : 2)
  const visibleStack = project.stack.slice(0, isCompact ? 3 : 4)

  return (
    <article className={`project-card ${variant}`} data-reveal>
      <ProjectArtwork project={project} dense={isCompact} />

      <div className="project-card-copy">
        <div className="project-card-topline">
          <span className={`tone-pill tone-${project.accent}`}>{domainTitle}</span>
          <span className="project-year">{project.year}</span>
        </div>

        <div className="project-headline">
          <h3>{project.name}</h3>
          <p className="project-strap">{project.strap}</p>
        </div>

        <p className="project-description">{isCompact ? project.summary : project.description}</p>

        <ul className="project-kpis">
          {visibleOutcomes.map((item) => (
            <li key={`${project.slug}-${item}`}>{item}</li>
          ))}
        </ul>

        <div className="chip-row">
          {visibleStack.map((item) => (
            <span key={`${project.slug}-${item}`} className="chip">
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <Link className="button primary" to={`/projects/${project.slug}`}>
            {isCompact ? 'Open case study' : 'Read case study'}
          </Link>
          {isCompact ? null : (
            <a className="button secondary" href={project.repo} target="_blank" rel="noreferrer">
              Open repo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
