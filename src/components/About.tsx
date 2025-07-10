import React from 'react';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm <span className="font-semibold text-blue-500">Vansh Agarwal</span>, a passionate Full Stack Developer 
                pursuing BCA at Vivekananda Global University. I recently completed my internship at Linux World, 
                where I worked on real-world applications and gained hands-on experience with modern technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My mission is to build powerful digital solutions that simplify human experience. I love creating 
                innovative web applications that combine beautiful design with robust functionality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                <Code className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Quick Learner</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Academic Background</p>
                </div>
              </div>
              <div className="ml-16">
                <h4 className="font-medium text-gray-900 dark:text-white">Bachelor of Computer Applications</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Vivekananda Global University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2022 - 2025</p>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Professional Journey</p>
                </div>
              </div>
              <div className="ml-16">
                <h4 className="font-medium text-gray-900 dark:text-white">Software Development Intern</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Linux World</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Recent Graduate</p>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Achievements</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Recognition & Awards</p>
                </div>
              </div>
              <div className="ml-16">
                <h4 className="font-medium text-gray-900 dark:text-white">Full Stack Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Specialized in modern web technologies</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Continuous Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;