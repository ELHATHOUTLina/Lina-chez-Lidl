import { ArrowUpRight, MapPin } from 'lucide-react';
import Overlay from './Overlay';
import SectionLink from './SectionLink';
import { sections } from '../data/navigation.mjs';
import { profile } from '../data/profile';

export default function NavigationMenu({ open, onClose, onNavigate }) {
  function navigate(id) { onClose(); requestAnimationFrame(() => onNavigate(id)); }
  return <Overlay open={open} onClose={onClose} titleId="menu-title" variant="menu">
    <p className="eyebrow">LINA CHEZ LIDL</p>
    <h2 id="menu-title">Faisons connaissance.</h2>
    <p className="overlay__intro">Une candidature, plusieurs façons de me découvrir.</p>
    <nav aria-label="Navigation complète"><ul className="menu-links">{sections.map((section, index) => <li key={section.id}><SectionLink id={section.id} onNavigate={navigate}><span className="menu-links__number">{String(index + 1).padStart(2, '0')}</span><span>{section.label}</span><ArrowUpRight size={19} aria-hidden="true" /></SectionLink></li>)}</ul></nav>
    <p className="menu-location"><MapPin size={17} aria-hidden="true" />{profile.location} · {profile.mobility}</p>
  </Overlay>;
}
