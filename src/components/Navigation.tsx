import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/merit-logo.png';

const Navigation = () => {
  const { t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRTL = language === 'ar';

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Merit Business" className="h-12 w-12 object-contain" />
            <span className={`font-bold text-lg ${scrolled ? 'text-primary' : 'text-white'}`}>
              MERIT BUSINESS
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className={`font-medium hover:text-accent transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#vision"
              onClick={(e) => handleSmoothScroll(e, '#vision')}
              className={`font-medium hover:text-accent transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.vision')}
            </a>
            <a 
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
              className={`font-medium hover:text-accent transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.portfolio')}
            </a>
            <a 
              href="#history"
              onClick={(e) => handleSmoothScroll(e, '#history')}
              className={`font-medium hover:text-accent transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.history')}
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className={`font-medium hover:text-accent transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.contact')}
            </a>
          </div>
          
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
