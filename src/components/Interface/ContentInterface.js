import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'

function ContentInterface() {
  return (
    <Box
        display={{base:"none",md:"flex"}}
        p="48px 0 80px"
        bgColor="rgb(245, 245, 245)"
        borderBottom="2px solid rgb(225, 225, 225)"
      >
        <Box p="0 80px" w="full" h="inherit">
          <Flex
            bgColor="white"
            borderRadius="16"
            overflow="hidden"
            alignItems="center"
          >
            <Image
              w="50%"
              src="https://a0.muscache.com/im/pictures/c19751e5-cd4f-41d0-898f-2580b60cae08.jpg?im_w=1200&im_q=highq"
              borderRadius="16px 16px"
            />
            <Box px="48px" width="full">
              <Box
                m={{base:"32px 0 0",lg:"32px 0 16px"}}
                fontSize="32"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Başka sorularınız mı var?
              </Box>
              <Box
                color="#717171"
                mb="24px"
                fontSize="18px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Sorularınızın yanıtlarını yakınınızdaki deneyimli bir Süper Ev
                Sahibinden alabilirsiniz.
              </Box>
              <Button mb="8px" variant="none" color="white" bgColor="rgb(255, 56, 92)" fontWeight="400" >Bir Süper Ev Sahibiyle eşleşin</Button>
            </Box>
          </Flex>
        </Box>
      </Box>
  )
}

export default ContentInterface
