import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.vision': 'Vision & Mission',
    'nav.portfolio': 'Portfolio',
    'nav.history': 'History',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'MERIT BUSINESS',
    'hero.subtitle': 'Global Partnership for Cutting Edge Solutions',
    
    // About
    'about.title': 'Welcome to Merit Business',
    'about.intro': 'I am Ali Alfaddaghi, founder and owner of Merit Business. Here I share some of my achievements and a brief history of my business journey.',
    'about.address': 'Address',
    'about.addressValue': '7991-Alryan Riyadh, 14211, Kingdom of Saudi Arabia',
    
    // Vision & Mission
    'vision.title': 'Our Vision',
    'vision.text': 'At Merit Business, we believe in diversity, excellence, and endurance. We strive to be a global partner for cutting-edge products and services.',
    'mission.title': 'Our Mission',
    'mission.text': 'To realize our vision, we focus on strategic partnerships, teaming up with professionals in their respective fields, and creating maximum value for all stakeholders.',
    
    // Portfolio
    'portfolio.title': 'Our Companies',
    'portfolio.subtitle': 'Companies fully or partly owned by Merit Business',
    
    // History
    'history.title': 'Our Journey',
    'history.milestones': 'Key Milestones',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.email': 'Email',
    'contact.subtitle': 'For business inquiries and partnerships',
    
    // Footer
    'footer.rights': '© 2025 Merit Business. All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.about': 'عن الشركة',
    'nav.vision': 'الرؤية والرسالة',
    'nav.portfolio': 'محفظة الأعمال',
    'nav.history': 'التاريخ',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'ميريت للأعمال',
    'hero.subtitle': 'شراكة عالمية لحلول متطورة',
    
    // About
    'about.title': 'مرحباً بكم في ميريت للأعمال',
    'about.intro': 'أنا علي الفداغي، مؤسس ومالك شركة ميريت للأعمال. هنا أشارك بعض إنجازاتي ولمحة موجزة عن رحلتي في عالم الأعمال.',
    'about.address': 'العنوان',
    'about.addressValue': '٧٩٩١-الريان الرياض، ١٤٢١١، المملكة العربية السعودية',
    
    // Vision & Mission
    'vision.title': 'رؤيتنا',
    'vision.text': 'في ميريت للأعمال، نؤمن بالتنوع والتميز والمثابرة. نسعى لأن نكون شريكاً عالمياً للمنتجات والخدمات المتطورة.',
    'mission.title': 'رسالتنا',
    'mission.text': 'لتحقيق رؤيتنا، نركز على الشراكات الاستراتيجية، والتعاون مع المحترفين في مجالاتهم، وخلق أقصى قيمة لجميع أصحاب المصلحة.',
    
    // Portfolio
    'portfolio.title': 'شركاتنا',
    'portfolio.subtitle': 'الشركات المملوكة كلياً أو جزئياً من قبل ميريت للأعمال',
    
    // History
    'history.title': 'رحلتنا',
    'history.milestones': 'المعالم الرئيسية',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.email': 'البريد الإلكتروني',
    'contact.subtitle': 'للاستفسارات التجارية والشراكات',
    
    // Footer
    'footer.rights': '© ٢٠٢٥ ميريت للأعمال. جميع الحقوق محفوظة.',
  },
  ru: {
    // Navigation
    'nav.about': 'О компании',
    'nav.vision': 'Видение и миссия',
    'nav.portfolio': 'Портфолио',
    'nav.history': 'История',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'MERIT BUSINESS',
    'hero.subtitle': 'Глобальное партнерство для передовых решений',
    
    // About
    'about.title': 'Добро пожаловать в Merit Business',
    'about.intro': 'Я Али Альфаддаги, основатель и владелец Merit Business. Здесь я делюсь некоторыми своими достижениями и краткой историей моего бизнес-пути.',
    'about.address': 'Адрес',
    'about.addressValue': '7991-Алриян Эр-Рияд, 14211, Королевство Саудовская Аравия',
    
    // Vision & Mission
    'vision.title': 'Наше видение',
    'vision.text': 'В Merit Business мы верим в разнообразие, совершенство и стойкость. Мы стремимся быть глобальным партнером для передовых продуктов и услуг.',
    'mission.title': 'Наша миссия',
    'mission.text': 'Для реализации нашего видения мы фокусируемся на стратегических партнерствах, объединяясь с профессионалами в своих областях и создавая максимальную ценность для всех заинтересованных сторон.',
    
    // Portfolio
    'portfolio.title': 'Наши компании',
    'portfolio.subtitle': 'Компании, полностью или частично принадлежащие Merit Business',
    
    // History
    'history.title': 'Наш путь',
    'history.milestones': 'Ключевые вехи',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.email': 'Электронная почта',
    'contact.subtitle': 'Для деловых запросов и партнерства',
    
    // Footer
    'footer.rights': '© 2025 Merit Business. Все права защищены.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
