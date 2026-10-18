import { useEffect, useRef, useState } from 'react';
import {
  BriefcaseBusiness, Building2, CalendarDays, Clock3, FileText,
  Handshake, MapPin, Shirt, ShoppingBasket, ShoppingCart, Users,
} from 'lucide-react';
import { professionalExperiences, volunteering } from '../data/experiences';
import '../styles/experiences.css';

const factIcons = {
  location: MapPin, calendar: CalendarDays, duration: Clock3, contract: FileText,
  work: BriefcaseBusiness, organisation: Building2, people: Users,
};
const cornerIcons = { cart: ShoppingCart, basket: ShoppingBasket, hanger: Shirt };

function CompanyLogo({ source, futureSource, company }) {
  if (!source) return null;
  return <img className="experience-logo" src={source} data-future-logo={futureSource} alt={`Logo ${company}`} />;
}

function Facts({ items }) {
  return (
    <dl className="experience-facts">
      {items.map(({ type, label, value }) => {
        const Icon = factIcons[type];
        return <div className="experience-fact" key={`${label}-${value}`}><Icon size={19} strokeWidth={2} aria-hidden="true" /><dt>{label}</dt><dd>{value}</dd></div>;
      })}
    </dl>
  );
}

function Skills({ items }) {
  return <ul className="experience-skills">{items.map((skill) => <li key={skill}>{skill}</li>)}</ul>;
}

export default function Experiences() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experiences" className={`weekly-deals page-width${visible ? ' weekly-deals--visible' : ''}`} aria-labelledby="experiences-title" tabIndex={-1} data-section-ready="true">
      <header className="weekly-deals__heading">
        <p>MON PARCOURS SUR LE TERRAIN</p>
        <h2 id="experiences-title">Mon expérience, votre atout</h2>
        <i aria-hidden="true" />
        <span>Des expériences concrètes qui m’ont permis de développer des compétences essentielles pour rejoindre votre équipe.</span>
      </header>

      <div className="weekly-deals__grid">
        {professionalExperiences.map((experience, index) => {
          const CornerIcon = cornerIcons[experience.cornerIcon];
          return (
            <article className={`experience-card experience-card--${experience.theme}`} style={{ '--card-index': index }} key={experience.id}>
              <header className="experience-card__header">
                <div><h3 className={`experience-card__company experience-card__company--${experience.id}`}>{experience.company}</h3><p>{experience.role}</p></div>
                <CompanyLogo source={experience.logo} futureSource={experience.futureLogo} company={experience.company} />
              </header>
              <div className="experience-card__body">
                <Facts items={experience.facts} />
                <Skills items={experience.skills} />
                <span className="experience-card__corner" aria-hidden="true"><CornerIcon size={25} strokeWidth={2.2} /></span>
              </div>
            </article>
          );
        })}
      </div>

      <article className="volunteering-card">
        <div className="volunteering-card__identity">
          <div><h3>{volunteering.title}</h3><p>{volunteering.organisation}</p></div>
          <CompanyLogo source={volunteering.logo} futureSource={volunteering.futureLogo} company={volunteering.organisation} />
        </div>
        <div className="volunteering-card__details">
          <Facts items={volunteering.facts} />
          <Skills items={volunteering.skills} />
          <span className="volunteering-card__corner" aria-hidden="true"><Handshake size={27} strokeWidth={2.1} /></span>
        </div>
      </article>
    </section>
  );
}
