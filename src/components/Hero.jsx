import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Mail, Code, Database, Smartphone, Palette, Cloud, Zap, ArrowRight, Sparkles, Star, Target, TrendingUp, Award, Trophy, CheckCircle, Rocket, Globe, Shield } from 'lucide-react';

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

  // Achievement badges
  const achievements = [
    { icon: Award, title: 'Top Performer', subtitle: 'Academic Excellence', color: 'text-yellow-400' },
    { icon: Trophy, title: 'Pro Active', subtitle: 'Innovation Award', color: 'text-purple-400' },
    { icon: Rocket, title: 'Fast Learner', subtitle: 'Quick Adaptation', color: 'text-green-400' }
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-blue-900/20 to-black relative overflow-hidden">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-10 text-blue-400/20"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-cyan-400/20"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Database size={35} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-purple-400/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Smartphone size={30} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-green-400/20"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Palette size={35} />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full pt-16 lg:pt-0">
          
          {/* Left Side - Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Hello, I'm</span>
            </motion.div>

            {/* Name with enhanced gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Tharanga
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jayawardhana
              </span>
            </motion.h1>

            {/* Dynamic Title with enhanced animation */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start overflow-hidden">
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
                    duration: 0.6,
                    ease: "easeInOut"
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

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Passionate about creating innovative software solutions and learning new technologies. 
              Currently pursuing my degree in Software Engineering with expertise in multiple domains.
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 max-w-sm mx-auto lg:mx-0"
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
                <div className="text-lg sm:text-xl font-bold text-purple-400 mb-1">6+</div>
                <div className="text-gray-400 text-xs">Months Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Buttons and Visual Elements */}
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 lg:items-end lg:justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Main CTA Buttons */}
            <div className="space-y-4 sm:space-y-6 w-full max-w-sm sm:max-w-md">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group shadow-lg hover:shadow-xl hover:shadow-blue-500/25 border border-blue-500/20 text-sm sm:text-base"
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
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
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

            {/* Visual Elements - Hidden on mobile, shown on larger screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="hidden sm:flex items-center space-x-3 sm:space-x-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-2 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              </motion.div>
            </motion.div>

            {/* Achievement Badges - Responsive layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="w-full max-w-sm sm:max-w-md"
            >
              <h4 className="text-white font-semibold text-center lg:text-right text-sm sm:text-base mb-2 sm:mb-3">Achievements</h4>
              <div className="space-y-1.5 sm:space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: -5 }}
                    className="flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className={`p-1 sm:p-1.5 rounded-lg bg-gray-700/50 ${achievement.color}`}>
                      <achievement.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-medium">{achievement.title}</div>
                      <div className="text-gray-400 text-xs">{achievement.subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Elements - Hidden on mobile */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer group"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-700/50 transition-colors border border-gray-700/50"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mouse trail effect */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 opacity-50"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </section>
  );
};

export default Hero; 