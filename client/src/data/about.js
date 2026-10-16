import { Layers3, MessageCircle, UsersRound } from 'lucide-react';

export const about = {
  // Ajouter ici le chemin d’une vraie photo : '/assets/images/lina.jpg'.
  photo: null,
  photoAlt: 'Portrait de Lina EL HATHOUT',
  paragraphs: [
    'Je m’appelle Lina EL HATHOUT, j’ai 21 ans et je suis basée à Mantes-la-Jolie.',
    'Titulaire d’une licence MIAGE en informatique, je souhaite aujourd’hui travailler dans la grande distribution, au contact des clients et au sein d’une équipe.',
    'Mes expériences dans la vente et la mise en rayon m’ont permis de découvrir un environnement de travail concret et dynamique, dans lequel j’aimerais continuer à évoluer.',
    'Je recherche un poste à temps plein, en CDD ou CDI, et je suis disponible immédiatement.',
  ],
  motivations: [
    {
      id: 'client',
      Icon: MessageCircle,
      title: 'Le contact client et le travail en caisse',
      text: 'J’ai envie d’accueillir les clients, de les accompagner et d’apprendre les méthodes de caisse du magasin.',
    },
    {
      id: 'polyvalence',
      Icon: Layers3,
      title: 'La polyvalence entre encaissement, mise en rayon et organisation',
      text: 'Alterner entre ces missions correspond au poste en magasin que je recherche et à mon envie d’un travail concret et dynamique.',
    },
    {
      id: 'equipe',
      Icon: UsersRound,
      title: 'Une équipe et un engagement dans la durée',
      text: 'Je souhaite trouver ma place dans une équipe, contribuer au travail collectif et m’investir durablement.',
    },
  ],
};
