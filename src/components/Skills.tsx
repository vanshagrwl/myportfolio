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
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-500 group-hover:bg-blue-500 group-hover:text-white',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-500 group-hover:bg-green-500 group-hover:text-white',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-500 group-hover:bg-purple-500 group-hover:text-white',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-500 group-hover:bg-orange-500 group-hover:text-white',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-500 group-hover:bg-pink-500 group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg mr-4 transition-all duration-300 ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            i < Math.floor(Math.random() * 2) + 4
                              ? 'bg-blue-500'
                              : 'bg-gray-300 dark:bg-gray-600'
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