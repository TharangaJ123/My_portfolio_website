import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'J.K.C Tharanga Jayawardhana' },
    { icon: GraduationCap, label: 'Degree', value: 'BSc Software Engineering' },
    { icon: MapPin, label: 'Location', value: 'Malabe,Sri Lanka' },
    { icon: Calendar, label: 'Graduation', value: 'Expected 2027' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
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
            About <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-blue-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-xl opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                  {/* Replace the src with your actual image path */}
                  <img
                    src="/mine.jpg" // Update this path to your image
                    alt="John Doe - Software Engineering Student"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback initials */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-4xl sm:text-5xl lg:text-6xl text-blue-400 font-bold">JD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Personal Information</h3>
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <info.icon className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{info.label}:</span>
                  <span className="text-white text-sm sm:text-base">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              A passionate Software Engineering student with a love for innovation
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                I'm currently pursuing my Bachelor's degree in Software Engineering, where I've developed 
                a strong foundation in programming fundamentals, data structures, algorithms, and software 
                development methodologies.
              </p>
              
              <p>
                My academic journey has been complemented by hands-on projects and collaborative work, 
                allowing me to apply theoretical knowledge to real-world problems. I'm particularly 
                interested in web development, artificial intelligence, and creating user-centric solutions.
              </p>
              
              <p>
                When I'm not coding or studying, you can find me exploring new technologies, contributing 
                to open-source projects, or participating in hackathons. I believe in continuous learning 
                and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-400">3.4</div>
                <div className="text-xs sm:text-sm text-gray-400">GPA</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-400">26+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 