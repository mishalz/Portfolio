import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders every section with a heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    for (const name of [
      'More than the code I write',
      'Projects',
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

  it('highlights Nature first and switches pillar on click', () => {
    render(<App />)
    const nature = screen.getByRole('button', { name: /^Nature/ })
    const people = screen.getByRole('button', { name: /^People/ })
    expect(nature).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(people)
    expect(people).toHaveAttribute('aria-pressed', 'true')
    expect(nature).toHaveAttribute('aria-pressed', 'false')
  })

  it('shows the Dandelion screens in the hero', () => {
    render(<App />)
    const screens = screen.getByRole('list', { name: 'Dandelion app screens' })
    expect(screens.children).toHaveLength(3)
    expect(screen.getByRole('img', { name: 'Dandelion check-in screen' })).toBeInTheDocument()
  })

  it('offers each way to get in touch', () => {
    render(<App />)
    for (const label of ['Email', 'LinkedIn', 'GitHub', 'Résumé']) {
      expect(screen.getByRole('link', { name: new RegExp(`^${label} `) })).toBeInTheDocument()
    }
  })

  it('shows the Tadabbur connection graph', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /Tadabbur connection graph/ })).toBeInTheDocument()
  })
})
