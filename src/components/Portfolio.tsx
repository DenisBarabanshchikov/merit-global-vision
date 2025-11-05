import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const companies = [
    {
      name: 'Mohammed A Alfaddaghi & Partners',
      website: '#',
      color: 'from-blue-600 to-blue-800',
    },
    {
      name: 'Oy Nord Water Ltd',
      website: '#',
      color: 'from-cyan-600 to-cyan-800',
    },
    {
      name: 'Mohammed A Alfaddaghi for Real Estate',
      website: '#',
      color: 'from-indigo-600 to-indigo-800',
    },
    {
      name: 'New Age Power',
      website: '#',
      color: 'from-purple-600 to-purple-800',
    },
    {
      name: 'Bravo Solar Energy Systems',
      website: '#',
      color: 'from-amber-600 to-amber-800',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.website}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${company.color} p-8 h-48 flex flex-col justify-between`}>
                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center">
                    {company.name}
                  </h3>
                </div>
                <div className="flex justify-end">
                  <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
