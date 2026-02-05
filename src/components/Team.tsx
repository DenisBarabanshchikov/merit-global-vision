 import { useLanguage } from '@/contexts/LanguageContext';
 import { Mail } from 'lucide-react';
 import aliPhoto from '@/assets/team-ali.jpg';
 import renatPhoto from '@/assets/team-renat.jpg';
 import vasilyPhoto from '@/assets/team-vasily.jpg';
 
 const Team = () => {
   const { t, language } = useLanguage();
   const isRTL = language === 'ar';
 
   const teamMembers = [
     {
       name: t('team.ali.name'),
       title: t('team.ali.title'),
       subtitle: '',
       description: '',
       email: 'ali@merit.business',
       photo: aliPhoto,
     },
     {
       name: t('team.renat.name'),
       title: t('team.renat.title'),
       subtitle: t('team.renat.subtitle'),
       description: t('team.renat.description'),
       email: 'renat@merit.business',
       photo: renatPhoto,
     },
     {
       name: t('team.vasily.name'),
       title: t('team.vasily.title'),
       subtitle: t('team.vasily.subtitle'),
       description: t('team.vasily.description'),
       email: 'vasilev@merit.business',
       photo: vasilyPhoto,
     },
   ];
 
   return (
     <section id="team" className="py-20 bg-secondary" dir={isRTL ? 'rtl' : 'ltr'}>
       <div className="container mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
             {t('team.title')}
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             {t('team.subtitle')}
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {teamMembers.map((member, index) => (
             <div
               key={index}
               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
             >
               <div className="aspect-square overflow-hidden">
                 <img
                   src={member.photo}
                   alt={member.name}
                   className="w-full h-full object-cover object-top"
                 />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-bold text-primary mb-1">
                   {member.name}
                 </h3>
                 <p className="text-accent font-semibold mb-1">
                   {member.title}
                 </p>
                 {member.subtitle && (
                   <p className="text-muted-foreground font-medium text-sm mb-3">
                     {member.subtitle}
                   </p>
                 )}
                 {member.description && (
                   <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                     {member.description}
                   </p>
                 )}
                 <a
                   href={`mailto:${member.email}`}
                   className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm"
                 >
                   <Mail className="w-4 h-4" />
                   {member.email}
                 </a>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Team;