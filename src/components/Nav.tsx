import { site } from '../config'

const items = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
] as const

export function Nav() {
  return (
    <>
      <p className="banner">
        Currently co-building Dandelion, an AI-powered journaling app. <a href="#projects">Read more</a>
      </p>
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
    </>
  )
}
