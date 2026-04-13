import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const CATEGORIES = ['All', 'Women', 'Men', 'Kids', 'Sunglasses'];

export default function FramesShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFrames = activeCategory === 'All' 
    ? BUSINESS_INFO.frames 
    : BUSINESS_INFO.frames.filter(f => f.category === activeCategory);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">The Curated Collection</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-primary leading-tight">
              Frames that define <br /> your <span className="text-accent italic">perspective</span>.
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3 p-1.5 bg-slate-50 rounded-full border border-slate-100">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.08)]' 
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredFrames.map((frame) => (
              <motion.div
                key={frame.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="group relative"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100/50 mb-8">
                  <img 
                    src={frame.image} 
                    alt={frame.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                
                <div className="flex items-center justify-between px-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">
                      {frame.category}
                    </span>
                    <h4 className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                      {frame.name}
                    </h4>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <button className="btn-primary py-4 px-10 text-base shadow-lg shadow-primary/10">
            View Full Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}
