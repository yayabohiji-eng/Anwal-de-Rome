
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from './LanguageContext';
import { CONTACT_INFO } from '../constants';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();
  
  return (
    <button 
      onClick={() => setLang(lang === 'FR' ? 'AR' : 'FR')}
      className="flex items-center justify-center w-16 h-8 bg-black rounded-full border border-white/20 hover:border-accent-gold/50 transition-all active:scale-95 group shadow-lg"
      title={lang === 'FR' ? 'Changer en Arabe' : 'تغيير للفرنسية'}
    >
      <span className="material-symbols-outlined text-white text-[20px] group-hover:rotate-12 transition-transform duration-500">
        language
      </span>
    </button>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const { t, lang } = useLang();
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const isHome = pathname === '/';

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-background-dark ${lang === 'AR' ? 'font-serif' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 h-24 flex items-center px-4 md:px-12 ${isHome ? 'bg-transparent' : 'bg-primary border-b border-white/5'}`}>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-12">
            <LanguageSwitcher />
            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => handleScroll('hero-section')} 
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isHome ? 'text-white/70 hover:text-white' : 'text-white'}`}
              >
                {t('accueil')}
              </button>
              <button onClick={() => handleScroll('concept-section')} className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">{t('concept')}</button>
              <button onClick={() => handleScroll('menu-section')} className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">{t('menu')}</button>
              <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-accent-gold transition-colors">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {t('localisation')}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => handleScroll('gallery-section')} className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-white transition-colors">{t('galerie')}</button>
              <button onClick={() => handleScroll('location-section')} className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-white transition-colors">{t('contact')}</button>
            </div>
            <button 
              onClick={() => setIsReserveOpen(true)}
              className="bg-accent-gold text-primary text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 rounded hover:bg-white transition-all shadow-lg active:scale-95"
            >
              {t('reserver')}
            </button>
          </div>
        </div>
      </nav>

      {/* Reservation Modal */}
      {isReserveOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsReserveOpen(false)}
          ></div>
          <div className="relative bg-primary border border-accent-gold/30 rounded-2xl w-full max-w-md overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-accent-gold text-3xl">restaurant_menu</span>
              </div>
              <h3 className="text-white text-3xl font-serif font-bold mb-2">{t('reserver')}</h3>
              
              <div className="space-y-6 mt-8">
                <a 
                  href={`tel:${CONTACT_INFO.phoneNumber.replace(/\s/g, '')}`}
                  className="group flex flex-col items-center p-6 bg-white/5 hover:bg-accent-gold/10 border border-white/5 hover:border-accent-gold/30 rounded-xl transition-all"
                >
                  <span className="material-symbols-outlined text-accent-gold mb-3 group-hover:scale-110 transition-transform">call</span>
                  <span className="text-white text-lg font-bold" dir="ltr">{CONTACT_INFO.phoneNumber}</span>
                  <span className="text-accent-gold/60 text-[10px] uppercase tracking-widest mt-1">{t('call_to_reserve')}</span>
                </a>

                <a 
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-xl hover:border-accent-gold/30 transition-all"
                >
                  <span className="material-symbols-outlined text-accent-gold mb-3">location_on</span>
                  <span className="text-white text-sm text-center leading-relaxed px-4">{CONTACT_INFO.address}</span>
                </a>
              </div>

              <button 
                onClick={() => setIsReserveOpen(false)}
                className="mt-8 text-white/40 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                {t('close')}
              </button>
            </div>
            <div className="h-1 bg-accent-gold w-full"></div>
          </div>
        </div>
      )}

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
           <div className="space-y-4">
             <h2 className="text-xl font-bold tracking-widest uppercase">Anwal</h2>
             <p className="text-xs text-white/40 leading-relaxed font-serif italic">{t('footer_tag')}</p>
           </div>
           <div>
             <h4 className="text-[10px] font-bold tracking-widest uppercase text-accent-gold mb-6">Exploration</h4>
             <ul className="text-xs space-y-3 text-white/60">
               <li><button onClick={() => handleScroll('hero-section')}>{t('accueil')}</button></li>
               <li><button onClick={() => handleScroll('concept-section')}>{t('concept')}</button></li>
               <li><button onClick={() => handleScroll('menu-section')}>{t('menu')}</button></li>
             </ul>
           </div>
           <div>
             <h4 className="text-[10px] font-bold tracking-widest uppercase text-accent-gold mb-6">{t('contact')}</h4>
             <ul className="text-xs space-y-3 text-white/60">
               <li className="flex items-center justify-center md:justify-start gap-2 text-center md:text-left">
                 <span className="material-symbols-outlined text-sm text-accent-gold shrink-0">location_on</span>
                 <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">{CONTACT_INFO.address}</a>
               </li>
               <li className="flex items-center justify-center md:justify-start gap-2" dir="ltr">
                 <span className="material-symbols-outlined text-sm text-accent-gold shrink-0">call</span>
                 <a href={`tel:${CONTACT_INFO.phoneNumber.replace(/\s/g, '')}`} className="hover:text-accent-gold transition-colors">{CONTACT_INFO.phoneNumber}</a>
               </li>
             </ul>
           </div>
           <div>
             <h4 className="text-[10px] font-bold tracking-widest uppercase text-accent-gold mb-6">Social</h4>
             <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href={CONTACT_INFO.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all group"
                  title="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={CONTACT_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all group"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={CONTACT_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-accent-gold border border-primary flex items-center justify-center hover:bg-white hover:text-primary transition-all group"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.98-.511-5.725-1.483l-6.272 1.702zm6.186-3.535l.345.205c1.554.922 3.341 1.409 5.176 1.409 5.565 0 10.088-4.521 10.088-10.088 0-2.697-1.051-5.232-2.959-7.141-1.908-1.908-4.443-2.959-7.132-2.959-5.565 0-10.088 4.521-10.088 10.088 0 1.909.527 3.765 1.524 5.39l.235.385-1.004 3.666 3.756-.919zM17.43 14.87c-.34-.17-2.01-1.003-2.324-1.117-.314-.114-.543-.17-.771.17-.228.34-.885 1.117-1.085 1.343-.2.227-.4.255-.74.085-.34-.17-1.436-.53-2.735-1.688-1.01-.902-1.692-2.016-1.891-2.356-.2-.34-.022-.523.148-.693.153-.153.34-.4.51-.595.17-.195.228-.34.34-.567.114-.227.057-.425-.028-.595-.085-.17-.771-1.859-1.056-2.548-.278-.67-.56-.58-.771-.591-.199-.01-.427-.012-.656-.012-.228 0-.599.085-.913.425-.314.34-1.198 1.173-1.198 2.86 0 1.688 1.227 3.318 1.398 3.545.17.227 2.415 3.688 5.849 5.168.817.352 1.454.562 1.95.72.82.261 1.567.224 2.158.136.658-.098 2.01-.822 2.295-1.615.285-.793.285-1.473.2-.16-.085-.17-.314-.34z"/>
                  </svg>
                </a>
             </div>
           </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-accent-gold text-primary rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.4)] border-4 border-primary hover:scale-110 transition-all active:scale-95 group"
        title="WhatsApp"
      >
        <div className="relative">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.98-.511-5.725-1.483l-6.272 1.702zm6.186-3.535l.345.205c1.554.922 3.341 1.409 5.176 1.409 5.565 0 10.088-4.521 10.088-10.088 0-2.697-1.051-5.232-2.959-7.141-1.908-1.908-4.443-2.959-7.132-2.959-5.565 0-10.088 4.521-10.088 10.088 0 1.909.527 3.765 1.524 5.39l.235.385-1.004 3.666 3.756-.919zM17.43 14.87c-.34-.17-2.01-1.003-2.324-1.117-.314-.114-.543-.17-.771.17-.228.34-.885 1.117-1.085 1.343-.2.227-.4.255-.74.085-.34-.17-1.436-.53-2.735-1.688-1.01-.902-1.692-2.016-1.891-2.356-.2-.34-.022-.523.148-.693.153-.153.34-.4.51-.595.17-.195.228-.34.34-.567.114-.227.057-.425-.028-.595-.085-.17-.771-1.859-1.056-2.548-.278-.67-.56-.58-.771-.591-.199-.01-.427-.012-.656-.012-.228 0-.599.085-.913.425-.314.34-1.198 1.173-1.198 2.86 0 1.688 1.227 3.318 1.398 3.545.17.227 2.415 3.688 5.849 5.168.817.352 1.454.562 1.95.72.82.261 1.567.224 2.158.136.658-.098 2.01-.822 2.295-1.615.285-.793.285-1.473.2-.16-.085-.17-.314-.34z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-primary"></span>
        </div>
      </a>
    </div>
  );
};
