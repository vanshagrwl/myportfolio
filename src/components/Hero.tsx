import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Hi, I'm Vansh Agarwal",
    "Full Stack Developer",
    "JavaScript Enthusiast",
    "React Specialist"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, phrases]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-blue-400/30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Enhanced Profile Image Circle with your photo */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75"></div>
            
            {/* Middle ring */}
            <div className="absolute inset-2 w-44 h-44 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"></div>
            
            {/* Inner container */}
            <div className="relative w-48 h-48 rounded-full bg-white dark:bg-gray-800 p-3 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500 border-4 border-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800">
                {/* Your actual profile image */}
                <img
                  src="/me.jpg"
                  alt="Vansh Agarwal"
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating particles around image */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                style={{
                  top: `${20 + Math.sin((i * Math.PI) / 4) * 80}px`,
                  left: `${20 + Math.cos((i * Math.PI) / 4) * 80}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="mb-8 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
            {currentText}
            <span className="animate-pulse text-blue-500">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about building solutions that make a difference.
          </p>
        </div>

        {/* CTA Buttons with enhanced water fill effect */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl interactive">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            <div className="relative flex items-center justify-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </div>
          </button>
          
          <button className="group relative overflow-hidden px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-blue-500/30 text-gray-900 dark:text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 interactive">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            <div className="relative group-hover:text-white transition-colors duration-300">
              Let's Connect
            </div>
          </button>
        </div>

        {/* Social links with enhanced animations */}
        <div className="flex justify-center space-x-8 mb-16">
          {[
            { icon: Github, href: "https://github.com/vanshagrwl", color: "hover:text-gray-900 dark:hover:text-white" },
            { icon: Linkedin, href: "https://linkedin.com/in/vansh-agarwal", color: "hover:text-blue-600" },
            { icon: Mail, href: "mailto:vansh251205@gmail.com", color: "hover:text-red-500" }
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 ${color} interactive`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <Icon className="w-6 h-6 relative z-10" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="group animate-bounce p-3 text-gray-500 hover:text-blue-500 transition-colors duration-300 interactive"
        >
          <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;