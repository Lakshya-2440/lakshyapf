import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectArtwork from '../components/ProjectArtwork'
import SectionHeading from '../components/SectionHeading'
import { getDomainBySlug, getProjectBySlug, projects } from '../data/siteData'

export default function ProjectDetailPage() {
  const { projectSlug } = useParams()
  const project = getProjectBySlug(projectSlug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const domain = getDomainBySlug(project.domainSlug)
  const relatedProjects = projects
    .filter((item) => item.domainSlug === project.domainSlug && item.slug !== project.slug)
    .slice(0, 2)

  return (
    <div className="page detail-page">
      <section className="page-hero page-hero-alt detail-hero">
        <div className="container detail-hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">
              {project.year} / {domain?.title ?? 'Project'} / case study route
            </p>
            <h1>
              {project.name}
              <span className="accent-serif"> case study.</span>
            </h1>
            <p className="hero-body">{project.summary}</p>

            <div className="hero-actions">
              <a className="button primary" href={project.repo} target="_blank" rel="noreferrer">
                Open repository
              </a>
              <Link className="button secondary" to={`/domains/${project.domainSlug}`}>
                Explore domain page
              </Link>
              <Link className="button ghost" to="/projects">
                Back to projects
              </Link>
            </div>
          </div>

          <div className="detail-art-panel" data-reveal>
            <ProjectArtwork project={project} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container detail-layout">
          <div className="detail-main">
            <SectionHeading
              eyebrow="Why this project matters"
              title={project.strap}
              body={project.description}
              align="stacked"
            />

            <div className="story-card-grid">
              <article className="story-card" data-reveal>
                <span className="eyebrow">Challenge</span>
                <h3>{project.challenge}</h3>
              </article>
              <article className="story-card" data-reveal>
                <span className="eyebrow">Build logic</span>
                <h3>{project.buildNarrative}</h3>
              </article>
              <article className="story-card" data-reveal>
                <span className="eyebrow">Recruiter signal</span>
                <h3>{project.recruiterSignal}</h3>
              </article>
            </div>

            <div className="detail-section-grid">
              <article className="detail-section" data-reveal>
                <p className="eyebrow">What it proves</p>
                <ul className="project-kpis rich">
                  {project.outcomes.map((item) => (
                    <li key={`${project.slug}-${item}`}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-section" data-reveal>
                <p className="eyebrow">Ideal next step</p>
                <p>{project.idealNextStep}</p>
              </article>
            </div>
          </div>

          <aside className="detail-rail">
            <article className="fact-sheet" data-reveal>
              <p className="eyebrow">Project facts</p>
              <div className="fact-list">
                <div>
                  <span>Year</span>
                  <strong>{project.year}</strong>
                </div>
                <div>
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <span>Domain</span>
                  <strong>{domain?.title ?? 'Portfolio'}</strong>
                </div>
              </div>

              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={`${project.slug}-rail-${item}`} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {relatedProjects.length > 0 ? (
              <article className="fact-sheet" data-reveal>
                <p className="eyebrow">Related in this domain</p>
                <div className="related-links">
                  {relatedProjects.map((item) => (
                    <Link key={item.slug} to={`/projects/${item.slug}`}>
                      <strong>{item.name}</strong>
                      <span>{item.strap}</span>
                    </Link>
                  ))}
                </div>
              </article>
            ) : null}
          </aside>
        </div>
      </section>
    </div>
  )
}
