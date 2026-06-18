import { motion } from 'motion/react';
import { Star, ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen bg-neutral-950 flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Decorative glowing backdrops of red and gold */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-red/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-900/40 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Slogan and details column */}
        <div className="lg:col-span-7 space-y-8 text-left md:pr-4">
          
          {/* Google rating indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <div className="flex gap-0.5 text-brand-yellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-brand-yellow" />
              ))}
            </div>
            <span className="text-xs text-neutral-300 font-medium font-sans">
              <strong className="text-white">4.9 Estrelas</strong> no Google
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse"></span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">Itapetininga SP</span>
          </motion.div>

          {/* Slogan title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Os Melhores
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-brand-yellow">
                Salgados Fritos na Hora
              </span>
              de Itapetininga!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-xl font-sans"
            >
              Sabor inigualável, qualidade garantida com produtos frescos todos os dias e preço justo para todos os momentos. O seu salgado crocante e quentinho está aqui!
            </motion.p>
          </div>

          {/* Quick interactive stats counts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pb-4 border-b border-white/5 max-w-md font-sans"
          >
            <div>
              <div className="font-display font-extrabold text-white text-2xl sm:text-3xl text-brand-yellow">4.9★</div>
              <div className="text-[11px] text-neutral-400 font-mono tracking-wider">Aprovação Máxima</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-2xl sm:text-3xl">100%</div>
              <div className="text-[11px] text-neutral-400 font-mono tracking-wider">Ingredientes Frescos</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-2xl sm:text-3xl">Rápido</div>
              <div className="text-[11px] text-neutral-400 font-mono tracking-wider">Entregas & Balcão</div>
            </div>
          </motion.div>

          {/* Conversion CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg"
          >
            <a
              href={getWhatsAppLink('Olá Big-Gula! Vi seu site e gostaria de encomendar salgados quentinhos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-bold tracking-wider py-4 px-6 rounded-2xl shadow-lg hover:shadow-brand-red/20 hover:scale-103 active:scale-97 transition-all duration-300 glow-effect-red text-center uppercase text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.004 0C5.378 0 .004 5.378.004 12c0 2.112.551 4.17 1.597 5.979L.004 24l6.19-1.623c1.761.96 3.738 1.467 5.81 1.468 6.626 0 12-5.374 12-12s-5.374-12-12-12zm6.002 17.004c-.22.62-.97 1.13-1.6 1.25-.56.11-1.28.18-2.67-.39-5.74-2.37-9.45-8.23-9.74-8.62-.29-.39-2.31-3.08-2.31-5.88s1.46-4.17 1.99-4.73c.53-.56 1.16-.69 1.48-.69s.63.01.91.02c.3.01.7.01 1.07.9.38.9.59 1.42.75 1.76.16.34.25.74-.01 1.26-.26.52-.43.74-.63.98-.2.24-.44.5-.18.95.26.45 1.15 1.89 2.47 3.07s1.39.42 1.86.13c.47-.29 1.34-1.56 1.7-2.1.36-.53.72-.45 1.22-.26.51.19 3.23 1.52 3.78 1.8.55.28.92.42 1.05.65.14.23.14 1.34-.08 1.96z" />
              </svg>
              Pedir pelo WhatsApp
            </a>
            <a
              href="#cardapio"
              className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold tracking-wider py-4 px-6 rounded-2xl border border-white/10 hover:border-white/20 hover:scale-103 active:scale-97 transition-all duration-300 backdrop-blur-sm uppercase text-sm"
            >
              <BookOpen className="w-5 h-5 text-brand-yellow" />
              Ver Cardápio
            </a>
          </motion.div>
        </div>

        {/* Hero image showcase column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Animated golden background rings */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-brand-red via-brand-yellow to-brand-red opacity-30 blur-xl animate-pulse" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-neutral-900 group"
          >
            <img
              src="/src/assets/images/epic_salgados_hero_1781795498896.jpg"
              alt="Deliciosas coxinhas e salgadinhos crocantes fritos na hora"
              className="w-full h-auto object-cover max-h-[480px] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Visual Glassmorphic Tag over image */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-brand-yellow">Mais pedido de hoje</p>
                <p className="font-display font-medium text-white text-sm">Coxinha Peito de Frango + Catupiry</p>
              </div>
              <span className="text-white font-extrabold text-sm px-3 py-1 bg-brand-red rounded-lg shadow-md font-mono">
                R$ 8,00
              </span>
            </div>
          </motion.div>
          
          {/* Subtle floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-brand-yellow text-neutral-950 text-xs font-bold px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-1.5 border border-amber-300"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            Super Crocante
          </motion.div>
        </div>
      </div>
    </section>
  );
}
