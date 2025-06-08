import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const HeroSection = () => {
  const { t } = useTranslation();
  
  const titles = t('hero.titles', { returnObjects: true });
  const displayText = useTypingAnimation(titles, 150);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      href: 'https://github.com/azizahadovv',
      icon: 'fab fa-github',
      color: 'hover:text-dark-blue'
    },
    {
      href: 'https://instagram.com/ahadov.vip',
      icon: 'fab fa-instagram',
      color: 'hover:text-pink-500'
    },
    {
      href: 'mailto:azizahadov991@gmail.com',
      icon: 'fas fa-envelope',
      color: 'hover:text-dark-red'
    },
    {
      href: 'https://wa.me/998978611199',
      icon: 'fab fa-whatsapp',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-dark-blue/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-dark-red/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dark-red/30 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-dark-blue to-dark-red bg-clip-text text-transparent"
          >
            {t('hero.name')}
          </motion.h1>
          
          <div className="text-2xl md:text-4xl mb-8 h-16 relative">
            <span className="inline-block border-r-2 border-dark-red">
              {displayText}
            </span>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-portfolio-gray-300 mb-12 max-w-4xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-dark-red hover:bg-red-600 text-white rounded-lg font-semibold transition-all duration-300"
            >
              {t('hero.viewWork')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-dark-blue hover:bg-dark-blue text-white rounded-lg font-semibold transition-all duration-300"
            >
              {t('hero.getInTouch')}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`text-3xl transition-colors duration-300 ${link.color}`}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
