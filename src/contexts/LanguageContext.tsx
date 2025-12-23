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
    'history.milestone.1': 'Helped establish M&A Alfaddaghi Co for Agriculture machinery and Alamttar Corp for universal equipment. Both company are in the agriculture fields.',
    'history.milestone.2': 'Managed Alamttar Corp to have the largest market share in its field. Increased market share of Scania engines from Sweden in the Saudi market from 3% to 51% in few years.',
    'history.milestone.3': 'Led the restructuring of M&A Alfaddaghi along with my task of running Alamttar Corp. The restructuring involved also dealing with a financial obligation of 100 one hundred million dollar by the end of 1989 it was brought down to 20 twenty million dollars.',
    'history.milestone.4': 'Completed a turnkey potato production facility at our farm. The project include planting and harvesting equipment\'s, Cold storage rooms and fully automated grading and packing line.',
    'history.milestone.5': 'Formed Alfaddaghi Group by merging the top management of M&A Alfaddaghi Co and Alamttar Corp.',
    'history.milestone.6': 'Formed Matanah Ltd for Service and Auto Parts in Riyadh, Saudi Arabia. A private label company that buys parts directly from the original OEM manufacturers and sell it to end users. It was the first of its kind in the country.',
    'history.milestone.7': 'Formed Alfaddaghi for Commerce and services in Riyadh, Saudi Arabia. The company was formed to focus on after sales services for agriculture, power and auto parts and services.',
    'history.milestone.8': 'Formed State of the Art technology (SOFT) for software and telecommunication in Riyadh, Saudi Arabia. The company was the first in the region to use smart card technology for security and medical use.',
    'history.milestone.9': 'Led the efforts and negotiations to redistribute and acquired shares of Alfaddaghi Group.',
    'history.milestone.10': 'Formed Mohammed A & Partners. The company is manufacturing and distributing generating sets, light towers, electrical panels and hybrid systems. Some of the main projects was to supply generating sets to all schools in the Kingdom and another main project was to supply the network of telecommunication for the ministry of interior kingdom wide.',
    'history.milestone.11': 'Acquired 100% of the shares of Oy Nord Water Ltd Finland.',
    'history.milestone.12': 'Won the Entrepreneurship Award from Saudi Aramco.',
    'history.milestone.13': 'Formed New Age Power and secure an investment from Saudi Aramco to produce canopies and soundproof enclosures.',
    'history.milestone.14': 'Finished my MBA from University of Liverpool.',
    'history.milestone.15': 'Formed Bravo Solar Energy Systems Dubai UAE. The company is an EPC solar and battery management system. One of the main projects in 2019 was to deliver rooftop solar system for over 1000 villas in Dubai for Dubai Carbon a DEWA company. Another main project in 2022 was to design, supply and install the first of its kind carport project with storage system and EV\'s charging stations in NEOM.',
    'history.milestone.16': 'Chairman of the board of Alfaddaghi Group. During this period legal entity of some of the member companies were changed to joint stocks and corporate governance was enhanced. Doubled the capital. More manufacturing processes were automated and quality were improved. Sales and profitability were increased. New products were introduced. Brand recognition was amplified. Many awards, Medals and prizes were awarded to our companies, and the highest one was MODON award for innovation and leadership.',
    'history.milestone.17': 'Won an award from Saudi Aramco for a distinction and leadership as an innovator in entrepreneurship.',
    
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
    'history.milestone.1': 'ساعد في تأسيس شركة M&A الفداغي للآلات الزراعية وشركة العمطار للمعدات العالمية. كلتا الشركتين في مجال الزراعة.',
    'history.milestone.2': 'إدارة شركة العمطار لتحقيق أكبر حصة سوقية في مجالها. زيادة حصة محركات سكانيا السويدية في السوق السعودي من 3٪ إلى 51٪ في سنوات قليلة.',
    'history.milestone.3': 'قاد إعادة هيكلة شركة M&A الفداغي مع مهمة إدارة شركة العمطار. تضمنت إعادة الهيكلة التعامل مع التزام مالي بقيمة 100 مليون دولار وبحلول نهاية 1989 انخفض إلى 20 مليون دولار.',
    'history.milestone.4': 'أنجز منشأة إنتاج البطاطس الجاهزة في مزرعتنا. يشمل المشروع معدات الزراعة والحصاد وغرف التخزين البارد وخط فرز وتعبئة آلي بالكامل.',
    'history.milestone.5': 'تشكيل مجموعة الفداغي من خلال دمج الإدارة العليا لشركة M&A الفداغي وشركة العمطار.',
    'history.milestone.6': 'تأسيس شركة متانة المحدودة للخدمات وقطع غيار السيارات في الرياض، المملكة العربية السعودية. شركة علامة خاصة تشتري القطع مباشرة من مصنعي المعدات الأصلية وتبيعها للمستخدمين النهائيين. كانت الأولى من نوعها في البلاد.',
    'history.milestone.7': 'تأسيس شركة الفداغي للتجارة والخدمات في الرياض، المملكة العربية السعودية. تأسست الشركة للتركيز على خدمات ما بعد البيع للزراعة والطاقة وقطع غيار السيارات والخدمات.',
    'history.milestone.8': 'تأسيس شركة SOFT لأحدث التقنيات للبرمجيات والاتصالات في الرياض، المملكة العربية السعودية. كانت الشركة الأولى في المنطقة التي تستخدم تقنية البطاقة الذكية للأمن والاستخدام الطبي.',
    'history.milestone.9': 'قيادة الجهود والمفاوضات لإعادة توزيع والحصول على أسهم مجموعة الفداغي.',
    'history.milestone.10': 'تأسيس شركة محمد أ وشركاه. الشركة تصنع وتوزع مولدات الطاقة وأبراج الإضاءة واللوحات الكهربائية والأنظمة الهجينة. من أهم المشاريع تزويد المولدات لجميع المدارس في المملكة ومشروع آخر لتزويد شبكة الاتصالات لوزارة الداخلية على مستوى المملكة.',
    'history.milestone.11': 'الاستحواذ على 100٪ من أسهم شركة Oy Nord Water Ltd فنلندا.',
    'history.milestone.12': 'الفوز بجائزة ريادة الأعمال من أرامكو السعودية.',
    'history.milestone.13': 'تأسيس شركة نيو إيج باور وتأمين استثمار من أرامكو السعودية لإنتاج المظلات والحاويات العازلة للصوت.',
    'history.milestone.14': 'أنهيت ماجستير إدارة الأعمال من جامعة ليفربول.',
    'history.milestone.15': 'تأسيس شركة برافو لأنظمة الطاقة الشمسية دبي الإمارات. الشركة متخصصة في EPC للطاقة الشمسية وأنظمة إدارة البطاريات. من أهم المشاريع في 2019 تسليم نظام طاقة شمسية على أسطح أكثر من 1000 فيلا في دبي لشركة دبي كربون التابعة لديوا. مشروع رئيسي آخر في 2022 لتصميم وتوريد وتركيب أول مشروع من نوعه لمظلات السيارات مع نظام تخزين ومحطات شحن السيارات الكهربائية في نيوم.',
    'history.milestone.16': 'رئيس مجلس إدارة مجموعة الفداغي. خلال هذه الفترة تم تغيير الكيان القانوني لبعض الشركات الأعضاء إلى شركات مساهمة وتم تعزيز حوكمة الشركات. مضاعفة رأس المال. أتمتة المزيد من عمليات التصنيع وتحسين الجودة. زيادة المبيعات والربحية. إدخال منتجات جديدة. تعزيز الاعتراف بالعلامة التجارية. منح العديد من الجوائز والميداليات لشركاتنا، وأعلاها جائزة مدن للابتكار والقيادة.',
    'history.milestone.17': 'الفوز بجائزة من أرامكو السعودية للتميز والقيادة كمبتكر في ريادة الأعمال.',
    
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
    'hero.subtitle': 'Глобальное партнёрство для инновационных решений',
    
    // About
    'about.title': 'Добро пожаловать в Merit Business',
    'about.intro': 'Обращение президента\n\nДобро пожаловать на сайт Merit Business. Merit Business — это управляющая и инвестиционная компания, осуществляющая надзор за существующими компаниями и инвестициями владельца. Компания также фокусируется на новых возможностях в различных областях: энергетика, возобновляемые источники энергии и переработка, инновационные закупки, системы связи, центры обработки данных, медицина, инновационные продукты питания и новые технологии. Мы также предоставляем консультационные услуги крупным новым участникам рынка, заинтересованным в закреплении позиций на местном рынке с оптимальной структурой бизнеса.\n\nОснователь и президент\nАли М. Альфаддаги',
    'about.address': 'Адрес',
    'about.addressValue': '7991-Альриян, Эр-Рияд, 14211, Королевство Саудовская Аравия',
    
    // Vision & Mission
    'vision.title': 'Наше видение',
    'vision.text': 'В Merit Business мы верим в диверсификацию, превосходство и устойчивое развитие. Мы стремимся стать глобальным партнёром в области передовых продуктов и услуг.',
    'mission.title': 'Наша миссия',
    'mission.text': 'Для реализации нашего видения мы делаем акцент на стратегических партнёрствах, сотрудничестве с профессионалами в своих областях и создании максимальной ценности для всех заинтересованных сторон.',
    
    // Portfolio
    'portfolio.title': 'Наши компании',
    'portfolio.subtitle': 'Компании, находящиеся в полной или частичной собственности',
    'portfolio.visit': 'Перейти на сайт',
    
    // History
    'history.title': 'Наш путь',
    'history.milestones': 'Ключевые этапы развития',
    'history.intro.title': 'История',
    'history.intro.text': 'Моя семья ведёт бизнес более 70 лет, и я присоединился к семейному делу в начале 1980-х годов. Свой путь я начал с технических позиций и постепенно перешёл к управленческой деятельности. За последние 40 лет мне довелось управлять, создавать, реструктурировать, объединять и приобретать различные компании в сферах сельского хозяйства, сельскохозяйственной техники, автомобильной промышленности, энергетики, телекоммуникаций, программного обеспечения, возобновляемых источников энергии, а также пищевой промышленности.\n\nНекоторые из этих компаний располагались в Саудовской Аравии, Дубае, Италии, Великобритании, Финляндии, Китае и Соединённых Штатах Америки.',
    'history.milestone.1': 'Участие в создании компании M&A Alfaddaghi Co, специализирующейся на сельскохозяйственной технике, и корпорации Alamttar Corp, занимающейся универсальным оборудованием. Обе компании работают в аграрном секторе.',
    'history.milestone.2': 'Руководство корпорацией Alamttar Corp с достижением лидирующей доли рынка в своём сегменте. Увеличение рыночной доли двигателей Scania (Швеция) на саудовском рынке с 3% до 51% за несколько лет.',
    'history.milestone.3': 'Руководство реструктуризацией M&A Alfaddaghi параллельно с управлением Alamttar Corp. В рамках реструктуризации была проведена работа с финансовыми обязательствами на сумму 100 миллионов долларов США, которые к концу 1989 года были сокращены до 20 миллионов долларов.',
    'history.milestone.4': 'Завершение строительства комплекса по производству картофеля «под ключ» на собственной ферме. Проект включал посадочное и уборочное оборудование, холодильные камеры и полностью автоматизированную линию сортировки и упаковки.',
    'history.milestone.5': 'Создание Alfaddaghi Group путём объединения высшего руководства компаний M&A Alfaddaghi Co и Alamttar Corp.',
    'history.milestone.6': 'Основание компании Matanah Ltd в Эр-Рияде, Саудовская Аравия, специализирующейся на сервисном обслуживании и поставке автозапчастей. Компания работает по модели частной торговой марки, закупая комплектующие напрямую у OEM-производителей для реализации конечным потребителям. Это была первая компания подобного формата в стране.',
    'history.milestone.7': 'Основание компании Alfaddaghi для коммерции и услуг в Эр-Рияде, Саудовская Аравия. Компания создана для оказания послепродажного обслуживания в сферах сельского хозяйства, энергетики и автомобильных запчастей.',
    'history.milestone.8': 'Основание компании State of the Art Technology (SOFT) в Эр-Рияде, Саудовская Аравия, специализирующейся на программном обеспечении и телекоммуникациях. Компания стала первой в регионе, внедрившей технологию смарт-карт для обеспечения безопасности и медицинского применения.',
    'history.milestone.9': 'Руководство переговорами по перераспределению и приобретению акций Alfaddaghi Group.',
    'history.milestone.10': 'Основание компании Mohammed A & Partners. Компания занимается производством и дистрибуцией генераторных установок, осветительных вышек, электрических панелей и гибридных систем. Среди ключевых проектов — поставка генераторных установок для всех школ Королевства и создание телекоммуникационной сети для Министерства внутренних дел по всей стране.',
    'history.milestone.11': 'Приобретение 100% акций компании Oy Nord Water Ltd (Финляндия).',
    'history.milestone.12': 'Получение премии Saudi Aramco в области предпринимательства.',
    'history.milestone.13': 'Основание компании New Age Power и привлечение инвестиций от Saudi Aramco для производства защитных навесов и звукоизолирующих корпусов.',
    'history.milestone.14': 'Получение степени MBA в Ливерпульском университете.',
    'history.milestone.15': 'Основание компании Bravo Solar Energy Systems в Дубае, ОАЭ. Компания специализируется на EPC-проектах в области солнечной энергетики и систем управления накоплением энергии. Среди ключевых проектов: в 2019 году — установка кровельных солнечных систем для более чем 1000 вилл в Дубае для Dubai Carbon (компания DEWA); в 2022 году — проектирование, поставка и монтаж первого в своём роде проекта солнечных навесов с системой накопления энергии и зарядными станциями для электромобилей в NEOM.',
    'history.milestone.16': 'Председатель совета директоров Alfaddaghi Group. В этот период ряд дочерних компаний был преобразован в акционерные общества, усилено корпоративное управление. Капитал удвоен. Расширена автоматизация производственных процессов, повышено качество продукции. Достигнут рост продаж и прибыльности. Выведены на рынок новые продукты. Усилена узнаваемость бренда. Компании группы удостоены многочисленных наград и почётных знаков, высшей из которых стала премия MODON за инновации и лидерство.',
    'history.milestone.17': 'Получение награды Saudi Aramco за выдающиеся достижения и лидерство в области инновационного предпринимательства.',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.email': 'Электронная почта',
    'contact.subtitle': 'По вопросам делового сотрудничества и партнёрства',
    
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
