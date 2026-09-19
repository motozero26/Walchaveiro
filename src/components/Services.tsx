import React, { useState } from 'react';
import { KeyRound, Lock, Copy, Car, ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, ZoomIn, X, MapPin } from 'lucide-react';
import { SERVICES, createWhatsAppUrl, BUSINESS_INFO } from '../data/content';

export const Services: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; desc: string } | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'key':
        return <KeyRound className="w-5 h-5 text-black" />;
      case 'lock':
        return <Lock className="w-5 h-5 text-black" />;
      case 'copy':
        return <Copy className="w-5 h-5 text-black" />;
      case 'car':
        return <Car className="w-5 h-5 text-black" />;
      default:
        return <KeyRound className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#1a1a1a] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#f5c400] text-xs font-black uppercase tracking-widest mb-2.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f5c400]" />
            Nossos Serviços com Imagens Reais
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Serviços especializados com fotos e atendimento ágil em Natal.
          </h2>
          <p className="text-gray-300 mt-3 text-base sm:text-lg leading-relaxed">
            Confira nossos principais serviços com equipamentos profissionais. Abertura cuidadosa, troca preventiva e cópias de chaves sem danificar suas portas ou veículos.
          </p>
        </div>

        {/* 4 Services Cards Grid with High Quality Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-[#222222] border border-gray-800 hover:border-[#f5c400]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[#f5c400]/10"
            >
              <div>
                {/* Real Service Image Header */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-transparent to-black/35" />

                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-[#f5c400] text-black text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {service.badge}
                    </span>
                  )}

                  {/* Quick Expand Button */}
                  <button
                    type="button"
                    onClick={() =>
                      service.imageUrl &&
                      setSelectedImage({
                        url: service.imageUrl,
                        title: service.title,
                        desc: service.description,
                      })
                    }
                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#f5c400] hover:text-black"
                    title="Ver imagem ampliada"
                    aria-label={`Ver imagem de ${service.title}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  {/* Floating Icon Pill */}
                  <div className="absolute -bottom-3 left-4 w-10 h-10 rounded-xl bg-[#f5c400] flex items-center justify-center shadow-lg shadow-black/80 border-2 border-[#222222]">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-6">
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#f5c400] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={createWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-black uppercase tracking-wider py-2.5 px-3.5 rounded-xl bg-[#2a2a2a] text-[#f5c400] hover:bg-[#f5c400] hover:text-black transition-all group-hover:border-[#f5c400]/40 border border-gray-700/60"
                >
                  <span>Pedir Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Real Service Visual Showcase Strip */}
        <div className="mt-14 bg-gradient-to-r from-[#202020] via-[#242424] to-[#202020] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[#f5c400] text-xs font-black uppercase tracking-widest block mb-1">
                Visualização Prática
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Galeria de Atendimentos em Natal e Região
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold bg-[#181818] border border-gray-700/60 px-3.5 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[#f5c400]" />
              <span>Ponta Negra, Capim Macio, Neópolis e Região Metropolitana</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <div
                key={`gallery-${s.id}`}
                onClick={() =>
                  s.imageUrl &&
                  setSelectedImage({
                    url: s.imageUrl,
                    title: s.title,
                    desc: s.description,
                  })
                }
                className="group/img relative rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-[#f5c400] transition-all aspect-video shadow-md"
              >
                <img
                  src={s.imageUrl}
                  alt={s.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-2.5 sm:p-3">
                  <div className="w-full">
                    <span className="text-[11px] sm:text-xs font-bold text-white block truncate group-hover/img:text-[#f5c400] transition-colors">
                      {s.title}
                    </span>
                    <span className="text-[10px] text-gray-300 flex items-center gap-1">
                      <ZoomIn className="w-3 h-3 text-[#f5c400]" /> Clique para ampliar
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Fast Banner */}
        <div className="mt-10 bg-[#222222] border border-[#f5c400]/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#f5c400]/15 text-[#f5c400] flex items-center justify-center shrink-0 border border-[#f5c400]/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">
                Ficou trancado do lado de fora?
              </h4>
              <p className="text-gray-300 text-sm">
                Atendimento emergencial 24h em Ponta Negra, Capim Macio, Neópolis e toda Natal.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              id="emergency-call-btn"
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f5c400] text-black font-extrabold text-sm px-6 py-3.5 rounded-xl hover:bg-[#ffd21a] transition-all shadow"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Ligar agora 24h</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Zooming Images */}
      {selectedImage && (
        <div
          id="image-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#1e1e1e] border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-black">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white hover:text-[#f5c400] flex items-center justify-center transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-black text-white">{selectedImage.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">{selectedImage.desc}</p>
              </div>
              <a
                href={createWhatsAppUrl(`Olá! Vi a foto do serviço de ${selectedImage.title} no site e gostaria de um orçamento.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f5c400] text-black font-black text-xs uppercase px-4 py-2.5 rounded-xl hover:bg-[#ffd21a] transition-all shrink-0"
              >
                <span>Pedir esse serviço</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
