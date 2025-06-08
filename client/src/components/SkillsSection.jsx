import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  const skills = [
    {
      name: 'Node.js & Express',
      icon: 'fab fa-node-js',
      color: 'text-green-500',
      level: 90,
      description: 'Backend development with robust server-side solutions'
    },
    {
      name: 'React.js & Next.js',
      icon: 'fab fa-react',
      color: 'text-blue-400',
      level: 95,
      description: 'Modern frontend frameworks for dynamic applications'
    },
    {
      name: 'JavaScript & TypeScript',
      icon: 'fab fa-js-square',
      color: 'text-yellow-400',
      level: 92,
      description: 'Core programming languages for web development'
    },
    {
      name: 'Java Spring Boot',
      icon: 'fab fa-java',
      color: 'text-orange-500',
      level: 85,
      description: 'Enterprise-level backend development solutions'
    },
    {
      name: 'Tailwind CSS & SCSS',
      icon: 'fab fa-css3-alt',
      color: 'text-blue-500',
      level: 88,
      description: 'Modern styling frameworks and preprocessors'
    },
    {
      name: 'Telegram Bot & Auth',
      icon: 'fab fa-telegram',
      color: 'text-blue-400',
      level: 80,
      description: 'Bot development and authentication systems'
    }
  ];

  const technologies = [
    { icon: 'fab fa-html5', color: 'hover:text-orange-500' },
    { icon: 'fab fa-css3-alt', color: 'hover:text-blue-500' },
    { icon: 'fab fa-js-square', color: 'hover:text-yellow-400' },
    { icon: 'fab fa-react', color: 'hover:text-blue-400' },
    { icon: 'fab fa-node-js', color: 'hover:text-green-500' },
    { icon: 'fab fa-java', color: 'hover:text-orange-500' },
    { icon: 'fab fa-git-alt', color: 'hover:text-red-500' },
    { icon: 'fab fa-docker', color: 'hover:text-blue-400' }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            <span className="border-b-4 border-dark-red pb-2">{t('skills.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-dark-blue mx-auto"></div>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-portfolio-gray-900 p-6 rounded-xl border-2 border-portfolio-gray-800 hover:border-dark-red transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-3xl ${skill.color} mr-4`}></i>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-portfolio-gray-400 mb-4">{skill.description}</p>
              <div className="w-full bg-portfolio-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  className="bg-gradient-to-r from-dark-red to-red-400 h-2 rounded-full"
                />
              </div>
              <span className="text-sm text-portfolio-gray-400">
                {skill.level >= 90 ? t('skills.expertLevel') : t('skills.advancedLevel')}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-dark-blue">
            {t('skills.technologies')}
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {technologies.map((tech, index) => (
              <motion.i
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                className={`${tech.icon} text-4xl ${tech.color} transition-colors duration-300 cursor-pointer`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
