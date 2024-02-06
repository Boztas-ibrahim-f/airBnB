import React from 'react'
import FirstBox from './FirstBox'
import SecondBox from './SecondBox'
import ThirdBox from './ThirdBox'
import FourthBox from './FourthBox'
import { Grid, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'

function ContaineModal({isOpen, onClose}) {
  return (
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
          <FirstBox/>
          <SecondBox/>
         <ThirdBox/>
         <FourthBox/>
        </Grid>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default ContaineModal
