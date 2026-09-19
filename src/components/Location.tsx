import React, { useState } from 'react';
import { MapPin, PhoneCall, ExternalLink, Copy, Check, Clock, Navigation } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 bg-[#1a1a1a] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-[#f5c400] text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f5c400]" />
            Onde encontrar
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Estamos em Ponta Negra, Natal.
          </h2>
          <p className="text-gray-400 mt-2 text-base">
            Localização estratégica para pronto atendimento nos bairros da Zona Sul, Litoral e toda a região metropolitana de Natal.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Card */}
          <div
            id="location-address-card"
            className="bg-[#242424] border border-gray-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#f5c400]/40 transition-colors shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f5c400]/15 text-[#f5c400] flex items-center justify-center mb-6 border border-[#f5c400]/30">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Endereço</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-1">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-gray-400 text-sm">
                {BUSINESS_INFO.neighborhood}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {BUSINESS_INFO.cep}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800 flex flex-wrap items-center gap-3">
              <a
                id="maps-link-button"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f5c400] text-black font-extrabold text-xs uppercase px-5 py-3 rounded-full hover:bg-[#ffd21a] transition-all shadow"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 bg-[#1b1b1b] border border-gray-700 text-gray-300 font-bold text-xs px-4 py-3 rounded-full hover:text-[#f5c400] hover:border-[#f5c400] transition-colors"
                title="Copiar endereço completo"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar endereço'}</span>
              </button>
            </div>
          </div>

          {/* 24h Contact Card */}
          <div
            id="location-contact-card"
            className="bg-[#242424] border border-gray-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#f5c400]/40 transition-colors shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f5c400]/15 text-[#f5c400] flex items-center justify-center mb-6 border border-[#f5c400]/30">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Atendimento 24 Horas</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Fale com a WAL Chaveiro para solicitar atendimento em domicílio, tirar dúvidas ou pedir orçamento rápido.
              </p>

              <a
                id="location-phone-link"
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-block text-[#f5c400] font-black text-2xl sm:text-3xl hover:underline tracking-tight mb-2"
              >
                {BUSINESS_INFO.phone}
              </a>
              <span className="block text-gray-400 text-xs">
                Plantão ativo 7 dias por semana, inclusive feriados.
              </span>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800 flex flex-wrap items-center gap-3">
              <a
                href={createWhatsAppUrl('Olá, WAL Chaveiro! Gostaria de atendimento em Ponta Negra / Natal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f5c400] text-black font-extrabold text-xs uppercase px-5 py-3 rounded-full hover:bg-[#ffd21a] transition-all shadow"
              >
                <span>Chamar no WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center gap-1.5 bg-[#1b1b1b] border border-gray-700 text-white font-bold text-xs px-4 py-3 rounded-full hover:border-[#f5c400] hover:text-[#f5c400] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#f5c400]" />
                <span>Ligar direto</span>
              </a>
            </div>
          </div>
        </div>

        {/* Coverage Neighborhoods Pill List */}
        <div className="mt-8 bg-[#202020] border border-gray-800/80 rounded-2xl p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-gray-300 font-bold">
            <Navigation className="w-4 h-4 text-[#f5c400] shrink-0" />
            <span>Principais bairros atendidos:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-gray-400 font-medium justify-center sm:justify-end">
            <span className="bg-[#181818] border border-gray-800 px-3 py-1 rounded-full text-gray-300">Ponta Negra</span>
            <span className="bg-[#181818] border border-gray-800 px-3 py-1 rounded-full text-gray-300">Capim Macio</span>
            <span className="bg-[#181818] border border-gray-800 px-3 py-1 rounded-full text-gray-300">Neópolis</span>
            <span className="bg-[#181818] border border-gray-800 px-3 py-1 rounded-full text-gray-300">Candelária</span>
            <span className="bg-[#181818] border border-gray-800 px-3 py-1 rounded-full text-gray-300">Rota do Sol</span>
            <span className="bg-[#181818] border border-gray-800 px-3 py-1 rounded-full text-gray-300">Toda Natal</span>
          </div>
        </div>
      </div>
    </section>
  );
};
