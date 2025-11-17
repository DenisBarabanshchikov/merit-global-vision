import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Building2 } from 'lucide-react';
import nordWaterLogo from '@/assets/nord-water-logo.svg';

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
      logo: nordWaterLogo,
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto [&>*:last-child:nth-child(3n-1)]:lg:col-start-2">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.website}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-border"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-8 flex flex-col items-center space-y-6 min-h-[280px]">
                {/* Logo */}
                <div className={`w-32 h-32 rounded-2xl ${company.logo ? 'bg-white' : `bg-gradient-to-br ${company.color}`} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  {company.logo ? (
                    <img src={company.logo} alt={`${company.name} logo`} className="w-28 h-28 object-contain" />
                  ) : (
                    <Building2 className="w-16 h-16 text-white" strokeWidth={1.5} />
                  )}
                </div>
                
                {/* Company Name */}
                <div className="flex-1 flex items-center">
                  <h3 className="text-xl font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                    {company.name}
                  </h3>
                </div>
                
                {/* Visit Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <span>{t('portfolio.visit')}</span>
                  <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
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
