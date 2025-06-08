import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const UserGuide = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Overview',
      icon: 'fas fa-info-circle',
      content: `
        Welcome to Azizbek Ahadov's professional portfolio website. This multilingual platform showcases my expertise as a Full Stack Developer specializing in modern web technologies.

        ## Key Features:
        - **Multilingual Support**: Available in 6 languages (English, Uzbek, Russian, Arabic, Spanish, French)
        - **Responsive Design**: Optimized for all devices and screen sizes
        - **Interactive Animations**: Smooth transitions and engaging user experience
        - **Contact Integration**: Direct communication through multiple channels
        - **Admin Dashboard**: Comprehensive contact management system
      `
    },
    navigation: {
      title: 'Navigation Guide',
      icon: 'fas fa-compass',
      content: `
        ## How to Navigate the Website:

        ### Main Sections:
        1. **Home**: Introduction and hero section with animated typing effect
        2. **About**: Personal information, experience timeline, and coding showcase
        3. **Skills**: Technical expertise with interactive progress bars
        4. **Projects**: Featured work with detailed descriptions and live demos
        5. **Contact**: Multiple ways to get in touch

        ### Interactive Elements:
        - **Floating Navigation**: Dots on the left side for quick section jumping
        - **Language Switcher**: Top-right corner with flag icons
        - **Smooth Scrolling**: Click any navigation element for smooth transitions
        - **Hover Effects**: Interactive elements respond to mouse movements

        ### Mobile Experience:
        - Touch-friendly interface
        - Optimized layouts for smaller screens
        - Swipe gestures supported
      `
    },
    languages: {
      title: 'Language Support',
      icon: 'fas fa-globe',
      content: `
        ## Multilingual Experience:

        ### Supported Languages:
        - 🇺🇸 **English**: Primary language with full content
        - 🇺🇿 **O'zbek**: Complete Uzbek translation
        - 🇷🇺 **Русский**: Full Russian language support
        - 🇸🇦 **العربية**: Arabic with RTL (right-to-left) text support
        - 🇪🇸 **Español**: Comprehensive Spanish translation
        - 🇫🇷 **Français**: Complete French language version

        ### How to Switch Languages:
        1. Click the language switcher in the top-right corner
        2. Select your preferred language from the dropdown
        3. The entire website content will update instantly
        4. Your language preference is remembered for future visits

        ### Language Features:
        - **Real-time Translation**: Instant content switching
        - **Cultural Adaptation**: Content adapted for different regions
        - **RTL Support**: Proper Arabic text direction
        - **Typography**: Optimized fonts for each language
      `
    },
    contact: {
      title: 'Contact Methods',
      icon: 'fas fa-address-book',
      content: `
        ## Get in Touch:

        ### Direct Contact Information:
        - **Email**: azizahadov991@gmail.com
        - **WhatsApp**: +998 97 861 11 99
        - **Location**: Uzbekistan

        ### Social Media & Professional Profiles:
        - **GitHub**: github.com/azizahadovv
        - **Instagram**: @ahadov.vip
        - **Website**: azizahadov.uz

        ### Contact Form Features:
        - **Real-time Validation**: Instant feedback on form fields
        - **Multi-language Support**: Form available in all supported languages
        - **Email Integration**: Messages sent directly to professional email
        - **Response Tracking**: Admin panel for message management

        ### Quick Actions:
        - **Copy Email**: One-click email copying to clipboard
        - **WhatsApp Chat**: Direct link to start WhatsApp conversation
        - **Social Links**: Easy access to all professional profiles
      `
    },
    technical: {
      title: 'Technical Information',
      icon: 'fas fa-code',
      content: `
        ## Technical Stack:

        ### Frontend Technologies:
        - **React.js**: Modern JavaScript library for user interfaces
        - **Framer Motion**: Advanced animations and transitions
        - **Tailwind CSS**: Utility-first CSS framework
        - **i18next**: Internationalization framework
        - **Wouter**: Lightweight routing solution

        ### Backend Technologies:
        - **Node.js**: JavaScript runtime environment
        - **Express.js**: Web application framework
        - **TypeScript**: Type-safe JavaScript development
        - **Zod**: Runtime type validation

        ### Development Features:
        - **Hot Module Replacement**: Instant development updates
        - **Responsive Design**: Mobile-first approach
        - **SEO Optimized**: Search engine friendly structure
        - **Performance Optimized**: Fast loading times
        - **Cross-browser Compatible**: Works on all modern browsers

        ### API Endpoints:
        - **POST /api/contact**: Submit contact form
        - **GET /api/contacts**: Retrieve messages (Admin only)
      `
    },
    admin: {
      title: 'Admin Panel',
      icon: 'fas fa-shield-alt',
      content: `
        ## Admin Dashboard Access:

        ### Login Information:
        - **URL**: /admin
        - **Username**: admin
        - **Password**: admin123
        - **Security**: Session-based authentication

        ### Dashboard Features:
        - **Contact Management**: View and respond to all messages
        - **Real-time Updates**: Auto-refresh every 30 seconds
        - **Message Details**: Full contact information and timestamps
        - **Email Integration**: Direct reply functionality
        - **API Documentation**: Complete API reference

        ### Contact Message Details:
        - Sender name and email
        - Message subject and content
        - Submission timestamp
        - Direct reply options

        ### API Documentation:
        - Interactive endpoint explorer
        - Request/response examples
        - cURL and JavaScript samples
        - Real-time testing capabilities

        ### Security Features:
        - Secure login system
        - Session management
        - Admin-only access control
        - Data protection measures
      `
    },
    troubleshooting: {
      title: 'Troubleshooting',
      icon: 'fas fa-tools',
      content: `
        ## Common Issues & Solutions:

        ### Contact Form Issues:
        **Problem**: Form submission fails
        **Solution**: 
        - Check internet connection
        - Ensure all required fields are filled
        - Verify email format is correct
        - Try refreshing the page

        ### Language Switching Issues:
        **Problem**: Language doesn't change
        **Solution**:
        - Clear browser cache
        - Refresh the page
        - Check if JavaScript is enabled
        - Try a different browser

        ### Performance Issues:
        **Problem**: Slow loading times
        **Solution**:
        - Check internet speed
        - Disable browser extensions
        - Clear browser cache and cookies
        - Try incognito/private browsing mode

        ### Mobile Display Issues:
        **Problem**: Layout appears broken on mobile
        **Solution**:
        - Rotate device to refresh layout
        - Close other browser tabs
        - Update browser to latest version
        - Check if JavaScript is enabled

        ### Animation Issues:
        **Problem**: Animations not working
        **Solution**:
        - Enable hardware acceleration in browser
        - Update browser to latest version
        - Check device performance settings
        - Disable "reduce motion" accessibility setting

        ### Browser Compatibility:
        **Supported Browsers**:
        - Chrome 90+
        - Firefox 88+
        - Safari 14+
        - Edge 90+
      `
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-dark-blue to-dark-red bg-clip-text text-transparent">
            User Guide & Documentation
          </h1>
          <p className="text-xl text-portfolio-gray-300 max-w-3xl mx-auto">
            Complete guide to using Azizbek Ahadov's portfolio website and admin features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <h3 className="font-semibold text-dark-blue mb-4 text-lg">Table of Contents</h3>
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-dark-red text-white shadow-lg'
                    : 'bg-portfolio-gray-900 hover:bg-portfolio-gray-800 text-portfolio-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className={`${section.icon} text-lg`}></i>
                  <span className="font-medium">{section.title}</span>
                </div>
              </button>
            ))}
            
            {/* Quick Links */}
            <div className="pt-6 mt-6 border-t border-portfolio-gray-700">
              <h4 className="font-semibold text-dark-blue mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="/"
                  className="block p-2 text-sm text-portfolio-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className="fas fa-home mr-2"></i>
                  Back to Portfolio
                </a>
                <a
                  href="/admin"
                  className="block p-2 text-sm text-portfolio-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className="fas fa-shield-alt mr-2"></i>
                  Admin Panel
                </a>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-3"
          >
            <div className="bg-portfolio-gray-900 rounded-xl border border-portfolio-gray-700 overflow-hidden">
              {/* Section Header */}
              <div className="bg-gradient-to-r from-dark-blue to-dark-red p-6">
                <div className="flex items-center space-x-3">
                  <i className={`${sections[activeSection].icon} text-2xl text-white`}></i>
                  <h2 className="text-2xl font-bold text-white">
                    {sections[activeSection].title}
                  </h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-8">
                <div className="prose prose-invert max-w-none">
                  {sections[activeSection].content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold text-dark-blue mt-8 mb-4">
                          {paragraph.replace('## ', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      return (
                        <h4 key={index} className="text-lg font-medium text-white mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h4>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      return (
                        <li key={index} className="text-portfolio-gray-300 mb-2 ml-4">
                          {paragraph.replace('- ', '')}
                        </li>
                      );
                    } else if (paragraph.startsWith('**Problem**:')) {
                      return (
                        <div key={index} className="bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
                          <p className="text-red-300 font-semibold">{paragraph}</p>
                        </div>
                      );
                    } else if (paragraph.startsWith('**Solution**:')) {
                      return (
                        <div key={index} className="bg-green-900/20 border-l-4 border-green-500 p-4 my-4">
                          <p className="text-green-300 font-semibold">{paragraph}</p>
                        </div>
                      );
                    } else if (paragraph.startsWith('**')) {
                      const boldText = paragraph.match(/\*\*(.*?)\*\*/g);
                      if (boldText) {
                        let formattedText = paragraph;
                        boldText.forEach(bold => {
                          const text = bold.replace(/\*\*/g, '');
                          formattedText = formattedText.replace(bold, `<strong class="text-dark-blue">${text}</strong>`);
                        });
                        return (
                          <p 
                            key={index} 
                            className="text-portfolio-gray-300 mb-3 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: formattedText }}
                          />
                        );
                      }
                    } else if (paragraph.trim()) {
                      return (
                        <p key={index} className="text-portfolio-gray-300 mb-3 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <i className="fas fa-lightbulb text-yellow-500 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Pro Tip</h3>
              </div>
              <p className="text-portfolio-gray-300">
                {activeSection === 'overview' && "Bookmark this guide for quick reference. All features are designed to be intuitive, but this documentation provides comprehensive details for advanced usage."}
                {activeSection === 'navigation' && "Use keyboard shortcuts: Press 'Tab' to navigate through interactive elements, and 'Enter' to activate buttons and links."}
                {activeSection === 'languages' && "Language preferences are saved locally in your browser. Clear your cache if you want to reset to default language."}
                {activeSection === 'contact' && "For urgent inquiries, WhatsApp provides the fastest response time. For detailed project discussions, email is preferred."}
                {activeSection === 'technical' && "This website is built with modern web standards and is fully accessible. View source code examples in the admin panel's API documentation."}
                {activeSection === 'admin' && "Admin panel auto-saves your login state. You'll stay logged in until you explicitly logout or clear browser data."}
                {activeSection === 'troubleshooting' && "Most issues are browser-related. When in doubt, try opening the website in an incognito/private window first."}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;