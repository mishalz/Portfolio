import { useState } from 'react'
import { dandelionScreens } from '../content/screens'
import { Dandelion } from './Ink'

/** A framed, three-step walkthrough of the Dandelion app. */
export function AppShowcase() {
  const [active, setActive] = useState(1) // The middle step is highlighted first.

  return (
    <figure className="app">
      <figcaption className="app__head">
        <p className="kicker">Dandelion · a nightly reflection app I'm co-building</p>
        <a href="#projects">Read more</a>
      </figcaption>
      <div className="app__stage">
        <span className="app__mark" aria-hidden="true"><Dandelion /></span>
        <ul className="app__screens" aria-label="Dandelion app screens">
          {dandelionScreens.map((s, i) => (
            <li key={s.title} className={i === active ? 'phone phone--active' : 'phone'}>
              <img src={s.image} alt={s.alt} width={640} height={1391} />
            </li>
          ))}
        </ul>
      </div>
      <div className="app__steps">
        {dandelionScreens.map((s, i) => (
          <button key={s.title} type="button" className="step" aria-pressed={i === active} onClick={() => setActive(i)}>
            <span className="step__title">{`0${i + 1} ${s.title}`}</span>
            <span className="step__caption">{s.caption}</span>
          </button>
        ))}
      </div>
    </figure>
  )
}
