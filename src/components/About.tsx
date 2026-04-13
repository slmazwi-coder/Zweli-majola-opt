import { motion } from 'motion/react';
import { Award, Users, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const REASONS = [
  {
    title: "Expert Optometrists",
    description: "Our team brings years of clinical experience and a passion for eye health to every examination.",
    icon: Award
  },
  {
    title: "Patient-Centered Care",
    description: "We treat every patient like family, taking the time to understand your unique vision needs.",
    icon: Heart
  },
  {
    title: "Advanced Technology",
    description: "We invest in the latest diagnostic equipment to ensure the most accurate results for your eyes.",
    icon: ShieldCheck
  },
  {
    title: "Community Focused",
    description: "Proudly serving Kokstad and Matatiele with accessible, high-quality vision care for all.",
    icon: Users
  }
];

interface AboutProps {
  onBookClick: () => void;
}

export default function About({ onBookClick }: AboutProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
              Dedicated to your <br /> vision since day one.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Zweli & Majola Optometrists, we believe that clear vision is the foundation of a vibrant life. Founded on the principles of integrity, excellence, and community service, we have become a trusted name in eye care across Kokstad and Matatiele.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Our mission is simple: to provide comprehensive, personalized optometry services that empower our patients to see the world with clarity and confidence. Whether you need a routine check-up or specialized care, we are here for you.
            </p>
            <button 
              onClick={onBookClick}
              className="btn-primary flex items-center gap-2"
            >
              Join our community <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Clinic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full flex items-center justify-center text-white p-8 text-center shadow-xl">
              <div className="font-display font-bold text-xl leading-tight">Trusted by Thousands</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent mx-auto mb-6">
                <reason.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{reason.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
