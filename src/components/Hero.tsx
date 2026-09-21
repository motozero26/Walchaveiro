import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock, MapPin, ShieldCheck, Star } from 'lucide-react';
import { createWhatsAppUrl, BUSINESS_INFO, ASSETS, COVERED_REGIONS } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-4 pb-14 sm:pb-20 bg-radial from-[#f5c400]/15 via-[#141414] to-[#141414] border-b border-gray-900"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#f5c400]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Welcome Status Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f5c400]/15 border border-[#f5c400]/40 text-[#f5c400] text-xs font-black tracking-wider uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f5c400] animate-pulse" />
            <span>Plantão 24 Horas em Natal e Região Metropolitana</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-300">Técnico pronto para atendimento</span>
            <span className="text-gray-500">•</span>
            <span className="text-[#f5c400]">Ponta Negra, Capim Macio e Grande Natal</span>
          </div>
        </div>

        {/* PRIMARY HIGHLIGHT: MAXIMUM SIZE WELCOME BANNER IN LANDSCAPE (PAISAGEM) */}
        <div className="relative mb-8 group">
          {/* Outer glow aura */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#f5c400]/30 via-[#f5c400]/50 to-[#f5c400]/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10" />

          <div
            id="hero-welcome-landscape-banner"
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-[3px] border-[#f5c400] shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-black"
          >
            {/* 16:9 Landscape Full Aspect Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#121212]">
              <img
                src={ASSETS.heroBanner}
                alt="WAL Chaveiro - Seu Profissional de Confiança em Natal e Região Metropolitana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 brightness-[1.02]"
                loading="eager"
              />

              {/* Subtle top and bottom atmospheric gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Floating Top Left Live Status Pill */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-black/80 backdrop-blur-md border border-[#f5c400]/60 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f5c400] animate-ping" />
                <span className="text-white text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  Plantão 24h Ativo
                </span>
              </div>

              {/* Floating Top Right Rating Pill */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-black/80 backdrop-blur-md border border-[#f5c400]/60 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Star className="w-3.5 h-3.5 text-[#f5c400] fill-current" />
                <span className="text-[#f5c400] text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  5 Estrelas
                </span>
                <span className="text-gray-300 text-[10px] hidden sm:inline">• Clientes Satisfeitos</span>
              </div>

              {/* Floating Bottom Center Quick Action on Desktop */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto flex items-center gap-3">
                <a
                  href={createWhatsAppUrl('Olá, WAL Chaveiro! Vi o banner no site e preciso de atendimento imediato.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5c400] text-black font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-full hover:bg-[#ffd21a] transition-all shadow-xl hover:scale-105 active:scale-100"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  <span>Chamar no WhatsApp Agora</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="hidden sm:inline-flex items-center justify-center gap-2 bg-black/80 backdrop-blur-md text-white border border-gray-600 hover:border-[#f5c400] font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full transition-all"
                >
                  <span>Ligar {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Bar & Emergency CTAs */}
        <div className="bg-[#1b1b1b] border border-gray-800 hover:border-[#f5c400]/40 rounded-2xl p-5 sm:p-6 shadow-xl mb-8 transition-colors">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Ficou trancado ou precisa de chaves novas?
              </h2>
              <p className="text-gray-300 text-sm">
                Destravamento ágil sem danificar portas, troca de miolos/fechaduras e cópias imediatas.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                id="hero-action-whatsapp"
                href={createWhatsAppUrl('Olá, WAL Chaveiro! Preciso de atendimento emergencial em Natal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f5c400] text-black font-black text-sm uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#ffd21a] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#f5c400]/25"
              >
                <span>Chamar no WhatsApp {BUSINESS_INFO.phone}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                id="hero-action-call"
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center gap-2 bg-[#262626] text-white border border-gray-700 hover:border-[#f5c400] font-bold text-sm px-5 py-3.5 rounded-full transition-all"
              >
                <span>Ligar Agora 24h</span>
              </a>

              <a
                id="hero-action-services"
                href="#servicos"
                className="inline-flex items-center gap-2 text-[#f5c400] hover:text-white font-bold text-sm px-4 py-3.5 transition-colors"
              >
                <span>Ver Serviços & Fotos</span>
              </a>
            </div>
          </div>

          {/* Key Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-gray-800 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-gray-200">
              <Clock className="w-4 h-4 text-[#f5c400] shrink-0" />
              <div>
                <strong className="text-white block">Plantão 24 Horas</strong>
                <span className="text-gray-400 text-xs">Atendimento dia e noite</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-gray-200">
              <ShieldCheck className="w-4 h-4 text-[#f5c400] shrink-0" />
              <div>
                <strong className="text-white block">Abertura Sem Danos</strong>
                <span className="text-gray-400 text-xs">Técnica profissional</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-[#f5c400] shrink-0" />
              <div>
                <strong className="text-white block">Peças de Qualidade</strong>
                <span className="text-gray-400 text-xs">Marcas reconhecidas</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-gray-200">
              <Star className="w-4 h-4 text-[#f5c400] fill-current shrink-0" />
              <div>
                <strong className="text-white block">5 Estrelas</strong>
                <span className="text-gray-400 text-xs">Pontualidade e confiança</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Marquee / Region List */}
        <div className="pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs">
            <div className="flex items-center gap-2 font-extrabold uppercase tracking-wider text-[#f5c400] shrink-0">
              <MapPin className="w-4 h-4" />
              <span>Regiões Atendidas:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {COVERED_REGIONS.map((region) => (
                <span
                  key={region.name}
                  className={`px-3 py-1 rounded-full border text-xs font-semibold ${
                    region.highlight
                      ? 'bg-[#f5c400]/15 border-[#f5c400]/40 text-[#f5c400]'
                      : 'bg-[#1e1e1e] border-gray-800 text-gray-300'
                  }`}
                >
                  {region.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
