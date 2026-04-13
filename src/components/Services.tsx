import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Comprehensive eye care <br /> for the whole family.
          </h3>
          <p className="text-lg text-slate-600">
            We combine clinical excellence with a personal touch to ensure your vision remains clear and your eyes stay healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_INFO.services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button 
                  onClick={onBookClick}
                  className="text-sm font-bold text-accent flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Book now <Icons.ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
