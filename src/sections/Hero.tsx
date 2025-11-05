import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="relative py-32 overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-float max-w-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-float max-w-full" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium"
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl mb-4"
        >
          Muhammad Ridho
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 text-xl sm:text-2xl text-gray-800 dark:text-foreground/90 font-medium"
        >
          Full-Stack Software Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
          className="text-lg text-blue-600/80 dark:text-blue-300/80 font-medium"
        >
          Website, Mobile App and AI Specialist
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-foreground/70 text-lg leading-relaxed"
        >
          I design and build modern web, mobile, and AI-powered applications with focus on user experience and performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
          >
            View My Work
          </motion.a>
          <motion.a
            href="https://wa.me/6281996663358"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, borderColor: 'rgba(96, 165, 250, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border-2 border-blue-500/50 bg-blue-500/10 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-blue-600 dark:text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}


