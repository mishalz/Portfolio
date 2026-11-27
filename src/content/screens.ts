import checkIn from '../assets/dandelion/check-in.png'
import welcome from '../assets/dandelion/welcome.jpg'
import writing from '../assets/dandelion/writing.png'

export interface Screen {
  title: string
  image: string
}

/** Dandelion screens shown in the hero, left to right. Narrow phones show the middle one. */
export const dandelionScreens: Screen[] = [
  { title: 'Welcome', image: welcome },
  { title: 'Check-in', image: checkIn },
  { title: 'Writing', image: writing },
]
