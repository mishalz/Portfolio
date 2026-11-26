import { site } from '../config'
import meadow from '../assets/meadow.jpeg'
import slopes from '../assets/slopes.jpeg'
import valley from '../assets/valley.jpeg'
import pond from '../assets/pond.jpeg'
import { Collage, type Snippet } from './Collage'

const snippets: Snippet[] = [
  { src: slopes, style: { top: '12%', left: '8%', width: 104, height: 118, objectPosition: 'center 40%' } },
  { src: meadow, style: { bottom: '10%', left: '2%', width: 128, height: 96, objectPosition: 'center 75%' } },
  { src: pond, style: { top: '16%', right: '4%', width: 92, height: 120, objectPosition: 'center 55%' } },
  { src: valley, style: { bottom: '8%', right: '11%', width: 120, height: 104, objectPosition: 'center 65%' } },
]

export function Contact() {
  return (
    <section id="contact" className="band band--ivory band--berry cta" aria-labelledby="contact-title">
      <Collage items={snippets} />
      <div className="container cta__body">
        <p className="kicker">Get in touch</p>
        <h2 id="contact-title">Let's build something meaningful</h2>
        <p className="intro">
          I'm looking to join a team with strong engineering practices and learn from senior engineers.
          If that sounds like yours, or you have something meaningful to build, I'd love to hear from you.
        </p>
        <div className="actions">
          <a className="btn btn--primary" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  )
}
