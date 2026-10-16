import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import SectionLink from '../components/SectionLink';
import useSectionNavigation from '../hooks/useSectionNavigation';
import { categories } from '../data/categories';
import '../styles/categories.css';

export default function Categories() {
  const { navigate, notice, clearNotice } = useSectionNavigation();
  const [selectedLabel, setSelectedLabel] = useState('');

  return (
    <section
      id="categories"
      className="candidate-categories page-width"
      aria-labelledby="categories-title"
      tabIndex={-1}
      data-section-ready="true"
    >
      <h2 id="categories-title" className="candidate-categories__title">
        Découvrez les rayons de ma candidature
      </h2>
      <p className="candidate-categories__hint" id="categories-hint">
        <ArrowLeft size={13} aria-hidden="true" />
        Faites défiler pour explorer les 7 rayons
        <ArrowRight size={13} aria-hidden="true" />
      </p>

      <nav aria-label="Rayons de ma candidature">
        <ul className="candidate-categories__track" aria-describedby="categories-hint">
          {categories.map(({ key, label, targetId, Icon, color }) => (
            <li key={key} className="candidate-categories__item">
              <SectionLink
                id={targetId}
                className="candidate-categories__link"
                onNavigate={(id) => { setSelectedLabel(label); navigate(id); }}
              >
                <span className="candidate-categories__circle" style={{ '--category-color': color }}>
                  <Icon size={56} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="candidate-categories__label">{label}</span>
              </SectionLink>
            </li>
          ))}
        </ul>
      </nav>

      {notice && (
        <div className="candidate-categories__notice" role="status">
          <p><strong>{selectedLabel}</strong> — {notice.message}</p>
          <button type="button" aria-label="Fermer le message des catégories" onClick={clearNotice}>
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
