import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('ikbal_portfolio_dark_mode');
    return saved !== null ? JSON.parse(saved) : true; // Default to elegant dark navy mode
  });

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    localStorage.setItem('ikbal_portfolio_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
    } selection:bg-sky-500 selection:text-white`}>
      
      {/* Navbar with smooth active spy & theme switcher */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenCVModal={() => setIsCVModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero 
          darkMode={darkMode} 
          onOpenCVModal={() => setIsCVModalOpen(true)} 
        />
        
        <About 
          darkMode={darkMode} 
        />
        
        <Education 
          darkMode={darkMode} 
        />
        
        <Skills 
          darkMode={darkMode} 
        />
        
        <Experience 
          darkMode={darkMode} 
        />
        
        <Projects 
          darkMode={darkMode} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />
        
        <Contact 
          darkMode={darkMode} 
        />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Interactive Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        darkMode={darkMode} 
      />

      {/* Professional CV Preview & PDF Print / Export Modal */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
        darkMode={darkMode} 
      />

    </div>
  );
}
