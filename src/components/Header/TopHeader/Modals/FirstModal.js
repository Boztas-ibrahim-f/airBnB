import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import madaltel from "../../../../Image/madaltel.webp"
import React from "react";

function FirstModal({ isOpen, onClose }) {
  return (
    <>
      <Box>
        <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            m="auto"
            maxHeight="475px"
            maxWidth="744px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            borderRadius="15"
            overflow="hidden"
          >
            <ModalCloseButton
              left="0"
              top="0"
              p="7px"
              m="10px"
              bgColor="gray.100"
              borderRadius="50"
            />
            <ModalBody
              display="flex"
              h="475px"
              w="full"
              p="0 32px 0 64px"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              minW="0"
              minH="0"
            >
              <Text
                textAlign="center"
                fontSize="30px"
                fontWeight="700"
                px="15px"
                mb="3"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Karşınızda misafirlerin favorileri
              </Text>
              <Text
                textAlign="center"
                fontSize="16px"
                m="6px 0 28px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Misafirlerin favorilerinden birini gördüğünüzde Airbnb'de en
                sevilen 2 milyon evden biri olduğunu bileceksiniz.
              </Text>
              <Button
                p="11px 20px"
                variant="unstyled"
                bgColor="#222"
                color="white"
                display="flex"
                alignItems="center"
              >
                Keşfetmeye başlayın
              </Button>
            </ModalBody>
            <Box>
              <Image src={madaltel} w="full" h="488px" />
            </Box>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default FirstModal;
