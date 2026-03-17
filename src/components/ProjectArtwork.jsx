export default function ProjectArtwork({ project, dense = false }) {
  return (
    <div className={`project-artwork tone-${project.accent} ${dense ? 'dense' : ''}`}>
      <div className="project-art-shell">
        <div className="project-browser">
          <span />
          <span />
          <span />
        </div>

        <div className="project-line-stack" aria-hidden="true">
          {project.artLines.map((width) => (
            <span key={`${project.slug}-${width}`} style={{ width }} />
          ))}
        </div>

        <div className="project-badges">
          {project.stack.slice(0, 3).map((item) => (
            <span key={`${project.slug}-${item}`}>{item}</span>
          ))}
        </div>
      </div>

      <div className="project-art-stamp">{project.year}</div>
    </div>
  )
}
