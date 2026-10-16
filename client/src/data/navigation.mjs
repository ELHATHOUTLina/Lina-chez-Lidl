export const sections = [
  { id: 'candidature', label: 'Ma candidature', keywords: ['accueil', 'candidate', 'emploi', 'poste', 'polyvalente', 'motivation', 'motivee', 'serieuse'] },
  { id: 'categories', label: 'Mon profil en un coup d’œil', keywords: ['categories', 'aperçu', 'profil'] },
  { id: 'experiences', label: 'Mes expériences', keywords: ['experience', 'parcours', 'missions', 'travail', 'vente', 'caisse', 'encaissement', 'libre service', 'rayon', 'mise en rayon'] },
  { id: 'disponibilite', label: 'Mes disponibilités', keywords: ['disponibilite', 'disponible', 'immediate', 'horaires', 'planning', 'week end', 'weekend', 'contrat', 'cdd', 'cdi', '35h', '5h'] },
  { id: 'a-propos', label: 'À propos de moi', keywords: ['lina', 'presentation', 'profil', 'qui suis je', 'pourquoi lidl', 'formation'] },
  { id: 'competences', label: 'Mes compétences terrain', keywords: ['competence', 'caisse', 'encaissement', 'rayon', 'mise en rayon', 'equipe', 'client', 'organisation', 'polyvalence', 'terrain'] },
  { id: 'ticket-candidature', label: 'Mon ticket de candidature', keywords: ['ticket', 'panier', 'reçu', 'recapitulatif'] },
  { id: 'contact', label: 'Mon CV & contact', keywords: ['cv', 'curriculum', 'contact', 'coordonnees', 'telephone', 'mail', 'email', 'joindre', 'recrutement'] },
];

export const mainNavigation = ['a-propos', 'experiences', 'competences', 'disponibilite', 'contact'];

export function normalizeSearch(value) {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

const stopWords = new Set(['de', 'du', 'des', 'la', 'le', 'les', 'un', 'une', 'et', 'en', 'mon', 'ma', 'mes', 'pour', 'moi']);

export function findSections(query) {
  const tokens = normalizeSearch(query).split(/\s+/).filter((token) => token && !stopWords.has(token));
  if (!tokens.length) return [];
  return sections.filter((section) => {
    const text = normalizeSearch([section.label, ...section.keywords].join(' '));
    return tokens.every((token) => text.includes(token));
  });
}

