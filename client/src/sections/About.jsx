import { useEffect, useRef } from 'react';
import AboutVisual from '../components/AboutVisual';
import { about } from '../data/about';
import '../styles/about.css';

export default function About() {
  const section = useRef(null);

  useEffect(() => {
    // Le texte reste visible même sans IntersectionObserver ou sans animation.
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('candidate-about__revealed');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });
    section.current.querySelectorAll('[data-about-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={section}
      id="a-propos"
      className="candidate-about page-width"
      aria-labelledby="about-title"
      tabIndex={-1}
      data-section-ready="true"
    >
      <div className="candidate-about__intro" data-about-reveal>
        <div className="candidate-about__text">
          <p className="candidate-about__eyebrow">FAISONS CONNAISSANCE</p>
          <h2 id="about-title">Derrière cette candidature,<br className="candidate-about__break" /> il y a <span>Lina.</span></h2>
          <div className="candidate-about__paragraphs">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="candidate-about__intent">Mon objectif est de travailler en magasin, au contact des clients et de l’équipe, dans la durée.</p>
        </div>
        <AboutVisual photo={about.photo} photoAlt={about.photoAlt} />
      </div>

      <div className="candidate-about__motivations" aria-labelledby="why-lidl-title">
        <h3 id="why-lidl-title">Pourquoi je souhaite rejoindre Lidl ?</h3>
        <ul className="candidate-about__cards">
          {about.motivations.map(({ id, Icon, title, text }) => (
            <li className="motivation-card" key={id} data-about-reveal>
              <span className="motivation-card__icon"><Icon size={25} strokeWidth={1.7} aria-hidden="true" /></span>
              <h4>{title}</h4>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
