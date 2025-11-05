import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/merit-logo.png';

const Footer = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <footer className="bg-primary text-white py-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="Merit Business" className="h-16 w-16 object-contain" />
          <p className="text-center text-white/80">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
