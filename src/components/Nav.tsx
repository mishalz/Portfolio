import { site } from '../config'

const items = [
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['about', 'About'],
] as const

export function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">{site.name}</a>
      <nav aria-label="Primary">
        <ul>
          {items.map(([id, label]) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>
      <div className="nav__actions">
        <a className="btn btn--small" href={site.resume}>Résumé</a>
        <a className="btn btn--small btn--primary" href="#contact">Say hello</a>
      </div>
    </header>
  )
}
