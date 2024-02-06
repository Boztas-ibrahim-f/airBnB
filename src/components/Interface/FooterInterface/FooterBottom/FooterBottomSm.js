import { Box, Button, Image } from '@chakra-ui/react'
import Home from "../../../../Image/icons8-home-24.png"

function FooterBottomSm() {
  return (
    <Box h="100px" w="full" bgColor="white"  display="flex" flexDirection="column" alignItems="center" justifyContent="center"  position="fixed" bottom="0" left="0">
        <Box mb="0.75rem" fontWeight="600">
            Evinizi Airbnb'ye taşıyın!
        </Box>
        <Button w="90%" variant="none" bgColor="rgb(255, 56, 92)" gap="5px" ><Image src={Home}/><Box display="flex" alignItems="center" h="full" fontSize="18px" fontWeight="500" color="white">Airbnb Start</Box></Button>
    </Box>
  )
}

export default FooterBottomSm
