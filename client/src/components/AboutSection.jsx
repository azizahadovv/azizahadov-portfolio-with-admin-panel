import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    {
      label: t('about.experience'),
      value: t('about.experienceValue'),
      icon: 'fas fa-calendar-alt'
    },
    {
      label: t('about.projects'),
      value: t('about.projectsValue'),
      icon: 'fas fa-code'
    },
    {
      label: t('about.website'),
      value: 'azizahadov.uz',
      icon: 'fas fa-globe'
    },
    {
      label: t('about.location'),
      value: t('about.locationValue'),
      icon: 'fas fa-map-marker-alt'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-black to-portfolio-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            <span className="border-b-4 border-dark-red pb-2">{t('about.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-dark-blue mx-auto"></div>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Skills grid background */}
            <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-10">
              {Array.from({length: 9}).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-16 h-16 bg-dark-blue rounded-lg"
                />
              ))}
            </div>

            {/* Experience timeline */}
            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-dark-red rounded-full flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">2021 - Present</h4>
                  <p className="text-portfolio-gray-300">Full Stack Developer</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4 ml-8"
              >
                <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">50+ Projects</h4>
                  <p className="text-portfolio-gray-300">Completed Successfully</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-award text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Expert Level</h4>
                  <p className="text-portfolio-gray-300">Modern Technologies</p>
                </div>
              </motion.div>

              {/* Animated coding window */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-portfolio-gray-900 rounded-lg p-4 border border-portfolio-gray-700 mt-8"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm font-mono text-green-400">
                  <span className="text-blue-400">const</span> developer = {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-300">name:</span> <span className="text-green-300">'Azizbek Ahadov'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-300">skills:</span> [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'Java'</span>],
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-300">passion:</span> <span className="text-green-300">'Building amazing apps'</span>
                  <br />
                  {'}'};
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-dark-blue">
              {t('about.heading')}
            </h3>
            <p className="text-lg text-portfolio-gray-300 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-portfolio-gray-300 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-blue/20 p-4 rounded-lg border-l-4 border-dark-red"
                >
                  <div className="flex items-center mb-2">
                    <i className={`${stat.icon} text-dark-red mr-2`}></i>
                    <h4 className="font-semibold text-white">{stat.label}</h4>
                  </div>
                  <p className="text-portfolio-gray-300">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
