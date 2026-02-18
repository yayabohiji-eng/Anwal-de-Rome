import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LanguageProvider, useLang } from './components/LanguageContext';
import { Category } from './types';
import { MENU_DATA, CONTACT_INFO } from './constants';

const MainLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <img 
        src="https://images.unsplash.com/vector-1771414260937-aaa3655c77cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" 
        alt="Anwal de Rome Logo"
        className="w-full h-auto object-contain animate-in fade-in zoom-in duration-1000 drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      />
    </div>
  );
};

const GallerySection = () => {
  const { t } = useLang();
  
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1771243740274-1b9c9965dc41?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "L'Art du Café" },
    { url: "https://images.unsplash.com/photo-1771412056105-12889c351e0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D", title: "Pastilla Traditionnelle" },
    { url: "https://images.unsplash.com/photo-1771245135800-a7cb3d8ae119?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tajines Authentiques" },
    { url: "https://images.unsplash.com/photo-1771246040622-5ae8867abb9c?q=80&w=324&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Petit-déjeuner" },
    { url: "https://images.unsplash.com/vector-1771261647799-4faa8dd1ae0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D", title: "Couscous Royal" },
    { url: "https://images.unsplash.com/vector-1771262237201-2d14b2279721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D", title: "Pizzas Artisanales" },
  ];

  return (
    <section id="gallery-section" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-gold text-[10px] font-bold tracking-[0.5em] uppercase block">Capturer l'instant</span>
          <h2 className="text-primary text-4xl md:text-5xl font-serif font-bold">{t('galerie')}</h2>
          <div className="h-0.5 w-16 bg-accent-gold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-2xl shadow-xl aspect-square md:aspect-auto h-64 md:h-[400px] ${i % 3 === 1 ? 'md:translate-y-12' : ''}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] border border-white/30 px-4 py-2">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const { t, lang } = useLang();
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALACARTE);
  
  const images = [
    "https://images.unsplash.com/vector-1771266661187-63be5930ef6a?w=1000&auto=format&fit=crop&q=80", 
    "https://images.unsplash.com/vector-1771273419397-b8f30af908e3?w=1000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
    "https://images.unsplash.com/vector-1771273892611-bbf1baad5d8d?w=1000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredItems = MENU_DATA.filter(item => item.category === activeCategory);

  const getCategoryTranslation = (cat: Category) => {
    switch(cat) {
      case Category.SALADES: return t('cat_salades');
      case Category.BURGER: return t('cat_burger');
      case Category.ALACARTE: return t('cat_alacarte');
      case Category.OMELETTES: return t('cat_omelettes');
      case Category.BOISSONS_CHAUDES: return t('cat_boissons');
      case Category.FRAPPOCCINO: return t('cat_frapp');
      case Category.PLAT_DE_SEMAINE: return t('cat_plats');
      default: return cat;
    }
  };

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 mb-12 animate-in zoom-in duration-1000">
           <MainLogo className="w-[280px] md:w-[600px]" />
        </div>

        <div className="relative z-20 text-center max-w-4xl px-4 animate-in slide-in-from-bottom-12 duration-1000 delay-500">
          <span className="text-[11px] md:text-[13px] font-bold tracking-[0.7em] uppercase text-white block mb-8 drop-shadow-md">
            {t('hero_tag')}
          </span>
          <p className="text-xl md:text-3xl text-white font-serif italic leading-relaxed mb-12 max-w-3xl mx-auto drop-shadow-xl">
            {t('hero_quote')}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center bg-accent-gold text-primary font-bold tracking-widest uppercase px-10 py-5 rounded shadow-2xl hover:bg-white hover:text-primary transition-all active:scale-95"
            >
              {t('discover_btn')}
              <span className="material-symbols-outlined ml-3 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept-section" className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {[
            { icon: 'restaurant', title: t('feat_1_title'), desc: t('feat_1_desc') },
            { icon: 'coffee', title: t('feat_2_title'), desc: t('feat_2_desc') },
            { icon: 'groups', title: t('feat_3_title'), desc: t('feat_3_desc') },
          ].map((feat, i) => (
            <div key={i} className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-accent-gold text-3xl">{feat.icon}</span>
              </div>
              <h3 className="text-primary dark:text-white text-xl font-serif font-bold">{feat.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className={`flex flex-col lg:flex-row min-h-screen bg-primary ${lang === 'AR' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <aside className="w-full lg:w-1/3 p-8 md:p-12 lg:p-20 flex flex-col justify-start lg:sticky lg:top-0 lg:h-screen z-20">
          <div className="mb-12 space-y-4">
            <span className="text-accent-gold text-[10px] font-bold tracking-[0.5em] uppercase block">{t('our_menu')}</span>
            <h2 className="text-white text-4xl lg:text-6xl font-serif font-bold italic">Anwal de Rome</h2>
          </div>
          
          <nav className="flex flex-wrap lg:flex-col gap-3">
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-4 rounded-xl border text-[11px] font-bold tracking-widest uppercase transition-all text-left ${
                  activeCategory === cat 
                    ? 'bg-accent-gold border-accent-gold text-primary shadow-2xl scale-105' 
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white bg-white/5'
                }`}
              >
                {getCategoryTranslation(cat)}
              </button>
            ))}
          </nav>
        </aside>

        <main className={`flex-1 bg-brand-cream p-8 md:p-16 lg:p-24 shadow-[-50px_0_100px_rgba(0,0,0,0.5)] z-10 ${lang === 'AR' ? 'lg:rounded-r-[100px]' : 'lg:rounded-l-[100px]'}`}>
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500" key={activeCategory}>
            <div className="mb-16 border-b border-primary/10 pb-8">
              <h3 className="text-primary text-3xl lg:text-5xl font-serif font-bold uppercase tracking-tight">
                {getCategoryTranslation(activeCategory)}
              </h3>
              <div className="h-1 w-24 bg-accent-gold mt-6"></div>
            </div>

            <div className="space-y-12">
              {filteredItems.map((item) => (
                <div key={item.id} className="group flex justify-between items-start gap-8 pb-10 border-b border-primary/5 last:border-0">
                  <div className="space-y-2 flex-1">
                    <h4 className="text-xl lg:text-2xl font-bold text-primary group-hover:text-accent-gold transition-colors duration-300">
                      {lang === 'AR' ? item.nameAr : item.name}
                    </h4>
                    <p className="text-sm lg:text-base text-slate-500 italic leading-relaxed max-w-lg">
                      {lang === 'AR' ? item.descriptionAr || item.description : item.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-accent-gold font-black text-xl lg:text-2xl whitespace-nowrap shadow-sm" dir="ltr">
                      {item.price}
                    </span>
                    <div className="mt-2 h-px w-full bg-accent-gold/20"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 p-10 bg-primary rounded-3xl text-center shadow-xl">
               <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">restaurant_menu</span>
               <p className="text-white/70 text-sm font-serif italic">{t('footer_tag')}</p>
            </div>
          </div>
        </main>
      </section>

      <GallerySection />
      
      {/* Location Section */}
      <section id="location-section" className="py-24 bg-white dark:bg-background-dark px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-primary dark:text-white text-4xl md:text-5xl font-serif font-bold">{t('find_us')}</h2>
             <div className="h-0.5 w-16 bg-accent-gold mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 p-10 bg-brand-cream dark:bg-primary/20 rounded-3xl border border-primary/5">
              <a 
                href={CONTACT_INFO.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 group hover:bg-accent-gold/5 p-4 rounded-2xl transition-all"
              >
                <span className="material-symbols-outlined text-accent-gold text-3xl group-hover:scale-110 transition-transform">location_on</span>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2">{t('localisation')}</h4>
                  <p className="text-slate-500 dark:text-slate-400">{CONTACT_INFO.address}</p>
                  <span className="text-accent-gold text-[10px] font-bold uppercase tracking-widest mt-2 block">Voir sur Google Maps</span>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4">
                <span className="material-symbols-outlined text-accent-gold text-3xl">schedule</span>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2">{t('contact')}</h4>
                  <p className="text-slate-500 dark:text-slate-400" dir="ltr">{CONTACT_INFO.openingHours}</p>
                  <p className="text-accent-gold text-xs font-bold mt-2 uppercase tracking-widest">{t('open_7j')}</p>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://maps.google.com/maps?q=Anwal%20de%20Rome%20Guelmim&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
};

export default App;