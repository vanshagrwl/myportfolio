import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <Preloader />
        <Navigation />
        <main className="overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <BackToTop />
        
        <footer className="vintage-card py-8 relative overflow-hidden">
          {/* Vintage Background Pattern */}
          <div className="absolute inset-0 bg-vintage-paper opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-wood-600 dark:text-wood-400">
                  © 2024 Vansh Agarwal. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/vanshagrwl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wood-600 dark:text-wood-400 hover:text-bronze-500 transition-colors duration-200 interactive"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/vansh-agarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wood-600 dark:text-wood-400 hover:text-bronze-500 transition-colors duration-200 interactive"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:vansh251205@gmail.com"
                  className="text-wood-600 dark:text-wood-400 hover:text-bronze-500 transition-colors duration-200 interactive"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;