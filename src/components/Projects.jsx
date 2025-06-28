import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, Database } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sevana Care - Elderly Care App',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/elders.jpeg',
      technologies: ['React Native'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Outsource Security Officers Attendance Management System - Sri Lanka Telecome HQ',
      description: 'Real-time chat application with AI-powered responses using OpenAI API. Built with React, Socket.io, and Express.js.',
      image: '/security.png',
      technologies: ['React', 'Java Springboot', 'Azure','Nodemailer','Framer Motion','JWT'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false
    },
    {
      id: 3,
      title: 'BluePulse - Accademic',
      description: 'A comprehensive task management system with drag-and-drop functionality, team collaboration, and real-time updates.',
      image: '/bluepulse.png',
      technologies: ['React', 'Node.js', 'Next.js', 'Express', 'Framer Motion','MongoDB','JWT','Nodemailer'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'WeatherSphere',
      description: 'RESTful API for weather forecasting with caching, rate limiting, and multiple data sources integration.',
      image: '/weather.png',
      technologies: ['Node.js', 'Rest api', 'React' , 'Tailwind CSS'],
      category: 'api',
      github: 'https://github.com/TharangaJ123/WeatherSphere',
      live: 'https://weatherspherebytharanga.vercel.app/',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'data', label: 'Data Science' },
    { id: 'api', label: 'APIs' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            My <span className="text-blue-400">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-blue-400 mx-auto"
          ></motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 sm:space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 p-1.5 sm:p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 p-1.5 sm:p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-blue-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-blue-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 sm:space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 sm:space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                    >
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 