import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Mail, Code, Database, Smartphone, Palette, Cloud, Zap, ArrowRight, Sparkles, Star, Target, TrendingUp, Award, Trophy, CheckCircle, Rocket, Globe, Shield, Brain, MessageCircle, Users, BookOpen } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    'Database Designer',
    'UI/UX Designer',
    'Mobile App Developer',
    'Full-Stack Developer'
  ];

  const roleIcons = [
    <Database key="database" className="w-6 h-6" />,
    <Palette key="palette" className="w-6 h-6" />,
    <Smartphone key="smartphone" className="w-6 h-6" />,
    <Code key="fullstack" className="w-6 h-6" />
  ];

  // Soft skills
  const softSkills = [
    { icon: Target, label: 'Proactive', color: 'text-blue-400' },
    { icon: Brain, label: 'Analytical Thinking', color: 'text-purple-400' },
    { icon: MessageCircle, label: 'Communication', color: 'text-green-400' },
    { icon: Users, label: 'Team Collaboration', color: 'text-yellow-400' },
    { icon: BookOpen, label: 'Continuous Learning', color: 'text-pink-400' },
    { icon: Zap, label: 'Eager to Learn New Technologies', color: 'text-cyan-400' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setSlideDirection(prev => prev * -1);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Add your CV download logic here
    const link = document.createElement('a');
    link.href = '/Tharanga Jayawardhana.pdf'; // Updated to correct path
    link.download = 'Tharanga Jayawardhana.pdf';
    link.click();
  };

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-blue-900/20 to-black relative overflow-hidden">
      {/* Network of Points and Edges Animated Background */}
      <NetworkBackground mousePosition={mousePosition} />
      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center ">
        <div className="w-full max-w-5xl mx-auto p-6 sm:p-10 md:p-14 flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-sm mb-2 mt-10 sm:mt-0"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{getGreeting()}, I'm</span>
            </motion.div>
            {/* Name with shimmer */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-2"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-[shimmer_2.5s_linear_infinite] [background-size:200%_auto]">
                Tharanga
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-[shimmer_2.5s_linear_infinite] [background-size:200%_auto]">
                Jayawardhana
              </span>
            </motion.h1>
            {/* Subtitle/Tagline */}
            <div className="text-base sm:text-lg text-blue-200 font-medium mb-4">
              Software Engineering Intern | Building Modern Solutions
            </div>
            {/* Dynamic Title with enhanced animation */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRoleIndex}
                  initial={{ 
                    x: slideDirection * 100,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: 0,
                    opacity: 1 
                  }}
                  exit={{ 
                    x: slideDirection * -100,
                    opacity: 0 
                  }}
                  transition={{ 
                    duration: 0.7,
                    ease: "anticipate"
                  }}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-green-400"
                  >
                    {roleIcons[currentRoleIndex]}
                  </motion.div>
                  <span className="bg-gradient-to-r from-slate-50 to-green-400 bg-clip-text text-transparent font-semibold">
                    {roles[currentRoleIndex]}
                  </span>
                  {isTyping && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="ml-1 text-blue-400"
                    >
                      |
                    </motion.span>
                  )}
                </motion.h2>
              </AnimatePresence>
            </div>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg mb-6"
            >
              Passionate about creating innovative software solutions and learning new technologies. Currently pursuing my degree in Software Engineering with expertise in multiple domains.
            </motion.p>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 max-w-sm mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-2 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-lg sm:text-xl font-bold text-blue-400 mb-1">26+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-2 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-lg sm:text-xl font-bold text-green-400 mb-1">5+</div>
                <div className="text-gray-400 text-xs">Technologies</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-2 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-lg sm:text-xl font-bold text-purple-400 mb-1">1+</div>
                <div className="text-gray-400 text-xs">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
          {/* Right Side - Buttons, Soft Skills, and Tech Cluster */}
          <div className="flex-1 flex flex-col items-center justify-center h-full space-y-6 lg:items-end">
            {/* CTA Buttons */}
            <div className="space-y-4 sm:space-y-6 w-full max-w-sm sm:max-w-md">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.08, boxShadow: '0 0 16px #38bdf8' }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group shadow-lg hover:shadow-xl hover:shadow-blue-500/25 border-2 border-transparent hover:border-blue-400/60 text-sm sm:text-base"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                Get In Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                onClick={downloadCV}
                whileHover={{ scale: 1.08, boxShadow: '0 0 16px #38bdf8' }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gray-800/50 border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group shadow-lg hover:shadow-xl hover:shadow-blue-400/25 backdrop-blur-sm text-sm sm:text-base"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download CV
                <motion.div
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="group-hover:translate-y-1 transition-transform"
                >
                  ↓
                </motion.div>
              </motion.button>
            </div>
            {/* Soft Skills - Enhanced UI */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 }
                }
              }}
              className="w-full max-w-sm sm:max-w-md"
            >
              <h4 className="text-white font-semibold text-center lg:text-right text-sm sm:text-base mb-2 sm:mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-end">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.08, boxShadow: '0 0 8px #38bdf8' }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/50 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <div className={`rounded-full ${skill.color} bg-gray-700/50 p-1.5`}>
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <span className="text-white text-xs font-medium whitespace-nowrap">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Floating Tech Icon Cluster */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end mt-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="p-2 bg-gray-900/60 rounded-full border border-blue-400/30 shadow-md"
              >
                <Code className="w-6 h-6 text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="p-2 bg-gray-900/60 rounded-full border border-cyan-400/30 shadow-md"
              >
                <Database className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="p-2 bg-gray-900/60 rounded-full border border-purple-400/30 shadow-md"
              >
                <Smartphone className="w-6 h-6 text-purple-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="p-2 bg-gray-900/60 rounded-full border border-green-400/30 shadow-md"
              >
                <Palette className="w-6 h-6 text-green-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - always visible and clickable */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
        style={{ pointerEvents: 'auto' }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors border border-gray-700/50"
        >
          <ChevronDown size={24} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 