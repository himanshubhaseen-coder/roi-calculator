import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Services from './components/Services'
import Contact from './components/Contact'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Global Noise Overlay for Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 -z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <Hero />
      <Services />
      <Calculator />
      <Contact />
      
      <footer className="py-8 text-center border-t border-white/5 text-gray-600 text-sm glass">
        <p>© {new Date().getFullYear()} Automation Solutions. Built for the future.</p>
      </footer>
      <SpeedInsights />
    </main>
  )
}

export default App
