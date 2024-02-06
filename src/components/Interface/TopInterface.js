import Home from "../../Image/icons8-home-24.png"
import Logo from "../../Image/airbnb.png"
import { Box, Button, Image, Spacer, Text, useDisclosure } from "@chakra-ui/react"
import HeadModal from "./HeadModal"

function TopInterface() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
        w="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="white"
        top="0"
        position="sticky"
      >
        <Box display="flex" alignItems="center" justifyContent="space-around" h="80px" w="full" pt="20px" px="70px">
          <Image src={Logo} h="35px" />
          <Spacer />
          <Box display={{base:"none",md:"flex"}} alignItems="center" gap="17px">
            <Text
              fontSize="16px"
              fontWeight="600"
              fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
            >
              Evinizi Airbnb'ye taşıyın!
            </Text>
            <Button
              align="center"
              bgColor="#e61e4d"
              colorScheme="red"
              onClick={onOpen}
              p="25px"
            >
              <Image src={Home} mr="5px" />
              <Text
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                fontWeight="500"
                fontSize="18px"
              >
                Airbnb Start
              </Text>
            </Button>
          </Box>
        </Box>
        <HeadModal isOpen={isOpen} onClose={onClose}/>
      </Box>
  )
}

export default TopInterface
