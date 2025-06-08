import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: t('form.success'),
        description: 'Thank you for your message!',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    },
    onError: (error) => {
      toast({
        title: t('form.error'),
        description: error.message,
        variant: 'destructive',
      });
    }
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('form.validation.name');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('form.validation.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('form.validation.email');
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t('form.validation.subject');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('form.validation.message');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      contactMutation.mutate(formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('azizahadov991@gmail.com');
      toast({
        title: t('contact.emailCopied'),
        description: 'Email copied to clipboard!',
      });
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'azizahadov991@gmail.com',
      icon: 'fas fa-envelope',
      color: 'text-dark-red',
      borderColor: 'border-dark-red',
      action: copyEmail,
      actionText: t('contact.copyEmail'),
      actionIcon: 'fas fa-copy'
    },
    {
      title: 'WhatsApp',
      value: '+998 97 861 11 99',
      icon: 'fab fa-whatsapp',
      color: 'text-green-500',
      borderColor: 'border-dark-blue',
      action: () => window.open('https://wa.me/998978611199', '_blank'),
      actionText: t('contact.startChat'),
      actionIcon: 'fas fa-external-link-alt'
    },
    {
      title: 'GitHub',
      value: 'github.com/azizahadovv',
      icon: 'fab fa-github',
      color: 'text-purple-400',
      borderColor: 'border-purple-500',
      action: () => window.open('https://github.com/azizahadovv', '_blank'),
      actionText: t('contact.viewProfile'),
      actionIcon: 'fas fa-external-link-alt'
    },
    {
      title: 'Instagram',
      value: '@ahadov.vip',
      icon: 'fab fa-instagram',
      color: 'text-pink-400',
      borderColor: 'border-pink-500',
      action: () => window.open('https://instagram.com/ahadov.vip', '_blank'),
      actionText: t('contact.follow'),
      actionIcon: 'fas fa-external-link-alt'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            <span className="border-b-4 border-dark-red pb-2">{t('contact.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-dark-blue mx-auto mb-6"></div>
          <p className="text-xl text-portfolio-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-portfolio-gray-900 p-8 rounded-xl border-2 border-portfolio-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-blue">
              {t('contact.sendMessage')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-portfolio-gray-300 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-portfolio-gray-800 border ${
                    errors.name ? 'border-red-500' : 'border-portfolio-gray-700'
                  } rounded-lg focus:outline-none focus:border-dark-red transition-colors duration-300 text-white`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-portfolio-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-portfolio-gray-800 border ${
                    errors.email ? 'border-red-500' : 'border-portfolio-gray-700'
                  } rounded-lg focus:outline-none focus:border-dark-red transition-colors duration-300 text-white`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-portfolio-gray-300 mb-2">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-portfolio-gray-800 border ${
                    errors.subject ? 'border-red-500' : 'border-portfolio-gray-700'
                  } rounded-lg focus:outline-none focus:border-dark-red transition-colors duration-300 text-white`}
                  placeholder="Project discussion"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-portfolio-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-portfolio-gray-800 border ${
                    errors.message ? 'border-red-500' : 'border-portfolio-gray-700'
                  } rounded-lg focus:outline-none focus:border-dark-red transition-colors duration-300 text-white resize-none`}
                  placeholder={t('contact.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={contactMutation.isPending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-dark-red hover:bg-red-600 disabled:bg-gray-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                {contactMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    {t('contact.send')} <i className="fas fa-paper-plane ml-2"></i>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-portfolio-gray-900 p-6 rounded-xl border-l-4 ${info.borderColor}`}
              >
                <div className="flex items-center mb-4">
                  <i className={`${info.icon} text-2xl ${info.color} mr-4`}></i>
                  <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                </div>
                <p className="text-portfolio-gray-300 mb-3">{info.value}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={info.action}
                  className={`${info.color} hover:opacity-80 transition-opacity duration-300 text-sm flex items-center`}
                >
                  <i className={`${info.actionIcon} mr-1`}></i>
                  {info.actionText}
                </motion.button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center p-6"
            >
              <p className="text-portfolio-gray-400 mb-4">{t('contact.available')}</p>
              <div className="flex justify-center items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="ml-2 text-green-500 text-sm">{t('contact.online')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
