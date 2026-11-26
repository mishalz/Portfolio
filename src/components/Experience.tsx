import { education, experience } from '../content/experience'
import { Birds } from './Ink'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      tone="ivory"
      marker="berry"
      kicker="Experience"
      title="Where I've worked"
      intro="Storefronts for small businesses, and a grounding in React and TypeScript."
      art={<Birds />}
    >
      <ol className="rows">
        {experience.map((r) => (
          <li key={r.org} className="row">
            <time>{r.period}</time>
            <div>
              <h3>{r.title} · {r.org}</h3>
              <ul className="bullets">{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
      <h3 className="label">Education</h3>
      <ul className="rows">
        {education.map((e) => (
          <li key={e.title} className="row">
            <time>{e.period}</time>
            <div>
              <h4>{e.title}</h4>
              <p>{e.org} · {e.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
