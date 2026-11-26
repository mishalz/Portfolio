import type { CSSProperties } from 'react'

export interface Snippet {
  src: string
  /** Where the tile sits and what part of the illustration it shows. */
  style: CSSProperties
}

/** A few small illustration crops scattered around centred text. Decorative. */
export function Collage({ items }: { items: Snippet[] }) {
  return (
    <div className="collage" aria-hidden="true">
      {items.map((item, i) => (
        <img key={i} src={item.src} alt="" style={item.style} />
      ))}
    </div>
  )
}
