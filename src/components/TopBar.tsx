import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="bg-[#f5c400] text-black font-extrabold text-xs tracking-wider uppercase py-2 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
          <Clock className="w-3.5 h-3.5 inline" />
          <span>Atendimento 24 horas • Natal e região</span>
        </div>
        <a
          href={`tel:${BUSINESS_INFO.phoneTel}`}
          className="inline-flex items-center gap-1.5 hover:underline font-black text-xs"
          title="Ligue agora para atendimento 24h"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Emergência 24h: {BUSINESS_INFO.phone}</span>
        </a>
      </div>
    </div>
  );
};
