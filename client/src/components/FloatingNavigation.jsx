import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: '🏠' },
    { id: 'about', icon: '👨‍💻' },
    { id: 'skills', icon: '⚡' },
    { id: 'projects', icon: '💼' },
    { id: 'contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 space-y-4"
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => scrollToSection(item.id)}
          className={`block w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-150 relative group ${
            activeSection === item.id 
              ? 'bg-dark-red scale-125' 
              : 'bg-gray-600 hover:bg-dark-red'
          }`}
          title={item.id}
        >
          <span className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-dark-blue text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {item.icon} {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
          </span>
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default FloatingNavigation;
