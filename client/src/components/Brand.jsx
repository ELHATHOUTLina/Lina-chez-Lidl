import { useState } from 'react';
import { profile } from '../data/profile';

export default function Brand({ onNavigate }) {
  const [failed, setFailed] = useState(false);
  return (
    <a id="home-link" className="brand" href="#haut-de-page" onClick={(event) => { event.preventDefault(); onNavigate('haut-de-page'); }} aria-label="Lina chez Lidl — revenir en haut de page">
      <span className="brand__image">
        {failed ? <span className="brand__fallback">Lina<br />chez Lidl</span> : <img src={profile.logo} alt="Logo personnalisé Lina chez Lidl" width="88" height="88" fetchPriority="high" onError={() => setFailed(true)} />}
      </span>
      <span className="brand__copy"><strong>Lina chez Lidl<span className="brand__dot">.</span></strong><span>Une candidature qui sort du rayon.</span></span>
    </a>
  );
}
