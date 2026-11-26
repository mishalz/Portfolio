import type { ReactNode } from 'react'

interface Props {
  id: string
  /** Small label above the heading. */
  kicker: string
  title: string
  intro?: string
  /** Background surface; alternate these between neighbouring sections. */
  tone: 'paper' | 'ivory'
  /** Colour of the square markers. */
  marker: 'berry' | 'blue'
  /** Optional decorative drawing beside the heading. */
  art?: ReactNode
  children: ReactNode
}

/** Full-bleed band with corner markers, a header block and a centred container. */
export function Section({ id, kicker, title, intro, tone, marker, art, children }: Props) {
  return (
    <section id={id} className={`band band--${tone} band--${marker}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-head">
          <div>
            <p className="kicker">{kicker}</p>
            <h2 id={`${id}-title`}>{title}</h2>
            {intro && <p className="intro">{intro}</p>}
          </div>
          {art}
        </header>
        {children}
      </div>
    </section>
  )
}
