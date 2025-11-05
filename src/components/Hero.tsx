import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/merit-logo.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'var(--gradient-hero)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <img 
            src={logo} 
            alt="Merit Business Logo" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-light max-w-2xl">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex gap-4 mt-8">
            <a 
              href="#about"
              className="px-8 py-3 bg-white text-primary hover:bg-blue-light hover:text-white rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary rounded-lg font-semibold transition-all"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
