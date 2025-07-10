import React from 'react';
import { ExternalLink, Github, CheckCircle, XCircle } from 'lucide-react';

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
      outcome: 'Increased sales by 40% for client businesses'
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
      outcome: 'Improved team productivity by 60%'
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
      outcome: 'Enhanced decision-making for weather-dependent businesses'
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
      outcome: 'Saved 10+ hours per week in reporting'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Showcasing real-world applications that solve actual problems
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      project.isLive
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {project.isLive ? (
                        <><CheckCircle className="w-4 h-4 mr-1" /> Live</>
                      ) : (
                        <><XCircle className="w-4 h-4 mr-1" /> Demo</>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Problem
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Outcome
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
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