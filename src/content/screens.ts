import checkIn from '../assets/dandelion/check-in.jpg'
import home from '../assets/dandelion/home.jpg'
import welcome from '../assets/dandelion/welcome.jpg'

export interface Screen {
  /** Short step name shown under the stage. */
  title: string
  caption: string
  alt: string
  image: string
}

/** Dandelion screens shown in the hero walkthrough, left to right. */
export const dandelionScreens: Screen[] = [
  {
    title: 'Arrive',
    caption: 'A quiet welcome, with no account needed to begin.',
    alt: 'Dandelion welcome screen',
    image: welcome,
  },
  {
    title: 'Check in',
    caption: 'Name how you are feeling, or say you are not sure.',
    alt: 'Dandelion check-in screen',
    image: checkIn,
  },
  {
    title: 'Look back',
    caption: 'See today’s reflection and your week at a glance.',
    alt: 'Dandelion home screen',
    image: home,
  },
]
