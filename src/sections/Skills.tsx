import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiLaravel,
  SiPhp,
  SiDotnet,
  SiKotlin,
  SiReact as SiReactNative,
  SiTensorflow,
  SiPython,
  SiGit,
  SiFigma,
  SiPostgresql
} from 'react-icons/si'

type SkillItem = {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const groups: { title: string; items: SkillItem[] }[] = [
  { 
    title: 'Frontend', 
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 }
    ]
  },
  { 
    title: 'Backend', 
    items: [
      { name: 'Laravel', icon: SiLaravel },
      { name: 'PHP', icon: SiPhp },
      { name: 'ASP.NET', icon: SiDotnet }
    ]
  },
  { 
    title: 'Mobile', 
    items: [
      { name: 'Kotlin (Android)', icon: SiKotlin },
      { name: 'React Native', icon: SiReactNative }
    ]
  },
  { 
    title: 'AI/ML', 
    items: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Python', icon: SiPython }
    ]
  },
  { 
    title: 'Tools', 
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Figma', icon: SiFigma },
      { name: 'SSIS', icon: SiDotnet },
      { name: 'SQL Server', icon: SiDotnet },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ]
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0.8, y: 15 },
  show: { 
    opacity: 1, 
    y: 0
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative w-full overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent"
      >
        Skills & Technologies
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: '-50px' }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {groups.map((g) => (
          <motion.div
            key={g.title}
            variants={item}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-900/20 backdrop-blur-sm p-6 shadow-lg dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden transition-all duration-300"
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{g.title}</h3>
              <div className="flex flex-wrap gap-3">
                {g.items.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0.9 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-100/80 dark:bg-blue-500/10 backdrop-blur-sm px-4 py-2 transition-all duration-300 cursor-default group"
                    >
                      <IconComponent className="text-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-medium text-blue-700 dark:text-blue-300">{item.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
