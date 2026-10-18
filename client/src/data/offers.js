import {
  CalendarCheck2, Clock3, FileCheck2, MapPin, ShoppingBasket, CalendarDays,
  ClipboardList, ScanLine, Store, Gauge, UsersRound, Handshake,
} from 'lucide-react';

// Données propres à la section 5, sans lien avec les futures cartes du prompt 4.
export const offersTabs = [
  {
    id: 'current',
    label: 'Offres du moment',
    introduction: 'Ce que je peux vous proposer dès aujourd’hui.',
    cards: [
      { id: 'immediate', Icon: CalendarCheck2, title: 'Disponible immédiatement', description: 'Prête à rejoindre votre équipe dès maintenant.', badge: 'Dès maintenant', badgeColor: 'red' },
      { id: 'hours', Icon: Clock3, title: '35 h par semaine', description: 'Je recherche un poste à temps plein.', badge: 'Temps plein', badgeColor: 'yellow' },
      { id: 'contract', Icon: FileCheck2, title: 'CDD ou CDI', description: 'Ouverte à ces deux types de contrat pour rejoindre Lidl.' },
      { id: 'mobility', Icon: MapPin, title: 'Mobile dans le 78', description: 'Mobilité dans tout le département des Yvelines.', badge: 'Yvelines', badgeColor: 'yellow' },
      { id: 'retail', Icon: ShoppingBasket, title: 'Expérience en vente et mise en rayon', description: 'Une expérience en commerce à mettre au service du magasin.' },
      { id: 'schedule', Icon: CalendarDays, title: 'Disponibilité selon planning', description: 'Week-ends compris, selon les horaires prévus au planning.' },
    ],
  },
  {
    id: 'upcoming',
    label: 'Prochainement',
    introduction: 'Mes objectifs d’apprentissage et d’engagement chez Lidl.',
    cards: [
      { id: 'procedures', Icon: ClipboardList, title: 'M’adapter aux procédures du magasin', description: 'Apprendre les méthodes et les consignes propres au magasin.', badge: 'À apprendre', badgeColor: 'yellow' },
      { id: 'checkout', Icon: ScanLine, title: 'Gagner en autonomie en caisse', description: 'Me former aux outils de caisse Lidl et progresser avec l’accompagnement de l’équipe.' },
      { id: 'products', Icon: Store, title: 'Connaître les produits et les rayons', description: 'Découvrir l’organisation du magasin et me familiariser avec les produits.' },
      { id: 'precision', Icon: Gauge, title: 'Développer ma rapidité et ma précision', description: 'Gagner en efficacité au fil de l’apprentissage, en restant attentive à la qualité du travail.' },
      { id: 'team', Icon: UsersRound, title: 'M’intégrer durablement à une équipe', description: 'Apprendre à travailler avec mes collègues et trouver ma place dans le collectif.' },
      { id: 'commitment', Icon: Handshake, title: 'M’investir dans la durée', description: 'Contribuer sérieusement au quotidien du magasin et progresser avec l’équipe.', badge: 'Objectif durable', badgeColor: 'red' },
    ],
  },
];
