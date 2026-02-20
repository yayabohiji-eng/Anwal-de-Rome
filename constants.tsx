
import { Category, MenuItem } from './types';

export const CONTACT_INFO = {
  phoneNumber: "+212 6 76 65 11 81",
  address: "Avenue Hassan II, Guelmim 81000, Maroc",
  mapsUrl: "https://maps.app.goo.gl/RdDAJFyN2TrXGuXR9",
  facebookUrl: "https://www.facebook.com/Anwalderome",
  instagramUrl: "https://www.instagram.com/anwal_de_rome/",
  whatsappUrl: "https://wa.me/212676651181",
  openingHours: "Lun - Dim : 08:00 - 23:30"
};

export const MENU_DATA: MenuItem[] = [
  // SALADES
  { 
    id: 'sal1', 
    category: Category.SALADES, 
    name: "Anwal de Rome", 
    nameAr: "أنوال دي روما", 
    price: "60 DH", 
    description: "Crevette, calamar, fromage, carotte, avocat, mangue, oeuf, ananas" 
  },
  { 
    id: 'sal2', 
    category: Category.SALADES, 
    name: "Fruit de Mer", 
    nameAr: "فواكه البحر", 
    price: "55 DH", 
    description: "Sepia, crevette, surimi, poivron, moules" 
  },
  { 
    id: 'sal3', 
    category: Category.SALADES, 
    name: "Niçoise", 
    nameAr: "نيسواز", 
    price: "40 DH", 
    description: "Pomme de terre, betterave, haricot vert, carotte, tomates, cucumber, thon, mais" 
  },
  { 
    id: 'sal4', 
    category: Category.SALADES, 
    name: "Salade César", 
    nameAr: "سلطة سيزر", 
    price: "50 DH", 
    description: "Fromage, anchois, croutons, salade verte, poulet, tomates cerises, sauce vinaigrette" 
  },
  { 
    id: 'sal5', 
    category: Category.SALADES, 
    name: "Salade Marocaine", 
    nameAr: "سلطة مغربية", 
    price: "20 DH", 
    description: "Tomates, oignon, poivrons" 
  },

  // BURGER
  { id: 'brg1', category: Category.BURGER, name: "Cheeseburger", nameAr: "تشيز برجر", price: "30 DH", description: "Pain brioché, steak haché, cheddar, sauce maison" },
  { id: 'brg2', category: Category.BURGER, name: "Egg Burger", nameAr: "إيغ برجر", price: "35 DH", description: "Burger classique avec œuf au plat" },
  { id: 'brg3', category: Category.BURGER, name: "Double Burger", nameAr: "دوبل برجر", price: "40 DH", description: "Double steak, double fromage" },
  { id: 'brg4', category: Category.BURGER, name: "Chicken Burger", nameAr: "برجر دجاج", price: "30 DH", description: "Filet de poulet pané, laitue, sauce mayo" },

  // A LA CARTE
  { id: 'alc1', category: Category.ALACARTE, name: "Amlou", nameAr: "أملو", price: "6 DH", description: "" },
  { id: 'alc2', category: Category.ALACARTE, name: "Miel", nameAr: "عسل", price: "6 DH", description: "" },
  { id: 'alc3', category: Category.ALACARTE, name: "Huile d’olive", nameAr: "زيت زيتون", price: "6 DH", description: "" },
  { id: 'alc4', category: Category.ALACARTE, name: "Beurre", nameAr: "زبدة", price: "5 DH", description: "" },
  { id: 'alc5', category: Category.ALACARTE, name: "Nutella", nameAr: "نوتيلا", price: "5 DH", description: "" },
  { id: 'alc6', category: Category.ALACARTE, name: "Jben", nameAr: "جبن", price: "5 DH", description: "" },
  { id: 'alc7', category: Category.ALACARTE, name: "Confiture", nameAr: "مربى", price: "3 DH", description: "" },
  { id: 'alc8', category: Category.ALACARTE, name: "Olive noir", nameAr: "زيتون أسود", price: "3 DH", description: "" },
  { id: 'alc9', category: Category.ALACARTE, name: "Fromage rouge", nameAr: "فرماج أحمر", price: "5 DH", description: "" },
  { id: 'alc10', category: Category.ALACARTE, name: "Dinde fumé", nameAr: "ديك رومي مدخن", price: "8 DH", description: "" },

  // OMELETTES
  { id: 'om1', category: Category.OMELETTES, name: "Nature", nameAr: "أومليت عادية", price: "14 DH", description: "Omelette 3 œufs nature" },
  { id: 'om2', category: Category.OMELETTES, name: "Crevette", nameAr: "أومليت بالقمرون", price: "25 DH", description: "Omelette aux crevettes fraîches" },
  { id: 'om3', category: Category.OMELETTES, name: "Fromage", nameAr: "أومليت بالفرماج", price: "20 DH", description: "Omelette au fromage fondu" },
  { id: 'om4', category: Category.OMELETTES, name: "Charcuterie", nameAr: "أومليت بالكاشير", price: "22 DH", description: "Omelette à la charcuterie" },
  { id: 'om5', category: Category.OMELETTES, name: "Khlii", nameAr: "أومليت بالخليع", price: "20 DH", description: "Omelette traditionnelle au Khlii" },
  { id: 'om6', category: Category.OMELETTES, name: "Tomate", nameAr: "أومليت بمطيشة", price: "20 DH", description: "Omelette à la sauce tomate" },

  // BOISSONS CHAUDES
  { id: 'bc1', category: Category.BOISSONS_CHAUDES, name: "Café Noire", nameAr: "قهوة سوداء", price: "13 DH", description: "" },
  { id: 'bc2', category: Category.BOISSONS_CHAUDES, name: "Café Crème", nameAr: "قهوة حليب", price: "13 DH", description: "" },
  { id: 'bc3', category: Category.BOISSONS_CHAUDES, name: "Cappuccino Italien", nameAr: "كابتشينو إيطالي", price: "25 DH", description: "" },
  { id: 'bc4', category: Category.BOISSONS_CHAUDES, name: "Chocolat Chaud", nameAr: "شوكولاتة ساخنة", price: "18 DH", description: "" },
  { id: 'bc5', category: Category.BOISSONS_CHAUDES, name: "Lait Chaud", nameAr: "حليب ساخن", price: "12 DH", description: "" },
  { id: 'bc6', category: Category.BOISSONS_CHAUDES, name: "Thé (Menthe / Chiba / Verveine)", nameAr: "شاي", price: "13 DH", description: "" },

  // FRAPPOCCINO
  { id: 'fr1', category: Category.FRAPPOCCINO, name: "Ice Coffee", nameAr: "قهوة باردة", price: "29 DH", description: "" },
  { id: 'fr2', category: Category.FRAPPOCCINO, name: "Ice Americano", nameAr: "أمريكانو بارد", price: "29 DH", description: "" },
  { id: 'fr3', category: Category.FRAPPOCCINO, name: "Moch Froid", nameAr: "موكا بارد", price: "29 DH", description: "" },
  { id: 'fr4', category: Category.FRAPPOCCINO, name: "Latte Froid", nameAr: "لاتيه بارد", price: "29 DH", description: "" },
  { id: 'fr5', category: Category.FRAPPOCCINO, name: "Espresso Froid", nameAr: "إسبريسو بارد", price: "29 DH", description: "" },
  { id: 'fr6', category: Category.FRAPPOCCINO, name: "Chocolat Frappuccino", nameAr: "شوكولاتة فرابتشينو", price: "29 DH", description: "" },
  { id: 'fr7', category: Category.FRAPPOCCINO, name: "Frappuccino", nameAr: "فرابتشينو", price: "29 DH", description: "" },

  // PLAT DE SEMAINE
  { id: 'pw1', category: Category.PLAT_DE_SEMAINE, name: "Lundi: Seffa Madfouna", nameAr: "الاثنين: سفة مدفونة", price: "45 DH", description: "" },
  { id: 'pw2', category: Category.PLAT_DE_SEMAINE, name: "Mardi: Viande de Chameau", nameAr: "الثلاثاء: لحم الجمل", price: "55 DH", description: "" },
  { id: 'pw3', category: Category.PLAT_DE_SEMAINE, name: "Mercredi: Rfissa Marocaine", nameAr: "الأربعاء: رفيسة مغربية", price: "55 DH", description: "" },
  { id: 'pw4', category: Category.PLAT_DE_SEMAINE, name: "Jeudi: Pastilla Poisson", nameAr: "الخميس: بسطيلة الحوت", price: "65 DH", description: "" },
  { id: 'pw5', category: Category.PLAT_DE_SEMAINE, name: "Vendredi: Couscous Marocain", nameAr: "الجمعة: كسكس مغربي", price: "50 DH", description: "" },
  { id: 'pw6', category: Category.PLAT_DE_SEMAINE, name: "Samedi: Pastilla de Poulet", nameAr: "السبت: بسطيلة الدجاج", price: "45 DH", description: "" },
  { id: 'pw7', category: Category.PLAT_DE_SEMAINE, name: "Dimanche: Poulet Coquellet", nameAr: "الأحد: دجاج كوكلي", price: "65 DH", description: "" },
];
