import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders every section with a heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    for (const name of [
      'More than the code I write',
      'Projects with a purpose',
      "Where I've worked",
      'The tools I build with',
      "Let's build something meaningful",
    ]) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
  })

  it('opens external links safely', () => {
    render(<App />)
    const external = document.querySelectorAll('a[target="_blank"]')
    expect(external.length).toBeGreaterThan(0)
    external.forEach((a) => expect(a).toHaveAttribute('rel', expect.stringContaining('noopener')))
  })

  it('has a skip link and labelled primary nav', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
  })

  it('switches the highlighted about pillar', () => {
    render(<App />)
    const nature = screen.getByRole('button', { name: /^Nature/ })
    expect(nature).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(nature)
    expect(nature).toHaveAttribute('aria-pressed', 'true')
  })
})
