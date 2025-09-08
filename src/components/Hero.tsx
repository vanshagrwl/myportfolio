import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
// import profileImg from '../assets/profile.jpg';
const profileImg = null; // Will be set when image is available

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

  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.download = 'Vansh_Agarwal_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-overlay">
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center md:text-left max-w-2xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 vintage-heading">
              {currentText}
              <span className="text-bronze-600 animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium text-wood-700 dark:text-wood-200">
              Building products that scale — with clarity, craft, and impact
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <button 
              onClick={handleDownloadResume}
              className="group wooden-button px-8 py-4 rounded-xl"
            >
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
            <button 
              onClick={scrollToContact}
              className="vintage-card px-8 py-4 rounded-xl font-semibold text-slate-100 hover:border-white/30 hover:shadow-xl transition"
            >
              Let's Connect
            </button>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mb-16">
            <a
              href="https://github.com/vanshagrwl"
              target="_blank"
              rel="noopener noreferrer"
              className="group vintage-card p-4 rounded-xl"
            >
              <Github className="w-6 h-6 text-slate-100 group-hover:text-blue-300" />
            </a>
            <a
              href="https://linkedin.com/in/vansh-agarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="group vintage-card p-4 rounded-xl"
            >
              <Linkedin className="w-6 h-6 text-slate-100 group-hover:text-blue-300" />
            </a>
            <a
              href="mailto:vansh251205@gmail.com"
              className="group vintage-card p-4 rounded-xl"
            >
              <Mail className="w-6 h-6 text-slate-100 group-hover:text-blue-300" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 vintage-card rounded-xl text-wood-900"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
        
        {/* Professional Image with Vintage Frame */}
        <div className="mt-12 md:mt-0 md:ml-12 flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <div className="group relative hang-card">
            <div className="w-72 h-96 vintage-card rounded-2xl overflow-hidden shadow-2xl relative">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Vansh Agarwal - Full Stack Developer"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    console.log('Image failed to load:', profileImg);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log('Image loaded successfully');
                    // Hide placeholder when image loads
                    const placeholder = e.currentTarget.parentNode.querySelector('.placeholder');
                    if (placeholder) placeholder.style.display = 'none';
                  }}
                />
              ) : null}
              {/* Fallback placeholder */}
              <div className="placeholder absolute inset-0 w-full h-full flex items-center justify-center bg-slate-800 text-slate-400 z-0">
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍💻</div>
                  <div className="text-sm">Vansh Agarwal</div>
                  <div className="text-xs mt-2 text-slate-500">Add your photo to src/assets/profile.jpg</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 vintage-card rounded-md animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 vintage-card rounded-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;