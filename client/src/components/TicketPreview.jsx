import { ReceiptText } from 'lucide-react';
import Overlay from './Overlay';

// Seule l’ouverture du panier est développée ici. Le ticket détaillé viendra à la section 8.
export default function TicketPreview({ open, onClose }) {
  return <Overlay open={open} onClose={onClose} titleId="ticket-title" variant="ticket">
    <span className="ticket-preview__icon"><ReceiptText size={32} aria-hidden="true" /></span>
    <p className="eyebrow">LE PANIER DE MA CANDIDATURE</p>
    <h2 id="ticket-title">Mon ticket<br />de candidature.</h2>
    <div className="ticket-preview__divider" />
    <p>Le récapitulatif de mon profil arrive bientôt dans ce panier.</p>
    <p className="ticket-preview__note">Au programme : mes compétences, mes disponibilités et mon envie de rejoindre votre équipe.</p>
    <button className="button button--blue" type="button" onClick={onClose}>Continuer la visite</button>
  </Overlay>;
}
