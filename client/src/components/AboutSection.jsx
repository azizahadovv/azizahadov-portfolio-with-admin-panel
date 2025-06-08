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
          >
            {/* Professional photo placeholder */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-dark-blue to-dark-red rounded-full p-1"
              >
                <div className="w-full h-full bg-portfolio-gray-800 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-6xl text-portfolio-gray-400"></i>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-dark-red rounded-full flex items-center justify-center"
              >
                <i className="fas fa-code text-2xl text-white"></i>
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
