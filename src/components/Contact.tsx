import { useLanguage } from '@/contexts/LanguageContext';
import { Mail } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t('contact.subtitle')}
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-accent/10 p-4 rounded-full">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                {t('contact.email')}
              </h3>
            </div>
            
            <a 
              href="mailto:aalfaddaghi@gmail.com"
              className="inline-block text-xl text-accent hover:text-primary transition-colors font-medium"
            >
              aalfaddaghi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
