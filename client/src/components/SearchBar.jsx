import { useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { findSections } from '../data/navigation.mjs';
import { isSectionReady } from '../hooks/useSectionNavigation';

export default function SearchBar({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const input = useRef(null);
  const resultsList = useRef(null);
  const results = findSections(query);
  const hasQuery = query.trim().length > 0;
  const expanded = open && hasQuery;

  function choose(id) {
    setOpen(false);
    onNavigate(id);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (results.length) choose(results[0].id);
    else { setOpen(true); input.current.focus(); }
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      input.current.focus();
      setOpen(false);
    }
    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && hasQuery) {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        const links = Array.from(resultsList.current?.querySelectorAll('a') || []);
        if (!links.length) return;
        const current = links.indexOf(document.activeElement);
        const next = event.key === 'ArrowDown' ? (current + 1) % links.length : (current <= 0 ? links.length - 1 : current - 1);
        links[next].focus();
      });
    }
  }

  return (
    <div className="search" onKeyDown={onKeyDown} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <form role="search" aria-label="Rechercher dans ma candidature" onSubmit={onSubmit} autoComplete="off">
        <div className="search__field">
          <Search size={22} className="search__leading" aria-hidden="true" />
          <label className="sr-only" htmlFor="candidate-search">Rechercher une section de ma candidature</label>
          <input ref={input} id="candidate-search" type="search" placeholder="Recherchez une candidate motivée, sérieuse et disponible" value={query} onChange={(event) => { setQuery(event.target.value); setOpen(true); }} onFocus={() => setOpen(true)} aria-describedby="search-hint" aria-controls={expanded ? 'search-results' : undefined} />
          {hasQuery && <button className="search__clear" type="button" aria-label="Effacer la recherche" onClick={() => { setQuery(''); setOpen(false); input.current.focus(); }}><X size={17} aria-hidden="true" /></button>}
          <button className="search__submit" type="submit" aria-label="Lancer la recherche"><ArrowRight size={23} aria-hidden="true" /></button>
        </div>
      </form>
      <p id="search-hint" className="search__hint">Un mot-clé suffit : <button type="button" onClick={() => { setQuery('caisse'); setOpen(true); input.current.focus(); }}>caisse</button>, <button type="button" onClick={() => { setQuery('compétences'); setOpen(true); input.current.focus(); }}>compétences</button>, <button type="button" onClick={() => { setQuery('disponibilité'); setOpen(true); input.current.focus(); }}>disponibilité</button>…</p>
      {expanded && <div className="search__results" id="search-results" ref={resultsList}>
        <p className="search__result-heading" role="status">{results.length ? `${results.length} section${results.length > 1 ? 's' : ''} pour « ${query.trim()} »` : 'Aucune section trouvée'}</p>
        {results.length ? <ul aria-label="Résultats de la recherche">{results.map((section) => <li key={section.id}><a href={`#${section.id}`} onClick={(event) => { event.preventDefault(); choose(section.id); }}><span>{section.label}</span>{isSectionReady(section.id) ? <ArrowRight size={17} aria-hidden="true" /> : <span className="coming-soon">À venir</span>}</a></li>)}</ul> : <p className="search__empty">Essayez « expériences », « compétences » ou « contact ».</p>}
      </div>}
    </div>
  );
}

