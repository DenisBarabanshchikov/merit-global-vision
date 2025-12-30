import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import logo from '@/assets/merit-logo.png';

const Footer = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <footer className="bg-primary text-white py-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Address */}
          <div className="flex items-start gap-4 p-6 bg-white/10 rounded-xl max-w-md">
            <MapPin className="w-6 h-6 text-white/80 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">
                {t('about.address')}
              </h3>
              <p className="text-white/80">
                {t('about.addressValue')}
              </p>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="Merit Business" className="h-16 w-16 object-contain" />
            <p className="text-center text-white/80">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
