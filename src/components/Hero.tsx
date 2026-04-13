import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onLocationsClick: () => void;
}

export default function Hero({ onBookClick, onLocationsClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Now open in Kokstad & Matatiele
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary leading-[1.1] mb-6">
            Vision care that <br />
            <span className="text-accent italic">empowers</span> your life.
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            Experience premium optometry with Zweli & Majola. From comprehensive eye exams to designer frames, we provide expert care tailored to your unique vision needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={onBookClick}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Book an eye test
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onLocationsClick}
              className="btn-outline flex items-center justify-center"
            >
              View locations
            </button>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {[
              "2 Branches",
              "Expert Eye Exams",
              "Designer Frames",
              "Medical Aid Accepted"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 size={16} className="text-accent" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Optometrist"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-primary">High Trust</div>
                <div className="text-xs text-slate-500">Verified Care</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              "The most thorough eye exam I've ever had. Professional and friendly staff."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
