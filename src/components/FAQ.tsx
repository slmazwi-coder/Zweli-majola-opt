import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "How often should I have an eye test?",
    answer: "For most adults, a comprehensive eye exam every 1-2 years is recommended. However, if you have existing vision problems or health conditions like diabetes, we may suggest more frequent visits."
  },
  {
    question: "Do you accept medical aid?",
    answer: "Yes, we accept most major medical aids. We can assist you with benefit verification and direct billing to make the process as smooth as possible."
  },
  {
    question: "How long does an eye exam take?",
    answer: "A standard comprehensive eye exam usually takes between 30 to 45 minutes, depending on the tests required for your specific needs."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring your current glasses or contact lens prescription, a list of any medications you're taking, and your medical aid card if applicable."
  },
  {
    question: "Do you offer pediatric eye care?",
    answer: "Absolutely! We specialize in kids' eye care and recommend children have their first eye exam as early as 6 months, and then again before starting school."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Common Questions</h2>
          <h3 className="text-4xl font-display font-bold text-primary mb-6">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl transition-all ${
                openIndex === index ? 'border-accent bg-accent/5' : 'border-slate-100 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold ${openIndex === index ? 'text-accent' : 'text-primary'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400'}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
              <HelpCircle size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary">Still have questions?</h4>
              <p className="text-sm text-slate-500">We're here to help you see better.</p>
            </div>
          </div>
          <button className="btn-primary py-2.5 px-6 text-sm">Contact Support</button>
        </div>
      </div>
    </section>
  );
}
