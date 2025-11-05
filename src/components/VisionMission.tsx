import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="vision" className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-accent to-blue-light text-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-3 rounded-full">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">{t('vision.title')}</h2>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              {t('vision.text')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-navy-deep text-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-3 rounded-full">
                <Compass className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">{t('mission.title')}</h2>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              {t('mission.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
