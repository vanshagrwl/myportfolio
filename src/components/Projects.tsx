import React from 'react';
import { Github, ExternalLink, Zap } from 'lucide-react';

const majorProjects = [
  {
    title: 'WhatsApp Direct Message Utility',
    description:
      'A comprehensive web utility built with HTML, CSS, and JavaScript to send WhatsApp messages directly without saving contacts. Features a premium, professional, and elegant UI/UX with sophisticated color palette, typography, and responsive interactions. Includes advanced form validation and user experience enhancements.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design', 'Form Validation'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=600',
    isLive: true,
    liveUrl: 'https://whatsapp-direct-message.netlify.app',
    githubUrl: 'https://github.com/vanshagrwl/whatsapp-direct-message',
    problem: 'Sending WhatsApp messages usually requires saving contacts, which is inefficient for quick communication.',
    solution: 'Developed a comprehensive utility to send messages directly, focusing on seamless and elegant user experience with advanced features.',
    outcome: 'Enabled users to send WhatsApp messages quickly with a refined, professional interface. Gained 100+ users and positive feedback.',
    color: 'from-green-500 to-emerald-500',
    category: 'Web Application',
    duration: '2 weeks',
    features: ['Direct messaging', 'Contact-free communication', 'Responsive design', 'Form validation']
  },
  {
    title: 'Social Media Automation Platform',
    description:
      'A comprehensive automation platform for social media management using Python. Features Instagram API integration, automated posting, content scheduling, and analytics. Built with modern Python frameworks and includes a web dashboard for management.',
    tech: ['Python', 'Django', 'instagrapi', 'Instagram API', 'PostgreSQL', 'Redis', 'Celery'],
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=compress&w=600',
    isLive: true,
    liveUrl: 'https://social-automation-demo.netlify.app',
    githubUrl: 'https://github.com/vanshagrwl/social-media-automation',
    problem: 'Manual social media posting is time-consuming and repetitive, especially for businesses managing multiple accounts.',
    solution: 'Created a comprehensive automation platform with scheduling, analytics, and multi-platform support.',
    outcome: 'Reduced manual posting time by 80% and improved engagement rates. Successfully managed 5+ client accounts.',
    color: 'from-pink-400 to-purple-400',
    category: 'Automation Platform',
    duration: '1 month',
    features: ['Automated posting', 'Content scheduling', 'Analytics dashboard', 'Multi-account management']
  }
];

