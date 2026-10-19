import { useEffect, useState } from 'react';
import { Check, Copy, Download, Mail, Printer } from 'lucide-react';
import Overlay from './Overlay';
import { profile } from '../data/profile';
import '../styles/ticket.css';

const strengths = ['Accueil client', 'Encaissement', 'Mise en rayon', 'Ponctualité', 'Travail d’équipe'];

const details = [
  ['Nom', profile.name],
  ['Poste', 'Employée polyvalente / Caisse'],
  ['Contrat', 'CDD ou CDI'],
  ['Temps de travail', `${profile.weeklyHours} h`],
  ['Disponibilité', profile.availability],
  ['Localisation', profile.location],
  ['Mobilité', 'Mobile dans le Mantois et ses alentours (Mantes-la-Jolie, Mantes-la-Ville, Buchelay, Magnanville et communes voisines)'],
];

export default function TicketModal({ open, onClose }) {
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    if (!open) setCopyStatus('');
  }, [open]);

  async function copyContact() {
    const text = `Lina EL HATHOUT\nTéléphone : ${profile.phone}\nE-mail : ${profile.email}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('Coordonnées copiées');
    } catch {
      const field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      field.remove();
      setCopyStatus('Coordonnées copiées');
    }
  }

  return (
    <Overlay open={open} onClose={onClose} titleId="ticket-dialog-title" variant="ticket-machine">
      {open && <div className="ticket-modal">
        <div className="thermal-printer" aria-hidden="true">
          <span className="thermal-printer__light" />
          <span className="thermal-printer__slot" />
        </div>

        <div className="receipt-stage">
          <article className="receipt" aria-describedby="ticket-thanks">
            <header className="receipt__header">
              <span className="receipt__brand">LINA CHEZ LIDL</span>
              <h2 id="ticket-dialog-title">TICKET DE CANDIDATURE</h2>
              <p>────────────────────────</p>
            </header>

            <dl className="receipt__details">
              {details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>

            <section className="receipt__strengths" aria-labelledby="ticket-strengths-title">
              <h3 id="ticket-strengths-title">ATOUTS</h3>
              <ul>{strengths.map((strength) => <li key={strength}>+ {strength}</li>)}</ul>
            </section>

            <div className="receipt__total"><strong>TOTAL MOTIVATION</strong><b>100 %</b></div>

            <section className="receipt__contact" aria-labelledby="ticket-contact-title">
              <h3 id="ticket-contact-title">CONTACT</h3>
              <p><span>Téléphone</span><a href={profile.phoneHref}>{profile.phone}</a></p>
              <p><span>E-mail</span><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            </section>

            <p className="receipt__thanks" id="ticket-thanks">Merci d’avoir pris le temps de découvrir ma candidature&nbsp;!</p>
            <div className="receipt__barcode" aria-hidden="true" />
            <p className="receipt__barcode-note">VISUEL DÉCORATIF · LINA · 78</p>
          </article>
        </div>

        <div className="ticket-actions" aria-label="Actions du ticket">
          <a className="ticket-action ticket-action--primary" href={profile.cv} download="CV-Lina-EL-HATHOUT.pdf"><Download size={18} aria-hidden="true" />Télécharger mon CV</a>
          <a className="ticket-action" href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" />Me contacter</a>
          <button className="ticket-action" type="button" onClick={() => window.print()}><Printer size={18} aria-hidden="true" />Imprimer le ticket</button>
          <button className="ticket-action" type="button" onClick={copyContact}>{copyStatus ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}{copyStatus || 'Copier mes coordonnées'}</button>
        </div>
        <p className="ticket-copy-status sr-only" role="status" aria-live="polite">{copyStatus}</p>
      </div>}
    </Overlay>
  );
}
