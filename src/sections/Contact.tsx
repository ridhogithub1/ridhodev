import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiWhatsapp, SiInstagram, SiGithub } from 'react-icons/si'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:ridho22ti@mahasiswa.pcr.ac.id?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 relative w-full overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent"
      >
        Contact
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-900/20 backdrop-blur-sm p-8 shadow-lg dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
        >
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 grid gap-5">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="rounded-lg border border-blue-300/50 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-500/10 backdrop-blur-sm px-5 py-3 text-gray-700 dark:text-foreground placeholder:text-gray-400 dark:placeholder:text-foreground/50 outline-none transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-blue-100 dark:focus:bg-blue-500/20 focus:shadow-glow"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="rounded-lg border border-blue-300/50 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-500/10 backdrop-blur-sm px-5 py-3 text-gray-700 dark:text-foreground placeholder:text-gray-400 dark:placeholder:text-foreground/50 outline-none transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-blue-100 dark:focus:bg-blue-500/20 focus:shadow-glow"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              rows={5}
              className="rounded-lg border border-blue-300/50 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-500/10 backdrop-blur-sm px-5 py-3 text-gray-700 dark:text-foreground placeholder:text-gray-400 dark:placeholder:text-foreground/50 outline-none transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-blue-100 dark:focus:bg-blue-500/20 focus:shadow-glow resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-900/20 backdrop-blur-sm p-8 shadow-lg dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
        >
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Prefer email or socials?</h3>
            <p className="text-gray-600 dark:text-foreground/70 mb-6">Get in touch with me through these channels:</p>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5, scale: 1.05 }}
                className="transition-all duration-300"
              >
                <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-3 transition-colors duration-300" href="mailto:ridho22ti@mahasiswa.pcr.ac.id">
                  <MdEmail className="text-xl" /> Email
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5, scale: 1.05 }}
                className="transition-all duration-300"
              >
                <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-3 transition-colors duration-300" href="https://www.linkedin.com/in/muhammad-ridho-35047a326/" target="_blank" rel="noreferrer">
                  <SiLinkedin className="text-xl" /> LinkedIn
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5, scale: 1.05 }}
                className="transition-all duration-300"
              >
                <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-3 transition-colors duration-300" href="https://wa.me/6281996663358" target="_blank" rel="noreferrer">
                  <SiWhatsapp className="text-xl" /> WhatsApp
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5, scale: 1.05 }}
                className="transition-all duration-300"
              >
                <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-3 transition-colors duration-300" href="https://www.instagram.com/mhmmdrdo" target="_blank" rel="noreferrer">
                  <SiInstagram className="text-xl" /> Instagram
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5, scale: 1.05 }}
                className="transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-3">
                    <SiGithub className="text-xl" /> GitHub
                  </span>
                  <div className="ml-7 flex flex-col gap-2">
                    <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors duration-300" href="https://github.com/ridhogithub1" target="_blank" rel="noreferrer">
                      • ridhogithub1
                    </a>
                    <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors duration-300" href="https://github.com/RidhoIT" target="_blank" rel="noreferrer">
                      • RidhoIT
                    </a>
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


