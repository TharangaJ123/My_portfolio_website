import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, Database } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'web',
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
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
      category: 'data',
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Node.js'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false
    },
    {
      id: 6,
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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-blue-400">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-400 mx-auto"
          ></motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      <Globe className="w-4 h-4" />
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