import { skills } from '../content/skills'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      tone="ivory"
      kicker="Skills"
      title="The tools I build with"
      intro="From mobile and web interfaces to APIs, data, deployment and LLM evaluation."
    >
      <dl className="skills">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="skills__row">
            <dt>{group}</dt>
            <dd><ul className="tags">{items.map((s) => <li key={s}>{s}</li>)}</ul></dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
