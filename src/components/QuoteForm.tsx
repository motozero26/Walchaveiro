import React, { useState } from 'react';
import { Send, MessageSquare, PhoneCall, CheckCircle2 } from 'lucide-react';
import { QuoteFormData } from '../types';
import { BUSINESS_INFO } from '../data/content';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    nome: '',
    telefone: '',
    servico: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nome = formData.nome.trim() || 'Cliente';
    const telefone = formData.telefone.trim() || 'Não informado';
    const servico = formData.servico || 'Não especificado';
    const mensagem = formData.mensagem.trim() || 'Gostaria de verificar disponibilidade e valores.';

    const text = `Olá, WAL Chaveiro! Meu nome é ${nome}.\nTelefone: ${telefone}\nServiço solicitado: ${servico}\nMensagem: ${mensagem}\nGostaria de solicitar um orçamento.`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="orcamento" className="py-20 bg-[#f5c400] text-black border-b border-yellow-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-black/80 font-black text-xs uppercase tracking-widest">
              Solicite agora
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
              Precisa de ajuda com sua chave ou fechadura?
            </h2>
            <p className="text-black/80 text-base sm:text-lg leading-relaxed">
              Preencha o formulário rápido ou fale diretamente pelo WhatsApp. A WAL Chaveiro atende 24 horas em Natal com resposta ágil.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center gap-2 bg-black text-[#f5c400] font-black text-sm px-5 py-3 rounded-full hover:bg-gray-900 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <form
              id="quote-form-element"
              onSubmit={handleSubmit}
              className="bg-[#141414] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-black/20"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#f5c400]" />
                <h3 className="text-xl font-black text-white">
                  Solicitar orçamento no WhatsApp
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label htmlFor="input-nome" className="block text-xs font-bold text-gray-300">
                    Seu nome <span className="text-[#f5c400]">*</span>
                  </label>
                  <input
                    id="input-nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Carlos Silva"
                    className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5c400] focus:ring-1 focus:ring-[#f5c400] transition-colors"
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-1.5">
                  <label htmlFor="input-telefone" className="block text-xs font-bold text-gray-300">
                    WhatsApp ou Telefone
                  </label>
                  <input
                    id="input-telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(84) 90000-0000"
                    className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5c400] focus:ring-1 focus:ring-[#f5c400] transition-colors"
                  />
                </div>

                {/* Tipo de serviço */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="select-servico" className="block text-xs font-bold text-gray-300">
                    Tipo de serviço
                  </label>
                  <select
                    id="select-servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#f5c400] focus:ring-1 focus:ring-[#f5c400] transition-colors"
                  >
                    <option value="">Selecione o serviço desejado</option>
                    <option value="Destravamento de portas">Destravamento de portas (Urgência)</option>
                    <option value="Troca de miolos e fechaduras">Troca de miolos e fechaduras</option>
                    <option value="Cópias de chaves">Cópias de chaves</option>
                    <option value="Abertura de cofre ou veículo">Abertura de cofre ou veículo</option>
                    <option value="Outro serviço">Outro serviço de chaveiro</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="textarea-mensagem" className="block text-xs font-bold text-gray-300">
                    Descreva o que aconteceu ou o que precisa
                  </label>
                  <textarea
                    id="textarea-mensagem"
                    name="mensagem"
                    rows={3}
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Ex: A chave quebrou na fechadura da porta da sala / preciso trocar o miolo do portão..."
                    className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5c400] focus:ring-1 focus:ring-[#f5c400] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  id="submit-quote-button"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#f5c400] text-black font-black text-sm uppercase tracking-wider py-4 px-6 rounded-xl hover:bg-[#ffd21a] active:translate-y-0.5 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar solicitação pelo WhatsApp ↗</span>
                </button>
              </div>

              {submitted && (
                <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl flex items-center gap-2.5 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Redirecionando para o WhatsApp da WAL Chaveiro...</span>
                </div>
              )}

              <p className="text-gray-400 text-xs text-center mt-3">
                Ao clicar, você será direcionado para o WhatsApp da WAL Chaveiro com sua mensagem pronta para envio.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
