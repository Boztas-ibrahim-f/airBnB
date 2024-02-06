import {
  Box,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import ContaineModal from './Modal/ContaineModal'
import MdFooter from './FooterBox/MdFooter'
import LargeFooter from './FooterBox/LargeFooter'

function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let md = useBreakpointValue({ base: false, md: true })
  return (
    <Box h="full" width="full">
      {md ? (
        <Box
          w="100%"
          position="fixed"
          bottom="0px"
          right="0px"
          bgColor="white"
          border="1px solid"
          borderColor="gray.300"
          alignItems="center"
        >
          <LargeFooter onOpen={onOpen}/>
        </Box>
      ) : (
        <Box
          w="100%"
          h="65px"
          position="fixed"
          bottom="0px"
          right="0px"
          bgColor="white"
          border="1px solid"
          borderColor="gray.300"
          alignItems="center"
        >
          <MdFooter/>
        </Box>
      )}
      <ContaineModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Footer
