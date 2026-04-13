import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Eye, MapPin, Glasses } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export default function SearchOverlay({ isOpen, onClose, onNavigate }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const results = {
    services: BUSINESS_INFO.services.filter(s => 
      s.title.toLowerCase().includes(query.toLowerCase()) || 
      s.description.toLowerCase().includes(query.toLowerCase())
    ),
    frames: BUSINESS_INFO.frames.filter(f => 
      f.name.toLowerCase().includes(query.toLowerCase()) || 
      f.category.toLowerCase().includes(query.toLowerCase())
    ),
    locations: BUSINESS_INFO.branches.filter(b => 
      b.city.toLowerCase().includes(query.toLowerCase()) || 
      b.address.toLowerCase().includes(query.toLowerCase())
    )
  };

  const hasResults = query.length > 0 && (
    results.services.length > 0 || 
    results.frames.length > 0 || 
    results.locations.length > 0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col"
        >
          <div className="max-w-4xl mx-auto w-full px-6 pt-12 pb-6 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-grow mr-8">
              <Search size={24} className="text-accent" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search services, frames, or locations..."
                className="w-full bg-transparent border-none text-2xl md:text-3xl font-display font-bold text-primary focus:ring-0 placeholder:text-slate-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            <div className="max-w-4xl mx-auto w-full px-6 py-12">
              {!query && (
                <div className="text-center py-20">
                  <p className="text-slate-400 font-medium">Start typing to search our practice...</p>
                </div>
              )}

              {query && !hasResults && (
                <div className="text-center py-20">
                  <p className="text-slate-400 font-medium">No results found for "{query}"</p>
                </div>
              )}

              {hasResults && (
                <div className="space-y-12">
                  {results.services.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Eye size={14} /> Services
                      </h4>
                      <div className="grid gap-4">
                        {results.services.map((service, i) => (
                          <button
                            key={i}
                            onClick={() => { onNavigate('services'); onClose(); }}
                            className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all group text-left"
                          >
                            <div>
                              <div className="font-bold text-primary mb-1">{service.title}</div>
                              <div className="text-sm text-slate-500">{service.description}</div>
                            </div>
                            <ArrowRight size={20} className="text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.frames.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Glasses size={14} /> Frames
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {results.frames.map((frame) => (
                          <button
                            key={frame.id}
                            onClick={() => { onNavigate('frames'); onClose(); }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all group text-left"
                          >
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-100">
                              <img src={frame.image} alt={frame.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                              <div className="font-bold text-primary mb-0.5">{frame.name}</div>
                              <div className="text-xs text-accent font-bold uppercase tracking-wider">{frame.category}</div>
                            </div>
                            <ArrowRight size={18} className="text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.locations.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <MapPin size={14} /> Locations
                      </h4>
                      <div className="grid gap-4">
                        {results.locations.map((branch) => (
                          <button
                            key={branch.id}
                            onClick={() => { onNavigate('locations'); onClose(); }}
                            className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all group text-left"
                          >
                            <div>
                              <div className="font-bold text-primary mb-1">{branch.city} Branch</div>
                              <div className="text-sm text-slate-500">{branch.address}</div>
                            </div>
                            <ArrowRight size={20} className="text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
