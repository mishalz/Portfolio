import type { Project } from '../content/projects'
import { ExternalLink } from './ExternalLink'

export function ProjectCard({ project: p }: { project: Project }) {
  // Highlights, stack and links sit on the right, unless a screenshot takes that column.
  const body = (
    <>
      <ul className="bullets">
        {p.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <ul className="tags" aria-label={`${p.title} tech stack`}>
        {p.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      {p.note && <p className="note">{p.note}</p>}
      {p.links.length > 0 && (
        <p className="links">
          {p.links.map((l) => <ExternalLink key={l.href} href={l.href}>{l.label} ↗</ExternalLink>)}
        </p>
      )}
    </>
  )

  return (
    <article className={p.screenshot ? 'panel panel--shot' : 'panel'}>
      <div>
        <h3>{p.title}</h3>
        <p className="tagline">{p.tagline}</p>
        <p>{p.summary}</p>
        {p.facts.length > 0 && (
          <dl className="facts">
            {p.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {p.screenshot && body}
      </div>
      {p.screenshot ? (
        <figure className="shot">
          <img src={p.screenshot.src} alt={p.screenshot.alt} width={p.screenshot.width} height={p.screenshot.height} loading="lazy" />
          <figcaption>{p.screenshot.caption}</figcaption>
        </figure>
      ) : (
        <div>{body}</div>
      )}
      <details className="deep">
        <summary>Technical details<span className="visually-hidden"> for {p.title}</span></summary>
        <div className="deep__groups">
          {p.details.map((d) => (
            <section key={d.title}>
              <h4>{d.title}</h4>
              <ul className="bullets">{d.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </section>
          ))}
        </div>
      </details>
    </article>
  )
}
