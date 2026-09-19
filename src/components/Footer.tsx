import React from 'react';
import { MapPin, Instagram, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl, ASSETS } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#0e0e0e] border-t border-[#f5c400]/20 pt-16 pb-10 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-900">
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#inicio"
              id="footer-brand-logo"
              className="inline-flex items-center gap-3 font-black tracking-tight text-white group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#f5c400] shadow-[0_0_10px_rgba(245,196,0,0.3)] group-hover:border-white transition-all shrink-0 bg-black">
                <img
                  src={ASSETS.logo}
                  alt="WAL Chaveiro - Seu Profissional de Confiança"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="leading-tight">
                <span className="text-base font-black tracking-tight block text-white group-hover:text-[#f5c400] transition-colors">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] tracking-widest text-[#f5c400] font-bold block uppercase">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </a>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Serviços especializados de chaveiro residencial, comercial e automotivo. Cópias de chaves, destravamento de portas e troca de fechaduras com atendimento 24 horas em Natal e toda a Região Metropolitana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="hover:text-[#f5c400] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#f5c400] transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#f5c400] transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-[#f5c400] transition-colors">
                  Pedir Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Contato 24 Horas
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center gap-2 text-gray-300 hover:text-[#f5c400] transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-[#f5c400]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-[#f5c400]" />
                <span>Atendimento 24h sem interrupção</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                id="footer-maps-link"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização no Google Maps"
                title="Abrir no Google Maps"
                className="w-10 h-10 rounded-xl border border-gray-800 bg-[#1a1a1a] text-[#f5c400] hover:bg-[#f5c400] hover:text-black hover:border-[#f5c400] flex items-center justify-center transition-all"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                id="footer-instagram-link"
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da WAL Chaveiro"
                title="Instagram"
                className="w-10 h-10 rounded-xl border border-gray-800 bg-[#1a1a1a] text-[#f5c400] hover:bg-[#f5c400] hover:text-black hover:border-[#f5c400] flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Atendimento 24h • Ponta Negra, Natal - RN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
