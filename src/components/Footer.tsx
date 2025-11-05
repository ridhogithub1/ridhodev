import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-24 border-t border-gray-200 dark:border-white/10 py-8 relative w-full overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 dark:from-blue-900/10 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-sm text-gray-600 dark:text-foreground/70 text-center">
        © {new Date().getFullYear()} <span className="text-blue-600 dark:text-blue-400 font-semibold">Muhammad Ridho</span>. All rights reserved.
      </div>
    </motion.footer>
  )
}


