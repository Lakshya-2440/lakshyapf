import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function DomainCard({ domain, compact = false, linkTo }) {
  const destination = linkTo ?? `/projects?domain=${domain.slug}#project-categories`

  return (
    <motion.article
      className={`domain-card tone-${domain.accent} ${compact ? 'compact' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25, ease: [0.2, 0.8, 0.2, 1] } }}
    >
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
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link className="button ghost" to={destination}>
            Explore this category
          </Link>
        </motion.div>
      </div>
    </motion.article>
  )
}
