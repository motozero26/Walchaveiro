import React from 'react';
import { Check, Shield } from 'lucide-react';
import { DIFFERENTIALS, HOW_IT_WORKS_STEPS, ASSETS } from '../data/content';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-[#141414] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Why Choose WAL */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-[#f5c400] text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f5c400]" />
                Por que escolher a WAL?
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Seu parceiro de confiança para chaves e fechaduras.
              </h2>
            </div>

            <div className="border-l-4 border-[#f5c400] pl-5 py-1 bg-[#1b1b1b]/50 rounded-r-xl">
              <p className="text-gray-300 text-base leading-relaxed">
                Atendimento 24 horas para você ter uma solução quando precisar, com comunicação clara, honestidade e técnica apurada desde o primeiro contato.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {DIFFERENTIALS.map((diff, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm font-bold text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#f5c400]/20 text-[#f5c400] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{diff}</span>
                </li>
              ))}
            </ul>

            {/* Quality Guarantee Photo Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 mt-6 group shadow-lg">
              <div className="aspect-[21/9] w-full bg-black relative">
                <img
                  src={ASSETS.serviceLockChange}
                  alt="WAL Chaveiro - Peças e Fechaduras Originais"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent p-5 sm:p-6 flex flex-col justify-center">
                  <span className="text-[#f5c400] text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" /> Peças Originais e Alta Segurança
                  </span>
                  <p className="text-white font-black text-sm sm:text-base mt-1">
                    Cilindros de reposição e travas de segurança reforçadas
                  </p>
                  <span className="text-gray-300 text-xs mt-1">
                    Instalação limpa com ferramentas específicas sem estragar sua porta.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Steps Process */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-2">
              <span className="text-gray-400 text-xs uppercase tracking-wider font-extrabold block">
                Passo a passo simples
              </span>
              <h3 className="text-xl font-black text-white">
                Como funciona o atendimento
              </h3>
            </div>

            <div className="space-y-4">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.number}
                  id={`step-card-${step.number}`}
                  className="bg-[#202020] border border-gray-800 rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-[#f5c400]/40 transition-colors shadow-md"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f5c400] text-black font-black text-base flex items-center justify-center shrink-0 shadow-sm">
                    {step.number}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
