import { site } from '../config'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {site.name}. Built with React + TypeScript.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
