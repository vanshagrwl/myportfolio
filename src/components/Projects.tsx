import React from 'react';
import { Github, ExternalLink, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Social Media Automation with Python (Instagram API)',
    description:
      'Automated Instagram posting using Python and the instagrapi library. Programmatically uploaded images and captions, explored unofficial API interactions, and learned about automation challenges and capabilities.',
    tech: ['Python', 'instagrapi', 'Instagram API', 'Automation'],
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: '',
    problem: 'Manual Instagram posting is time-consuming and repetitive.',
    solution: 'Used Python automation to post images and captions directly to Instagram.',
    outcome: 'Gained insights into API automation and streamlined social media workflows.',
    color: 'from-pink-400 to-purple-400',
  },
  {
    title: 'Voice Call Automation with Python (Twilio)',
    description:
      'Programmatically made phone calls using Python and the Twilio API. Explored API communication, call flow management with TwiML, and real-time interaction to bridge digital systems with traditional communication channels.',
    tech: ['Python', 'Twilio', 'TwiML', 'API Integration', 'Automation'],
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: '',
    problem: 'Manual outbound calls are inefficient and hard to scale.',
    solution: 'Integrated Python with Twilio to automate outbound voice calls and deliver messages.',
    outcome: 'Enabled scalable, programmable voice communication for real-time needs.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'SMS Automation with Python (Twilio)',
    description:
      'Automated SMS sending using Python and the Twilio API. Integrated Python with Twilio to efficiently dispatch text messages, gaining experience in API integration, authentication, and real-time communication.',
    tech: ['Python', 'Twilio', 'API Integration', 'Automation'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: '',
    problem: 'Manual SMS sending is inefficient and not scalable.',
    solution: 'Used Python and Twilio API to automate SMS dispatch and manage real-time communication.',
    outcome: 'Streamlined SMS communication and improved efficiency for messaging tasks.',
    color: 'from-green-400 to-blue-400',
  },
  {
    title: 'WhatsApp Direct Message Utility',
    description:
      'A web utility built with HTML, CSS, and JavaScript to send WhatsApp messages directly without saving contacts. Focused on a premium, professional, and elegant UI/UX with a sophisticated color palette, typography, and responsive interactions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: '',
    problem: 'Sending WhatsApp messages usually requires saving contacts, which is inefficient for quick communication.',
    solution: 'Developed a utility to send messages directly, focusing on seamless and elegant user experience.',
    outcome: 'Enabled users to send WhatsApp messages quickly with a refined, professional interface.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Email Automation with Python',
    description:
      'Automated email sending using Python. Explored email automation, authentication, and integration with external services to efficiently dispatch emails for various use cases.',
    tech: ['Python', 'Email Automation', 'SMTP', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: '',
    problem: 'Manual email sending is repetitive and time-consuming.',
    solution: 'Used Python to automate email dispatch, including authentication and integration with email services.',
    outcome: 'Improved efficiency and reliability of email communication for multiple scenarios.',
    color: 'from-yellow-400 to-orange-400',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-900 dark:from-white dark:to-green-100 bg-clip-text text-transparent mb-6 text-center">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-12"></div>
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Image with water fill animation */}
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Water fill animation overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} translate-y-[100%] group-hover:translate-y-[40%] transition-transform duration-1000 ease-out opacity-20 pointer-events-none`}></div>
              </div>
              {/* Project Content */}
              <div className="flex-1 space-y-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                {/* Problem, Solution, Outcome with animated fill */}
                <div className="space-y-6">
                  {[
                    { label: 'Problem', content: project.problem, color: 'from-red-500 to-pink-500' },
                    { label: 'Solution', content: project.solution, color: 'from-blue-500 to-purple-500' },
                    { label: 'Outcome', content: project.outcome, color: 'from-green-500 to-emerald-500' },
                  ].map((item, itemIndex) => (
                    <div key={itemIndex} className="group/item relative overflow-hidden p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 interactive">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-500 ease-out opacity-10`}></div>
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
                <div className="flex space-x-4 mt-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl interactive"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                      <div className="relative flex items-center">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </div>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="group relative overflow-hidden px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 interactive"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                      <div className="relative flex items-center group-hover:text-white transition-colors duration-300">
                        <Github className="w-5 h-5 mr-2" />
                        Source Code
                      </div>
                    </a>
                  )}
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