import { site } from '../config'
import { education, experience } from '../content/experience'
import birds from '../assets/birds.jpeg'
import path from '../assets/path.jpeg'
import pond from '../assets/pond.jpeg'
import valley from '../assets/valley.jpeg'
import { Collage, type Snippet } from './Collage'

const snippets: Snippet[] = [
  { src: path, style: { top: '9%', left: '7%', width: 132, height: 176, objectPosition: 'center 55%' } },
  { src: pond, style: { top: '48%', left: 0, width: 96, height: 124, objectPosition: 'center 58%' } },
  { src: valley, style: { top: '13%', right: 0, width: 156, height: 138, objectPosition: 'center 40%' } },
  { src: birds, style: { top: '58%', right: '6%', width: 108, height: 118, objectPosition: 'center 62%' } },
]

const places = [...experience, ...education].map((e) => e.org)

export function Hero() {
  return (
    <>
      <section id="top" className="band band--paper band--blue hero" aria-labelledby="hero-title">
        <Collage items={snippets} />
        <div className="container hero__body">
          <p className="kicker">{site.role} · Full-stack</p>
          <h1 id="hero-title">
            <span className="soft">Building thoughtful software</span> that grows with{' '}
            <span className="soft">the people who use it.</span>
          </h1>
          <p className="intro">
            I'm {site.name}. I work in TypeScript, React and Node, and I'm co-building
            Dandelion, an AI-powered journaling app. MSc Advanced Computing (Distinction), based in {site.location}.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href="#projects">See my work</a>
            <a className="btn" href="#about">About me</a>
          </div>
        </div>
      </section>
      <div className="places">
        <div className="container">
          <p className="places__label">Where I've worked and studied</p>
          <ul>{places.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
    </>
  )
}
