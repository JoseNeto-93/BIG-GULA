export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'salgados' | 'lanches' | 'hamburgueres' | 'porcoes' | 'bebidas' | 'combos';
  image: string;
  popular?: boolean;
}

export interface Category {
  id: 'salgados' | 'lanches' | 'hamburgueres' | 'porcoes' | 'bebidas' | 'combos';
  name: string;
  iconName: string; // Lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  role: string | null;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}
