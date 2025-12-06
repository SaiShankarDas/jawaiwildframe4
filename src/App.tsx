import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { BookingPage } from './components/BookingPage';
import { GalleryPage } from './pages/GalleryPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Wrapper to handle Lenis and Scroll Restoration
const AppContent = () => {
  const location = useLocation();

  // Scroll to top on route change, or to hash if present
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans text-charcoal bg-charcoal selection:bg-desert selection:text-white">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <FloatingWhatsApp />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
