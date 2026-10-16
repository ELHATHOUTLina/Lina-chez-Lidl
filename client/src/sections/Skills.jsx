import { skillGroups } from '../data/skills';
import '../styles/skills.css';

export default function Skills() {
  return (
    <section
      id="competences"
      className="store-skills page-width"
      aria-labelledby="skills-title"
      tabIndex={-1}
      data-section-ready="true"
    >
      <header className="store-skills__heading">
        <p className="store-skills__eyebrow">SUR LE TERRAIN</p>
        <h2 id="skills-title">Mes compétences en rayon</h2>
        <p>Des compétences concrètes pour contribuer au quotidien du magasin.</p>
      </header>

      <div className="store-skills__grid">
        {skillGroups.map(({ id, number, title, color, accent, Icon, skills }) => (
          <article
            className={`skill-department skill-department--${id}`}
            key={id}
            style={{ '--department-color': color, '--department-accent': accent }}
          >
            <header className="skill-department__header">
              <div>
                <span className="skill-department__number" aria-hidden="true">RAYON {number}</span>
                <h3>{title}</h3>
              </div>
              <span className="skill-department__main-icon" aria-hidden="true">
                <Icon size={28} strokeWidth={1.7} />
              </span>
            </header>

            <ul className="skill-department__list">
              {skills.map(({ label, Icon: SkillIcon }) => (
                <li key={label} className="skill-item">
                  <span className="skill-item__icon" aria-hidden="true">
                    <SkillIcon size={20} strokeWidth={1.8} />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
