import Services from '@/component/Services'
import HeroSection from '@/component/heroSection'
import { Link } from '@chakra-ui/next-js'

export default function Page() {
  return (
   <main className='flex gap-10 flex-col'>
  <HeroSection/>
  <Services/>
   </main>
  )
}