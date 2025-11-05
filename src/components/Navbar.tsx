import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Liquid Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 via-blue-50/90 to-blue-100/80 dark:from-blue-900/20 dark:via-blue-800/30 dark:to-blue-900/20 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent dark:from-white/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Muhammad Ridho
        </motion.a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="relative text-sm text-gray-700 dark:text-foreground/90 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <motion.a
            href="/Muhammad-Ridho-Resume.pdf"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:from-blue-500 hover:to-blue-600 md:block"
            download
          >
            Download Resume
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}


