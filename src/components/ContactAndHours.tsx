import { MapPin, Phone, MessageSquare, Clock, Calendar, Compass } from 'lucide-react';
import { getWhatsAppLink } from '../utils';

export default function ContactAndHours() {
  const mapSourceURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4981792613583!2d-48.053154823812586!3d-23.586419761821035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cae51f5347cf%3A0xe1084b6f12c5bda2!2sAv.%20Peixoto%20Gomide%2C%2020%20-%20Centro%2C%20Itapetininga%20-%20SP%2C%2018200-160!5e0!3m2!1spt-BR!2sbr!4v1718712345678!5m2!1spt-BR!2sbr";

  const directionsURL = "https://www.google.com/maps/dir/?api=1&destination=Av.+Peixoto+Gomide,+20+-+Centro,+Itapetininga+-+SP";

  return (
    <section id="localizacao" className="bg-neutral-50 py-24 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title content */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-mono text-xs uppercase mb-3 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            Vem Pra Cá ou Peça
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Localização & Horários
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2 font-sans">
            Localizados na principal avenida do Centro comercial de Itapetininga - SP. Parada obrigatória no fim de tarde e fins de semana!
          </p>
        </div>

        {/* Dual column configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Maps Block */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-md flex-1 flex flex-col gap-6">
              
              {/* Address detail header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-bold">Nosso Endereço</span>
                  <p className="font-display font-extrabold text-neutral-900 text-lg sm:text-xl">Av. Peixoto Gomide, 20</p>
                  <p className="text-neutral-500 text-xs sm:text-sm font-sans">Centro - Itapetininga / SP — CEP 18200-160</p>
                </div>
                
                {/* Navigation redirection button */}
                <a
                  href={directionsURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-red hover:bg-brand-red/90 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition-colors duration-250 shrink-0 shadow-md glow-effect-red"
                >
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  Como Chegar
                </a>
              </div>

              {/* Maps Frame */}
              <div className="rounded-2xl overflow-hidden border border-neutral-100 shadow-inner flex-1 min-h-[300px] relative bg-neutral-100">
                <iframe
                  title="Mapa Lanchonete Big-Gula"
                  src={mapSourceURL}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>

          {/* Business Timetables & Contact card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Timetables Block */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-md text-left flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-neutral-950 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-brand-yellow fill-neutral-950/20" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-neutral-900 text-lg">Horários de Funcionamento</h3>
                    <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider">Lanches fresquinhos te aguardam</p>
                  </div>
                </div>

                {/* Grid timetables list */}
                <div className="space-y-4 font-sans">
                  
                  {/* Mo-Fr */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-brand-red" />
                      <span className="font-medium text-neutral-800 text-sm">Segunda a Sexta</span>
                    </div>
                    <span className="font-mono text-xs font-extrabold text-neutral-950 px-3 py-1 bg-white border border-neutral-100 rounded-lg">
                      08:00 às 18:00
                    </span>
                  </div>

                  {/* Sa */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-brand-red" />
                      <span className="font-medium text-neutral-800 text-sm">Sábado</span>
                    </div>
                    <span className="font-mono text-xs font-extrabold text-neutral-950 px-3 py-1 bg-white border border-neutral-100 rounded-lg">
                      08:00 às 16:00
                    </span>
                  </div>

                  {/* Su */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-red-50/40 border border-red-100/50">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                      <span className="font-medium text-neutral-500 text-sm">Domingo</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400 px-3 py-1 bg-white border border-neutral-100 rounded-lg uppercase tracking-wider">
                      Fechado
                    </span>
                  </div>

                </div>
              </div>

              {/* Delivery and Quick support Call info inside Timetables Box */}
              <div className="pt-8 border-t border-neutral-100 mt-8 space-y-4 font-sans">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-red shrink-0" />
                  <div className="text-xs">
                    <span className="text-neutral-400 block font-mono uppercase tracking-wider">Contato Telefônico</span>
                    <a href="tel:15992572005" className="font-extrabold text-neutral-900 text-sm hover:text-brand-red transition-colors">
                      (15) 99257-2005
                    </a>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink('Olá Big-Gula! Estou checando os horários no site e gostaria de fazer uma encomenda.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center flex items-center justify-center gap-2 py-3.5 rounded-xl text-neutral-950 hover:text-neutral-950 font-bold bg-brand-yellow hover:bg-amber-300 transition-colors uppercase text-xs tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 fill-neutral-950" />
                  Consultar Atendimento Agora
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
