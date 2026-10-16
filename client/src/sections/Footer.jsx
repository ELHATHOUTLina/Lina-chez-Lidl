import { ArrowUp, Mail, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { sections } from '../data/navigation.mjs';
import '../styles/footer.css';

const footerLinks = ['candidature', 'a-propos', 'experiences', 'competences', 'disponibilite', 'ticket-candidature', 'contact'];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main page-width">
        <div className="site-footer__brand">
          <a href="#haut-de-page" aria-label="Lina chez Lidl — retour en haut">
            <img src={profile.logo} alt="" />
            <strong>Lina chez Lidl</strong>
          </a>
          <p>Candidature personnelle indépendante, inspirée de l’univers Lidl France. Site non officiel.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Navigation du pied de page">
          <h2>Parcourir</h2>
          <ul>{footerLinks.map((id) => {
            const section = sections.find((item) => item.id === id);
            return <li key={id}><a href={`#${id}`}>{section?.label}</a></li>;
          })}</ul>
        </nav>

        <div className="site-footer__contact">
          <h2>Me contacter</h2>
          <a href={profile.phoneHref}><Phone size={17} aria-hidden="true" />{profile.phone}</a>
          <a href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{profile.email}</a>
          <a className="site-footer__top" href="#haut-de-page">Retour en haut <ArrowUp size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="site-footer__legal">
        <div className="page-width">
          <p>Ce site ne collecte aucune donnée personnelle des visiteurs et n’utilise actuellement aucun outil de suivi ou formulaire de collecte.</p>
          <span>© {new Date().getFullYear()} Lina EL HATHOUT</span>
        </div>
      </div>
    </footer>
  );
}
