import { motion } from 'motion/react';
import { Eye, Layers, Zap, ArrowRight } from 'lucide-react';

const LENS_OPTIONS = [
  {
    title: "Single Vision Lenses",
    description: "The most common lens type, designed to correct vision at a single distance—either for reading or for seeing far away.",
    icon: Eye,
    features: ["Clear vision at one focal point", "Ideal for nearsightedness or farsightedness", "Lightweight and versatile"]
  },
  {
    title: "Progressive Lenses",
    description: "Multifocal lenses that provide a seamless transition between near, intermediate, and far vision without any visible lines.",
    icon: Layers,
    features: ["No 'bifocal line'", "Natural vision at all distances", "Customized to your lifestyle"]
  },
  {
    title: "Blue Light Filtering",
    description: "Specialized coatings that protect your eyes from harmful blue light emitted by digital screens and artificial lighting.",
    icon: Zap,
    features: ["Reduces digital eye strain", "Improves sleep quality", "Enhances visual comfort"]
  }
];

interface LensOptionsProps {
  onBookClick: () => void;
}

export default function LensOptions({ onBookClick }: LensOptionsProps) {
  return (
    <section className="py-32 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Precision Optics</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">
            The right lens for <br /> your <span className="text-accent italic">lifestyle</span>.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Beyond the frame, the quality of your vision depends on the technology in your lenses. We offer premium options for every need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {LENS_OPTIONS.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-accent mb-6">
                <option.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{option.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {option.description}
              </p>
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onBookClick}
                className="btn-outline py-2.5 text-sm flex items-center justify-center gap-2 w-full"
              >
                Enquire about {option.title.split(' ')[0]} <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
