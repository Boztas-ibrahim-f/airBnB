import React from "react";
import FirstModal from "./Modals/FirstModal";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";

function TopModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box w="full" bgColor="rgb(247, 247, 247)">
        <Box
          display={{ base: "none", md: "Flex" }}
          justifyContent="center"
          w="full"
          h="full"
        >
          <Flex
            justifyContent="center"
            p="14px"
            alignItems="center"
            fontSize="16px"
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Toplam fiyatı önceden göster.
            <Button
              bg="transparent"
              variant="unstyled"
              textDecoration="underline"
              px="10px"
              onClick={onOpen}
            >
              Daha fazla bilgi edinin
            </Button>
          </Flex>
        </Box>
      </Box>
      <FirstModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
}

export default TopModal;
