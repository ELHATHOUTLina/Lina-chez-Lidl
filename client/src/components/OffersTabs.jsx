import { useRef, useState } from 'react';
import { offersTabs } from '../data/offers';

export default function OffersTabs() {
  const [activeTab, setActiveTab] = useState(offersTabs[0].id);
  const tabButtons = useRef([]);

  function handleTabKeyDown(event, index) {
    let nextIndex;
    switch (event.key) {
      case 'ArrowRight': nextIndex = (index + 1) % offersTabs.length; break;
      case 'ArrowLeft': nextIndex = (index - 1 + offersTabs.length) % offersTabs.length; break;
      case 'Home': nextIndex = 0; break;
      case 'End': nextIndex = offersTabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActiveTab(offersTabs[nextIndex].id);
    tabButtons.current[nextIndex]?.focus();
  }

  return (
    <div className="offers-tabs">
      <div className="offers-tabs__list" role="tablist" aria-label="Mes disponibilités et mes objectifs" aria-orientation="horizontal">
        {offersTabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => { tabButtons.current[index] = element; }}
            type="button"
            role="tab"
            className="offers-tabs__tab"
            id={`offers-tab-${tab.id}`}
            aria-controls={`offers-panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {offersTabs.map((tab) => (
        <div
          key={tab.id}
          className="offers-tabs__panel"
          id={`offers-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`offers-tab-${tab.id}`}
          tabIndex={0}
          hidden={activeTab !== tab.id}
        >
          <p className="offers-tabs__introduction">{tab.introduction}</p>
          <ul className="offers-tabs__grid">
            {tab.cards.map(({ id, Icon, title, description, badge, badgeColor }, index) => (
              <li key={id} className="offer-card" style={{ '--offer-delay': `${index * 30}ms` }}>
                <div className="offer-card__top">
                  <span className="offer-card__icon"><Icon size={27} strokeWidth={1.7} aria-hidden="true" /></span>
                  {badge && <span className={`offer-card__badge offer-card__badge--${badgeColor}`}>{badge}</span>}
                </div>
                <h3 className="offer-card__title">{title}</h3>
                <p className="offer-card__description">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
