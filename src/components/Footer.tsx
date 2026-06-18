import { MapPin, Phone, Clock, Instagram, Facebook, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 px-4 border-t border-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Branding summary block */}
        <div className="md:col-span-4 space-y-6">
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-red text-white">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.2)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coxinha Body */}
                <path
                  d="M12 5.5c1.3 3.6 6.3 7.6 6.3 11.5 0 2.8-2.8 4.2-6.3 4.2s-6.3-1.4-6.3-4.2c0-3.9 5-7.9 6.3-11.5z"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                
                {/* Crown Base & Spikes */}
                <path
                  d="M9.5 5.8c1 .5 3 .5 4 0l1-2c0 0-1 1-2 .7L12 1.7l-.5 2.8c-1 .3-2-.7-2-.7l1 2z"
                  fill="#FBBF24"
                  stroke="#D97706"
                  strokeWidth="0.65"
                  strokeLinejoin="round"
                />
                
                {/* Crown Spheres */}
                <circle cx="8.5" cy="3.5" r="0.65" fill="#FBBF24" stroke="#D97706" strokeWidth="0.4" />
                <circle cx="12" cy="1.7" r="0.8" fill="#FBBF24" stroke="#D97706" strokeWidth="0.4" />
                <circle cx="15.5" cy="3.5" r="0.65" fill="#FBBF24" stroke="#D97706" strokeWidth="0.4" />
                
                {/* Eyebrows */}
                <path d="M7.8 9.5c0.5-0.8 1.5-0.8 2 0" stroke="#7C2D12" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M14.2 9.5c0.5-0.8 1.5-0.8 2 0" stroke="#7C2D12" strokeWidth="0.8" strokeLinecap="round" />

                {/* Heart Eyes */}
                <path
                  d="M9.5,13.8 C8.7,13.0 8.0,12.2 8.0,11.5 C8.0,10.9 8.5,10.4 9.1,10.4 C9.5,10.4 9.8,10.6 10.0,11.0 C10.2,10.6 10.5,10.4 10.9,10.4 C11.5,10.4 12.0,10.9 12.0,11.5 C12.0,12.2 11.3,13.0 10.0,13.8 ZM14.5,13.8 C13.7,13.0 13.0,12.2 13.0,11.5 C13.0,10.9 13.5,10.4 14.1,10.4 C14.5,10.4 14.8,10.6 15.0,11.0 C15.2,10.6 15.5,10.4 15.9,10.4 C16.5,10.4 17.0,10.9 17.0,11.5 C17.0,12.2 16.3,13.0 15.0,13.8 Z"
                  fill="#EF4444"
                  stroke="#7F1D1D"
                  strokeWidth="0.4"
                />

                {/* Happy Smile */}
                <path d="M9.5 15.2c1.2 1.8 3.8 1.8 5 0" stroke="#7C2D12" strokeWidth="1" strokeLinecap="round" />
                <path d="M9 15.3c0.3 0.4 0.6 0.3 0.6 0.3" stroke="#7C2D12" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M15 15.3c-0.3 0.4 -0.6 0.3 -0.6 0.3" stroke="#7C2D12" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-display font-extrabold tracking-tight text-lg leading-none">
              <span className="text-brand-red">Big</span>
              <span className="text-brand-yellow">-Gula</span>
            </span>
          </a>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
            Trazendo sabor e felicidade para as famílias de Itapetininga - SP com deliciosas coxinhas crocantes, bolinhas de queijo irresistíveis e os salgados fritos na hora mais gostosos da cidade.
          </p>
          
          {/* Social connections */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/lanchonetebiggula/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={getWhatsAppLink('Olá Big-Gula! Acessei seu site e adorei.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 text-neutral-400 hover:text-brand-yellow flex items-center justify-center transition-all hover:scale-105"
            >
              {/* WhatsApp custom icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.091-2.884-6.953C16.59 1.96 14.12 1.037 11.498 1.037c-5.437 0-9.863 4.414-9.866 9.831-.001 1.745.47 3.447 1.365 4.931l-.98 3.57 3.665-.961zm11.921-7.73c-.237-.12-.139-.324-.71-.601-.57-.278-1.424-.702-1.642-.782-.218-.08-.376-.12-.533.12-.158.24-.61.782-.749.938-.139.156-.278.176-.515.056-.237-.12-.103-.377-.103-.377a8.411 8.411 0 01-1.921-1.187c-.642-.553-1.082-1.233-1.209-1.453-.127-.22-.014-.34.105-.458.107-.107.237-.278.356-.417.12-.139.158-.238.238-.396.08-.158.04-.298-.02-.417-.06-.12-.533-1.277-.73-1.754-.191-.462-.385-.399-.533-.407l-.454-.008c-.158 0-.417.06-.634.298-.218.238-.832.812-.832 1.98s.852 2.298.97 2.458c.12.16 1.678 2.563 4.062 3.593 1.902.822 2.658.823 3.601.684.577-.085 1.424-.582 1.623-1.144.198-.564.198-1.052.138-1.152-.06-.119-.218-.198-.456-.317z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Categories helper indicators */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="font-display font-bold text-sm tracking-wider text-neutral-200 uppercase">Nosso Cardápio</h3>
          <ul className="text-xs sm:text-sm text-neutral-400 space-y-2.5 font-sans">
            <li><a href="#cardapio" className="hover:text-white transition-colors">🥐 Salgados Fritos na Hora</a></li>
            <li><a href="#cardapio" className="hover:text-white transition-colors">✨ Combos Especiais</a></li>
            <li><a href="#cardapio" className="hover:text-white transition-colors">🥤 Bebidas Geladas</a></li>
          </ul>
        </div>

        {/* Contact list details */}
        <div className="md:col-span-5 space-y-4">
          <h3 className="font-display font-bold text-sm tracking-wider text-neutral-200 uppercase">Fale Conosco</h3>
          <ul className="text-xs sm:text-sm text-neutral-400 space-y-3.5 font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-red shrink-0" />
              <span>Av. Peixoto Gomide, 20 - Centro, Itapetininga - SP, 18200-160</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-brand-red shrink-0" />
              <div className="space-y-1">
                <span>Atendimento & Encomendas:</span>
                <span className="block font-extrabold text-white text-sm">(15) 99257-2005</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-brand-red shrink-0" />
              <span>Seg a Sex: 08:00 às 18:00 | Sáb: 08:00 às 16:00 | Dom: Fechado</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copy footer section */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-500 font-mono flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Lanchonete Big-Gula. Todos os direitos reservados. Itapetininga/SP.</p>
        <p className="flex items-center gap-1.5">
          <span>Feito com</span>
          <span className="text-brand-red text-xs">♥</span>
          <span>para nossos clientes</span>
        </p>
      </div>
    </footer>
  );
}