const minorProjects = [
  {
    title: 'Voice Call Automation with Python (Twilio)',
    description:
      'Programmatically made phone calls using Python and the Twilio API. Explored API communication, call flow management with TwiML, and real-time interaction to bridge digital systems with traditional communication channels.',
    tech: ['Python', 'Twilio', 'TwiML', 'API Integration', 'Automation'],
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: 'https://github.com/vanshagrwl/voice-call-automation',
    problem: 'Manual outbound calls are inefficient and hard to scale.',
    solution: 'Integrated Python with Twilio to automate outbound voice calls and deliver messages.',
    outcome: 'Enabled scalable, programmable voice communication for real-time needs.',
    color: 'from-blue-400 to-cyan-400',
    category: 'Automation Tool',
    duration: '1 week'
  },
  {
    title: 'SMS Automation with Python (Twilio)',
    description:
      'Automated SMS sending using Python and the Twilio API. Integrated Python with Twilio to efficiently dispatch text messages, gaining experience in API integration, authentication, and real-time communication.',
    tech: ['Python', 'Twilio', 'API Integration', 'Automation'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: 'https://github.com/vanshagrwl/sms-automation',
    problem: 'Manual SMS sending is inefficient and not scalable.',
    solution: 'Used Python and Twilio API to automate SMS dispatch and manage real-time communication.',
    outcome: 'Streamlined SMS communication and improved efficiency for messaging tasks.',
    color: 'from-green-400 to-blue-400',
    category: 'Automation Tool',
    duration: '1 week'
  },
  {
    title: 'Email Automation with Python',
    description:
      'Automated email sending using Python. Explored email automation, authentication, and integration with external services to efficiently dispatch emails for various use cases.',
    tech: ['Python', 'Email Automation', 'SMTP', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=600',
    isLive: false,
    liveUrl: '',
    githubUrl: 'https://github.com/vanshagrwl/email-automation',
    problem: 'Manual email sending is repetitive and time-consuming.',
    solution: 'Used Python to automate email dispatch, including authentication and integration with email services.',
    outcome: 'Improved efficiency and reliability of email communication for multiple scenarios.',
    color: 'from-yellow-400 to-orange-400',
    category: 'Automation Tool',
    duration: '1 week'
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features vintage wooden theme, smooth animations, and interactive elements. Includes dark mode, smooth scrolling, and mobile-first design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=compress&w=600',
    isLive: true,
    liveUrl: 'https://vansh-agarwal-portfolio.netlify.app',
    githubUrl: 'https://github.com/vanshagrwl/portfolio',
    problem: 'Need a professional online presence to showcase skills and projects.',
    solution: 'Created a modern, interactive portfolio with vintage design and smooth animations.',
    outcome: 'Professional online presence with modern design and excellent user experience.',
    color: 'from-purple-400 to-pink-400',
    category: 'Web Development',
    duration: '2 weeks'
  }
];

const ProjectCard: React.FC<{ project: any; index: number; isMajor?: boolean }> = ({ project, index, isMajor = false }) => (
  <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
    {/* Project Image with vintage water fill animation */}
    <div className="group relative overflow-hidden vintage-card rounded-3xl shadow-2xl w-full max-w-md hang-card interactive">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Vintage water fill animation overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r from-bronze-500 to-copper-500 translate-y-[100%] group-hover:translate-y-[40%] transition-transform duration-1000 ease-out opacity-25 pointer-events-none`}></div>
    </div>
    
    {/* Project Content */}
    <div className="flex-1 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <h3 className="text-2xl lg:text-3xl font-bold vintage-heading mb-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
          <span className="px-3 py-1 vintage-card text-bronze-600 dark:text-bronze-400 rounded-full text-sm font-medium">
            {project.category}
          </span>
          <span className="px-3 py-1 vintage-card text-wood-600 dark:text-wood-400 rounded-full text-sm font-medium">
            {project.duration}
          </span>
        </div>
      </div>
      
      <p className="text-lg text-wood-700 dark:text-wood-200 leading-relaxed">
        {project.description}
      </p>
      
      {/* Features for major projects */}
      {isMajor && project.features && (
        <div>
          <h4 className="text-sm font-bold text-wood-600 dark:text-wood-400 uppercase tracking-wide mb-3">
            Key Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature: string, featureIndex: number) => (
              <span
                key={featureIndex}
                className="px-3 py-1 vintage-card text-wood-700 dark:text-wood-300 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Problem, Solution, Outcome with vintage animated fill */}
      <div className="space-y-6">
        {[
          { label: 'Problem', content: project.problem, color: 'from-red-500 to-pink-500' },
          { label: 'Solution', content: project.solution, color: 'from-bronze-500 to-copper-500' },
          { label: 'Outcome', content: project.outcome, color: 'from-green-500 to-emerald-500' },
        ].map((item, itemIndex) => (
          <div key={itemIndex} className="group/item relative overflow-hidden p-4 vintage-card rounded-2xl interactive water-fill">
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-500 ease-out opacity-15`}></div>
            <div className="relative">
              <h4 className="text-sm font-bold text-wood-600 dark:text-wood-400 uppercase tracking-wide mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                {item.label}
              </h4>
              <p className="text-wood-700 dark:text-wood-300 group-hover/item:text-wood-800 dark:group-hover/item:text-wood-200 transition-colors duration-300">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Tech Stack */}
      <div>
        <h4 className="text-sm font-bold text-wood-600 dark:text-wood-400 uppercase tracking-wide mb-4">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="group relative overflow-hidden px-4 py-2 vintage-card text-wood-700 dark:text-wood-300 rounded-xl text-sm font-medium interactive"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bronze-500 to-copper-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
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
            className="group relative overflow-hidden px-8 py-4 wooden-button text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl interactive"
            target="_blank" rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-copper-500 to-bronze-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <div className="relative flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </div>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="group relative overflow-hidden px-8 py-4 vintage-card border-2 border-wood-300 dark:border-wood-600 text-wood-700 dark:text-wood-300 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 interactive"
            target="_blank" rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-wood-800 to-wood-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <div className="relative flex items-center group-hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </div>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden grid-overlay">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold vintage-heading mb-6 text-center">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-bronze-500 to-copper-500 mx-auto rounded-full mb-16"></div>
        
        {/* Major Projects Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold vintage-heading mb-4">
              Major Projects
            </h3>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-wood-700 dark:text-wood-200 max-w-2xl mx-auto">
              Featured projects showcasing comprehensive development skills and real-world impact
            </p>
          </div>
          
          <div className="space-y-32">
            {majorProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isMajor={true} />
            ))}
          </div>
        </div>
        
        {/* Minor Projects Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold vintage-heading mb-4">
              Minor Projects
            </h3>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-wood-700 dark:text-wood-200 max-w-2xl mx-auto">
              Smaller projects and tools demonstrating various technical skills and automation capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {minorProjects.map((project, index) => (
              <div key={index} className="vintage-card rounded-3xl p-8 card-tilt interactive">
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 vintage-card text-bronze-600 dark:text-bronze-400 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 vintage-card text-wood-600 dark:text-wood-400 rounded-full text-sm font-medium">
                      {project.duration}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold vintage-heading mb-3">
                    {project.title}
                  </h4>
                  <p className="text-wood-700 dark:text-wood-200 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-sm font-bold text-wood-600 dark:text-wood-400 uppercase tracking-wide mb-3">
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 vintage-card text-wood-700 dark:text-wood-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 px-6 py-3 wooden-button text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center interactive"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex-1 px-6 py-3 vintage-card border-2 border-wood-300 dark:border-wood-600 text-wood-700 dark:text-wood-300 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center interactive"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;