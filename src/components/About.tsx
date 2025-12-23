import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-secondary" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            {t('about.title')}
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-lg text-foreground leading-relaxed mb-8 whitespace-pre-line">
              {t('about.intro')}
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {t('about.address')}
                </h3>
                <p className="text-muted-foreground">
                  {t('about.addressValue')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
