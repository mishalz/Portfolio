import { projects } from '../content/projects'
import { DandelionMark } from './DandelionMark'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      tone="ivory"
      kicker="Selected work"
      title="Projects"
      intro="Software should solve real problems. I look for problems that matter to people, then solve them as simply and robustly as I can, with good engineering practices."
      art={<DandelionMark />}
    >
      <div className="stack">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Section>
  )
}
