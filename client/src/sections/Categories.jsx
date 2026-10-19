import { useState } from 'react';
import { X } from 'lucide-react';
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
      tabIndex={-1}
      data-section-ready="true"
    >
      <nav aria-label="Rayons de ma candidature">
        <ul className="candidate-categories__track">
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
