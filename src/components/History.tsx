import { useLanguage } from '@/contexts/LanguageContext';

const History = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const milestones = [
    { year: '1979-1981', event: 'Helped establish M&A Co Alfaddaghi Co and Alamttar Corp.' },
    { year: '1984', event: 'Managed Alamttar Corp to have the largest market share in its field.' },
    { year: '1985-1989', event: 'Led the restructuring of M&A Co Alfaddaghi.' },
    { year: '1989-1990', event: 'Formed Alfaddaghi Group by merging the top management of M&A Co and Alamttar Corp.' },
    { year: '1990', event: 'Formed Matanah Ltd for Service and Auto Parts.' },
    { year: '1992', event: 'Formed Alfaddaghi for Commerce and Services.' },
    { year: '1994', event: 'Formed State of the Art Technology (SOFT) for software and telecommunication.' },
    { year: '1995', event: 'Led the efforts and negotiations to acquire shares of Alfaddaghi Group.' },
    { year: '1997', event: 'Formed Mohammed A & Partners.' },
    { year: '2005', event: 'Acquired 100% of the shares of Oy Nord Water Ltd Finland.' },
    { year: '2014', event: 'Won the Entrepreneurship Award from Saudi Aramco.' },
    { year: '2014', event: 'Formed New Age Power.' },
    { year: '2017', event: 'Formed Bravo Solar Energy Systems, Dubai, UAE.' },
    { year: '2019-Present', event: 'Chairman of the Board of Alfaddaghi Group Of Companies.' },
  ];

  return (
    <section id="history" className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('history.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
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
                    {milestone.event}
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
