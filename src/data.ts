import { Category, Product, Testimonial, GalleryItem } from './types';
import brazilImg from './assets/images/brazil_salgados_frescos_1781793373388.jpg';
import bolinhaImg from './assets/images/bolinha_de_queijo_1781794199358.jpg';
import kibeImg from './assets/images/kibe_recheado_cremoso_1781794606668.jpg';
import enroladinhoImg from './assets/images/enroladinho_presunto_queijo_1781794768549.jpg';
import miniFestaImg from './assets/images/mini_salgados_festa_1781795424954.jpg';

export const CATEGORIES: Category[] = [
  { id: 'salgados', name: 'Salgados', iconName: 'Croissant' },
  { id: 'combos', name: 'Combos Especiais', iconName: 'Sparkles' },
  { id: 'bebidas', name: 'Bebidas', iconName: 'CupSoda' },
];

export const PRODUCTS: Product[] = [
  // SALGADOS
  {
    id: 's1',
    name: 'Coxinha de Frango com Catupiry',
    description: 'Nossa coxinha campeã! Massa de batata super leve, recheada com peito de frango desfiado temperado com ervas e o legítimo Catupiry. Super crocante e sequinha.',
    price: 'R$ 8,00',
    category: 'salgados',
    image: brazilImg,
    popular: true,
  },
  {
    id: 's2',
    name: 'Bolinha de Queijo',
    description: 'Clássico imbatível que todo mundo ama! Crosta dourada e crocante recheada com bastante queijo muçarela bem derretido e temperado com orégano fresco.',
    price: 'R$ 8,00',
    category: 'salgados',
    image: bolinhaImg,
  },
  {
    id: 's3',
    name: 'Kibe Especial com Recheio Cremoso',
    description: 'Kibe tradicional de carne bovina moída de primeira, temperado com hortelã fresco e especiarias, recheado com queijo cremoso estilo requeijão.',
    price: 'R$ 8,50',
    category: 'salgados',
    image: kibeImg,
  },
  {
    id: 's4',
    name: 'Enroladinho de Presunto e Queijo',
    description: 'Receita caseira com massa salgada fofinha recheada com generosas fatias de presunto cozido premium e muçarela, frito na hora ou assado sob encomenda.',
    price: 'R$ 8,00',
    category: 'salgados',
    image: enroladinhoImg,
  },

  // BEBIDAS
  {
    id: 'b1',
    name: 'Refrigerante Lata Trincando',
    description: 'Coca-Cola (Normal ou Zero), Guaraná Antarctica, Sprite ou Fanta Laranja de 350ml. Sempre na temperatura perfeita.',
    price: 'R$ 6,00',
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b2',
    name: 'Suco Natural do Pé (500ml)',
    description: 'Suco de Laranja ou Limão espremido na hora com frutas super frescas. Energético, natural e sem conservantes.',
    price: 'R$ 8,50',
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b3',
    name: 'Cerveja Lata Especial',
    description: 'Heineken, Spaten ou Amstel lata trincando de gelada para acompanhar seus salgados favoritos.',
    price: 'R$ 8,00',
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800',
  },

  // COMBOS
  {
    id: 'c1',
    name: 'Combo Cento de Salgadinhos Festa',
    description: 'A diversão completa em família ou comemorações! 100 mini-salgados variados fritos na hora (coxinhas, bolinhas de queijo, kibes, enroladinhos) bem quentinhos + Coca-Cola de 2 Litros trincando de gelada.',
    price: 'R$ 95,00',
    category: 'combos',
    image: miniFestaImg,
    popular: true,
  },
  {
    id: 'c2',
    name: 'Combo Lanche Individual',
    description: 'Para aquele lanche rápido perfeito! 2 salgados grandes sequinhos à sua escolha (Coxinha, Kibe ou Enroladinho) + 1 Coca-Cola Lata de 350ml trincando de gelada.',
    price: 'R$ 20,00',
    category: 'combos',
    image: enroladinhoImg,
  },
  {
    id: 'c3',
    name: 'Super Combo Festa (20 Salgados)',
    description: 'Quer fazer a festa? 20 minisalgados fritos na hora, variados e super crocantes (coxinhas, bolinhas de queijo, kibe) + 1 Coca-Cola Lata à sua escolha.',
    price: 'R$ 29,90',
    category: 'combos',
    image: miniFestaImg,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mateus Oliveira',
    text: 'Sabor impecável! O melhor salgado de Itapetininga de longe. A coxinha de frango com Catupiry é simplesmente indescritível, super sequinha por fora e muito cremosa por dentro. Atendimento nota 10.',
    rating: 5,
    role: 'Cliente Local Guide',
  },
  {
    id: 't2',
    name: 'Fernanda Lima',
    text: 'Lugar super agradável, bem localizado na Peixoto Gomide. O atendimento no balcão é muito simpático e os salgados estão sempre quentinhos, com a massa sequinha e muito recheio. O enroladinho de presunto e queijo é o meu favorito!',
    rating: 5,
    role: 'Cliente Assídua',
  },
  {
    id: 't3',
    name: 'Rodrigo Santos',
    text: 'Comida de primeiríssima qualidade com preços muito justos. Os combos de mini salgados são o melhor custo-benefício de Itapetininga. Recomendo de olhos fechados pra juntar a família no fim de semana!',
    rating: 5,
    role: 'Cliente Fiel',
  },
];

export const HIGHLIGHTS = [
  {
    title: 'Salgados Sequinhos',
    subtitle: 'O Melhor Salgado da Cidade',
    description: 'Fritos na hora, sequinhos e recheados até a borda de verdade.',
    image: brazilImg,
    badge: 'Fritura na Hora',
    whatsappText: 'Olá! Gostaria de pedir alguns salgados sequinhos e quentinhos.',
  },
  {
    title: 'Mini Salgados Especiais',
    subtitle: 'Perfeitos para Sua Festa ou Evento',
    description: 'Coxinhas, bolinhas de queijo e kibes em tamanho miniatura, fritos na hora sob encomenda e entregues bem crocantes.',
    image: miniFestaImg,
    badge: 'Festa & Eventos',
    whatsappText: 'Olá! Gostaria de encomendar mini salgados para uma confraternização.',
  },
  {
    title: 'Combos de Encher os Olhos',
    subtitle: 'Salgados Quentinhos + Bebida Gelada',
    description: 'Selecione nossos combos familiares ou individuais de salgados fritos na hora para economizar e saborear a melhor qualidade.',
    image: miniFestaImg,
    badge: 'Melhor Custo-Benefício',
    whatsappText: 'Olá! Gostaria de encomendar um Combo Festa com salgados e refrigerante.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    url: brazilImg,
    title: 'Nossos Salgados Clássicos',
    category: 'Salgados',
  },
  {
    id: 'g2',
    url: bolinhaImg,
    title: 'Bolinha de Queijo Stretchy',
    category: 'Salgados',
  },
  {
    id: 'g3',
    url: kibeImg,
    title: 'Kibe Especial com Recheio Cremoso',
    category: 'Salgados',
  },
  {
    id: 'g4',
    url: enroladinhoImg,
    title: 'Enroladinhos Assados Quentes',
    category: 'Salgados',
  },
  {
    id: 'g5',
    url: miniFestaImg,
    title: 'Mini Salgadinhos para Eventos',
    category: 'Combos',
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800',
    title: 'Sucos Naturais e Refrescantes',
    category: 'Bebidas',
  },
];
