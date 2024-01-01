import { Rubik } from 'next/font/google'


// font-family: 'Playfair Display', serif;

import { Roboto ,Playfair_Display} from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
})


const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const fonts = {
  rubik: rubik,
  roboto,
  playfairDisplay
}