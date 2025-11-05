import { motion } from 'framer-motion'

const groups: { title: string; items: string[] }[] = [
  { title: 'Frontend', items: ['React.js', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Laravel', 'PHP', 'ASP.NET'] },
  { title: 'Mobile', items: ['Kotlin (Android)', 'React Native'] },
  { title: 'AI/ML', items: ['TensorFlow', 'Python'] },
  { title: 'Tools', items: ['Git', 'Figma', 'SSIS', 'SQL Server', 'PostgreSQL'] },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent"
      >
        Skills & Technologies
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, groupIndex) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: groupIndex * 0.1, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-900/20 backdrop-blur-sm p-6 shadow-lg dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden transition-all duration-300"
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                    className="rounded-full border border-blue-400/40 bg-blue-100/80 dark:bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-xs font-medium text-blue-700 dark:text-blue-300 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


