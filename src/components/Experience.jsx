import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Software Development Intern',
      company: 'Sri Lanka Telecome - HQ',
      location: 'Lotus Road,Colombo 01',
      period: 'Jan 2025 - Presents',
      description: [
        'Developed and maintained web applications using React and Java SpringBoot',
        'Collaborated with senior developers on full-stack projects with frontend/backend and Azure Authentication',
        'Implemented RESTful APIs and database integrations',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['React', 'Node.js', 'MySql', 'BitBucket', 'Agile','Azure Active Directory'],
      icon: Briefcase
    },
    {
      id: 3,
      type: 'work',
      title: 'Freelance Backend Developer',
      company: 'Tekly Solutions',
      location: 'Remote',
      period: 'Jan 2023 - Present',
      description: [
        'Built responsive websites and web applications for clients',
        'Implemented modern UI/UX designs using React and Tailwind CSS',
        'Optimized website performance and SEO',
        'Managed client relationships and project timelines'
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'WordPress', 'SEO'],
      icon: Briefcase
    },
    {
      id: 2,
      type: 'education',
      title: 'BSc (Hons) in Information Technology Specialising in Software Engineering',
      company: 'Sri Lanka Institute Of Information Technology - SLIIT',
      location: 'Malabe , Sri Lanka',
      period: 'May 2023 - Expected 2027',
      description: [
        'Maintaining a 3.4 GPA with focus on software development',
        'Completed coursework in Data Structures, Algorithms, and Database Systems',
        'Active member of the Computer Science Club',
        'Participated in hackathons and coding competitions'
      ],
      technologies: ['Java', 'Python', 'C++', 'SQL', 'Data Structures','AI/ML','React Native','Flutter','Angular'],
      icon: GraduationCap
    }
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
    <section id="experience" className="py-20 bg-gray-800">
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
            My <span className="text-blue-400">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-800 bg-blue-400 z-10 ${
                  experience.type === 'work' ? 'bg-blue-400' : 'bg-green-400'
                }`}></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="bg-gray-900 rounded-lg p-6 hover:bg-gray-850 transition-colors duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        experience.type === 'work' ? 'bg-blue-600' : 'bg-green-600'
                      }`}>
                        <experience.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center space-x-8"
        >
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-400"></div>
            <span className="text-gray-300">Work Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-green-400"></div>
            <span className="text-gray-300">Education</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 