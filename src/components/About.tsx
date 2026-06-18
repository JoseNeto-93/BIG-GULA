import { ShieldCheck, Zap, Award, Flame, Heart, Smile } from 'lucide-react';

export default function About() {
  const customFeatures = [
    {
      title: 'Produtos Frescos Diariamente',
      description: 'Nossos ingredientes são repostos todas as manhãs. A carne do hambúrguer e a massa dos salgados são preparadas no mesmo dia do consumo.',
      icon: Flame,
      color: 'text-brand-red bg-brand-red/10',
    },
    {
      title: 'Melhor Salgado de Itapetininga',
      description: 'Massa fina, sequinha, recheio úmido e abundante. Quem prova descobre a diferença na primeira mordida!',
      icon: Award,
      color: 'text-brand-yellow bg-brand-yellow/10',
    },
    {
      title: 'Atendimento Ágil',
      description: 'Entendemos que fome não espera. Seja no balcão de retirada ou no delivery, seu pedido é preparado e entregue com velocidade recorde.',
      icon: Zap,
      color: 'text-amber-500 bg-amber-500/10',
    },
    {
      title: 'Excelente Custo-Benefício',
      description: 'Lanches de tamanho avantajado, ingredientes premium de grandes marcas, e tudo com um preço que cabe perfeitamente no seu bolso.',
      icon: ShieldCheck,
      color: 'text-green-500 bg-green-500/10',
    },
  ];

  const statValues = [
    { number: '4.9★', label: 'Avaliação Google' },
    { number: '+15 Mil', label: 'Pedidos Entregues' },
    { number: '100%', label: 'Satisfação Garantida' },
  ];

  return (
    <section id="sobre" className="bg-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* About grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text with numbers column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-bold block">
                Nossa Missão
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Por que escolher a Big-Gula?
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
                Fundada no coração de Itapetininga - SP, a Lanchonete Big-Gula nasceu com um propósito simples: servir os salgados mais generosos e impecáveis, preparados com amor, dedicação e ingredientes de extrema qualidade.
              </p>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
                Nosso compromisso é com o seu paladar e sua comodidade. Oferecemos um ambiente acolhedor no centro da cidade, além de um sistema de entrega eficiente para você comer no aconchego de sua residência.
              </p>
            </div>

            {/* Quick counters style */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-100 font-sans">
              {statValues.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand-red">
                    {stat.number}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono tracking-wide uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical features layout column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {customFeatures.map((feat, index) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.color} group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-neutral-900 group-hover:text-brand-red transition-colors duration-200">
                      {feat.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                      {feat.description}
                    </p>
                  </div>
                  
                  {/* Small link deco */}
                  <div className="pt-4 flex items-center gap-1.5 text-xs font-mono font-medium text-brand-red">
                    <span>Tradição em Sabor</span>
                    <span className="text-brand-yellow font-extrabold">✦</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Small floating trust label */}
        <div className="mt-16 bg-neutral-950 text-white rounded-3xl p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-yellow/15 blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display font-extrabold text-lg sm:text-xl">Ficou com água na boca?</p>
              <p className="text-neutral-400 text-xs sm:text-sm">Peça agora de forma super simples e receba rapidinho no WhatsApp!</p>
            </div>
          </div>
          
          <a
            href="#cardapio"
            className="w-full md:w-auto text-center px-6 py-3.5 bg-brand-yellow text-neutral-950 font-extrabold rounded-xl text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors duration-300"
          >
            Acessar o Cardápio
          </a>
        </div>

      </div>
    </section>
  );
}
