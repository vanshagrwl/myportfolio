import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript'],
      color: 'blue'
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST API'],
      color: 'green'
    },
    {
      title: 'Tools & Technologies',
      icon: <Code className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Linux'],
      color: 'purple'
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
      color: 'orange'
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['React Native', 'Flutter', 'Android Studio'],
      color: 'indigo'
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: ['Figma', 'Adobe XD', 'Canva', 'UI/UX Design'],
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'vintage-card text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white',
      green: 'vintage-card text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white',
      purple: 'vintage-card text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white',
      orange: 'vintage-card text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white',
      indigo: 'vintage-card text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white',
      pink: 'vintage-card text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden grid-overlay">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold vintage-heading mb-4">
            Skills & Technologies
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-wood-700 dark:text-wood-200 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group vintage-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hang-card interactive"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg mr-4 transition-all duration-300 ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-wood-900 dark:text-wood-100">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 vintage-card rounded-lg hover:bg-wood-100 dark:hover:bg-wood-800 transition-colors duration-200 interactive"
                  >
                    <span className="text-sm font-medium text-wood-700 dark:text-wood-300">
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            i < Math.floor(Math.random() * 2) + 4
                              ? 'bg-bronze-500'
                              : 'bg-wood-300 dark:bg-wood-600'
                          }`}
                        />
                      ))}
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