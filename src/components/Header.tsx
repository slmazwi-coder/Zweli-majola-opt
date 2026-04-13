import { useState, useEffect } from 'react';
import { Menu, X, Phone, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/Newlogo.png';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onSearchOpen: () => void;
}

export default function Header({ currentPage, onPageChange, onSearchOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'frames', label: 'Frames & Lenses' },
    { id: 'about', label: 'About' },
    { id: 'locations', label: 'Locations' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onPageChange('home')}
          className="flex items-center gap-4 group"
          aria-label="Zweli and Majola Optometrists"
        >
          <img
            src={logo}
            alt="Zweli and Majola Optometrists logo"
            className="h-14 w-auto object-contain"
          />
          <span className="flex flex-col items-start">
            <span className="text-xl font-display font-bold tracking-tighter text-primary group-hover:text-accent transition-colors">
              ZWELI & MAJOLA
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 -mt-1">
              OPTOMETRISTS
            </span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onPageChange(link.id)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                currentPage === link.id ? 'text-accent' : 'text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={onSearchOpen}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-accent transition-all mr-2"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <div className="flex items-center gap-3 mr-4 text-slate-500">
            <a href="tel:0397275230" className="hover:text-accent transition-colors">
              <Phone size={18} />
            </a>
          </div>
          <button 
            onClick={() => onPageChange('book')}
            className="btn-primary py-2.5 px-6 text-sm"
          >
            Book an eye test
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button 
            onClick={onSearchOpen}
            className="p-2 text-primary"
            aria-label="Search"
          >
            <Search size={22} />
          </button>
          <button 
            className="text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial= opacity: 0, y: -20 
            animate= opacity: 1, y: 0 
            exit= opacity: 0, y: -20 
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onPageChange(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-medium text-left py-2 ${
                    currentPage === link.id ? 'text-accent' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-slate-100 my-2" />
              <button 
                onClick={() => {
                  onPageChange('book');
                  setIsMobileMenuOpen(false);
                }}
                className="btn-primary w-full text-center"
              >
                Book an eye test
              </button>
              <div className="flex justify-center gap-8 mt-4">
                <a href="tel:0397275230" className="flex items-center gap-2 text-slate-600">
                  <Phone size={20} /> Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
