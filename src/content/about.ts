import nature from '../assets/about/nature.jpg'
import people from '../assets/about/people.jpg'
import reading from '../assets/about/reading.jpg'

export const about = {
  intro:
    'Away from the keyboard, I read, hike and spend time with friends and family. I also love nature and try to spend as much time outdoors as I can.',
  pillars: [
    {
      title: 'People',
      body: 'I like observing people and how they behave. I enjoy meeting people from different cultures and getting to know them. People are at the core of my work, and I try to understand their needs and how to solve their problems with software.',
      image: { src: people, position: 'center 52%' },
    },
    {
      title: 'Nature',
      body: 'Time outdoors resets me. I try to bring the same patience and attention to detail to engineering that nature shows in its small systems.',
      image: { src: nature, position: 'center 68%' },
    },
    {
      title: 'Reading & ideas',
      body: 'I read widely and look for perspectives that challenge mine. It keeps me curious, and it makes me a better collaborator.',
      image: { src: reading, position: 'center 74%' },
    },
  ],
  reading: [
    { title: 'Heart Centered Design', author: 'Peter Gould' },
    { title: '1984 and Animal Farm', author: 'George Orwell' },
    { title: 'The Design of Everyday Things', author: 'Don Norman' },
  ],
}
