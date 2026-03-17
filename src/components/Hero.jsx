import { motion } from 'framer-motion';
import { ArrowDown, Workflow } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from './ErrorBoundary';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 overflow-hidden pt-20 pb-10">

      {/* Abstract Glowing Background Orbs (V2 Palette) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] -z-10 mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[160px] -z-10 mix-blend-screen animate-float" />

      {/* Copy Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl z-10 lg:w-1/2 flex flex-col items-start text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium tracking-wide border-zinc-500/30">
          <Workflow className="w-4 h-4 text-accent" />
          <span className="text-zinc-300">Intelligent Digital Workflows</span>
        </div>

        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-zinc-100 mb-6 leading-[1.1]">
          Stop doing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">robot work.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed font-light">
          We build autonomous pipelines that handle your lead generation, CRM syncs, and client follow-ups instantly. Reclaim your focus and multiply your output without hiring.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-xl text-white font-bold transition-all overflow-hidden border border-primary/50 bg-primary/10 hover:bg-primary/20 shadow-[0_0_30px_-5px_var(--color-primary)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Calculate Revenue Lost
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => document.getElementById('workflows').scrollIntoView({ behavior: 'smooth' })}
            className="text-zinc-300 font-medium hover:text-white transition-colors"
          >
            View automated workflows &rarr;
          </button>
        </motion.div>
      </motion.div>

      {/* 3D Spline Scene with Error Boundary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="w-full lg:w-1/2 h-[500px] lg:h-[800px] relative z-0 mt-12 lg:mt-0"
      >
        {/* Static, glowing "LET'S PLAY!" text scattered everywhere */}
        <div className="absolute top-[10%] left-[15%] z-20 pointer-events-none opacity-70"><span className="text-zinc-500 font-black tracking-[0.5em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[25%] left-[80%] z-20 pointer-events-none opacity-60 md:block hidden"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[45%] left-[10%] z-20 pointer-events-none opacity-80"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[60%] left-[85%] z-20 pointer-events-none opacity-50"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[85%] left-[20%] z-20 pointer-events-none opacity-75"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[15%] left-[60%] z-20 pointer-events-none opacity-40 md:block hidden"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[35%] left-[30%] z-20 pointer-events-none opacity-65"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[75%] left-[50%] z-20 pointer-events-none opacity-55 md:block hidden"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[5%] left-[40%] z-20 pointer-events-none opacity-85"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>
        <div className="absolute top-[90%] left-[75%] z-20 pointer-events-none opacity-45"><span className="text-zinc-500 font-black tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(113,113,122,0.9)] mix-blend-screen">LET'S PLAY!</span></div>

        <ErrorBoundary>
          {/* Attempting a widely used public Spline URL */}
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </ErrorBoundary>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </motion.div>

    </section>
  );
}
