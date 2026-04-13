import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import logo from '../assets/logo-placeholder.svg';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Zweli and Majola Optometrists logo"
                className="h-11 w-auto object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="text-2xl font-display font-bold tracking-tighter text-white">
                  ZWELI & MAJOLA
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 -mt-1">
                  OPTOMETRISTS
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Providing premium eye care and designer eyewear to the communities of Kokstad and Matatiele. Your vision is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {BUSINESS_INFO.branches.map(branch => (
              <div key={branch.id}>
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <MapPin size={18} className="text-accent" /> {branch.city} Branch
                </h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex gap-3">
                    <MapPin size={16} className="text-slate-500 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={16} className="text-slate-500 flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-white transition-colors">{branch.phone}</a>
                  </li>
                  <li className="flex gap-3">
                    <Mail size={16} className="text-slate-500 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      {branch.emails.map(email => (
                        <a key={email} href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Frames & Lenses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Zweli & Majola Optometrists. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Designed for excellence in vision care.
          </p>
        </div>
      </div>
    </footer>
  );
}
