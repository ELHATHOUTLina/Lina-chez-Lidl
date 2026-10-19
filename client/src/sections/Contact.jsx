import { useState } from 'react';
import { Check, Clock3, Copy, Download, ExternalLink, Mail, MapPin, Phone, Store } from 'lucide-react';
import { profile } from '../data/profile';
import { publicSiteUrl } from '../data/site';
import '../styles/contact.css';

const facts = [
  { Icon: MapPin, label: 'Mantes-la-Jolie (78)' },
  { Icon: Store, label: 'Mobile dans le Mantois et ses alentours (Mantes-la-Jolie, Mantes-la-Ville, Buchelay, Magnanville et communes voisines)' },
  { Icon: Check, label: 'Disponible immédiatement' },
  { Icon: Clock3, label: 'Temps plein 35 h' },
  { Icon: Check, label: 'CDD ou CDI' },
];
const qrImage = `${__PUBLIC_PATH__}assets/images/QR_Code_Lina_chez_Lidl.png`;

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const field = document.createElement('textarea');
      field.value = profile.email;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    setCopyStatus('Adresse e-mail copiée');
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title" tabIndex={-1} data-section-ready="true">
      <div className="contact-section__inner page-width">
        <header className="contact-section__heading">
          <p>CONTACT &amp; CV</p>
          <h2 id="contact-title">On se retrouve en magasin&nbsp;?</h2>
          <span>Je suis disponible pour échanger sur une opportunité en caisse ou en mise en rayon dans les Yvelines.</span>
        </header>

        <div className="contact-section__layout">
          <article className="contact-card">
            <div className="contact-card__identity">
              <span className="contact-card__initials" aria-hidden="true">LEH</span>
              <div><h3>{profile.name}</h3><p>Candidate employée polyvalente / caisse</p></div>
            </div>
            <ul className="contact-facts">
              {facts.map(({ Icon, label }) => <li key={label}><Icon size={18} aria-hidden="true" /><span>{label}</span></li>)}
            </ul>
            <div className="contact-direct">
              <a href={profile.phoneHref}><Phone size={18} aria-hidden="true" /><span><small>Téléphone</small>{profile.phone}</span></a>
              <a href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" /><span><small>E-mail</small>{profile.email}</span></a>
            </div>
          </article>

          <div className="contact-actions-panel">
            <div className="contact-actions" aria-label="Actions de contact et du CV">
              <a className="contact-button contact-button--yellow" href={profile.cv} download="CV-Lina-EL-HATHOUT-Lidl.pdf"><Download size={19} aria-hidden="true" />Télécharger mon CV</a>
              <a className="contact-button" href={profile.cv} target="_blank" rel="noreferrer"><ExternalLink size={19} aria-hidden="true" />Voir mon CV</a>
              <a className="contact-button" href={`mailto:${profile.email}`}><Mail size={19} aria-hidden="true" />M’envoyer un e-mail</a>
              <a className="contact-button" href={profile.phoneHref}><Phone size={19} aria-hidden="true" />M’appeler</a>
              <button className="contact-button" type="button" onClick={copyEmail}>{copyStatus ? <Check size={19} aria-hidden="true" /> : <Copy size={19} aria-hidden="true" />}{copyStatus || 'Copier mon adresse e-mail'}</button>
            </div>
            <p className="sr-only" role="status" aria-live="polite">{copyStatus}</p>
          </div>

          <aside className="qr-card" aria-labelledby="qr-title">
            <div className="qr-card__frame">
              <a className="qr-card__link" href={publicSiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le site Lina chez Lidl dans un nouvel onglet">
                <img src={qrImage} alt="QR code pour découvrir le site Lina chez Lidl" />
              </a>
            </div>
            <h3 id="qr-title">Retrouver cette candidature</h3>
            {publicSiteUrl
              ? <a href={publicSiteUrl}>Ouvrir le site public</a>
              : <p>Le QR code sera activé dès que l’adresse publique du site sera disponible.</p>}
          </aside>
        </div>
      </div>
    </section>
  );
}
