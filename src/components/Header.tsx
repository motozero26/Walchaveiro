import React, { useState } from 'react';
import { Menu, X, MessageSquare, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl, ASSETS } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#141414]/95 backdrop-blur-md border-b border-[#f5c400]/30 transition-colors shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="min-h-[5.5rem] sm:min-h-[6.5rem] py-2.5 sm:py-3 flex items-center justify-between gap-4">
          {/* Brand Logo - Enlarged for high visibility */}
          <a
            href="#inicio"
            id="header-brand-logo"
            className="inline-flex items-center gap-3.5 sm:gap-4 font-black tracking-tight text-white group"
            aria-label="WAL Chaveiro - Página inicial"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-[2.5px] border-[#f5c400] shadow-[0_0_18px_rgba(245,196,0,0.45)] group-hover:border-white group-hover:shadow-[0_0_24px_rgba(255,255,255,0.45)] transition-all shrink-0 bg-black">
              <img
                src={ASSETS.logo}
                alt="WAL Chaveiro - Seu Profissional de Confiança"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="leading-tight">
              <span className="text-xl sm:text-2xl font-black tracking-tight block text-white group-hover:text-[#f5c400] transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-[#f5c400] font-extrabold block uppercase mt-0.5">
                {BUSINESS_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-200" aria-label="Navegação principal">
            <a href="#servicos" className="hover:text-[#f5c400] transition-colors py-1">
              Serviços
            </a>
            <a href="#diferenciais" className="hover:text-[#f5c400] transition-colors py-1">
              Diferenciais
            </a>
            <a href="#localizacao" className="hover:text-[#f5c400] transition-colors py-1">
              Localização
            </a>
            <a href="#orcamento" className="hover:text-[#f5c400] transition-colors py-1">
              Orçamento
            </a>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-cta-whatsapp"
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f5c400] text-black font-extrabold text-xs uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-[#ffd21a] hover:-translate-y-0.5 transition-all shadow-md active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="p-2 bg-[#252525] border border-gray-700 text-[#f5c400] rounded-lg"
              aria-label="Ligar agora"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white hover:text-[#f5c400] rounded-lg bg-[#222] border border-gray-800 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-[#1b1b1b] border-b border-gray-800 px-5 py-6 space-y-4 animate-fadeIn">
          <div className="flex items-center gap-3.5 pb-4 border-b border-gray-800">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#f5c400] shrink-0 bg-black shadow-md">
              <img src={ASSETS.logo} alt="WAL Chaveiro" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-black text-white text-lg block">{BUSINESS_INFO.name}</span>
              <span className="text-[#f5c400] text-xs font-extrabold block uppercase tracking-wider">{BUSINESS_INFO.tagline}</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-3 font-semibold text-gray-200">
            <a
              href="#servicos"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#252525] hover:text-[#f5c400] transition-colors"
            >
              Serviços
            </a>
            <a
              href="#diferenciais"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#252525] hover:text-[#f5c400] transition-colors"
            >
              Diferenciais
            </a>
            <a
              href="#localizacao"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#252525] hover:text-[#f5c400] transition-colors"
            >
              Localização
            </a>
            <a
              href="#orcamento"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#252525] hover:text-[#f5c400] transition-colors"
            >
              Solicitar Orçamento
            </a>
          </nav>

          <div className="pt-3 border-t border-gray-800 flex flex-col gap-3">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 bg-[#f5c400] text-black font-extrabold text-sm py-3 px-4 rounded-xl shadow hover:bg-[#ffd21a]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chamar no WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 bg-[#252525] text-white border border-gray-700 font-bold text-sm py-3 px-4 rounded-xl hover:border-[#f5c400]"
            >
              <PhoneCall className="w-4 h-4 text-[#f5c400]" />
              <span>Ligar {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
