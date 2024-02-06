import { ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'


function LargeFooter({onOpen}) {
  return (
    <Box
            p="7px 70px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" fontWeight="600" gap="6px">
              <Box>© 2023 Airbnb,Inc</Box>•
              <Box _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Gizlilik
              </Box>
              •
              <Box _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Şartlar
              </Box>
              •
              <Box _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Site Haritası
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap="6px">
              <Box fontWeight="600">₺ TRY</Box>
              <Box _hover={{ cursor: 'pointer' }} onClick={onOpen}>
                <Button
                  colorScheme="none"
                  _hover={{ textDecoration: 'underline' }}
                  color="gray.800"
                >
                  Destek ve Kaynaklar
                </Button>
                <ChevronUpIcon />
              </Box>
            </Box>
          </Box>
  )
}

export default LargeFooter
