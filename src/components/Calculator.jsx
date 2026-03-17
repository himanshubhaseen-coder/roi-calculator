import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Calculator as CalcIcon, TrendingUp, Clock, IndianRupee } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Calculator() {
  const [hours, setHours] = useState(25);
  const [monthlySalary, setMonthlySalary] = useState(80000);
  const [cost, setCost] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    // Basic assumption: 160 working hours in a month (40hrs/wk)
    const hourlyRate = monthlySalary / 160;
    
    // 52 weeks in a year
    const yearlyCost = hours * hourlyRate * 52;
    setCost(Math.round(yearlyCost));
    
    // Trigger a slight pulse when numbers change heavily
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.4, ease: "easeOut" }
    });
  }, [hours, monthlySalary, controls]);

  return (
    <section id="calculator" className="py-24 px-6 relative z-10 bg-background overflow-hidden">
      
      {/* Background Floating Particles FX */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -1000], opacity: [0, 1, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-[10%] bottom-0 w-px h-64 bg-gradient-to-t from-transparent via-primary to-transparent"
        />
        <motion.div 
          animate={{ y: [0, -1000], opacity: [0, 1, 0] }} 
          transition={{ duration: 15, delay: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-[30%] bottom-0 w-px h-[500px] bg-gradient-to-t from-transparent via-accent to-transparent opacity-50"
        />
        <motion.div 
          animate={{ y: [0, -1000], opacity: [0, 1, 0] }} 
          transition={{ duration: 12, delay: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-[70%] bottom-0 w-px h-[300px] bg-gradient-to-t from-transparent via-primary to-transparent"
        />
        <motion.div 
          animate={{ y: [0, -1000], opacity: [0, 1, 0] }} 
          transition={{ duration: 18, delay: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[90%] bottom-0 w-px h-96 bg-gradient-to-t from-transparent via-accent to-transparent opacity-60"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-100 mb-4 tracking-tight">The True Cost of Inefficiency</h2>
          <p className="text-zinc-400 text-lg">Calculate the exact amount of capital burning through your business every year.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Controls Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
          >
            {/* Subtle glow behind controls */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <div className="mb-12 relative z-10">
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold tracking-wide uppercase text-zinc-400 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Manual Hours Wasted / Week
                </label>
                <span className="text-zinc-100 font-black text-xl">{hours} hrs</span>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-md rounded-full pointer-events-none" />
                <input 
                  type="range" 
                  min="5" max="200" step="5"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full relative z-10 h-3 bg-zinc-900 border border-zinc-700 rounded-lg appearance-none cursor-grab active:cursor-grabbing accent-primary shadow-inner"
                />
              </motion.div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold tracking-wide uppercase text-zinc-400 flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-accent" />
                  Avg. Monthly Salary (Operator)
                </label>
                <span className="text-zinc-100 font-black text-xl">₹{monthlySalary.toLocaleString()}</span>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-md rounded-full pointer-events-none" />
                <input 
                  type="range" 
                  min="15000" max="500000" step="5000"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(Number(e.target.value))}
                  className="w-full relative z-10 h-3 bg-zinc-900 border border-zinc-700 rounded-lg appearance-none cursor-grab active:cursor-grabbing accent-accent shadow-inner"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Dynamic glow based on cost height */}
            <div className={cn(
              "absolute inset-0 bg-accent/20 blur-[120px] rounded-full transition-all duration-1000",
              cost > 1000000 ? "opacity-100 scale-110" : "opacity-30 scale-90"
            )} />
            
            <div className="glass rounded-[2.5rem] p-10 flex flex-col items-center text-center relative border-t border-zinc-500/30 glow-accent shadow-2xl bg-zinc-900/40">
              <CalcIcon className="w-10 h-10 text-accent mb-6 opacity-80" />
              <p className="text-zinc-400 mb-2 font-bold tracking-widest uppercase text-sm">
                Your Estimated <span className="text-zinc-100 border-b-2 border-accent pb-0.5">Annual</span> Loss
              </p>
              
              <motion.div animate={controls} className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 tracking-tighter mb-8 drop-shadow-sm">
                ₹{cost.toLocaleString('en-IN')}
              </motion.div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent mb-8" />
              
              <div className="flex items-center gap-3 text-sm text-zinc-300 bg-surface/80 px-6 py-4 rounded-2xl border border-zinc-700/50 shadow-inner">
                <TrendingUp className="w-5 h-5 text-accent animate-pulse" />
                <p>A custom automation system pays for itself in <strong className="text-zinc-100">weeks</strong>, not years.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
