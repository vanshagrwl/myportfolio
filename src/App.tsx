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
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <Preloader />
        <CustomCursor />
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
        
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2024 Vansh Agarwal. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/vanshagrwl"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/vansh-agarwal"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:vansh251205@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
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