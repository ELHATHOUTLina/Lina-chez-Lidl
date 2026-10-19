import { CalendarCheck2, Clock3, MapPin } from 'lucide-react';
import '../styles/offers.css';

const availabilityCards = [
  { id: 'immediate', Icon: CalendarCheck2, title: 'Immédiatement', description: 'Disponible dès maintenant' },
  { id: 'hours', Icon: Clock3, title: '35 h / semaine', description: 'CDD ou CDI' },
  { id: 'mobility', Icon: MapPin, title: 'Mobile dans le 78', description: 'Week-ends compris' },
];

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
        <h2 id="offers-title">Prête à rejoindre Lidl</h2>
        <p className="candidate-offers__subtitle">Mes disponibilités</p>
      </header>
      <ul className="offers-tabs__grid" aria-label="Mes disponibilités">
        {availabilityCards.map(({ id, Icon, title, description }) => (
          <li key={id} className="offer-card">
            <span className="offer-card__icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
            <h3 className="offer-card__title">{title}</h3>
            <p className="offer-card__description">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
