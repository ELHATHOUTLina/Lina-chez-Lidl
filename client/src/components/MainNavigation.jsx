import { ArrowUp } from 'lucide-react';
import SectionLink from './SectionLink';
import useSectionNavigation from '../hooks/useSectionNavigation';
import { mainNavigation, sections } from '../data/navigation.mjs';

export default function MainNavigation() {
  const { navigate } = useSectionNavigation();

  return (
    <nav className="main-nav" aria-label="Navigation principale">
      <div className="page-width main-nav__inner">
        <ul>
          {mainNavigation.map((id) => (
            <li key={id}>
              <SectionLink id={id} onNavigate={navigate}>{sections.find((section) => section.id === id).label}</SectionLink>
            </li>
          ))}
        </ul>
        <a className="back-top" href="#haut-de-page" onClick={(event) => { event.preventDefault(); navigate('haut-de-page'); }}>
          Haut de page <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
