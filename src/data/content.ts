import { ServiceItem, StepItem } from '../types';
import logoImg from '../assets/images/wal_chaveiro_logo_1789763645623.jpg';
import heroBannerImg from '../assets/images/wal_hero_banner_1789763663486.jpg';
import doorUnlockImg from '../assets/images/service_door_unlock_1789763676861.jpg';
import lockChangeImg from '../assets/images/service_lock_change_1789763689277.jpg';
import keyDuplicationImg from '../assets/images/service_key_duplication_1789763701119.jpg';
import automotiveLockImg from '../assets/images/service_automotive_lock_1789763743336.jpg';

export const ASSETS = {
  logo: logoImg,
  heroBanner: heroBannerImg,
  serviceDoorUnlock: doorUnlockImg,
  serviceLockChange: lockChangeImg,
  serviceKeyDuplication: keyDuplicationImg,
  serviceAutomotiveLock: automotiveLockImg,
};

export const BUSINESS_INFO = {
  name: 'WAL CHAVEIRO',
  tagline: 'SEU PROFISSIONAL DE CONFIANÇA',
  phone: '(84) 99688-5678',
  phoneRaw: '5584996885678',
  phoneTel: '+5584996885678',
  address: 'R. Alto da Boa Vista, 441',
  neighborhood: 'Ponta Negra, Natal - RN',
  cep: 'CEP 59090-310',
  fullAddress: 'R. Alto da Boa Vista, 441, Ponta Negra, Natal - RN, 59090-310',
  operatingHours: 'Atendimento 24 horas todos os dias',
  region: 'Natal e Região Metropolitana',
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'R. Alto da Boa Vista, 441, Ponta Negra, Natal - RN, 59090-310'
  )}`,
  instagramUrl: 'https://instagram.com',
};

export const COVERED_REGIONS = [
  { name: 'Ponta Negra', highlight: true },
  { name: 'Capim Macio', highlight: true },
  { name: 'Neópolis', highlight: true },
  { name: 'Candelária', highlight: true },
  { name: 'Mirassol', highlight: false },
  { name: 'Lagoa Nova', highlight: false },
  { name: 'Tirol & Petrópolis', highlight: false },
  { name: 'Alecrim & Centro', highlight: false },
  { name: 'Zona Sul de Natal', highlight: true },
  { name: 'Zona Norte de Natal', highlight: false },
  { name: 'Parnamirim', highlight: true },
  { name: 'Litoral Sul / Rota do Sol', highlight: false },
  { name: 'Toda Região Metropolitana', highlight: true },
];

export const createWhatsAppUrl = (customText?: string) => {
  const defaultText = 'Olá, WAL Chaveiro! Gostaria de solicitar um orçamento para atendimento em Natal e região.';
  const text = customText || defaultText;
  return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'destravamento',
    title: 'Destravamento de portas',
    description: 'Abertura rápida e sem danos para portas travadas, chaves esquecidas do lado de dentro ou perdas de chave em residências e empresas.',
    iconName: 'key',
    imageUrl: doorUnlockImg,
    badge: 'Urgência 24h',
    whatsappMessage: 'Olá, WAL Chaveiro! Preciso de um orçamento urgente para destravamento de porta em Natal/região.',
  },
  {
    id: 'fechaduras',
    title: 'Troca de miolos e fechaduras',
    description: 'Instalação, reparo e substituição imediata de miolos, fechaduras de segurança, travas tetra e cilindros de alta resistência.',
    iconName: 'lock',
    imageUrl: lockChangeImg,
    badge: 'Segurança Máxima',
    whatsappMessage: 'Olá, WAL Chaveiro! Gostaria de um orçamento para troca de miolo ou instalação de fechadura.',
  },
  {
    id: 'copias',
    title: 'Cópias de chaves',
    description: 'Cópias com alta precisão milimétrica para chaves residenciais comuns, tetra, multiponto, gorje e armários com garantia de funcionamento.',
    iconName: 'copy',
    imageUrl: keyDuplicationImg,
    badge: 'Precisão Milimétrica',
    whatsappMessage: 'Olá, WAL Chaveiro! Gostaria de informações e valores sobre cópias de chaves.',
  },
  {
    id: 'automotivo',
    title: 'Chaveiro automotivo e cofres',
    description: 'Abertura técnica de veículos sem arranhar a pintura, extração de chaves quebradas na ignição e suporte para cofres e portões.',
    iconName: 'car',
    imageUrl: automotiveLockImg,
    badge: 'Sem Danificar',
    whatsappMessage: 'Olá, WAL Chaveiro! Preciso de atendimento para abertura de veículo / chaveiro automotivo em Natal.',
  },
];

export const DIFFERENTIALS: string[] = [
  'Atendimento 24 horas para urgências',
  'Orçamento imediato e transparente pelo WhatsApp',
  'Serviço cuidadoso e sem danificar sua porta',
  'Base estratégica em Ponta Negra com rápida locomoção',
  'Profissional qualificado com ferramentas modernas',
  'Facilidade de pagamento no local',
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Entre em contato',
    description: 'Chame a WAL Chaveiro pelo WhatsApp ou ligue no número 24h a qualquer momento.',
  },
  {
    number: '02',
    title: 'Explique o que precisa',
    description: 'Conte o tipo de porta, chave ou fechadura e envie foto se necessário.',
  },
  {
    number: '03',
    title: 'Atendimento rápido no local',
    description: 'Receba a estimativa de valor e o chaveiro vai até você com todo o equipamento.',
  },
];
