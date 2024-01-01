import Services from '@/component/Services'
import HeroSection from '@/component/heroSection'
import { Link } from '@chakra-ui/next-js'
import { Box } from '@chakra-ui/react'

export default function Page() {
  return (
   <Box as="main" display={'flex'} gap={10} flexDirection={'column'} >
  <HeroSection/>
  <Services/>
   </Box>
  )
}