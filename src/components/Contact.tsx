import { site } from '../config'
import { ExternalLink } from './ExternalLink'

/** Last meaningful part of a profile URL, e.g. "in/your-handle" or "mishalz". */
const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?[^/]+\//, '').replace(/\/$/, '')

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'LinkedIn', value: handle(site.linkedin), href: site.linkedin, external: true },
  { label: 'GitHub', value: handle(site.github), href: site.github, external: true },
  { label: 'Résumé', value: 'PDF', href: site.resume, download: 'Mishal-Zulfiqar-CV.pdf' },
]

export function Contact() {
  return (
    <section id="contact" className="band band--forest contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div>
          <p className="kicker">Get in touch</p>
          <h2 id="contact-title">Let's build something meaningful</h2>
          <p className="intro">
            I'm looking to join a team with strong engineering practices and learn from senior engineers.
            If that sounds like yours, or you have something meaningful to build, I'd love to hear from you.
          </p>
          <p className="contact__place">{site.location}</p>
        </div>
        <ul className="channels">
          {channels.map((c) => {
            const Link = c.external ? ExternalLink : 'a'
            return (
              <li key={c.label}>
                <Link href={c.href} download={c.download}>
                  <span className="channels__label">{c.label}</span>{' '}
                  <span className="channels__value">{c.value}</span>{' '}
                  <span className="channels__arrow" aria-hidden="true">{c.download ? '↓' : '↗'}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
