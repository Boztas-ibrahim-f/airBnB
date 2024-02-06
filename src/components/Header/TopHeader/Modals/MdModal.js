import MdPanelFirst from "./Panel/MdPanelFirst.js";
import MdPanelTwo from "./Panel/MdPanelTwo.js";
import MdPanelTree from "./Panel/MdPanelTree.js";
import { Accordion, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabIndicator, Tabs } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function MdModal({ isOpen, onClose }) {
    
  return (
    <>
      <Box>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="full"
        >
          <ModalOverlay />
          <ModalContent
            display="flex"
            alignItems="center"
            overflow="hidden"
            bgColor="rgb(240, 240, 240)"
          >
            <ModalCloseButton left="0" top="0" p="7px" m="10px" />
            <ModalHeader
              borderBottom="1px solid"
              borderColor="gray.300"
              w="full"
              mt="14px"
            >
              <Tabs
                w="full"
                justifyContent="center"
                display="flex"
                h="max-content"
                colorScheme="black"
              >
                <Tab h="max-content" py="0">
                  <Button colorScheme="ghost" textColor="black">
                    Konaklama yerleri
                  </Button>
                </Tab>
                <Tab h="max-content" py="0">
                  <Button colorScheme="ghost" textColor="black">
                    Deneyimler
                  </Button>
                </Tab>
                <TabIndicator mt="-3px" height="1px" borderRadius="1px" />
              </Tabs>
            </ModalHeader>
            <ModalBody width="full" p="4px">
              <Accordion allowToggle width="full" p="12px">
                <MdPanelFirst/>
                <MdPanelTwo/>
                <MdPanelTree/>
              </Accordion>
            </ModalBody>
            <ModalFooter p="12px 21px" justifyContent="space-between" w="full">
              <Button
                colorScheme="ghost"
                textColor="black"
                textDecoration="underline"
              >
                Hepsini Temizle
              </Button>
              <Button colorScheme="pink" gap="14px">
                <SearchIcon />
                <Box> Arama</Box>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default MdModal;
