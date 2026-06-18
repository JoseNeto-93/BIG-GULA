import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye, GridIcon, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Extract unique categories for filter tabs
  const categories = ['all', ...Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)))];

  // Filtered gallery items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="bg-white py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Grid */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-mono text-xs uppercase mb-3 font-semibold">
            <GridIcon className="w-3.5 h-3.5" />
            Galeria de Sensações
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Nossos Sabores em Foco
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2 font-sans">
            Clique em qualquer imagem para abrir em tela cheia com zoom interativo e passear pelas fotos dos nossos pratos de dar água na boca.
          </p>
        </div>

        {/* Gallery Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null); // safety reset
              }}
              className={`px-4.5 py-2 rounded-xl text-xs font-display font-medium uppercase tracking-wider transition-all duration-350 shrink-0 ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-150 border border-neutral-100'
              }`}
            >
              {cat === 'all' ? '🔍 Mostrar Tudo' : cat}
            </button>
          ))}
        </div>

        {/* Custom Modern Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-sm group cursor-zoom-in border border-neutral-100 bg-neutral-100"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Photo */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Dark Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-neutral-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-brand-yellow font-bold block">
                      {item.category}
                    </span>
                    <span className="font-display font-bold text-sm text-white">
                      {item.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interative LIGHTBOX Modal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-neutral-950/98 flex flex-col items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Stage frame */}
            <div className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
              {/* Left stage navigation control */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-16 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-all transform hover:-translate-x-0.5"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10 select-none"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />

              {/* Right stage navigation control */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-16 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-all transform hover:translate-x-0.5"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details Panel */}
            <motion.div
              key={`text-${lightboxIndex}`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-6 text-center text-white space-y-1 relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-yellow font-extrabold bg-brand-yellow/10 px-2 py-0.5 rounded border border-brand-yellow/25">
                {filteredItems[lightboxIndex].category}
              </span>
              <p className="font-display font-extrabold text-lg">
                {filteredItems[lightboxIndex].title}
              </p>
              <p className="text-xs text-neutral-500 font-mono">
                Foto {lightboxIndex + 1} de {filteredItems.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
