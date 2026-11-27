import { site } from '../config'
import { education, experience } from '../content/experience'
import { AppShowcase } from './AppShowcase'

const places = [...experience, ...education].map((e) => e.org)

export function Hero() {
  return (
    <>
      <section id="top" className="band band--paper band--blue hero" aria-labelledby="hero-title">
        <div className="container hero__body">
          <p className="kicker">{site.role} · Full-stack</p>
          <h1 id="hero-title">
            <span className="soft">Building thoughtful software</span> that has an impact on{' '}
            <span className="soft">the people who use it.</span>
          </h1>
          <p className="intro">
            I'm {site.name}. 
            <b> Two things about me</b>: I love to build software and I love to see it solve people's problems. I work in TypeScript, React and Node, and I'm co-building
            Dandelion, an AI-powered journaling app. MSc Advanced Computing (Distinction), based in {site.location}.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href="#projects">See my work</a>
            <a className="btn" href="#about">About me</a>
          </div>
        </div>
        <div className="container">
          <AppShowcase />
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
