
export enum Category {
  ALACARTE = 'À La Carte',
  PLAT_DE_SEMAINE = 'Plat de Semaine',
  OMELETTES = 'Omelettes',
  BURGER = 'Burger',
  SALADES = 'Salades',
  BOISSONS_CHAUDES = 'Boissons Chaudes',
  FRAPPOCCINO = 'Frappoccino'
}

export type Language = 'FR' | 'AR';

export interface MenuItem {
  id: string;
  name: string;
  nameAr: string;
  price: string;
  description: string;
  descriptionAr?: string;
  image?: string;
  category: Category;
  tags?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
