import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Get In Touch</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">
            We're here to <span className="text-accent italic">help</span>.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a question about our services, frames, or medical aid support? Reach out to us and our friendly team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            {BUSINESS_INFO.branches.map(branch => (
              <div key={branch.id} className="card !p-8">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <MapPin size={20} className="text-accent" /> {branch.city} Branch
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 text-slate-600">
                    <Phone size={16} className="text-accent flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-accent transition-colors">{branch.phone}</a>
                  </div>
                  <div className="flex gap-3 text-slate-600">
                    <Mail size={16} className="text-accent flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      {branch.emails.map(email => (
                        <a key={email} href={`mailto:${email}`} className="hover:text-accent transition-colors">{email}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bg-soft p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm h-full"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-4">Message Received!</h4>
                  <p className="text-slate-600">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-accent font-bold text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                      <input 
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-primary focus:ring-2 focus:ring-accent transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input 
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-primary focus:ring-2 focus:ring-accent transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                    <input 
                      required
                      type="text"
                      placeholder="How can we help?"
                      className="w-full bg-white border-none rounded-xl px-4 py-3 text-primary focus:ring-2 focus:ring-accent transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full bg-white border-none rounded-xl px-4 py-3 text-primary focus:ring-2 focus:ring-accent transition-all resize-none shadow-sm"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4 shadow-lg shadow-primary/10">
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
