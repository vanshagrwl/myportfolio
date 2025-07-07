import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, Zap, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'TypeScript', level: 80 }
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      direction: 'left'
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 78 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST API', level: 88 }
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
      direction: 'up'
    },
    {
      title: 'Tools & Technologies',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Linux', level: 75 }
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
      direction: 'right'
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Firebase', level: 82 },
        { name: 'Redis', level: 65 }
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
      direction: 'left'
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 70 },
        { name: 'Android Studio', level: 68 }
      ],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20',
      direction: 'up'
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 78 },
        { name: 'Canva', level: 90 },
        { name: 'UI/UX Design', level: 82 }
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20',
      direction: 'right'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10"></div>
      
      {/* Animated progress bars */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-2000 ease-out ${
          sectionVisible ? 'w-full' : 'w-0'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Skills & Technologies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            sectionVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-white/20 dark:border-gray-700/50 interactive ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0 translate-x-0' 
                  : `opacity-0 ${
                      category.direction === 'right' ? 'translate-x-10' :
                      category.direction === 'left' ? '-translate-x-10' :
                      'translate-y-10'
                    }`
              }`}
              style={{
                transitionDelay: `${500 + index * 150}ms`,
              }}
            >
              {/* Enhanced water fill effect - fills more */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} translate-y-[100%] group-hover:translate-y-[40%] transition-transform duration-1000 ease-out opacity-10`}></div>
              
              {/* Header */}
              <div className="relative flex items-center mb-8">
                <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="relative space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1500 ease-out transform origin-left ${
                          cardsVisible ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${800 + (index * 150) + (skillIndex * 100)}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;