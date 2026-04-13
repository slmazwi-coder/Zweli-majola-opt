import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'kokstad',
    day: '',
    time: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    const phoneRegex = /^(?:\+27|0)[1-9][0-9]{8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 012 345 6789)';
    }

    if (!formData.day) {
      newErrors.day = 'Preferred day is required';
    } else {
      const selectedDate = new Date(formData.day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.day = 'Please select a future date';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate submission
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setErrors({});
    }
  };

  return (
    <section className="py-24 bg-bg-soft" id="booking">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Book Appointment</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              Ready to see the <br /> world clearly?
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Fill out the form to request an appointment. Our team will contact you shortly to confirm your preferred time and date.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Quick Confirmation</h4>
                  <p className="text-sm text-slate-500">We usually respond within 2 hours during business hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Flexible Scheduling</h4>
                  <p className="text-sm text-slate-500">Choose a time that works best for your busy schedule.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4">Request Sent!</h4>
                <p className="text-slate-600">
                  Thank you, {formData.name}. We've received your request and will contact you at {formData.phone} shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-accent font-bold text-sm"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <User size={14} /> Full Name
                    </label>
                    <input 
                      type="text"
                      placeholder="John Doe"
                      className={`w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-primary focus:ring-2 transition-all ${
                        errors.name ? 'ring-2 ring-red-400' : 'focus:ring-accent'
                      }`}
                      value={formData.name}
                      onChange={e => {
                        setFormData({...formData, name: e.target.value});
                        if (errors.name) setErrors({...errors, name: ''});
                      }}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Phone size={14} /> Phone Number
                    </label>
                    <input 
                      type="tel"
                      placeholder="012 345 6789"
                      className={`w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-primary focus:ring-2 transition-all ${
                        errors.phone ? 'ring-2 ring-red-400' : 'focus:ring-accent'
                      }`}
                      value={formData.phone}
                      onChange={e => {
                        setFormData({...formData, phone: e.target.value});
                        if (errors.phone) setErrors({...errors, phone: ''});
                      }}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <MapPin size={14} /> Preferred Branch
                  </label>
                  <select 
                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-primary focus:ring-2 focus:ring-accent transition-all appearance-none"
                    value={formData.branch}
                    onChange={e => setFormData({...formData, branch: e.target.value})}
                  >
                    {BUSINESS_INFO.branches.map(b => (
                      <option key={b.id} value={b.id}>{b.city} Branch</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Calendar size={14} /> Preferred Day
                    </label>
                    <input 
                      type="date"
                      className={`w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-primary focus:ring-2 transition-all ${
                        errors.day ? 'ring-2 ring-red-400' : 'focus:ring-accent'
                      }`}
                      value={formData.day}
                      onChange={e => {
                        setFormData({...formData, day: e.target.value});
                        if (errors.day) setErrors({...errors, day: ''});
                      }}
                    />
                    {errors.day && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.day}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Clock size={14} /> Preferred Time
                    </label>
                    <input 
                      type="time"
                      className={`w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-primary focus:ring-2 transition-all ${
                        errors.time ? 'ring-2 ring-red-400' : 'focus:ring-accent'
                      }`}
                      value={formData.time}
                      onChange={e => {
                        setFormData({...formData, time: e.target.value});
                        if (errors.time) setErrors({...errors, time: ''});
                      }}
                    />
                    {errors.time && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.time}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    Message (Optional)
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your vision needs..."
                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-primary focus:ring-2 focus:ring-accent transition-all resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                  Request Appointment <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
