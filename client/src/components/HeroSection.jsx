import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import profileImage from '@assets/b7ab5e53-5adc-4dd1-911f-a8b54d0c0353_1749357787155.jpg';

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

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-dark-blue shadow-2xl"
              >
                <img 
                  src={profileImage}
                  alt="Azizbek Ahadov"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-blue/20 to-dark-red/20"></div>
              </motion.div>
              
              {/* Floating elements around image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-dark-red rounded-full flex items-center justify-center shadow-lg"
              >
                <i className="fas fa-code text-white text-lg"></i>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-dark-blue rounded-full flex items-center justify-center shadow-lg"
              >
                <i className="fas fa-laptop text-white"></i>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-dark-blue to-dark-red bg-clip-text text-transparent"
            >
              {t('hero.name')}
            </motion.h1>
            
            <div className="text-xl md:text-3xl mb-8 h-12 relative text-dark-blue font-semibold">
              <span className="inline-block border-r-2 border-dark-red">
                {displayText}
              </span>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg md:text-xl text-portfolio-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-dark-red hover:bg-red-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg"
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
              transition={{ duration: 1, delay: 1.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`text-2xl transition-colors duration-300 ${link.color} p-3 rounded-full bg-portfolio-gray-900 hover:bg-portfolio-gray-800`}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
