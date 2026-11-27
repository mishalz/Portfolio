import { site } from '../config'
import { AppShowcase } from './AppShowcase'

export function Hero() {
  return (
    <section id="top" className="band band--paper hero" aria-labelledby="hero-title">
      <div className="container hero__body">
        <p className="kicker">{site.role}</p>
        <h1 id="hero-title">
          <span className="soft">Building thoughtful software</span> that has an impact on{' '}
          <span className="soft">the people who use it.</span>
        </h1>
        <p className="intro">
          I'm {site.name}. I love building software, and seeing it solve people's problems.
          I work in TypeScript, React and Node. MSc Advanced Computing (Distinction), based in {site.location}.
        </p>
        <div className="actions">
          <a className="btn btn--primary" href="#projects">See my work</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>
      <div className="container">
        <AppShowcase />
      </div>
    </section>
  )
}
