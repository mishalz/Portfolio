import { projects, type Project } from '../content/projects'
import { Dandelion } from './Ink'
import { Section } from './Section'

function ProjectCard({ project: p, className }: { project: Project; className: string }) {
  return (
    <article className={className}>
      <h3>{p.title}</h3>
      <p className="tagline">{p.tagline}</p>
      <p>{p.summary}</p>
      <ul className="bullets">
        {p.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <ul className="tags" aria-label={`${p.title} tech stack`}>
        {p.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      {p.note && <p className="note">{p.note}</p>}
      {p.links.length > 0 && (
        <p className="links">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
          ))}
        </p>
      )}
    </article>
  )
}

export function Projects() {
  // The first project gets a full-width panel; the rest sit in a grid below.
  const [lead, ...others] = projects

  return (
    <Section
      id="projects"
      tone="paper"
      marker="blue"
      kicker="Selected work"
      title="Projects with a purpose"
      intro="Products and tools for reflection, study and connection."
      art={<Dandelion />}
    >
      <ProjectCard project={lead} className="panel panel--lead" />
      <div className="grid grid--2">
        {others.map((p) => <ProjectCard key={p.id} project={p} className="panel" />)}
      </div>
    </Section>
  )
}
