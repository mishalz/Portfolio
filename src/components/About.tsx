import { useState } from 'react'
import { about } from '../content/about'
import { OptionList } from './OptionList'
import { Section } from './Section'

export function About() {
  const [active, setActive] = useState(1) // The middle pillar (Nature) is shown first.
  const { image } = about.pillars[active]

  return (
    <Section id="about" tone="paper" kicker="Beyond the code" title="More than the code I write" intro={about.intro}>
      <div className="feature">
        <div className="feature__media">
          <img src={image.src} style={{ objectPosition: image.position }} alt="" />
        </div>
        <OptionList layout="stacked" options={about.pillars} active={active} onSelect={setActive} />
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
