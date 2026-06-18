import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare, Clock, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Destaques', href: '#destaques' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      {/* Top micro bar for schedules and location */}
      <div className="bg-neutral-950 text-white text-[11px] sm:text-xs py-1.5 px-4 hidden sm:block border-b border-white/5 font-mono">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
              Av. Peixoto Gomide, 20 - Centro, Itapetininga/SP
            </span>
            <span className="h-3 w-px bg-neutral-800"></span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-brand-yellow" />
              Seg a Sex das 08:00 às 18:00 | Sáb das 08:00 às 16:00
            </span>
          </div>
          <a
            href={getWhatsAppLink('Olá! Gostaria de saber se vocês estão abertos hoje.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow hover:text-white transition-colors duration-200"
          >
            Fale Conosco: (15) 99257-2005
          </a>
        </div>
      </div>

      {/* Floating Header */}
      <header
        className={`fixed top-0 sm:top-9 left-0 right-0 z-50 transition-all duration-300 px-4 ${
          isScrolled
            ? 'sm:top-2'
            : 'sm:top-9'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-neutral-950/90 text-white shadow-xl border-b border-white/10 backdrop-blur-md px-6 py-3.5'
              : 'bg-white/95 text-neutral-900 shadow-md border border-neutral-100 backdrop-blur-md px-6 py-4.5'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-red text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.2)]"
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
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-yellow rounded-full animate-ping"></span>
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-extrabold tracking-tight text-xl leading-none flex items-center`}>
                  <span className={isScrolled ? 'text-white' : 'text-brand-red'}>Big</span>
                  <span className={isScrolled ? 'text-brand-yellow' : 'text-brand-yellow'}>-Gula</span>
                </span>
                <span className="text-[10px] tracking-widest font-mono text-neutral-400 uppercase leading-normal">Lanchonete</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isScrolled
                      ? 'text-neutral-300 hover:text-white'
                      : 'text-neutral-600 hover:text-neutral-950'
                  } group`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-brand-yellow' : 'bg-brand-red'
                    }`}
                  ></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={getWhatsAppLink('Olá Big-Gula! Acessei o site de vocês e gostaria de fazer um pedido.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 glow-effect hover:scale-105 active:scale-95 ${
                  isScrolled
                    ? 'bg-brand-yellow text-neutral-950 hover:bg-brand-yellow/90 glow-effect-yellow'
                    : 'bg-brand-red text-white hover:bg-brand-red/90 glow-effect-red'
                }`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.091-2.884-6.953C16.59 1.96 14.12 1.037 11.498 1.037c-5.437 0-9.863 4.414-9.866 9.831-.001 1.745.47 3.447 1.365 4.931l-.98 3.57 3.665-.961zm11.921-7.73c-.237-.12-.139-.324-.71-.601-.57-.278-1.424-.702-1.642-.782-.218-.08-.376-.12-.533.12-.158.24-.61.782-.749.938-.139.156-.278.176-.515.056-.237-.12-.103-.377-.103-.377a8.411 8.411 0 01-1.921-1.187c-.642-.553-1.082-1.233-1.209-1.453-.127-.22-.014-.34.105-.458.107-.107.237-.278.356-.417.12-.139.158-.238.238-.396.08-.158.04-.298-.02-.417-.06-.12-.533-1.277-.73-1.754-.191-.462-.385-.399-.533-.407l-.454-.008c-.158 0-.417.06-.634.298-.218.238-.832.812-.832 1.98s.852 2.298.97 2.458c.12.16 1.678 2.563 4.062 3.593 1.902.822 2.658.823 3.601.684.577-.085 1.424-.582 1.623-1.144.198-.564.198-1.052.138-1.152-.06-.119-.218-.198-.456-.317z" />
                </svg>
                Pedir Agora
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-neutral-950'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-neutral-950'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] sm:top-[120px] bg-neutral-950/98 z-40 lg:hidden flex flex-col p-6 backdrop-blur-lg"
          >
            <nav className="flex flex-col gap-5 text-lg font-display font-medium text-neutral-200 mt-4 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-neutral-800 pb-3 hover:text-brand-yellow transition-colors duration-200"
                >
                  <span>{link.name}</span>
                  <span className="text-neutral-500 font-mono text-xs">»</span>
                </a>
              ))}
            </nav>

            {/* Contact details inside mobile menu */}
            <div className="mt-auto space-y-4 text-xs font-mono text-neutral-400 border-t border-neutral-900 pt-6">
              <div className="flex gap-2.5">
                <MapPin className="text-brand-yellow w-4 h-4 shrink-0" />
                <span>Av. Peixoto Gomide, 20 - Centro, Itapetininga/SP</span>
              </div>
              <div className="flex gap-2.5">
                <Clock className="text-brand-yellow w-4 h-4 shrink-0" />
                <span>Seg a Sex: 08h às 18h | Sáb: 08h às 16h</span>
              </div>
              <a
                href={getWhatsAppLink('Olá Big-Gula! Gostaria de fazer um pedido.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-transform active:scale-95 text-sm"
              >
                Solicitar via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
