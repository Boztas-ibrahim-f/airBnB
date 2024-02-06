import React from 'react'
import iconsettings from "../../../Image/settings-sliders.png"
import { Box, Button, Image, useDisclosure } from '@chakra-ui/react'
import FilteredModal from './FilteredModal'

function FilteredButone() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px="10px">
            <Button
              onClick={onOpen}
              gap="5px"
              colorScheme="white"
              border="1px solid gray"
              textColor="black"
              fontSize="12px"
              fontWeight="400"
            >
              {" "}
              <Image src={iconsettings} />
              Filter
            </Button>
          </Box>
          <FilteredModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default FilteredButone
