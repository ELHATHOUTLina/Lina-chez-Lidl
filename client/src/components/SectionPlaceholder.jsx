// Remplacer ce composant par le contenu de la section à son étape dédiée.
// Une vraie section doit conserver l’id, tabIndex={-1} et data-section-ready="true".
export default function SectionPlaceholder({ id, label }) {
  return <section id={id} aria-label={label} tabIndex={-1} data-section-ready="false" hidden />;
}
