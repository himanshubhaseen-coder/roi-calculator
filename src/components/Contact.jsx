import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse-slow" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[3rem] text-center border-t border-zinc-700/50 shadow-2xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[3rem] pointer-events-none" />
        
        <h2 className="text-4xl md:text-6xl font-black text-zinc-100 mb-6 tracking-tight drop-shadow-sm">Ready to stop losing money?</h2>
        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Book a free 15-minute systems audit. We will find at least one bottleneck in your business that can be automated tomorrow.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-grow">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="w-full bg-zinc-900/80 border border-zinc-700/50 rounded-2xl py-5 pl-14 pr-6 text-zinc-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600 shadow-inner"
              required
            />
          </div>
          <button type="submit" className="bg-zinc-100 text-zinc-900 font-bold px-10 py-5 rounded-2xl hover:bg-white transition-colors flex items-center justify-center gap-3 flex-shrink-0 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]">
            Let's Talk <Send className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
