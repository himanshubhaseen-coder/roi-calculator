import { motion } from 'framer-motion';
import { Network, SearchCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const workflows = [
  {
    category: "Lead Generation & Outreach",
    title: "The 'Sleep-Sales' Pipeline",
    description: "Instantly scrape leads from LinkedIn, enrich their emails via API, and draft hyper-personalized outreach sequences. All triggered by a single button press.",
    tags: ["Data Scraping", "AI Writing", "Email APIs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    icon: <SearchCheck className="w-6 h-6 text-primary" />
  },
  {
    category: "Operations & Fulfillment",
    title: "Client Onboarding Autopilot",
    description: "When a Stripe payment clears, instantly generate a Slack channel, create an Asana project board, and send a welcome email with personalized Google Drive folders.",
    tags: ["Webhooks", "CRM Sync", "Task Creation"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800&h=600",
    icon: <Network className="w-6 h-6 text-accent" />
  }
];

export default function Services() {
  return (
    <section id="workflows" className="py-32 px-6 bg-surface/20 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">Stop building tools.<br/>Start building <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">systems</span>.</h2>
          <p className="text-zinc-400 text-lg">We architect bespoke automation pipelines that connect your existing software, eliminating data-entry forever.</p>
        </div>

        <div className="space-y-32">
          {workflows.map((flow, idx) => (
            <div key={idx} className={cn(
              "flex flex-col lg:flex-row items-center gap-16",
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            )}>
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 shadow-xl">
                    {flow.icon}
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">{flow.category}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{flow.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{flow.description}</p>
                
                <ul className="space-y-4 pt-4">
                  {flow.tags.map(tag => (
                    <li key={tag} className="flex items-center gap-3 text-zinc-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual Mockup/Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 relative w-full aspect-video"
              >
                {/* Decorative glows */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-50" />
                
                <div className="relative h-full rounded-3xl overflow-hidden glass border border-zinc-700/50 p-2">
                  <div className="absolute inset-0 bg-zinc-900/40 z-10 mix-blend-multiply" />
                  <img 
                    src={flow.image} 
                    alt={flow.title}
                    className="w-full h-full object-cover rounded-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700 opacity-90"
                  />
                  
                  {/* Floating UI Element Simulation - Fixed Placement */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="absolute top-6 right-6 glass px-5 py-3 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-zinc-600/50 bg-zinc-900/90 backdrop-blur-xl cursor-default"
                  >
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </div>
                    <span className="text-zinc-100 font-bold text-xs tracking-wider uppercase">Runtime: Active</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-6 left-6 glass px-5 py-4 rounded-xl shadow-2xl z-20 flex flex-col gap-1 border border-primary/30 bg-black/60 backdrop-blur-md"
                  >
                    <span className="text-primary font-bold text-xs tracking-widest uppercase">Latest Execution</span>
                    <span className="text-zinc-100 font-medium text-sm flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Success
                    </span>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
