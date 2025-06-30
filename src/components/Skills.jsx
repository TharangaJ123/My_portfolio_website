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
        { name: 'BitBucket', level: 80 },
        { name: 'Linux', level: 80 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ];

  // Additional skills with images
  const additionalSkills = [
    { name: 'JavaScript', img: '/languages_img/js.svg' },
    { name: 'Python', img: '/languages_img/python.svg' },
    { name: 'Java', img: '/languages_img/java.svg' },
    { name: 'Spring Boot', img: '/languages_img/springboot.svg' },
    { name: 'C#', img: '/languages_img/cshrp.svg' },
    { name: '.NET', img: '/languages_img/aspnet.svg' },
    { name: 'TypeScript', img: '/languages_img/ts.svg' },
    { name: 'React', img: '/languages_img/react.svg' },
    { name: 'Vue.js', img: '/languages_img/vue.svg' },
    { name: 'Angular', img: '/languages_img/angular.svg' },
    { name: 'MySQL', img: '/languages_img/mysql.svg' },
    { name: 'PostgreSQL', img: '/languages_img/postgresql.svg' },
    { name: 'Azure', img: '/languages_img/azure.svg' },
    { name: 'Kotlin', img: '/languages_img/kotlin.svg' },
    { name: 'R', img: '/languages_img/R.svg' },
    { name: 'Figma', img: '/languages_img/figma.svg' },
    { name: 'Adobe XD', img: '/languages_img/adobexd.svg' },
    { name: 'Adobe AI', img: '/languages_img/adobeai.svg' }
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
    <section id="skills" className="py-12 sm:py-16 bg-gray-900 relative overflow-hidden">
      {/* Blurred gradient background for depth */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-400/20 via-cyan-400/10 to-purple-400/10 rounded-full blur-2xl z-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
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
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-7 h-full border border-blue-400/10 shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:border-blue-400/40 transition-all duration-300 relative overflow-hidden">
                {/* Animated glow on hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-purple-400/10 blur-lg" />
                {/* Category Header */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <motion.div
                    className="p-2 sm:p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center"
                    animate={activeCategory === category.title ? { rotate: [0, 10, -10, 0] } : { rotate: 0 }}
                    transition={{ duration: 0.7, repeat: activeCategory === category.title ? Infinity : 0, repeatType: 'loop' }}
                  >
                    <category.icon className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
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
                      <div className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: animateProgress ? `${skill.level}%` : 0 }}
                          transition={{ 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                            duration: 1.5,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 shadow-md"
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
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-7 h-7 sm:w-9 sm:h-9 object-contain mb-1 sm:mb-2"
                />
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