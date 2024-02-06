import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MdModal from "../TopHeader/Modals/MdModal";
import { SearchIcon } from "@chakra-ui/icons";
import iconsettings from "../../../Image/settings-sliders.png"

function LargeSearch() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex w="full" h="full" justifyContent="center">
        <Button
          w="90%"
          borderRadius="50"
          h="full"
          p="0.75rem"
          border="1px solid"
          colorScheme="ghost"
          color="gray.300"
          boxShadow="md"
          onClick={onOpen}
        >
          <Flex w="full" alignItems="center">
            <Flex alignItems="center" color="black" px="0.75rem">
              <SearchIcon />
            </Flex>
            <Box
              display="flex"
              flexDirection="column"
              placeItems="start"
              w="full"
              fontSize="12px"
            >
              <Box
                fontSize="14px"
                fontWeight="400"
                textColor="black"
                mb="0.25em"
              >
                Herhangi bir yer
              </Box>
              <Box fontSize="12px" fontWeight="400" textColor="gray.500">
                Herhangi bir hafta. Misafir ekleyin
              </Box>
            </Box>
            <Box
              border="1px solid"
              borderRadius="50"
              borderColor="gray.300"
              p="6px"
            >
              <Image h="18px" w="18px" color="black" src={iconsettings} />
            </Box>
          </Flex>
        </Button>
      </Flex>
      <MdModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
}

export default LargeSearch;
