import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-gray-900 py-8 border-t border-portfolio-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-portfolio-gray-400">
              © 2024{' '}
              <span className="text-dark-red font-semibold">
                {t('hero.name')}
              </span>
              . {t('footer.rights')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <a
              href="/guide"
              className="text-portfolio-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              title="User Guide"
            >
              <i className="fas fa-book text-lg"></i>
              <span className="hidden sm:inline text-sm">Guide</span>
            </a>
            
            <a
              href="/admin"
              className="text-portfolio-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              title="Admin Panel"
            >
              <i className="fas fa-shield-alt text-lg"></i>
              <span className="hidden sm:inline text-sm">Admin</span>
            </a>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-portfolio-gray-400 hover:text-white transition-colors duration-300"
              title="Back to top"
            >
              <i className="fas fa-arrow-up text-lg"></i>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
