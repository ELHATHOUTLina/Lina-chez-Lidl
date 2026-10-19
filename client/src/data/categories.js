import {
  CalendarCheck2,
  ClipboardCheck,
  HeartHandshake,
  Mail,
  ShoppingBasket,
  Store,
} from 'lucide-react';

// Les qualités, la formation et les motivations seront présentées dans À propos.
// Chaque cible peut être précisée ici lors de l’ajout de ses futures sous-rubriques.
export const categories = [
  { key: 'qualites', label: 'Mes qualités', targetId: 'a-propos', Icon: HeartHandshake, color: '#e30613' },
  { key: 'experiences', label: 'Mes expériences', targetId: 'experiences', Icon: ShoppingBasket, color: '#0050aa' },
  { key: 'disponibilites', label: 'Mes disponibilités', targetId: 'disponibilite', Icon: CalendarCheck2, color: '#d65e1d' },
  { key: 'competences', label: 'Mes compétences terrain', targetId: 'competences', Icon: ClipboardCheck, color: '#20563d' },
  { key: 'pourquoi-lidl', label: 'Pourquoi Lidl ?', targetId: 'a-propos', Icon: Store, color: '#747b83' },
  { key: 'coordonnees', label: 'Mes coordonnées', targetId: 'contact', Icon: Mail, color: '#354c96' },
];
