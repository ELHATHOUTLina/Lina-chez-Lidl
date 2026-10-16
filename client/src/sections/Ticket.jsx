import { ArrowRight, ReceiptText } from 'lucide-react';
import '../styles/ticket.css';

export default function Ticket({ onOpenTicket }) {
  return (
    <section
      id="ticket-candidature"
      className="ticket-section"
      aria-labelledby="ticket-section-title"
      tabIndex={-1}
      data-section-ready="true"
    >
      <div className="ticket-section__inner page-width">
        <div className="ticket-section__copy">
          <p className="ticket-section__eyebrow">PASSAGE EN CAISSE</p>
          <h2 id="ticket-section-title">Mon ticket de candidature</h2>
          <p>Retrouvez l’essentiel de mon profil, mes atouts et mes coordonnées sur un ticket prêt à imprimer.</p>
          <button className="button button--yellow ticket-section__button" type="button" onClick={onOpenTicket}>
            Imprimer mon ticket <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>
        <div className="ticket-section__visual" aria-hidden="true">
          <div className="ticket-section__printer">
            <span className="ticket-section__slot" />
            <div className="ticket-section__paper">
              <ReceiptText size={30} strokeWidth={1.6} />
              <strong>LINA CHEZ LIDL</strong>
              <span>TICKET N° 08</span>
              <i />
              <b>MOTIVATION&nbsp;&nbsp;100 %</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
