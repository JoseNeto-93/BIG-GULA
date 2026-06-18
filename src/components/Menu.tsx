import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingCart, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data';
import { getWhatsAppLink } from '../utils';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter products based on active category and search matching
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="cardapio" className="bg-neutral-50 py-24 px-4 relative">
      {/* Visual background ambient details */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-mono text-xs uppercase mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Cardápio Completo
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Nossas Delícias
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2 font-sans">
            Selecione uma categoria abaixo ou busque pelo seu ingrediente favorito para fazer o seu pedido diretamente via WhatsApp.
          </p>

          {/* Quick Search Input */}
          <div className="mt-8 relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Digite o que deseja comer (ex: cheddar, coxinha...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 sm:py-3.5 border border-neutral-250 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red text-sm placeholder-neutral-400 font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-neutral-400 hover:text-neutral-600"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 pointer-events-auto ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white shadow-md'
                : 'bg-white text-neutral-650 hover:bg-neutral-100 border border-neutral-100'
            }`}
          >
            🍳 Todos os Itens
          </button>
          
          {CATEGORIES.map((cat) => {
            let iconEmoji = '🍔';
            if (cat.id === 'salgados') iconEmoji = '🥐';
            if (cat.id === 'lanches') iconEmoji = '🥪';
            if (cat.id === 'hamburgueres') iconEmoji = '🍔';
            if (cat.id === 'porcoes') iconEmoji = '🍟';
            if (cat.id === 'bebidas') iconEmoji = '🥤';
            if (cat.id === 'combos') iconEmoji = '⭐';

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/10'
                    : 'bg-white text-neutral-650 hover:bg-neutral-100 border border-neutral-100'
                }`}
              >
                <span>{iconEmoji}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const orderText = `Olá Big-Gula! Acessei seu cardápio pelo site institucional e gostaria de pedir o item: ${product.name} (Preço: ${product.price}).`;
              const waLink = getWhatsAppLink(orderText);

              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full relative"
                >
                  
                  {/* Photo area */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    {product.popular && (
                      <span className="absolute top-4 left-4 z-10 bg-brand-yellow text-neutral-950 font-display font-extrabold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md border border-amber-300">
                        🔥 Mais Pedido
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-medium font-sans">
                        Retirada rápida ou Delivery
                      </span>
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-display font-extrabold text-neutral-900 text-lg group-hover:text-brand-red transition-all duration-200">
                          {product.name}
                        </h3>
                        <span className="font-mono font-extrabold text-brand-red text-lg shrink-0 whitespace-nowrap">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-6 mt-auto">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-brand-red text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md transition-all duration-200"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Pedir pelo WhatsApp
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty Search Fallback */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-neutral-50 rounded-3xl border border-dashed border-neutral-200 mt-8"
          >
            <p className="text-neutral-400 text-base font-sans">
              Nenhum produto encontrado contendo <strong className="text-neutral-700">"{searchQuery}"</strong> nesta categoria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-brand-red text-white text-xs font-bold uppercase rounded-lg shadow-sm"
            >
              Ver Menu Completo
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
