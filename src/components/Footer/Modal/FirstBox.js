import { Box } from '@chakra-ui/react'


function FirstBox() {
  return (
    <Box width="full">
      <Box fontSize="14px" py="7px" fontWeight="600">
        Destek
      </Box>
      <Box>
        <Box py="7px">Yardım Merkezi</Box>
        <Box py="7px">AirCover</Box>
        <Box py="7px">Engelli kişilere destek</Box>
        <Box py="7px">İptal seçenekleri</Box>
        <Box py="7px">COVID-19 önlemlerimiz</Box>
        <Box py="7px">Semtinizdeki sorunu bildirin</Box>
      </Box>
    </Box>
  )
}

export default FirstBox
