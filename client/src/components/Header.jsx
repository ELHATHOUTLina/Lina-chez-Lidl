import { useState } from 'react';
import { ArrowRight, Check, MapPin, Menu, ShoppingCart, UserRound, X } from 'lucide-react';
import Brand from './Brand';
import SearchBar from './SearchBar';
import SectionLink from './SectionLink';
import NavigationMenu from './NavigationMenu';
import useSectionNavigation from '../hooks/useSectionNavigation';
import { profile } from '../data/profile';
import '../styles/header.css';

export default function Header({ onOpenTicket, ticketOpen }) {
  const [panel, setPanel] = useState(null);
  const { navigate, notice, clearNotice } = useSectionNavigation();

  return <>
    <header className="site-header">
      <div className="disclaimer">Candidature personnelle inspirée de l’univers Lidl <span aria-hidden="true">—</span> site non officiel</div>
      <div className="toolbar page-width">
        <Brand onNavigate={navigate} />
        <div className="location"><span className="location__icon"><MapPin size={19} aria-hidden="true" /></span><span><strong>{profile.location}</strong><span>{profile.mobility}</span></span></div>
        <div className="header-actions">
          <SectionLink id="a-propos" onNavigate={navigate} className="header-action" aria-label="Profil — À propos de moi"><UserRound size={24} strokeWidth={1.5} aria-hidden="true" /><span>Mon profil</span></SectionLink>
          <button className="header-action" type="button" aria-label="Panier — ouvrir le ticket de candidature" aria-haspopup="dialog" aria-expanded={ticketOpen} onClick={onOpenTicket}><ShoppingCart size={25} strokeWidth={1.5} aria-hidden="true" /><span>Mon ticket</span></button>
          <button className="header-action" type="button" aria-label="Ouvrir le menu de navigation" aria-haspopup="dialog" aria-expanded={panel === 'menu'} onClick={() => setPanel('menu')}><Menu size={26} strokeWidth={1.5} aria-hidden="true" /><span>Menu</span></button>
        </div>
      </div>
      <div className="blue-band">
        <div className="blue-band__inner page-width">
          <div className="header-pitch"><p className="header-pitch__eyebrow"><span />UNE NOUVELLE ÉNERGIE EN MAGASIN</p><h1>Votre prochaine collègue<br className="desktop-break" /> est peut-être ici !</h1><p className="header-pitch__subline">Motivée. Sérieuse. Disponible.</p></div>
          <div className="header-discovery"><SearchBar onNavigate={navigate} /><div className="header-discovery__bottom"><SectionLink id="a-propos" onNavigate={navigate} className="button button--yellow">Découvrir mon profil <ArrowRight size={19} aria-hidden="true" /></SectionLink><span className="availability"><Check size={16} aria-hidden="true" />Disponibilité immédiate</span></div></div>
        </div>
      </div>
    </header>
    {notice && <div className="navigation-notice" role="status"><span><strong>{notice.title}</strong>{notice.message}</span><button type="button" aria-label="Fermer le message" onClick={clearNotice}><X size={19} aria-hidden="true" /></button></div>}
    <NavigationMenu open={panel === 'menu'} onClose={() => setPanel(null)} onNavigate={navigate} />
  </>;
}
