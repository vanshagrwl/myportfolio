import React from 'react';
import { Calendar, MapPin, Award, Users, Code, Target } from 'lucide-react';

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
      icon: <Code className="w-6 h-6" />
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
      icon: <Users className="w-6 h-6" />
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
      icon: <Award className="w-6 h-6" />
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'vintage-card text-bronze-600 dark:text-bronze-400';
      case 'Freelance':
        return 'vintage-card text-bronze-600 dark:text-bronze-400';
      case 'Education':
        return 'vintage-card text-bronze-600 dark:text-bronze-400';
      default:
        return 'vintage-card text-wood-600 dark:text-wood-400';
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden grid-overlay">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold vintage-heading mb-4">
            Experience & Journey
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-wood-700 dark:text-wood-200 mt-4 max-w-2xl mx-auto">
            My professional journey and academic achievements
          </p>
        </div>

        <div className="relative">
          {/* Vintage Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bronze-500 to-copper-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-8"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Vintage Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 vintage-card border-4 border-bronze-500 rounded-full shadow-lg relative z-10">
                  <div className="text-bronze-500">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 vintage-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hang-card interactive">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-wood-900 dark:text-wood-100 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-bronze-600 dark:text-bronze-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                      
                      <div className="flex items-center text-sm text-wood-600 dark:text-wood-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      
                      <div className="flex items-center text-sm text-wood-600 dark:text-wood-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-wood-700 dark:text-wood-200 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-wood-600 dark:text-wood-400 uppercase tracking-wide mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start space-x-2 text-wood-700 dark:text-wood-300"
                        >
                          <div className="w-2 h-2 bg-bronze-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-wood-600 dark:text-wood-400 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 vintage-card text-wood-700 dark:text-wood-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
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