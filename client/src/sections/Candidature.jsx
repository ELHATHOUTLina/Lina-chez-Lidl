import { ArrowRight, Check, Mail, X } from 'lucide-react';
import SectionLink from '../components/SectionLink';
import useSectionNavigation from '../hooks/useSectionNavigation';
import '../styles/hero.css';

export default function Candidature() {
  const { navigate, notice, clearNotice } = useSectionNavigation();

  return (
    <section
      id="candidature"
      className="hero page-width"
      aria-labelledby="hero-title"
      tabIndex={-1}
      data-section-ready="true"
    >
      <div className="hero__banner">
        <div className="hero__content">
          <p className="hero__badge">
            <Check size={15} strokeWidth={2.5} aria-hidden="true" />
            Disponible immédiatement
          </p>

          <h2 className="hero__name" id="hero-title">
            <span className="hero__first-name">Lina</span>{' '}
            <span className="hero__last-name">EL HATHOUT</span>
          </h2>
          <p className="hero__role">Candidate Employée Polyvalente / Caisse</p>
          <p className="hero__facts">
            <span>Disponible immédiatement</span>
            <span className="hero__separator"> • </span>
            <span>Temps plein 35 h</span>
            <span className="hero__separator"> • </span>
            <span>Mobile dans le 78</span>
          </p>
          <p className="hero__description">
            Je souhaite rejoindre Lidl en CDD ou CDI à temps plein. Sérieuse,
            motivée et polyvalente, je suis prête à m’investir durablement au
            sein de votre équipe.
          </p>

          <div className="hero__actions">
            <SectionLink id="a-propos" onNavigate={navigate} className="button button--yellow hero__primary">
              Découvrir mon profil
              <ArrowRight size={19} aria-hidden="true" />
            </SectionLink>
            <SectionLink id="contact" onNavigate={navigate} className="button hero__secondary">
              <Mail size={18} aria-hidden="true" />
              Voir mes coordonnées
            </SectionLink>
          </div>

          {notice && (
            <div className="hero__notice" role="status">
              <p><strong>{notice.title}</strong> — {notice.message}</p>
              <button type="button" aria-label="Fermer le message" onClick={clearNotice}>
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <div className="hero__art" aria-hidden="true">
          <span className="hero__red-corner" />
          <span className="hero__outline" />
          <div className="hero__mobility">
            <span className="hero__mobility-label">MOBILE DANS LE</span>
            <span className="hero__department">78<span>.</span></span>
            <span className="hero__mobility-footer">À vos côtés en magasin.</span>
          </div>
          <div className="hero__contract">CDD <span>/</span> CDI</div>
          <span className="hero__spark hero__spark--one" />
          <span className="hero__spark hero__spark--two" />
        </div>
      </div>
    </section>
  );
}

