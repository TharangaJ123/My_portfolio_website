import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Cloud, Zap, Target, TrendingUp, Award } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [animateProgress, setAnimateProgress] = useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'TypeScript', level: 85 },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Palette,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 70 },
        { name: 'Android', level: 65 },
        { name: 'iOS', level: 60 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 60 },
        { name: 'CI/CD', level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Server,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Jira', level: 75 },
      ]
    }
  ];

  // Additional skills with icons
  const additionalSkills = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C#', icon: '⚙️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'Next.js', icon: '⚡' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Git', icon: '📝' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔵' },
    { name: 'Cypress', icon: '🌲' },
    { name: 'GraphQL', icon: '🔷' },
    { name: 'Redux', icon: '🔄' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Webpack', icon: '📦' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Prisma', icon: '🟦' },
    { name: 'FastAPI', icon: '🚀' },
    { name: 'Micro-services', icon: '🔗' },
    { name: 'Apollo Client', icon: '🟣' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
    <section id="skills" className="py-12 sm:py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Skills & <span className="text-blue-400">Technologies</span>
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-12 sm:w-16 h-0.5 bg-blue-400 mx-auto mb-3 sm:mb-4"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm px-4"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Main Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group"
              onMouseEnter={() => setActiveCategory(category.title)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 h-full border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="p-1.5 sm:p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <category.icon className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-1.5 sm:space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-xs sm:text-sm">{skill.name}</span>
                        <span className="text-blue-400 text-xs font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1 sm:h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: animateProgress ? `${skill.level}%` : 0 }}
                          transition={{ 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                            duration: 1.5,
                            ease: "easeOut"
                          }}
                          className="h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-700"
        >
          <div className="flex items-center justify-center space-x-2 mb-6 sm:mb-8">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Additional Technologies
            </h3>
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2 sm:gap-4 w-full">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: 0.1 + (index * 0.03),
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }}
                className="
                  bg-white/5 dark:bg-gray-800/80 
                  rounded-lg p-2 sm:p-3 
                  text-center 
                  border border-gray-700/50 dark:border-gray-600/30
                  hover:border-blue-400/40
                  transition-all 
                  cursor-pointer
                  flex flex-col items-center
                  backdrop-blur-sm
                "
              >
                <div className="
                  text-lg sm:text-2xl mb-1 sm:mb-2 
                  text-gray-200 dark:text-gray-100
                  transition-transform
                  hover:scale-110
                ">
                  {skill.icon}
                </div>
                <span className="
                  text-gray-300 dark:text-gray-300 
                  text-xs font-medium 
                  transition-colors
                  hover:text-blue-400
                  leading-tight
                ">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-blue-400">6</div>
            <div className="text-gray-300 text-xs sm:text-sm">Skill Categories</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-blue-400">30+</div>
            <div className="text-gray-300 text-xs sm:text-sm">Technologies</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-blue-400">90%</div>
            <div className="text-gray-300 text-xs sm:text-sm">Average Proficiency</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 