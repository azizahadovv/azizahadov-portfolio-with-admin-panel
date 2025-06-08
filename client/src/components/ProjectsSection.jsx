import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      icon: 'fas fa-laptop-code',
      gradient: 'from-dark-blue to-dark-red',
      technologies: [
        { name: 'React.js', color: 'bg-dark-blue/30 text-blue-300' },
        { name: 'Node.js', color: 'bg-green-900/30 text-green-300' },
        { name: 'MongoDB', color: 'bg-gray-700/30 text-gray-300' }
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: t('projects.bot.title'),
      description: t('projects.bot.description'),
      icon: 'fas fa-robot',
      gradient: 'from-purple-600 to-blue-600',
      technologies: [
        { name: 'Telegram API', color: 'bg-blue-900/30 text-blue-300' },
        { name: 'Node.js', color: 'bg-green-900/30 text-green-300' },
        { name: 'AI/ML', color: 'bg-purple-900/30 text-purple-300' }
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: t('projects.dashboard.title'),
      description: t('projects.dashboard.description'),
      icon: 'fas fa-chart-line',
      gradient: 'from-green-600 to-teal-600',
      technologies: [
        { name: 'Next.js', color: 'bg-gray-900/30 text-gray-300' },
        { name: 'Spring Boot', color: 'bg-orange-900/30 text-orange-300' },
        { name: 'PostgreSQL', color: 'bg-indigo-900/30 text-indigo-300' }
      ],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-portfolio-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            <span className="border-b-4 border-dark-red pb-2">{t('projects.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-dark-blue mx-auto"></div>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-portfolio-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-dark-red/20 transition-all duration-500"
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="w-full h-full bg-gradient-to-br from-portfolio-gray-700 to-portfolio-gray-900 flex items-center justify-center">
                  <motion.i
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`${project.icon} text-4xl text-portfolio-gray-400`}
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-dark-red hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      {t('projects.liveDemo')}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-dark-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <i className="fab fa-github mr-2"></i>
                      {t('projects.viewCode')}
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-portfolio-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${tech.color} px-3 py-1 rounded-full text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            {t('projects.viewAll')} <i className="fas fa-arrow-right ml-2"></i>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
