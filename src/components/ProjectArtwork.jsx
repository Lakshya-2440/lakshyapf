import { motion } from 'framer-motion'

const shellVariants = {
  rest: { rotate: -3 },
  hover: {
    rotate: -1,
    scale: 1.02,
    transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] },
  },
}

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (i) => ({
    scaleX: 1,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
}

export default function ProjectArtwork({ project, dense = false }) {
  return (
    <div className={`project-artwork tone-${project.accent} ${dense ? 'dense' : ''}`}>
      <motion.div
        className="project-art-shell"
        variants={shellVariants}
        initial="rest"
        whileHover="hover"
      >
        <div className="project-browser">
          <span />
          <span />
          <span />
        </div>

        <div className="project-line-stack" aria-hidden="true">
          {project.artLines.map((width, i) => (
            <motion.span
              key={`${project.slug}-${width}`}
              style={{ width }}
              custom={i}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>

        <div className="project-badges">
          {project.stack.slice(0, 3).map((item) => (
            <span key={`${project.slug}-${item}`}>{item}</span>
          ))}
        </div>
      </motion.div>

      <div className="project-art-stamp">{project.year}</div>
    </div>
  )
}
