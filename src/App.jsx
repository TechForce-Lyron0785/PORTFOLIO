import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/Features';
import Skills from './components/Skills';
import Training from './components/Training';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return (
    <div className="relative overflow-x-hidden min-h-screen text-[#2A3B4C] dark:text-gray-200 transition-colors duration-300">
      {/* Background abstract decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-[#e6f4ff] to-transparent rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-gradient-to-l from-[#e1f5f3] to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-gradient-to-t from-[#e6f4ff] to-transparent rounded-full blur-3xl opacity-70"></div>

        <div className="absolute top-32 left-8 w-16 h-16 decorative-dots opacity-40"></div>
        <div className="absolute top-1/3 right-12 w-20 h-20 decorative-dots opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 decorative-dots opacity-30"></div>

        <div className="absolute top-24 left-1/3 w-4 h-4 rounded bg-[#3BAFDA] rotate-45 opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded bg-[#2E8B7E] rotate-12 opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full flex flex-col items-center min-h-[calc(100vh-100px)]">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="w-full relative py-12 flex flex-col items-center">
                  {/* Elegant glass structural background instead of skewed line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-[96%] max-w-[1500px] h-full bg-white/40 dark:bg-[#070e17]/50 backdrop-blur-3xl -z-10 mt-10 rounded-[40px] border border-white/60 dark:border-[#20A274]/15 shadow-2xl dark:shadow-[0_0_40px_rgba(32,162,116,0.05)]"></div>
                  <FeatureCards />
                </div>
              </>
            } />
            <Route path="/skills" element={<Skills />} />
            <Route path="/training" element={<Training />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
