import { Fragment, useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/projects'

type Props = {
  open: boolean
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ open, project, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <Fragment>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[61] grid place-items-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50/90 via-white to-blue-50/90 dark:from-blue-900/30 dark:via-blue-800/20 dark:to-blue-900/30 backdrop-blur-xl p-8 shadow-xl dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
              
              {project && (
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">{project.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-wide text-blue-600/70 dark:text-blue-400/70 font-medium">{project.stack}</p>
                    </div>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg border border-blue-400/40 dark:border-blue-500/30 bg-blue-100/80 dark:bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-500/20 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                    >
                      ✕
                    </motion.button>
                  </div>

                  {project.description && (
                    <p className="mt-4 text-base text-gray-700 dark:text-foreground/90 leading-relaxed mb-6">{project.description}</p>
                  )}

                  <div className="mt-6 grid gap-4">
                    {project.role && (
                      <DetailRow label="Role">{project.role}</DetailRow>
                    )}
                    {project.highlights && project.highlights.length > 0 && (
                      <DetailRow label="Features & Highlights">
                        <ul className="ml-4 list-disc space-y-2">
                          {project.highlights.map((h) => (
                            <li key={h} className="text-sm text-gray-600 dark:text-foreground/80">{h}</li>
                          ))}
                        </ul>
                      </DetailRow>
                    )}
                    {project.links && project.links.length > 0 && (
                      <DetailRow label="Links">
                        <div className="flex flex-wrap gap-3">
                          {project.links.map((l) => (
                            <motion.a
                              key={l.url}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline-offset-4 hover:underline transition-colors duration-300"
                              href={l.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {l.label}
                            </motion.a>
                          ))}
                        </div>
                      </DetailRow>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>,
    document.body
  )
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 rounded-lg border border-blue-300/40 dark:border-blue-500/20 bg-blue-50/80 dark:bg-blue-500/5 backdrop-blur-sm p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{label}</div>
      <div className="text-gray-700 dark:text-foreground/90">{children}</div>
    </div>
  )
}


