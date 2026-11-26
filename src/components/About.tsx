import { useState } from 'react'
import { about } from '../content/about'
import birds from '../assets/birds.jpeg'
import pond from '../assets/pond.jpeg'
import slopes from '../assets/slopes.jpeg'
import { Section } from './Section'

// One illustration per pillar, in the same order as `about.pillars`.
const pillarImages = [
  { src: birds, position: 'center 58%' },
  { src: pond, position: 'center 60%' },
  { src: slopes, position: 'center 38%' },
]

export function About() {
  const [active, setActive] = useState(0)
  const image = pillarImages[active]

  return (
    <Section id="about" tone="ivory" marker="berry" kicker="Beyond the code" title="More than the code I write" intro={about.intro}>
      <div className="feature">
        <img className="feature__image" src={image.src} style={{ objectPosition: image.position }} alt="" />
        <div className="feature__tabs">
          {about.pillars.map((p, i) => (
            <button key={p.title} type="button" className="tab" aria-pressed={i === active} onClick={() => setActive(i)}>
              <span className="tab__title">{p.title}</span>
              <span className="tab__body">{p.body}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="reading">
        <h3 className="label">On my bookshelf</h3>
        <ul>
          {about.reading.map((b) => (
            <li key={b.title}><strong>{b.title}</strong><span>{b.author}</span></li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
