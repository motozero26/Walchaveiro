import React from 'react';
import { MessageSquare } from 'lucide-react';
import { createWhatsAppUrl, BUSINESS_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block bg-[#1a1a1a] text-white border border-gray-700 text-xs font-bold py-1.5 px-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Falar com Chaveiro 24h
      </span>

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={createWhatsAppUrl('Olá, WAL Chaveiro! Preciso de atendimento.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar WAL Chaveiro no WhatsApp 24 horas"
        title="Falar no WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageSquare className="w-7 h-7 fill-current" />

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5c400] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#f5c400] text-black text-[9px] font-black items-center justify-center">
            24
          </span>
        </span>
      </a>
    </div>
  );
};
