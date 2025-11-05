import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { allProjects, type Project } from '../data/projects'
import { ProjectModal } from '../components/ProjectModal'

const INITIAL_SHOW_COUNT = 6

export function Projects() {
  const items = allProjects
  const [selected, setSelected] = useState<Project | null>(null)
  const [showAll, setShowAll] = useState(false)
  const isOpen = useMemo(() => !!selected, [selected])
  
  const displayedProjects = showAll ? items : items.slice(0, INITIAL_SHOW_COUNT)
  const hasMore = items.length > INITIAL_SHOW_COUNT

  return (
    <section id="projects" className="py-24 relative min-h-[400px] w-full overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent"
      >
         Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.length === 0 ? (
          <p className="text-gray-600 dark:text-foreground/70 text-center col-span-full">No projects available.</p>
        ) : (
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p, index) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0.8, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05, margin: '-100px 0px' }}
              transition={{ delay: Math.min(index * 0.03, 0.2), duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-900/20 backdrop-blur-sm p-6 shadow-lg dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden transition-all duration-300 min-h-[200px] opacity-100"
            >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">{p.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-blue-600/70 dark:text-blue-400/70 font-medium">{p.stack}</p>
              <p className="mt-4 text-sm text-gray-600 dark:text-foreground/80 leading-relaxed">{p.description}</p>
              <div className="mt-6">
                <motion.button
                  onClick={() => setSelected(p)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3"
                >
                  View Details
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </div>
            </motion.article>
            ))}
          </AnimatePresence>
        )}
      </div>

      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
          >
            {showAll ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
          </motion.button>
        </motion.div>
      )}

      <ProjectModal open={isOpen} project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}


