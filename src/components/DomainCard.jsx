import { Link } from 'react-router-dom'

export default function DomainCard({ domain, compact = false }) {
  return (
    <article className={`domain-card tone-${domain.accent} ${compact ? 'compact' : ''}`} data-reveal>
      <div className="domain-card-topline">
        <span className="eyebrow">{domain.strap}</span>
      </div>
      <h3>{domain.title}</h3>
      <p>{domain.description}</p>

      <ul className="domain-points">
        {domain.capabilities.slice(0, 2).map((item) => (
          <li key={`${domain.slug}-${item}`}>{item}</li>
        ))}
      </ul>

      <div className="domain-actions">
        <Link className="button ghost" to={`/domains/${domain.slug}`}>
          Explore this domain
        </Link>
      </div>
    </article>
  )
}
