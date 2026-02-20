import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  FR: {
    accueil: "Accueil",
    concept: "Notre Concept",
    menu: "Menu",
    localisation: "Localisation",
    galerie: "Galerie",
    contact: "Contact",
    reserver: "Commander ici",
    hero_tag: "L'excellence de la fusion italo-marocaine",
    hero_quote: '"Une symphonie culinaire où chaque note célèbre l\'union de deux rives."',
    discover_btn: "Découvrir la carte",
    our_menu: "Notre Menu",
    footer_tag: '"L’excellence culinaire entre deux cultures."',
    feat_1_title: "Saveurs Authentiques",
    feat_1_desc: "Le mariage parfait entre la richesse des épices marocaines et la finesse italienne.",
    feat_2_title: "Art du Café",
    feat_2_desc: "Une sélection de grains torréfiés with soin pour un espresso digne de Rome.",
    feat_3_title: "Hospitalité",
    feat_3_desc: "Un accueil chaleureux qui transforme chaque repas en un moment de partage.",
    find_us: "Nous Trouver",
    open_7j: "Ouvert 7j/7",
    close: "Fermer",
    call_to_reserve: "Cliquez pour appeler",
    cat_salades: "Salades",
    cat_burger: "Burgers",
    cat_alacarte: "À La Carte",
    cat_omelettes: "Omelettes",
    cat_boissons: "Boissons Chaudes",
    cat_frapp: "Frappoccino",
    cat_plats: "Plats de Semaine",
    social_heading: "SOCIAL"
  },
  AR: {
    accueil: "الرئيسية",
    concept: "مفهومنا",
    menu: "القائمة",
    localisation: "موقعنا",
    galerie: "المعرض",
    contact: "اتصل بنا",
    reserver: "اطلب هنا",
    hero_tag: "تميز المزيج الإيطالي المغربي",
    hero_quote: '"سيمفونية طهي تحتفل بكل نغمة تجمع بين ضفتين."',
    discover_btn: "اكتشف القائمة",
    our_menu: "قائمتنا",
    footer_tag: '"التميز في الطهي بين ثقافتين."',
    feat_1_title: "نكهات أصيلة",
    feat_1_desc: "مزيج مثالي بين ثراء التوابل المغربية واللمسة الإيطالية الراقية.",
    feat_2_title: "فن القهوة",
    feat_2_desc: "مجموعة مختارة من الحبوب المحمصة بعناية لإسبريسو يستحق روما.",
    feat_3_title: "الضيافة",
    feat_3_desc: "ترحيب حار يحول كل وجبة إلى لحظة مشاركة لا تنسى.",
    find_us: "تجدوننا هنا",
    open_7j: "مفتوح 7/7 أيام",
    close: "إغلاق",
    call_to_reserve: "اضغط للاتصال",
    cat_salades: "سلطات",
    cat_burger: "برجر",
    cat_alacarte: "على القائمة",
    cat_omelettes: "أومليت",
    cat_boissons: "مشروبات ساخنة",
    cat_frapp: "فرابتشينو",
    cat_plats: "أطباق الأسبوع",
    social_heading: "تواصلوا معنا"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('FR');

  useEffect(() => {
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
};