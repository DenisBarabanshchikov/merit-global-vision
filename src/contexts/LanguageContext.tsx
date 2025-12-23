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
    'about.intro': 'Message from the President\n\nWelcome to Merit Business webpage, Merit Business is a management and investment company that oversee the owner existing companies and investments. It is also focused on new opportunities in a variety of fields such as: Energy, renewable and recycling, innovative purchasing, communication systems, data centers, medical, novelty food and new innovations. We are also capable of giving advice and consultancy to large newcomers to the market interested in gaining foothold in the local market with best possible setup.\n\nFounder and President\nAli M Alfaddaghi',
    'about.address': 'Address',
    'about.addressValue': '7991-Alryan Riyadh, 14211, Kingdom of Saudi Arabia',
    
    // Vision & Mission
    'vision.title': 'Our Vision',
    'vision.text': 'We at Merits believe in diversity, excellence and endurance. We strive to be a global partner for cutting edge products and services.',
    'mission.title': 'Our Mission',
    'mission.text': 'To realize the vision, we are focusing on strategic partnerships, teaming up with professionals in their respective fields and creating the most value for all stakeholders.',
    
    // Portfolio
    'portfolio.title': 'Our Companies',
    'portfolio.subtitle': 'Some of the companies that are owned fully or partly by us',
    'portfolio.visit': 'Visit Website',
    
    // History
    'history.title': 'Our Journey',
    'history.milestones': 'Key Milestones',
    'history.intro.title': 'History',
    'history.intro.text': 'My Family has been in business for more than 70 years and I have started in business with them in the early 1980s. I started my journey in the technical side and moved my way up to the management side. During the past 40 years I have managed, formed, restructured, merged and acquired different companies in the fields of Agriculture, Agriculture machinery, Auto, power generation, telecommunication and software, renewable energy and food and beverage.\n\nSome of the above companies were in Saudi Arabia, Dubai, Italy, England, Finland, China and The United States.',
    'history.milestone.1': 'Helped establish M&A Co Alfaddaghi Co and Alamttar Corp.',
    'history.milestone.2': 'Managed Alamttar Corp to have the largest market share in its field.',
    'history.milestone.3': 'Led the restructuring of M&A Co Alfaddaghi.',
    'history.milestone.4': 'Formed Alfaddaghi Group by merging the top management of M&A Co and Alamttar Corp.',
    'history.milestone.5': 'Formed Matanah Ltd for Service and Auto Parts.',
    'history.milestone.6': 'Formed Alfaddaghi for Commerce and Services.',
    'history.milestone.7': 'Formed State of the Art Technology (SOFT) for software and telecommunication.',
    'history.milestone.8': 'Led the efforts and negotiations to acquire shares of Alfaddaghi Group.',
    'history.milestone.9': 'Formed Mohammed A & Partners.',
    'history.milestone.10': 'Acquired 100% of the shares of Oy Nord Water Ltd Finland.',
    'history.milestone.11': 'Won the Entrepreneurship Award from Saudi Aramco.',
    'history.milestone.12': 'Formed New Age Power.',
    'history.milestone.13': 'Formed Bravo Solar Energy Systems, Dubai, UAE.',
    'history.milestone.14': 'Chairman of the Board of Alfaddaghi Group Of Companies.',
    
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
    'about.intro': 'تم تأسيس شركة ميريت للأعمال للإشراف على الاستثمارات والفرص الجديدة نيابة عن مؤسسها ومالكها السيد علي م الفداغي.',
    'about.address': 'العنوان',
    'about.addressValue': '٧٩٩١-الريان الرياض، ١٤٢١١، المملكة العربية السعودية',
    
    // Vision & Mission
    'vision.title': 'رؤيتنا',
    'vision.text': 'في ميريت للأعمال، نؤمن بالتنوع والتميز والمثابرة. نسعى لأن نكون شريكاً عالمياً للمنتجات والخدمات المتطورة.',
    'mission.title': 'رسالتنا',
    'mission.text': 'لتحقيق رؤيتنا، نركز على الشراكات الاستراتيجية، والتعاون مع المحترفين في مجالاتهم، وخلق أقصى قيمة لجميع أصحاب المصلحة.',
    
    // Portfolio
    'portfolio.title': 'شركاتنا',
    'portfolio.subtitle': 'الشركات المملوكة كلياً أو جزئياً من قبل مالك شركة ميريت للأعمال',
    'portfolio.visit': 'زيارة الموقع',
    
    // History
    'history.title': 'رحلتنا',
    'history.milestones': 'المعالم الرئيسية',
    'history.intro.title': 'التاريخ',
    'history.intro.text': 'عائلتي في مجال الأعمال منذ أكثر من 70 عامًا وقد بدأت العمل معهم في أوائل الثمانينيات. بدأت رحلتي في الجانب التقني وانتقلت إلى الجانب الإداري. خلال الأربعين عامًا الماضية قمت بإدارة وتأسيس وإعادة هيكلة ودمج واستحواذ شركات مختلفة في مجالات الزراعة والآلات الزراعية والسيارات وتوليد الطاقة والاتصالات والبرمجيات والطاقة المتجددة والأغذية والمشروبات.\n\nبعض الشركات المذكورة أعلاه كانت في المملكة العربية السعودية ودبي وإيطاليا وإنجلترا وفنلندا والصين والولايات المتحدة.',
    'history.milestone.1': 'ساعد في تأسيس شركة M&A الفداغي وشركة العمطار.',
    'history.milestone.2': 'إدارة شركة العمطار لتحقيق أكبر حصة سوقية في مجالها.',
    'history.milestone.3': 'قاد إعادة هيكلة شركة M&A الفداغي.',
    'history.milestone.4': 'تشكيل مجموعة الفداغي من خلال دمج الإدارة العليا لشركة M&A وشركة العمطار.',
    'history.milestone.5': 'تأسيس شركة متانة المحدودة للخدمات وقطع غيار السيارات.',
    'history.milestone.6': 'تأسيس شركة الفداغي للتجارة والخدمات.',
    'history.milestone.7': 'تأسيس شركة SOFT لأحدث التقنيات للبرمجيات والاتصالات.',
    'history.milestone.8': 'قيادة الجهود والمفاوضات للحصول على أسهم مجموعة الفداغي.',
    'history.milestone.9': 'تأسيس شركة محمد أ وشركاه.',
    'history.milestone.10': 'الاستحواذ على 100٪ من أسهم شركة Oy Nord Water Ltd فنلندا.',
    'history.milestone.11': 'الفوز بجائزة ريادة الأعمال من أرامكو السعودية.',
    'history.milestone.12': 'تأسيس شركة نيو إيج باور.',
    'history.milestone.13': 'تأسيس شركة برافو لأنظمة الطاقة الشمسية، دبي، الإمارات العربية المتحدة.',
    'history.milestone.14': 'رئيس مجلس إدارة مجموعة شركات الفداغي.',
    
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
    'about.intro': 'Merit Business была создана для надзора за инвестициями и новыми возможностями от имени ее основателя и владельца г-на Али М Альфаддаги.',
    'about.address': 'Адрес',
    'about.addressValue': '7991-Алриян Эр-Рияд, 14211, Королевство Саудовская Аравия',
    
    // Vision & Mission
    'vision.title': 'Наше видение',
    'vision.text': 'В Merit Business мы верим в разнообразие, совершенство и стойкость. Мы стремимся быть глобальным партнером для передовых продуктов и услуг.',
    'mission.title': 'Наша миссия',
    'mission.text': 'Для реализации нашего видения мы фокусируемся на стратегических партнерствах, объединяясь с профессионалами в своих областях и создавая максимальную ценность для всех заинтересованных сторон.',
    
    // Portfolio
    'portfolio.title': 'Наши компании',
    'portfolio.subtitle': 'Компании, которые полностью или частично принадлежат владельцу Merit Business',
    'portfolio.visit': 'Посетить сайт',
    
    // History
    'history.title': 'Наш путь',
    'history.milestones': 'Ключевые вехи',
    'history.intro.title': 'История',
    'history.intro.text': 'Моя семья занимается бизнесом более 70 лет, и я начал работать с ними в начале 1980-х годов. Я начал свой путь с технической стороны и продвинулся до управленческой. За последние 40 лет я управлял, создавал, реструктурировал, объединял и приобретал различные компании в областях сельского хозяйства, сельскохозяйственной техники, автомобилей, энергетики, телекоммуникаций и программного обеспечения, возобновляемой энергии и продуктов питания.\n\nНекоторые из вышеупомянутых компаний находились в Саудовской Аравии, Дубае, Италии, Англии, Финляндии, Китае и США.',
    'history.milestone.1': 'Помогал создать компании M&A Co Alfaddaghi Co и Alamttar Corp.',
    'history.milestone.2': 'Управлял Alamttar Corp для достижения наибольшей доли рынка в своей области.',
    'history.milestone.3': 'Руководил реструктуризацией M&A Co Alfaddaghi.',
    'history.milestone.4': 'Сформировал группу Alfaddaghi путем объединения высшего руководства M&A Co и Alamttar Corp.',
    'history.milestone.5': 'Основал Matanah Ltd для обслуживания и автозапчастей.',
    'history.milestone.6': 'Основал Alfaddaghi для коммерции и услуг.',
    'history.milestone.7': 'Основал State of the Art Technology (SOFT) для программного обеспечения и телекоммуникаций.',
    'history.milestone.8': 'Возглавил усилия и переговоры по приобретению акций группы Alfaddaghi.',
    'history.milestone.9': 'Основал Mohammed A & Partners.',
    'history.milestone.10': 'Приобрел 100% акций Oy Nord Water Ltd Финляндия.',
    'history.milestone.11': 'Получил премию за предпринимательство от Saudi Aramco.',
    'history.milestone.12': 'Основал New Age Power.',
    'history.milestone.13': 'Основал Bravo Solar Energy Systems, Дубай, ОАЭ.',
    'history.milestone.14': 'Председатель совета директоров группы компаний Alfaddaghi.',
    
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
