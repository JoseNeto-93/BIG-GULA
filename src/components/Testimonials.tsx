import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-neutral-950 py-24 px-4 overflow-hidden">
      {/* Visual glowing blurs behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 font-mono text-xs uppercase mb-3 font-semibold">
            <Heart className="w-3.5 h-3.5 fill-current text-brand-yellow" />
            Amor dos Clientes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Quem Provou, Aprovou!
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-sans">
            Com nota 4,9 estrelas, somos avaliados como a melhor lanchonete da região pelos moradores de Itapetininga de forma orgânica.
          </p>
        </div>

        {/* Testimonials Masonry or Structured Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, i) => (
            <div
              key={review.id}
              className="relative rounded-3xl p-8 glass-panel-dark border border-white/10 hover:border-brand-red/35 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Highlight background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              {/* Top Quote Mark Icon */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-brand-red/10 transition-colors duration-300">
                <Quote className="w-12 h-12 rotate-180 fill-current" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Stars Indicator */}
                <div className="flex gap-1 text-brand-yellow">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Feed text */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info bottom line */}
              <div className="pt-8 border-t border-white/5 mt-8 flex items-center gap-3.5 relative z-10">
                {/* Simulated colorful initials avatar placeholder */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-xs text-white ${
                  i === 0 ? 'bg-gradient-to-tr from-brand-red to-red-600' :
                  i === 1 ? 'bg-gradient-to-tr from-brand-yellow to-amber-500 text-neutral-950' :
                  'bg-gradient-to-tr from-rose-500 to-pink-600'
                }`}>
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="text-left">
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-brand-yellow transition-colors duration-200">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
                    {review.role || 'Cliente'}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Small Callout Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/15 max-w-xl mx-auto">
            <span className="text-brand-yellow text-sm sm:text-base font-extrabold font-mono">✦ 4,9 / 5,0 estrelas de reputação geral</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-yellow text-xs font-bold uppercase tracking-wider transition-colors duration-250 cursor-pointer font-sans"
            >
              Ver avaliações no Google Maps »
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
