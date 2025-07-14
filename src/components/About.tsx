import React from 'react';
import { GraduationCap, Briefcase, Award, Code, Target, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  // Fix: Specify HTMLDivElement for useScrollAnimation refs
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      
      {/* Animated progress bars */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-2000 ease-out ${
          sectionVisible ? 'w-full' : 'w-0'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-6">
            Passionate Developer
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            sectionVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vansh Agarwal</span>, 
                a passionate Full Stack Developer pursuing BCA at Vivekananda Global University. I recently completed my 
                internship at Linux World, where I worked on real-world applications and gained hands-on experience with modern technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My mission is to build powerful digital solutions that simplify human experience. I love creating 
                innovative web applications that combine beautiful design with robust functionality.
              </p>
            </div>

            {/* Skills highlights */}
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Quick Learner', 'Team Player', 'Innovation Focused'].map((skill, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200 dark:border-blue-800 interactive transition-all duration-500 delay-${index * 100} ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  <div className="relative flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div 
            ref={cardsRef}
            className="space-y-6"
          >
            {[
              {
                icon: GraduationCap,
                title: 'Education',
                subtitle: 'Academic Background',
                content: 'Bachelor of Computer Applications',
                detail: 'Vivekananda Global University',
                period: '2022 - 2025',
                color: 'from-blue-500 to-cyan-500',
                direction: 'right'
              },
              {
                icon: Briefcase,
                title: 'Experience',
                subtitle: 'Professional Journey',
                content: 'Software Development Intern',
                detail: 'Linux World',
                period: 'Recent Graduate',
                color: 'from-green-500 to-emerald-500',
                direction: 'left'
              },
              {
                icon: Award,
                title: 'Achievements',
                subtitle: 'Recognition & Growth',
                content: 'Full Stack Development',
                detail: 'Modern Web Technologies',
                period: 'Continuous Learning',
                color: 'from-purple-500 to-pink-500',
                direction: 'up'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 interactive ${
                  cardsVisible 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 ${
                        item.direction === 'right' ? 'translate-x-10' :
                        item.direction === 'left' ? '-translate-x-10' :
                        'translate-y-10'
                      }`
                }`}
                style={{ 
                  transitionDelay: `${800 + index * 200}ms` 
                }}
              >
                {/* Enhanced water fill effect - fills more */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} translate-y-[100%] group-hover:translate-y-[30%] transition-transform duration-1000 ease-out opacity-15`}></div>
                
                <div className="relative flex items-start space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${item.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.subtitle}</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.content}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Certificates Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mr-3">Certificate</span>
          Certificates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-bold mr-2">Completed</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Apr 2024</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Introduction to Software Engineering
            </h4>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">IBM · Coursera</div>
            <a
              href="https://www.coursera.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300"
            >
              View Certificate
            </a>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-bold mr-2">Completed</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Apr 2024</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Computer Networks and Network Security
            </h4>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">IBM · Coursera</div>
            <a
              href="https://www.coursera.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300"
            >
              View Certificate
            </a>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-bold mr-2">Completed</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Apr 2024</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              What Is Generative AI?
            </h4>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">LinkedIn Learning</div>
            <a
              href="https://lnkd.in/eQxt5Vnb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300"
            >
              View Certificate
            </a>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-bold mr-2">Completed</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Apr 2024</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              HTML, CSS, and JavaScript: Building the Web
            </h4>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">LinkedIn Learning</div>
            <a
              href="https://lnkd.in/e_zn65Q2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;