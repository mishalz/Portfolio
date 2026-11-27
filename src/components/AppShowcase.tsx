import { useState } from 'react'
import { dandelionScreens } from '../content/screens'
import { DandelionMark } from './DandelionMark'
import { OptionList } from './OptionList'

const steps = dandelionScreens.map((s, i) => ({ title: `0${i + 1} ${s.title}`, body: s.caption }))

/** A framed, step-by-step walkthrough of the Dandelion app. */
export function AppShowcase() {
  const [active, setActive] = useState(1) // The middle step is highlighted first.

  return (
    <figure className="app">
      <figcaption className="app__head">
        <p className="kicker">Dandelion · a nightly reflection app I'm co-building</p>
        <a href="#projects">Read more</a>
      </figcaption>
      <div className="app__stage">
        <span className="app__mark" aria-hidden="true"><DandelionMark /></span>
        <ul className="app__screens" aria-label="Dandelion app screens">
          {dandelionScreens.map((s, i) => (
            <li key={s.title} className={i === active ? 'phone phone--active' : 'phone'}>
              <img src={s.image} alt={s.alt} width={640} height={1391} />
            </li>
          ))}
        </ul>
      </div>
      <OptionList layout="row" options={steps} active={active} onSelect={setActive} />
    </figure>
  )
}
