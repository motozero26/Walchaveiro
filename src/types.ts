export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'key' | 'lock' | 'copy' | 'car';
  whatsappMessage: string;
  imageUrl?: string;
  badge?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface QuoteFormData {
  nome: string;
  telefone: string;
  servico: string;
  mensagem: string;
}
