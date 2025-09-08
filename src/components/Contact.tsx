import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden grid-overlay">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold vintage-heading mb-4">
            Let's Connect
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-wood-700 dark:text-wood-200 mt-4 max-w-2xl mx-auto">
            Ready to start a conversation? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold vintage-heading mb-6">
                Get in Touch
              </h3>
              <p className="text-wood-700 dark:text-wood-200 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 vintage-card p-4 rounded-lg interactive hang-card">
                <div className="flex-shrink-0 w-12 h-12 vintage-card rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-bronze-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-wood-900 dark:text-wood-100">Email</h4>
                  <a
                    href="mailto:vansh251205@gmail.com"
                    className="text-wood-700 dark:text-wood-300 hover:text-bronze-500 transition-colors duration-200"
                  >
                    vansh251205@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 vintage-card p-4 rounded-lg interactive hang-card">
                <div className="flex-shrink-0 w-12 h-12 vintage-card rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-bronze-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-wood-900 dark:text-wood-100">GitHub</h4>
                  <a
                    href="https://github.com/vanshagrwl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wood-700 dark:text-wood-300 hover:text-bronze-500 transition-colors duration-200 flex items-center"
                  >
                    vanshagrwl
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 vintage-card p-4 rounded-lg interactive hang-card">
                <div className="flex-shrink-0 w-12 h-12 vintage-card rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-bronze-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-wood-900 dark:text-wood-100">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/vansh-agarwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wood-700 dark:text-wood-300 hover:text-bronze-500 transition-colors duration-200 flex items-center"
                  >
                    vansh agarwal
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 vintage-card p-4 rounded-lg interactive">
                <div className="flex-shrink-0 w-12 h-12 vintage-card rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-bronze-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-wood-900 dark:text-wood-100">Location</h4>
                  <p className="text-wood-700 dark:text-wood-300">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="vintage-card rounded-2xl p-8 hang-card">
            <h3 className="text-2xl font-bold vintage-heading mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-wood-700 dark:text-wood-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 vintage-card border border-wood-300 dark:border-wood-600 rounded-lg focus:ring-2 focus:ring-bronze-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-wood-700 dark:text-wood-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 vintage-card border border-wood-300 dark:border-wood-600 rounded-lg focus:ring-2 focus:ring-bronze-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-wood-700 dark:text-wood-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 vintage-card border border-wood-300 dark:border-wood-600 rounded-lg focus:ring-2 focus:ring-bronze-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 wooden-button text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 interactive"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;