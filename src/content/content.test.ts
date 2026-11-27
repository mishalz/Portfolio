import { about } from './about'
import { projects } from './projects'
import { dandelionScreens } from './screens'
import { experience } from './experience'
import { skills } from './skills'

describe('content integrity', () => {
  it('has unique project ids and non-empty fields', () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const p of projects) {
      expect(p.title).toBeTruthy()
      expect(p.stack.length).toBeGreaterThan(0)
      expect(p.highlights.length).toBeGreaterThan(0)
      for (const d of p.details) expect(d.points.length).toBeGreaterThan(0)
    }
  })

  it('only emits links that are valid URLs', () => {
    for (const p of projects) for (const l of p.links) expect(() => new URL(l.href)).not.toThrow()
  })

  it('has experience and skills', () => {
    expect(experience.length).toBeGreaterThan(0)
    expect(Object.keys(skills).length).toBeGreaterThan(0)
  })

  it('pairs every pillar and app screen with an image', () => {
    for (const p of about.pillars) expect(p.image.src).toBeTruthy()
    for (const s of dandelionScreens) {
      expect(s.image).toBeTruthy()
      expect(s.alt).toBeTruthy()
    }
  })
})
