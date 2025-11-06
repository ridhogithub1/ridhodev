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
  SiPostgresql,
  SiFlask,
  SiMysql,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiRedis,
  SiJquery,
  SiNextdotjs
} from 'react-icons/si'

type SkillItem = {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const skills: SkillItem[] = [
  // Frontend
  { name: 'React.js', icon: SiReact },
  { name: 'React Native', icon: SiReactNative },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'jQuery', icon: SiJquery },
  
  // Backend
  { name: 'Laravel', icon: SiLaravel },
  { name: 'PHP', icon: SiPhp },
  { name: 'ASP.NET', icon: SiDotnet },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Flask', icon: SiFlask },
  { name: 'Python', icon: SiPython },
  
  // Mobile
  { name: 'Kotlin', icon: SiKotlin },
  
  // AI/ML
  { name: 'TensorFlow', icon: SiTensorflow },
  
  // Database
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'SQL Server', icon: SiDotnet },
  
  // Tools & Others
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: SiAmazon },
  { name: 'Figma', icon: SiFigma },
  { name: 'SSIS', icon: SiDotnet },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0.8, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1
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
        className="flex flex-wrap gap-4 justify-center"
      >
        {skills.map((skill) => {
          const IconComponent = skill.icon
          return (
            <motion.div
              key={skill.name}
              variants={item}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.15, y: -5 }}
              className="relative group"
              title={skill.name}
            >
              <div className="rounded-xl border border-blue-400/40 bg-blue-100/80 dark:bg-blue-500/10 backdrop-blur-sm p-4 transition-all duration-300 cursor-default shadow-md hover:shadow-glow">
                <IconComponent className="text-3xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
