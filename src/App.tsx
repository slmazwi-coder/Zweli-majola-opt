/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FramesShowcase from './components/FramesShowcase';
import LensOptions from './components/LensOptions';
import Locations from './components/Locations';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  exit= opacity: 0, y: -20 >
            <Hero 
              onBookClick={() => setCurrentPage('book')} 
              onLocationsClick={() => setCurrentPage('locations')} 
            />
            <Services onBookClick={() => setCurrentPage('book')} />
            <About onBookClick={() => setCurrentPage('book')} />
            <FramesShowcase />
            <LensOptions onBookClick={() => setCurrentPage('book')} />
            <Locations />
            <FAQ />
            <BookingForm />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  className="pt-32">
            <Services onBookClick={() => setCurrentPage('book')} />
            <BookingForm />
          </motion.div>
        );
      case 'frames':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  className="pt-32">
            <FramesShowcase />
            <LensOptions onBookClick={() => setCurrentPage('book')} />
            <BookingForm />
          </motion.div>
        );
      case 'locations':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  className="pt-32">
            <Locations />
            <BookingForm />
          </motion.div>
        );
      case 'book':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  className="pt-32">
            <BookingForm />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  className="pt-32">
            <About onBookClick={() => setCurrentPage('book')} />
            <BookingForm />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  className="pt-32">
            <Contact />
            <BookingForm />
          </motion.div>
        );
      case 'faq':
        return (
          <motion.div initial= opacity: 0, y: -20  animate= opacity: 1, y: 0  className="pt-32">
            <FAQ />
            <BookingForm />
          </motion.div>
        );
      default:
        return <Hero onBookClick={() => setCurrentPage('book')} onLocationsClick={() => setCurrentPage('locations')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentPage={currentPage} 
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo(0, 0);
        }} 
        onSearchOpen={() => setIsSearchOpen(true)}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer />

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo(0, 0);
        }}
      />

      {/* Sticky Bottom Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 flex gap-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => setCurrentPage('book')}
          className="btn-primary flex-grow py-3 text-sm"
        >
          Book an eye test
        </button>
        <a 
          href="tel:0397275230"
          className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary"
        >
          <Phone size={20} />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial= opacity: 0, y: -20 
            animate= opacity: 1, y: 0 
            exit= opacity: 0, y: -20 
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center z-40 hover:bg-accent transition-colors hidden lg:flex"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
