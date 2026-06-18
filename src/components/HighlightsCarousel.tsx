import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import { HIGHLIGHTS } from '../data';
import { getWhatsAppLink } from '../utils';

export default function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HIGHLIGHTS.length);
    }, 5500); // Auto rotate every 5.5s

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
  };

  return (
    <section id="destaques" className="bg-neutral-900 py-20 px-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-36 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-mono text-xs uppercase mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Destaques Irresistíveis
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Nossos Campeões de Venda
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto text-sm sm:text-base mt-2 font-sans">
            Os queridinhos da galera de Itapetininga prontinhos para serem pedidos por você!
          </p>
        </div>

        {/* Carousel slide box */}
        <div className="relative min-h-[460px] md:min-h-[400px] rounded-3xl overflow-hidden glass-panel-dark border border-white/10 p-6 md:p-12 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Info text */}
              <div className="md:col-span-7 text-left space-y-6">
                <span className="inline-block px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-950 bg-brand-yellow rounded-lg">
                  {HIGHLIGHTS[currentIndex].badge}
                </span>
                <div>
                  <h3 className="font-display font-light text-xl text-neutral-400">
                    {HIGHLIGHTS[currentIndex].subtitle}
                  </h3>
                  <h4 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
                    {HIGHLIGHTS[currentIndex].title}
                  </h4>
                </div>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                  {HIGHLIGHTS[currentIndex].description}
                </p>
                
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(HIGHLIGHTS[currentIndex].whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold tracking-wider px-6 py-3.5 rounded-xl uppercase text-xs transition-all hover:scale-103 duration-300 shadow-md shadow-brand-red/10 glow-effect-red"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Pedir pelo WhatsApp
                  </a>
                </div>
              </div>

              {/* Photo */}
              <div className="md:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 bg-neutral-950">
                  <img
                    src={HIGHLIGHTS[currentIndex].image}
                    alt={HIGHLIGHTS[currentIndex].title}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle decorative reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-all transform hover:-translate-x-0.5"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-all transform hover:translate-x-0.5"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet and Dot Indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {HIGHLIGHTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === i ? 'w-8 bg-brand-red' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
