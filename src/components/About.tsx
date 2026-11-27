import { useState } from 'react'
import { about } from '../content/about'
import pond from '../assets/pond.jpeg'
import valley from '../assets/valley.jpeg'
import bookshelf from '../assets/bookshelf.jpg'
import { Section } from './Section'

// One illustration per pillar, in the same order as `about.pillars`.
const pillarImages = [
  { src: pond, position: 'center 62%' }, // Framed on the boat.
  { src: valley, position: 'center 70%' },
  { src: bookshelf, position: 'center 68%' },
]

export function About() {
  const [active, setActive] = useState(1) // Nature, the middle column, is shown first.
  const image = pillarImages[active]

  return (
    <Section id="about" tone="paper" kicker="Beyond the code" title="More than the code I write" intro={about.intro}>
      <div className="feature">
        <div className="feature__media">
          <img src={image.src} style={{ objectPosition: image.position }} alt="" />
        </div>
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
