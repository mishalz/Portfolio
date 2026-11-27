import type { AnchorHTMLAttributes } from 'react'

/** A link that opens safely in a new tab. */
export function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />
}
