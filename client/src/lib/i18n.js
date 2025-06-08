import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      // Navigation
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "اتصل بي",
      
      // Hero Section
      "hero.name": "عزيزبك أحدوف",
      "hero.titles": ["مطور Full Stack", "مطور ويب", "مطور Backend", "مطور Frontend", "مطور بوت"],
      "hero.subtitle": "إنشاء تجارب رقمية بتقنيات حديثة وحلول إبداعية",
      "hero.viewWork": "عرض أعمالي",
      "hero.getInTouch": "تواصل معي",
      
      // About Section
      "about.title": "نبذة عني",
      "about.heading": "مطور شغوف وحلال المشاكل",
      "about.description1": "أنا عزيزبك أحدوف، مطور full-stack مخصص مع خبرة في تقنيات الويب الحديثة. أتخصص في إنشاء تطبيقات قوية وقابلة للتوسع تقدم تجارب مستخدم استثنائية.",
      "about.description2": "شغفي يكمن في تحويل المشاكل المعقدة إلى حلول أنيقة، باستخدام التقنيات المتطورة لبناء تطبيقات تصنع الفرق.",
      "about.experience": "الخبرة",
      "about.experienceValue": "3+ سنوات",
      "about.projects": "المشاريع",
      "about.projectsValue": "50+ مكتمل",
      "about.website": "الموقع",
      "about.location": "الموقع",
      "about.locationValue": "أوزبكستان",
      
      // Skills Section
      "skills.title": "المهارات والخبرة",
      "skills.technologies": "التقنيات التي أعمل بها",
      "skills.expertLevel": "مستوى خبير",
      "skills.advancedLevel": "مستوى متقدم",
      
      // Projects Section
      "projects.title": "مشاريع مختارة",
      "projects.liveDemo": "عرض مباشر",
      "projects.viewCode": "الكود",
      "projects.viewAll": "عرض جميع المشاريع",
      "projects.ecommerce.title": "منصة تجارة إلكترونية",
      "projects.ecommerce.description": "حل تجارة إلكترونية متكامل مبني بـ React.js و Node.js و MongoDB. يتضمن مصادقة المستخدم وتكامل المدفوعات ولوحة الإدارة.",
      "projects.bot.title": "مساعد بوت تليجرام",
      "projects.bot.description": "بوت تليجرام ذكي مع قدرات معالجة اللغة الطبيعية. يتضمن إدارة المستخدمين والردود التلقائية والتكامل مع APIs خارجية.",
      "projects.dashboard.title": "لوحة تحليلات",
      "projects.dashboard.description": "لوحة تحليلات في الوقت الفعلي مبنية بـ Next.js و Spring Boot. تتضمن تصور البيانات وإدارة المستخدمين وقدرات التقارير.",
      
      // Contact Section
      "contact.title": "تواصل معي",
      "contact.subtitle": "مستعد لتحويل أفكارك إلى واقع؟ دعنا نناقش مشروعك القادم وننشئ شيئاً رائعاً معاً.",
      "contact.sendMessage": "إرسال رسالة",
      "contact.name": "اسمك",
      "contact.email": "عنوان البريد الإلكتروني",
      "contact.subject": "الموضوع",
      "contact.message": "الرسالة",
      "contact.messagePlaceholder": "أخبرني عن مشروعك...",
      "contact.send": "إرسال الرسالة",
      "contact.copyEmail": "نسخ البريد الإلكتروني",
      "contact.emailCopied": "تم النسخ!",
      "contact.startChat": "بدء المحادثة",
      "contact.viewProfile": "عرض الملف الشخصي",
      "contact.follow": "متابعة",
      "contact.available": "متاح للعمل الحر",
      "contact.online": "متصل",
      
      // Footer
      "footer.rights": "جميع الحقوق محفوظة.",
      
      // Form Messages
      "form.success": "تم إرسال الرسالة بنجاح!",
      "form.error": "فشل في إرسال الرسالة. حاول مرة أخرى.",
      "form.validation.name": "الاسم مطلوب",
      "form.validation.email": "بريد إلكتروني صحيح مطلوب",
      "form.validation.subject": "الموضوع مطلوب",
      "form.validation.message": "الرسالة مطلوبة"
    }
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      
      // Hero Section
      "hero.name": "Azizbek Ahadov",
      "hero.titles": ["Full Stack Developer", "Web Developer", "Backend Developer", "Frontend Developer", "Bot Developer"],
      "hero.subtitle": "Crafting digital experiences with modern technologies and creative solutions",
      "hero.viewWork": "View My Work",
      "hero.getInTouch": "Get In Touch",
      
      // About Section
      "about.title": "About Me",
      "about.heading": "Passionate Developer & Problem Solver",
      "about.description1": "I'm Azizbek Ahadov, a dedicated full-stack developer with expertise in modern web technologies. I specialize in creating robust, scalable applications that deliver exceptional user experiences.",
      "about.description2": "My passion lies in transforming complex problems into elegant solutions, leveraging cutting-edge technologies to build applications that make a difference.",
      "about.experience": "Experience",
      "about.experienceValue": "3+ Years",
      "about.projects": "Projects",
      "about.projectsValue": "50+ Completed",
      "about.website": "Website",
      "about.location": "Location",
      "about.locationValue": "Uzbekistan",
      
      // Skills Section
      "skills.title": "Skills & Expertise",
      "skills.technologies": "Technologies I Work With",
      "skills.expertLevel": "Expert Level",
      "skills.advancedLevel": "Advanced Level",
      
      // Projects Section
      "projects.title": "Featured Projects",
      "projects.liveDemo": "Live Demo",
      "projects.viewCode": "Code",
      "projects.viewAll": "View All Projects",
      "projects.ecommerce.title": "E-Commerce Platform",
      "projects.ecommerce.description": "Full-stack e-commerce solution built with React.js, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      "projects.bot.title": "Telegram Bot Assistant",
      "projects.bot.description": "Intelligent Telegram bot with natural language processing capabilities. Includes user management, automated responses, and integration with external APIs.",
      "projects.dashboard.title": "Analytics Dashboard",
      "projects.dashboard.description": "Real-time analytics dashboard built with Next.js and Spring Boot. Features data visualization, user management, and reporting capabilities.",
      
      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle": "Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.",
      "contact.sendMessage": "Send Message",
      "contact.name": "Your Name",
      "contact.email": "Email Address",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Tell me about your project...",
      "contact.send": "Send Message",
      "contact.copyEmail": "Copy Email",
      "contact.emailCopied": "Copied!",
      "contact.startChat": "Start Chat",
      "contact.viewProfile": "View Profile",
      "contact.follow": "Follow",
      "contact.available": "Available for freelance work",
      "contact.online": "Online",
      
      // Footer
      "footer.rights": "All rights reserved.",
      
      // Form Messages
      "form.success": "Message sent successfully!",
      "form.error": "Failed to send message. Please try again.",
      "form.validation.name": "Name is required",
      "form.validation.email": "Valid email is required",
      "form.validation.subject": "Subject is required",
      "form.validation.message": "Message is required"
    }
  },
  uz: {
    translation: {
      // Navigation
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
      
      // Hero Section
      "hero.name": "Azizbek Ahadov",
      "hero.titles": ["Full Stack Dasturchi", "Web Dasturchi", "Backend Dasturchi", "Frontend Dasturchi", "Bot Dasturchi"],
      "hero.subtitle": "Zamonaviy texnologiyalar va ijodiy yechimlar bilan raqamli tajribalarni yaratish",
      "hero.viewWork": "Ishlarimni Ko'rish",
      "hero.getInTouch": "Bog'lanish",
      
      // About Section
      "about.title": "Men Haqimda",
      "about.heading": "Ishtiyoqli Dasturchi va Muammo Yechuvchi",
      "about.description1": "Men Azizbek Ahadov, zamonaviy veb texnologiyalarida tajribaga ega bo'lgan sodiq full-stack dasturchiman. Men ajoyib foydalanuvchi tajribasini taqdim etadigan mustahkam, kengaytiriladigan ilovalar yaratishga ixtisoslanganman.",
      "about.description2": "Mening ishtiyoqim murakkab muammolarni nafis yechimlarga aylantirish, farq qiladigan ilovalar yaratish uchun ilg'or texnologiyalardan foydalanishdir.",
      "about.experience": "Tajriba",
      "about.experienceValue": "3+ Yil",
      "about.projects": "Loyihalar",
      "about.projectsValue": "50+ Yakunlangan",
      "about.website": "Veb-sayt",
      "about.location": "Joylashuv",
      "about.locationValue": "O'zbekiston",
      
      // Skills Section
      "skills.title": "Ko'nikmalar va Tajriba",
      "skills.technologies": "Men Ishlatiladigan Texnologiyalar",
      "skills.expertLevel": "Ekspert Darajasi",
      "skills.advancedLevel": "Ilg'or Daraja",
      
      // Projects Section
      "projects.title": "Tanlangan Loyihalar",
      "projects.liveDemo": "Jonli Demo",
      "projects.viewCode": "Kod",
      "projects.viewAll": "Barcha Loyihalarni Ko'rish",
      "projects.ecommerce.title": "Elektron Tijorat Platformasi",
      "projects.ecommerce.description": "React.js, Node.js va MongoDB bilan qurilgan to'liq elektron tijorat yechimi. Foydalanuvchi autentifikatsiyasi, to'lov integratsiyasi va admin paneli kiradi.",
      "projects.bot.title": "Telegram Bot Yordamchisi",
      "projects.bot.description": "Tabiiy til qayta ishlash imkoniyatlari bilan aqlli Telegram bot. Foydalanuvchilarni boshqarish, avtomatik javoblar va tashqi API'lar bilan integratsiya kiradi.",
      "projects.dashboard.title": "Analitika Paneli",
      "projects.dashboard.description": "Next.js va Spring Boot bilan qurilgan real vaqt analitika paneli. Ma'lumotlarni vizualizatsiya qilish, foydalanuvchilarni boshqarish va hisobot berish imkoniyatlari mavjud.",
      
      // Contact Section
      "contact.title": "Bog'laning",
      "contact.subtitle": "G'oyalaringizni hayotga tatbiq etishga tayyormisiz? Keling, keyingi loyihangizni muhokama qilaylik va birgalikda ajoyib narsa yarataylik.",
      "contact.sendMessage": "Xabar Yuborish",
      "contact.name": "Ismingiz",
      "contact.email": "Email Manzili",
      "contact.subject": "Mavzu",
      "contact.message": "Xabar",
      "contact.messagePlaceholder": "Loyihangiz haqida aytib bering...",
      "contact.send": "Xabar Yuborish",
      "contact.copyEmail": "Email Nusxa Olish",
      "contact.emailCopied": "Nusxa Olindi!",
      "contact.startChat": "Suhbatni Boshlash",
      "contact.viewProfile": "Profilni Ko'rish",
      "contact.follow": "Kuzatish",
      "contact.available": "Frilanser ish uchun mavjud",
      "contact.online": "Onlayn",
      
      // Footer
      "footer.rights": "Barcha huquqlar himoyalangan.",
      
      // Form Messages
      "form.success": "Xabar muvaffaqiyatli yuborildi!",
      "form.error": "Xabar yuborishda xatolik. Qaytadan urinib ko'ring.",
      "form.validation.name": "Ism talab qilinadi",
      "form.validation.email": "To'g'ri email talab qilinadi",
      "form.validation.subject": "Mavzu talab qilinadi",
      "form.validation.message": "Xabar talab qilinadi"
    }
  },
  ru: {
    translation: {
      // Navigation
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
      
      // Hero Section
      "hero.name": "Азизбек Ахадов",
      "hero.titles": ["Full Stack Разработчик", "Веб Разработчик", "Backend Разработчик", "Frontend Разработчик", "Бот Разработчик"],
      "hero.subtitle": "Создание цифровых решений с использованием современных технологий и творческих подходов",
      "hero.viewWork": "Посмотреть Работы",
      "hero.getInTouch": "Связаться",
      
      // About Section
      "about.title": "Обо Мне",
      "about.heading": "Увлеченный Разработчик и Решатель Проблем",
      "about.description1": "Я Азизбек Ахадов, преданный full-stack разработчик с экспертизой в современных веб-технологиях. Специализируюсь на создании надежных, масштабируемых приложений, которые обеспечивают исключительный пользовательский опыт.",
      "about.description2": "Моя страсть заключается в превращении сложных проблем в элегантные решения, используя передовые технологии для создания приложений, которые имеют значение.",
      "about.experience": "Опыт",
      "about.experienceValue": "3+ Года",
      "about.projects": "Проекты",
      "about.projectsValue": "50+ Завершено",
      "about.website": "Веб-сайт",
      "about.location": "Местоположение",
      "about.locationValue": "Узбекистан",
      
      // Skills Section
      "skills.title": "Навыки и Экспертиза",
      "skills.technologies": "Технологии, с которыми я работаю",
      "skills.expertLevel": "Экспертный Уровень",
      "skills.advancedLevel": "Продвинутый Уровень",
      
      // Projects Section
      "projects.title": "Избранные Проекты",
      "projects.liveDemo": "Демо",
      "projects.viewCode": "Код",
      "projects.viewAll": "Посмотреть Все Проекты",
      "projects.ecommerce.title": "Платформа Электронной Коммерции",
      "projects.ecommerce.description": "Полнофункциональное решение для электронной коммерции, созданное с использованием React.js, Node.js и MongoDB. Включает аутентификацию пользователей, интеграцию платежей и панель администратора.",
      "projects.bot.title": "Помощник Telegram Бот",
      "projects.bot.description": "Интеллектуальный Telegram бот с возможностями обработки естественного языка. Включает управление пользователями, автоматические ответы и интеграцию с внешними API.",
      "projects.dashboard.title": "Панель Аналитики",
      "projects.dashboard.description": "Панель аналитики в реальном времени, созданная с использованием Next.js и Spring Boot. Включает визуализацию данных, управление пользователями и возможности отчетности.",
      
      // Contact Section
      "contact.title": "Связаться",
      "contact.subtitle": "Готовы воплотить ваши идеи в жизнь? Давайте обсудим ваш следующий проект и создадим что-то удивительное вместе.",
      "contact.sendMessage": "Отправить Сообщение",
      "contact.name": "Ваше Имя",
      "contact.email": "Email Адрес",
      "contact.subject": "Тема",
      "contact.message": "Сообщение",
      "contact.messagePlaceholder": "Расскажите о вашем проекте...",
      "contact.send": "Отправить Сообщение",
      "contact.copyEmail": "Копировать Email",
      "contact.emailCopied": "Скопировано!",
      "contact.startChat": "Начать Чат",
      "contact.viewProfile": "Посмотреть Профиль",
      "contact.follow": "Подписаться",
      "contact.available": "Доступен для фриланс работы",
      "contact.online": "Онлайн",
      
      // Footer
      "footer.rights": "Все права защищены.",
      
      // Form Messages
      "form.success": "Сообщение успешно отправлено!",
      "form.error": "Не удалось отправить сообщение. Попробуйте еще раз.",
      "form.validation.name": "Имя обязательно",
      "form.validation.email": "Требуется действительный email",
      "form.validation.subject": "Тема обязательна",
      "form.validation.message": "Сообщение обязательно"
    }
  },
  es: {
    translation: {
      // Navigation
      home: "Inicio",
      about: "Acerca",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      
      // Hero Section
      "hero.name": "Azizbek Ahadov",
      "hero.titles": ["Desarrollador Full Stack", "Desarrollador Web", "Desarrollador Backend", "Desarrollador Frontend", "Desarrollador de Bots"],
      "hero.subtitle": "Creando experiencias digitales con tecnologías modernas y soluciones creativas",
      "hero.viewWork": "Ver Mi Trabajo",
      "hero.getInTouch": "Ponerse en Contacto",
      
      // About Section
      "about.title": "Acerca de Mí",
      "about.heading": "Desarrollador Apasionado y Solucionador de Problemas",
      "about.description1": "Soy Azizbek Ahadov, un desarrollador full-stack dedicado con experiencia en tecnologías web modernas. Me especializo en crear aplicaciones robustas y escalables que brindan experiencias excepcionales al usuario.",
      "about.description2": "Mi pasión radica en transformar problemas complejos en soluciones elegantes, aprovechando tecnologías de vanguardia para construir aplicaciones que marquen la diferencia.",
      "about.experience": "Experiencia",
      "about.experienceValue": "3+ Años",
      "about.projects": "Proyectos",
      "about.projectsValue": "50+ Completados",
      "about.website": "Sitio Web",
      "about.location": "Ubicación",
      "about.locationValue": "Uzbekistán",
      
      // Skills Section
      "skills.title": "Habilidades y Experiencia",
      "skills.technologies": "Tecnologías con las que Trabajo",
      "skills.expertLevel": "Nivel Experto",
      "skills.advancedLevel": "Nivel Avanzado",
      
      // Projects Section
      "projects.title": "Proyectos Destacados",
      "projects.liveDemo": "Demo en Vivo",
      "projects.viewCode": "Código",
      "projects.viewAll": "Ver Todos los Proyectos",
      "projects.ecommerce.title": "Plataforma de Comercio Electrónico",
      "projects.ecommerce.description": "Solución completa de comercio electrónico construida con React.js, Node.js y MongoDB. Incluye autenticación de usuarios, integración de pagos y panel de administración.",
      "projects.bot.title": "Asistente Bot de Telegram",
      "projects.bot.description": "Bot inteligente de Telegram con capacidades de procesamiento de lenguaje natural. Incluye gestión de usuarios, respuestas automatizadas e integración con APIs externas.",
      "projects.dashboard.title": "Panel de Análisis",
      "projects.dashboard.description": "Panel de análisis en tiempo real construido con Next.js y Spring Boot. Incluye visualización de datos, gestión de usuarios y capacidades de informes.",
      
      // Contact Section
      "contact.title": "Ponerse en Contacto",
      "contact.subtitle": "¿Listo para dar vida a tus ideas? Hablemos de tu próximo proyecto y creemos algo increíble juntos.",
      "contact.sendMessage": "Enviar Mensaje",
      "contact.name": "Tu Nombre",
      "contact.email": "Dirección de Email",
      "contact.subject": "Asunto",
      "contact.message": "Mensaje",
      "contact.messagePlaceholder": "Cuéntame sobre tu proyecto...",
      "contact.send": "Enviar Mensaje",
      "contact.copyEmail": "Copiar Email",
      "contact.emailCopied": "¡Copiado!",
      "contact.startChat": "Iniciar Chat",
      "contact.viewProfile": "Ver Perfil",
      "contact.follow": "Seguir",
      "contact.available": "Disponible para trabajo freelance",
      "contact.online": "En línea",
      
      // Footer
      "footer.rights": "Todos los derechos reservados.",
      
      // Form Messages
      "form.success": "¡Mensaje enviado exitosamente!",
      "form.error": "Error al enviar el mensaje. Por favor intenta de nuevo.",
      "form.validation.name": "El nombre es requerido",
      "form.validation.email": "Se requiere un email válido",
      "form.validation.subject": "El asunto es requerido",
      "form.validation.message": "El mensaje es requerido"
    }
  },
  fr: {
    translation: {
      // Navigation
      home: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      
      // Hero Section
      "hero.name": "Azizbek Ahadov",
      "hero.titles": ["Développeur Full Stack", "Développeur Web", "Développeur Backend", "Développeur Frontend", "Développeur de Bots"],
      "hero.subtitle": "Créer des expériences numériques avec des technologies modernes et des solutions créatives",
      "hero.viewWork": "Voir Mon Travail",
      "hero.getInTouch": "Prendre Contact",
      
      // About Section
      "about.title": "À Propos de Moi",
      "about.heading": "Développeur Passionné et Résolveur de Problèmes",
      "about.description1": "Je suis Azizbek Ahadov, un développeur full-stack dévoué avec une expertise en technologies web modernes. Je me spécialise dans la création d'applications robustes et évolutives qui offrent des expériences utilisateur exceptionnelles.",
      "about.description2": "Ma passion réside dans la transformation de problèmes complexes en solutions élégantes, en tirant parti des technologies de pointe pour construire des applications qui font la différence.",
      "about.experience": "Expérience",
      "about.experienceValue": "3+ Années",
      "about.projects": "Projets",
      "about.projectsValue": "50+ Complétés",
      "about.website": "Site Web",
      "about.location": "Localisation",
      "about.locationValue": "Ouzbékistan",
      
      // Skills Section
      "skills.title": "Compétences et Expertise",
      "skills.technologies": "Technologies avec Lesquelles Je Travaille",
      "skills.expertLevel": "Niveau Expert",
      "skills.advancedLevel": "Niveau Avancé",
      
      // Projects Section
      "projects.title": "Projets en Vedette",
      "projects.liveDemo": "Démo en Direct",
      "projects.viewCode": "Code",
      "projects.viewAll": "Voir Tous les Projets",
      "projects.ecommerce.title": "Plateforme de Commerce Électronique",
      "projects.ecommerce.description": "Solution complète de commerce électronique construite avec React.js, Node.js et MongoDB. Comprend l'authentification des utilisateurs, l'intégration des paiements et le tableau de bord admin.",
      "projects.bot.title": "Assistant Bot Telegram",
      "projects.bot.description": "Bot Telegram intelligent avec des capacités de traitement du langage naturel. Comprend la gestion des utilisateurs, les réponses automatisées et l'intégration avec des APIs externes.",
      "projects.dashboard.title": "Tableau de Bord d'Analyse",
      "projects.dashboard.description": "Tableau de bord d'analyse en temps réel construit avec Next.js et Spring Boot. Comprend la visualisation des données, la gestion des utilisateurs et les capacités de rapport.",
      
      // Contact Section
      "contact.title": "Prendre Contact",
      "contact.subtitle": "Prêt à donner vie à vos idées ? Discutons de votre prochain projet et créons quelque chose d'incroyable ensemble.",
      "contact.sendMessage": "Envoyer un Message",
      "contact.name": "Votre Nom",
      "contact.email": "Adresse Email",
      "contact.subject": "Sujet",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Parlez-moi de votre projet...",
      "contact.send": "Envoyer le Message",
      "contact.copyEmail": "Copier l'Email",
      "contact.emailCopied": "Copié !",
      "contact.startChat": "Commencer le Chat",
      "contact.viewProfile": "Voir le Profil",
      "contact.follow": "Suivre",
      "contact.available": "Disponible pour le travail freelance",
      "contact.online": "En ligne",
      
      // Footer
      "footer.rights": "Tous droits réservés.",
      
      // Form Messages
      "form.success": "Message envoyé avec succès !",
      "form.error": "Échec de l'envoi du message. Veuillez réessayer.",
      "form.validation.name": "Le nom est requis",
      "form.validation.email": "Un email valide est requis",
      "form.validation.subject": "Le sujet est requis",
      "form.validation.message": "Le message est requis"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
