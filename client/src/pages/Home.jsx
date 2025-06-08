import LanguageSwitcher from '../components/LanguageSwitcher.jsx';
import FloatingNavigation from '../components/FloatingNavigation.jsx';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="bg-black text-white font-sans antialiased overflow-x-hidden">
      <LanguageSwitcher />
      <FloatingNavigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
