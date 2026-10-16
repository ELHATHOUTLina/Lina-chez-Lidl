import { useCallback, useState } from 'react';
import { sections } from '../data/navigation.mjs';

export function isSectionReady(id) {
  const element = document.getElementById(id);
  return Boolean(element && !element.hidden && element.dataset.sectionReady !== 'false');
}

export default function useSectionNavigation() {
  const [notice, setNotice] = useState(null);

  const navigate = useCallback((id) => {
    if (id === 'haut-de-page') {
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      document.getElementById('home-link')?.focus({ preventScroll: true });
      window.history.replaceState(null, '', '#haut-de-page');
      setNotice(null);
      return true;
    }
    const section = sections.find((item) => item.id === id);
    if (!section) return false;
    if (!isSectionReady(id)) {
      setNotice({ title: section.label, message: 'Cette partie de ma candidature sera bientôt disponible.' });
      return false;
    }
    setNotice(null);
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    target.focus({ preventScroll: true });
    window.history.replaceState(null, '', `#${id}`);
    return true;
  }, []);

  return { navigate, notice, clearNotice: () => setNotice(null) };
}

