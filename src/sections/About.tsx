import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-900/20 backdrop-blur-sm p-8 shadow-lg dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
        >
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <p className="leading-relaxed text-gray-700 dark:text-foreground/90 text-lg mb-4">
              I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Software Developer</span> with <span className="text-blue-600 dark:text-blue-400 font-semibold">4+ years</span> of experience building end-to-end solutions across web, mobile, and AI. I enjoy designing pragmatic architectures, crafting delightful user experiences, and turning ideas into production-grade software.
            </p>
            <p className="leading-relaxed text-gray-700 dark:text-foreground/90 text-lg">
              My toolbelt includes <span className="text-blue-600 dark:text-blue-400 font-semibold">PHP, Java, Kotlin, JavaScript, Python, and C#</span>, and I'm especially interested in <span className="text-blue-600 dark:text-blue-400 font-semibold">Web Development, Mobile Apps, Deep Learning, and Data Science</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


