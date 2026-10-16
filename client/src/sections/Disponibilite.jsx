import OffersTabs from '../components/OffersTabs';
import '../styles/offers.css';

// Section 5 : son emplacement après Experiences préserve la place du prompt 4.
export default function Disponibilite() {
  return (
    <section
      id="disponibilite"
      className="candidate-offers page-width"
      aria-labelledby="offers-title"
      tabIndex={-1}
      data-section-ready="true"
    >
      <header className="candidate-offers__heading">
        <p className="candidate-offers__eyebrow">MA CANDIDATURE CHEZ LIDL</p>
        <h2 id="offers-title">Prête aujourd’hui, motivée pour la suite.</h2>
        <p className="candidate-offers__subtitle">Mes disponibilités et mes objectifs pour rejoindre votre équipe.</p>
      </header>
      <OffersTabs />
    </section>
  );
}
