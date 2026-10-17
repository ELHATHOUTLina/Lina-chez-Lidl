import { Image as ImageIcon } from 'lucide-react';
import { professionalExperiences, volunteering } from '../data/experiences';
import '../styles/experiences.css';

function ExperienceImage({ source, futureSource, label }) {
  if (source) return <img src={source} alt="" />;

  return (
    <div className="experience-image__placeholder" data-image-path={futureSource}>
      <ImageIcon size={30} strokeWidth={1.5} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="weekly-deals page-width"
      aria-labelledby="experiences-title"
      tabIndex={-1}
      data-section-ready="true"
    >
      <header className="weekly-deals__heading">
        <p>MON PARCOURS SUR LE TERRAIN</p>
        <h2 id="experiences-title">Les bonnes affaires de la semaine</h2>
      </header>

      <div className="weekly-deals__grid">
        {professionalExperiences.map((experience) => (
          <article className={`experience-card experience-card--${experience.theme}`} key={experience.id}>
            <div className="experience-card__image">
              <ExperienceImage source={experience.image} futureSource={experience.futureImage} label={experience.placeholder} />
            </div>
            <div className="experience-card__content">
              <p>EXPÉRIENCE PROFESSIONNELLE</p>
              <h3>{experience.company}</h3>
              {experience.details.length > 0 && (
                <ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <article className="volunteering-card">
        <div className="volunteering-card__content">
          <p>BÉNÉVOLAT</p>
          <h3>{volunteering.title}</h3>
          <strong>{volunteering.organisation}</strong>
        </div>
        <div className="volunteering-card__image">
          <ExperienceImage source={volunteering.image} futureSource={volunteering.futureImage} label={volunteering.placeholder} />
        </div>
      </article>
    </section>
  );
}
