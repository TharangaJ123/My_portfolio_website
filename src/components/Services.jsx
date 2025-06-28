import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Cloud, 
  Search, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  Target
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: Code,
      description: 'Full-stack web applications with modern technologies and responsive design.',
      features: [
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      projects:6
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: [
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
      projects:10
    },
    {
      id: 3,
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Cross-platform mobile applications for iOS and Android platforms.',
      features: [
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-400',
      projects:3
    },
    {
      id: 4,
      title: 'Database Design',
      icon: Database,
      description: 'Robust database architecture and optimization for scalable applications.',
      features: [
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      iconColor: 'text-orange-400',
      projects:5
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      icon: Cloud,
      description: 'Cloud infrastructure setup and deployment for scalable applications.',
      features: [
      ],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400',
      projects:1
    }
  ];

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
    <section id="services" className="py-20 bg-gray-900">
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
            My <span className="text-blue-400">Services</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-400 mx-auto"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
          >
            Transforming ideas into reality with cutting-edge technology and creative solutions.
            Each service is tailored to meet your specific needs and deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`bg-gray-800 rounded-xl p-6 h-full border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer ${hoveredService === service.id ? 'shadow-2xl shadow-blue-500/20' : ''}`}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${service.bgColor}`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <motion.div
                    animate={{ rotate: hoveredService === service.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 group-hover:text-blue-400"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400 text-sm">{service.projects} projects</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </motion.div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-blue-400 text-xs font-medium">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Service Modal */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const service = services.find(s => s.id === activeService);
                  if (!service) return null;

                  return (
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${service.bgColor}`}>
                            <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveService(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-gray-700 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-400">{service.projects}</div>
                          <div className="text-gray-400 text-sm">Projects</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">What's Included</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center space-x-3 bg-gray-700 rounded-lg p-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                          Get Started
                        </motion.button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. 
            I'm here to help you bring your vision to life with cutting-edge technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
            onClick={scrollToContact}
          >
            <span>Let's Talk</span>
            <Zap className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 