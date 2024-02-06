import { ChevronUpIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { CiHeart } from 'react-icons/ci'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { IoSearchOutline } from 'react-icons/io5'

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
          <Box
            p="7px 40px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              fontWeight="600"
              justifyContent="center"
              w="full"
              alignItems="center"
            >
              <Box display="flex" justifyContent="space-around" flex="2 1">
                <Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    flex="1 1"
                  >
                    <Box fontSize="3xl">
                      <IoSearchOutline />
                    </Box>
                    <Box fontSize="12px" fontWeight="500">
                      Keşfedin
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    flex="1 1"
                  >
                    <Box color="black" fontSize="3xl">
                      <CiHeart />
                    </Box>
                    <Box fontSize="12px" fontWeight="500">
                      Favoriler
                    </Box>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    flex="1 1"
                  >
                    <Box fontSize="3xl">
                      <HiOutlineUserCircle />
                    </Box>
                    <Box fontSize="12px" fontWeight="500">
                      Giriş Yap
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Box>
        <Modal isOpen={isOpen} onClose={onClose} size="10xl">
          <ModalOverlay />
          <ModalContent
            display="flex"
            flexDirection="column"
            position="fixed"
            width="full"
            bottom="-64px"
            borderTopRadius="15px"
            py="42px"
            px="6px"
          >
            <ModalCloseButton
              _hover={{ bgColor: 'white', color: 'red' }}
              right="auto"
            />
            <ModalBody display="flex" justifyContent="center" fontFamily="">
              <Grid w="70%" display="flex" fontSize="14px">
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
                <Box width="full">
                  <Box py="7px" fontWeight="600">
                    Topluluk
                  </Box>
                  <Box>
                    <Box py="7px">Airbnb.org:afet yardımı</Box>
                    <Box py="7px">Ayrımcılıkla mücadele</Box>
                  </Box>
                </Box>
                <Box width="full">
                  <Box py="7px" fontWeight="600">
                    Ev sahipliği
                  </Box>
                  <Box>
                    <Box py="7px">Evinizi Airbnb'ye taşıyın</Box>
                    <Box py="7px">Ev sahipleri için AirCover</Box>
                    <Box py="7px">Ev sahibi kaynaklarını keşfedin</Box>
                    <Box py="7px">Topluluk forumunu ziyaret edin</Box>
                    <Box py="7px">Sorumlu ev sahipliği</Box>
                  </Box>
                </Box>
                <Box width="full">
                  <Box py="7px" fontWeight="600">
                    Airbnb
                  </Box>
                  <Box>
                    <Box py="7px">Basın odası</Box>
                    <Box py="7px">Yeni özellikler hakkında bilgi</Box>
                    <Box py="7px">Kurucularımızdan bir mektup</Box>
                    <Box py="7px">Kariyer</Box>
                    <Box py="7px">Yatırımcılar</Box>
                  </Box>
                </Box>
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  )
}

export default Footer
