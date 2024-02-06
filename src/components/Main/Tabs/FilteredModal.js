import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdGraphicEq } from 'react-icons/md'
import FilteredModalButton from './FilteredModalButton'

function FilteredModal({ isOpen, onClose }) {
  const [rangeValues, setRangeValues] = useState([1091, 2182])
  const handleChange = (values) => {
    setRangeValues(values)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        display="flex"
        justifyContent="center"
        m="auto"
        minHeight="475px"
        minWidth="744px"
        borderRadius="15"
        overflow="hidden"
      >
        <ModalCloseButton right="auto" />
        <ModalHeader
          p="10px"
          mx="30px"
          display="flex"
          justifyContent="center"
          fontSize="18px"
          fontWeight="700"
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          Filtreler
        </ModalHeader>

        <ModalBody>
          <Box>Fiyat Aralığı</Box>
          <Box>Ortalama gecelik fiyatı : </Box>
          <Box>
            <Box w="full">
              <Box>
                <RangeSlider
                  defaultValue={[1091, 10910]}
                  min={1091}
                  max={10910}
                  step={1}
                  onChange={handleChange}
                  range
                >
                  <RangeSliderTrack bg="gray.200">
                    <RangeSliderFilledTrack bg="gray.400" />
                  </RangeSliderTrack>
                  <Box>
                    <RangeSliderThumb
                      boxSize={6}
                      border="1px solid "
                      borderColor="gray.300"
                      index={0}
                    >
                      <Box color="gray.600" as={MdGraphicEq} />
                    </RangeSliderThumb>
                    <RangeSliderThumb
                      boxSize={6}
                      border="1px solid "
                      borderColor="gray.300"
                      index={1}
                    >
                      <Box color="gray.600" as={MdGraphicEq} />
                    </RangeSliderThumb>
                  </Box>
                </RangeSlider>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginY="10px"
          >
            <Box
              display="flex"
              flexDirection="column"
              border="1px solid gray"
              borderRadius="20px"
              mr="7px"
              p="10px"
            >
              <Box fontSize="11px" color="gray.600">
                Minimum Fiyat
              </Box>
              <Input
                border="0"
                textAlign="center"
                defaultValue={rangeValues[0]}
                padding-inline="0"
                h="auto"
              />
            </Box>
            -
            <Box
              display="flex"
              flexDirection="column"
              border="1px solid gray"
              borderRadius="20px"
              ml="7px"
              p="10px"
            >
              <Box fontSize="11px" color="gray.600">
                Minimum Fiyat
              </Box>
              <Input
                border="0"
                textAlign="center"
                variant="unstyle"
                defaultValue={rangeValues[1]}
                padding-inline="0"
                h="auto"
              />
            </Box>
          </Box>

          <Box
            py="1rem"
            fontSize="20px"
            fontWeight="600"
            borderTop="1px solid "
            borderColor="gray.300"
          >
            Odalar ve yataklar
          </Box>
          <Box
            my="0.75rem
              "
            fontSize="18px"
            fontWeight="600"
          >
            Yatak Odaları
          </Box>
          <FilteredModalButton />
          <Box
            my="0.75rem
              "
            fontSize="18px"
            fontWeight="600"
          >
            Yataklar
          </Box>
          <FilteredModalButton />
          <Box
            my="0.75rem
              "
            fontSize="18px"
            fontWeight="600"
          >
            Banyolar
          </Box>
          <FilteredModalButton />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Tümünü temizle
          </Button>
          <Button variant="ghost">...evi göster</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default FilteredModal
