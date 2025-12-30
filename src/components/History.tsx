import { useLanguage } from '@/contexts/LanguageContext';

const History = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const milestones = [
    { year: '1979-1981', eventKey: 'history.milestone.1' },
    { year: '1984', eventKey: 'history.milestone.2' },
    { year: '1985-1989', eventKey: 'history.milestone.3' },
    { year: '1988', eventKey: 'history.milestone.4' },
    { year: '1989', eventKey: 'history.milestone.5' },
    { year: '1990', eventKey: 'history.milestone.6' },
    { year: '1992', eventKey: 'history.milestone.7' },
    { year: '1994', eventKey: 'history.milestone.8' },
    { year: '1994-1995', eventKey: 'history.milestone.18' },
    { year: '1995', eventKey: 'history.milestone.9' },
    { year: '1997', eventKey: 'history.milestone.10' },
    { year: '2005', eventKey: 'history.milestone.11' },
    { year: '2014', eventKey: 'history.milestone.12' },
    { year: '2014', eventKey: 'history.milestone.13' },
    { year: '2014', eventKey: 'history.milestone.14' },
    { year: '2017', eventKey: 'history.milestone.15' },
    { year: '2019-Present', eventKey: 'history.milestone.16' },
    { year: '2022', eventKey: 'history.milestone.17' },
    { year: '2025', eventKey: 'history.milestone.19' },
  ];

  return (
    <section id="history" className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* History Intro Block */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('history.intro.title')}
            </h2>
            <div className="text-lg leading-relaxed opacity-90 whitespace-pre-line">
              {t('history.intro.text')}
            </div>
          </div>
        </div>

        {/* President Achievements Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
            {t('history.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-3" />
          <p className="text-sm text-muted-foreground tracking-wide uppercase">
            {t('history.milestones')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent" />
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 
                    ? 'md:pr-1/2 md:text-right' 
                    : 'md:pl-1/2 md:ml-auto'
                } ${isRTL ? 'pr-12 md:pr-1/2' : 'pl-12 md:pl-12'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-2 ${
                  isRTL 
                    ? 'right-6 md:right-auto md:left-1/2' 
                    : 'left-6 md:left-1/2'
                } w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg transform -translate-x-1/2`} />
                
                <div className="bg-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-accent font-bold text-lg mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-foreground">
                    {t(milestone.eventKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
