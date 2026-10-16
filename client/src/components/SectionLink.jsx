export default function SectionLink({ id, onNavigate, children, ...props }) {
  return <a href={`#${id}`} {...props} onClick={(event) => { event.preventDefault(); onNavigate(id); }}>{children}</a>;
}
