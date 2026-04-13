import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Locations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Two convenient branches <br /> to serve you better.
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {BUSINESS_INFO.branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-soft rounded-[2.5rem] p-8 md:p-12 border border-slate-100 relative overflow-hidden group"
            >
              {/* Decorative background city name */}
              <div className="absolute -top-4 -right-4 text-8xl font-display font-black text-primary/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                {branch.city}
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-accent text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <MapPin size={12} /> {branch.city} Branch
                </div>

                <h4 className="text-3xl font-display font-bold text-primary mb-8">
                  {branch.name}
                </h4>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Address</div>
                      <p className="text-slate-700 font-medium">
                        {branch.shoppingCentre && <span className="block text-primary">{branch.shoppingCentre}</span>}
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-slate-700 font-medium hover:text-accent transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Hours</div>
                      <div className="text-slate-700 font-medium text-sm">
                        <div className="flex justify-between gap-8">
                          <span>Mon – Fri:</span>
                          <span>{branch.hours.monFri}</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Sat:</span>
                          <span>{branch.hours.sat}</span>
                        </div>
                        <div className="flex justify-between gap-8 text-slate-400">
                          <span>Sun:</span>
                          <span>{branch.hours.sun}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                      <div className="flex flex-col gap-1">
                        {branch.emails.map(email => (
                          <a key={email} href={`mailto:${email}`} className="text-slate-700 font-medium text-sm hover:text-accent transition-colors">
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <button className="btn-primary py-3 px-4 text-sm flex items-center justify-center gap-2">
                    <ExternalLink size={16} /> Directions
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
