import { dandelionScreens } from '../content/screens'
import { projects } from '../content/projects'
import valley from '../assets/valley.jpeg'
import { Dandelion } from './Ink'

// Positions and timing are set per seed in CSS (.seed:nth-of-type).
const SEEDS = [0, 1, 2, 3]

/** Dandelion app screens framed in glass over a landscape. */
export function AppShowcase() {
  const dandelion = projects.find((p) => p.id === 'dandelion')

  return (
    <figure className="app">
      <div className="app__stage">
        <img className="app__backdrop" src={valley} alt="" />
        {SEEDS.map((n) => (
          <span key={n} className="seed" aria-hidden="true"><Dandelion /></span>
        ))}
        <ul className="app__screens" aria-label="Dandelion app screens">
          {dandelionScreens.map((s) => (
            <li key={s.title} className="phone glass">
              <img className="phone__screen" src={s.image} alt={`Dandelion ${s.title.toLowerCase()} screen`} width={390} height={844} />
            </li>
          ))}
        </ul>
      </div>
      {dandelion && (
        <figcaption>
          <p>
            <strong>{dandelion.title}</strong>, an AI-powered journaling app I'm co-building.{' '}
            <a href="#projects">Read More</a>
          </p>
          <ul className="tags" aria-label="Dandelion tech stack">
            {dandelion.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </figcaption>
      )}
    </figure>
  )
}
