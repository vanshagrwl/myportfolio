import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Hi, I'm Vansh Agarwal",
    "Full Stack Developer",
    "JavaScript Enthusiast",
    "React Lover"
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center md:text-left max-w-2xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {currentText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building powerful digital solutions that simplify human experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <button className="group px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
            <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Let's Connect
            </button>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mb-16">
            <a
              href="https://github.com/vanshagrwl"
              className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500" />
            </a>
            <a
              href="https://linkedin.com/in/vansh-agarwal"
              className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500" />
            </a>
            <a
              href="mailto:vansh251205@gmail.com"
              className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
        <div className="mt-12 md:mt-0 md:ml-12 flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <div className="relative group">
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-80 object-cover rounded-[2.5rem] shadow-2xl border-4 border-blue-400/40 transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-blue-400/40 opacity-0 translate-y-8 animate-fade-in"
            />
            {/* Optional: Add a subtle animated border or glow */}
            <div className="absolute inset-0 rounded-[2.5rem] border-4 border-blue-400/30 opacity-60 animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;