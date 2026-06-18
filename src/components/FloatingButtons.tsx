import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../utils';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    
    // Hide the little tooltip message after 8.5 seconds automatically
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8500);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = 'Olá Big-Gula! Estava navegando no site de vocês e gostaria de fazer uma encomenda para agora.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top Trigger button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-brand-red shadow-lg border border-white/10 hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Social nodes stack (Instagram) */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        href="https://www.instagram.com/lanchonetebiggula/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-neutral-900 hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg border border-white/10 hover:scale-110 transition-all pointer-events-auto"
        aria-label="Ir para Instagram"
      >
        <Instagram className="w-4 h-4" />
      </motion.a>

      {/* Social nodes stack (Facebook) */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-neutral-900 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg border border-white/10 hover:scale-110 transition-all pointer-events-auto"
        aria-label="Ir para Facebook"
      >
        <Facebook className="w-4 h-4 fill-current" />
      </motion.a>

      {/* Primary WhatsApp floating circle */}
      <div className="relative flex items-center pointer-events-auto">
        
        {/* Helper popup notification bubble */}
        <AnimatePresence>
          {showTooltip && (
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-16 bg-white text-neutral-900 font-sans font-medium text-xs py-2 px-3.5 rounded-2xl shadow-xl whitespace-nowrap border border-neutral-100 flex items-center gap-2 mr-1 select-none animate-bounce"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Faça seu pedido rápido! 😋
            </motion.a>
          )}
        </AnimatePresence>

        {/* Pulsing trigger core bubble */}
        <a
          href={getWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl relative hover:scale-108 active:scale-92 transition-all group cursor-pointer"
          aria-label="Pedir via WhatsApp"
        >
          {/* Animated decorative waves around */}
          <span className="absolute -inset-2 rounded-full bg-emerald-500/25 animate-ping pointer-events-none"></span>
          
          <svg className="w-7.5 h-7.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.091-2.884-6.953C16.59 1.96 14.12 1.037 11.498 1.037c-5.437 0-9.863 4.414-9.866 9.831-.001 1.745.47 3.447 1.365 4.931l-.98 3.57 3.665-.961zm11.921-7.73c-.237-.12-.139-.324-.71-.601-.57-.278-1.424-.702-1.642-.782-.218-.08-.376-.12-.533.12-.158.24-.61.782-.749.938-.139.156-.278.176-.515.056-.237-.12-.103-.377-.103-.377a8.411 8.411 0 01-1.921-1.187c-.642-.553-1.082-1.233-1.209-1.453-.127-.22-.014-.34.105-.458.107-.107.237-.278.356-.417.12-.139.158-.238.238-.396.08-.158.04-.298-.02-.417-.06-.12-.533-1.277-.73-1.754-.191-.462-.385-.399-.533-.407l-.454-.008c-.158 0-.417.06-.634.298-.218.238-.832.812-.832 1.98s.852 2.298.97 2.458c.12.16 1.678 2.563 4.062 3.593 1.902.822 2.658.823 3.601.684.577-.085 1.424-.582 1.623-1.144.198-.564.198-1.052.138-1.152-.06-.119-.218-.198-.456-.317z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
