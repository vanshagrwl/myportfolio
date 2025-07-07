import React from 'react';
import { Calendar, MapPin, Award, Users, Code, Target, Briefcase, Star } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Linux World',
      period: 'Recently Completed',
      location: 'Remote',
      type: 'Internship',
      description: 'Worked on real-world applications using modern web technologies. Collaborated with senior developers and gained hands-on experience in full-stack development.',
      achievements: [
        'Developed responsive web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver projects on time',
        'Implemented best practices in code quality and version control',
        'Participated in code reviews and technical discussions'
      ],
      skills: ['React', 'Node.js', 'JavaScript', 'Git', 'Agile'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: 'Ongoing',
      location: 'Remote',
      type: 'Freelance',
      description: 'Building custom web applications for clients across various industries. Focusing on modern technologies and delivering high-quality solutions.',
      achievements: [
        'Successfully delivered 5+ projects for satisfied clients',
        'Maintained 100% client satisfaction rate',
        'Specialized in e-commerce and business applications',
        'Provided ongoing maintenance and support'
      ],
      skills: ['React', 'Next.js', 'MongoDB', 'Express.js', 'AWS'],
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Student Developer',
      company: 'Vivekananda Global University',
      period: '2022 - Present',
      location: 'Jaipur, India',
      type: 'Education',
      description: 'Pursuing Bachelor of Computer Applications while working on academic projects and participating in coding competitions.',
      achievements: [
        'Maintained excellent academic performance',
        'Led multiple group projects and presentations',
        'Participated in coding competitions and hackathons',
        'Mentored junior students in programming'
      ],
      skills: ['Java', 'Python', 'Data Structures', 'Algorithms', 'Database Design'],
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Freelance':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Education':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 dark:from-indigo-950/10 dark:to-purple-950/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            Experience & Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            Professional Growth
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            My journey through education, internships, and professional development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-8"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-900 border-4 border-transparent rounded-full shadow-2xl relative z-10 group interactive">
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}></div>
                  <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-full relative z-10`}>
                    <div className="text-white">
                      {exp.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 group relative overflow-hidden bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 transform hover:-translate-y-2 interactive">
                  {/* Water fill effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} translate-y-[100%] group-hover:translate-y-[80%] transition-transform duration-700 ease-out opacity-5`}></div>
                  
                  <div className="relative">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end space-y-3 mt-4 lg:mt-0">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-lg ${getTypeColor(exp.type)}`}>
                          <Star className="w-4 h-4 mr-2" />
                          {exp.type}
                        </span>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {exp.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="group/skill relative overflow-hidden px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium border border-blue-200 dark:border-blue-800 interactive"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} translate-x-[-100%] group-hover/skill:translate-x-0 transition-transform duration-500 ease-out`}></div>
                            <span className="relative group-hover/skill:text-white transition-colors duration-300">
                              {skill}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;