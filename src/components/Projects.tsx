import React from 'react';
import { ExternalLink, Github, CheckCircle, XCircle, Star, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and secure payment integration. Built with React and Node.js.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      isLive: true,
      liveUrl: '#',
      githubUrl: '#',
      problem: 'Small businesses needed an affordable e-commerce solution',
      solution: 'Built a scalable platform with modern tech stack',
      outcome: 'Increased sales by 40% for client businesses',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'WebRTC'],
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      isLive: true,
      liveUrl: '#',
      githubUrl: '#',
      problem: 'Teams struggled with project coordination',
      solution: 'Created real-time collaboration platform',
      outcome: 'Improved team productivity by 60%',
      featured: false
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather analytics dashboard with data visualization, forecasting, and location-based insights.',
      tech: ['React', 'D3.js', 'Weather API', 'Chart.js'],
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
      isLive: false,
      liveUrl: '#',
      githubUrl: '#',
      problem: 'Complex weather data needed better visualization',
      solution: 'Built interactive dashboard with real-time updates',
      outcome: 'Enhanced decision-making for weather-dependent businesses',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics platform for social media metrics with automated reporting and performance insights.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      isLive: true,
      liveUrl: '#',
      githubUrl: '#',
      problem: 'Marketers needed unified social media insights',
      solution: 'Developed comprehensive analytics platform',
      outcome: 'Saved 10+ hours per week in reporting',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/10 dark:to-pink-950/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-900 dark:from-white dark:to-green-100 bg-clip-text text-transparent mb-6">
            Real-World Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Showcasing applications that solve actual problems and create value
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="flex-1 relative">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                      project.isLive
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}>
                      {project.isLive ? (
                        <><CheckCircle className="w-4 h-4 mr-2" /> Live</>
                      ) : (
                        <><XCircle className="w-4 h-4 mr-2" /> Demo</>
                      )}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover overlay with quick actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="group/btn relative overflow-hidden px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 interactive"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                        <div className="relative flex items-center group-hover/btn:text-white transition-colors duration-300">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </div>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="group/btn relative overflow-hidden px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 interactive"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                        <div className="relative flex items-center">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem, Solution, Outcome */}
                <div className="space-y-6">
                  {[
                    { label: 'Problem', content: project.problem, color: 'from-red-500 to-pink-500' },
                    { label: 'Solution', content: project.solution, color: 'from-blue-500 to-purple-500' },
                    { label: 'Outcome', content: project.outcome, color: 'from-green-500 to-emerald-500' }
                  ].map((item, itemIndex) => (
                    <div key={itemIndex} className="group/item relative overflow-hidden p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 interactive">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-500 ease-out opacity-5`}></div>
                      <div className="relative">
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          {item.label}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="group relative overflow-hidden px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium border border-blue-200 dark:border-blue-800 interactive"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative group-hover:text-white transition-colors duration-300">
                          {tech}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 pt-4">
                  <a
                    href={project.liveUrl}
                    className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl interactive"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <div className="relative flex items-center">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </div>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="group relative overflow-hidden px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 interactive"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <div className="relative flex items-center group-hover:text-white transition-colors duration-300">
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;