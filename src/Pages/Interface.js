import {
  Box,
  Flex,
  Image,
} from '@chakra-ui/react'
import TopInterface from '../components/Interface/TopInterface'
import HeadInterface from '../components/Interface/HeadInterface'
import MidInterface from '../components/Interface/MidInterface'
import ListInterface from '../components/Interface/ListInterface'
import QuestionBox from '../components/Interface/QuestionBox'
import ContentInterface from '../components/Interface/ContentInterface'
import FooterTop from '../components/Interface/FooterInterface/FooterTop/FooterTop'
import FooterBottom from '../components/Interface/FooterInterface/FooterBottom/FooterBottom'
import FooterBottomSm from '../components/Interface/FooterInterface/FooterBottom/FooterBottomSm'

function Interface() {
  
  return (
    <Box display="flex" flexDirection="column" width="full" alignItems="center" justifyContent="center" h="full">
      <TopInterface/>
      <HeadInterface />
      <MidInterface/>
      <Box
        w="90%"
        mb="80px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
      >
        <Image
          w="180px"
          mb="24px"
          src="https://a0.muscache.com/im/pictures/b59dd85e-3b84-4d64-8c11-3bf5f9268e4f.jpg?im_w=480&im_q=highq"
        />
        <Box
          fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          fontSize={{base:"26px",md:"40px"}}
          fontWeight={{base:"400",md:"700"}}
          alignItems="center"
          mb="64px"
        >
          Tepeden tırnağa koruma ile evinizi Airbnb'ye taşıyın
        </Box>
        <ListInterface/>
      </Box>
      <Box bgColor="rgb(245, 245, 245)" display="flex" w="100%" pt={{md:"48px"}}>
        <QuestionBox/>
      </Box>
      <ContentInterface/>
      <Box pb={{base:"100px",md:"10px"}} w="full" bgColor="rgb(245, 245, 245)">
        <Box
          py={{md:"80px"}}
          bgColor="rgb(245, 245, 245)"
          display="flex"
          justifyItems="center"
        >
          <FooterTop/>
        </Box>
        <Box display={{base:"none",md:"flex"}}>
        <FooterBottom/>
        </Box>
        <Box  display={{base:"flex",md:"none"}}>
        <FooterBottomSm/>
        </Box>
      </Box>
    </Box>
  )
}

export default Interface
