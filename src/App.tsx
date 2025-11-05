import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-background text-neutral-900 dark:text-foreground transition-colors duration-300 overflow-x-hidden w-full">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
