import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Performance optimization refs
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Optimized scroll handler with requestAnimationFrame and debouncing
  const updateScrollState = useCallback(() => {
    const scrollY = window.scrollY;
    const scrollDelta = Math.abs(scrollY - lastScrollY.current);
    
    // Only update if scroll delta is significant (debouncing)
    if (scrollDelta > 10) {
      setIsScrolled(scrollY > 50);
      lastScrollY.current = scrollY;
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }
    
    ticking.current = false;
  }, [activeSection, navItems]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollState);
      ticking.current = true;
    }
  }, [updateScrollState]);

  useEffect(() => {
    // Passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-gray-700/50' 
          : 'bg-transparent'
      }`}
      style={{
        willChange: 'background-color, backdrop-filter',
        transform: 'translateZ(0)', // Hardware acceleration
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Profile Image */}
          <div className="flex items-center space-x-4">
            {/* Profile Image with scaling animation */}
            <div 
              className="relative overflow-hidden rounded-full border-3 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
              }}
            >
              <img
                src="/me.jpg"
                alt="Vansh Agarwal"
                className={`object-cover rounded-full transition-all duration-300 ease-out ${
                  isScrolled ? 'w-10 h-10' : 'w-20 h-20'
                }`}
                style={{
                  objectFit: 'cover',
                  willChange: 'width, height',
                  transform: 'translateZ(0)',
                }}
                loading="eager"
              />
              
              {/* Animated border ring */}
              <div 
                className={`absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ${
                  isScrolled ? 'scale-100' : 'scale-110'
                }`}
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              />
            </div>
            
            {/* Logo text */}
            <div className="group relative overflow-hidden">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10">
                VA
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg opacity-20" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="group relative overflow-hidden px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl font-medium interactive"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      willChange: 'transform, color',
                      transform: 'translateZ(0)',
                    }}
                  >
                    {/* Water fill effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-xl"
                      style={{
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                      }}
                    />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl blur-sm" />
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Animated underline with scroll trigger */}
                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-800 ease-out ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        transformOrigin: 'left',
                        willChange: 'width',
                        transform: 'translateZ(0)',
                      }}
                    />
                    
                    {/* Hover underline */}
                    <div 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                      style={{
                        transformOrigin: 'left',
                        willChange: 'width',
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme toggle with enhanced animation */}
            <button
              onClick={toggleTheme}
              className="group relative overflow-hidden p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 interactive"
              style={{
                willChange: 'transform, background-color',
                transform: 'translateZ(0)',
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              />
              <div className="relative z-10">
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                )}
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden group relative overflow-hidden p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 interactive"
              style={{
                willChange: 'transform, background-color',
                transform: 'translateZ(0)',
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              />
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with enhanced animations */}
      <div 
        className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{
          willChange: 'max-height, opacity',
          transform: 'translateZ(0)',
        }}
      >
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="group relative overflow-hidden block w-full text-left px-6 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 font-medium interactive"
                  style={{ 
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease-out ${index * 100}ms`,
                    willChange: 'transform, opacity',
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"
                    style={{
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                    }}
                  />
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Mobile active indicator */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full transform -translate-y-1/2"
                      style={{
                        willChange: 'transform',
                        transform: 'translateY(-50%) translateZ(0)',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;