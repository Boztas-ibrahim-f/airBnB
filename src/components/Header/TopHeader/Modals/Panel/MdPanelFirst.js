import { SearchIcon } from "@chakra-ui/icons";
import { AccordionButton, AccordionItem, AccordionPanel, Box, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function MdPanelFirst() {
  return (
    <>
      <AccordionItem
        width="full"
        bgColor="white"
        p="14px"
        mb="14px"
        borderRadius="15px"
      >
        <AccordionButton
          w="full"
          p="0,5rem 14px"
          placeContent="center"
          _hover={{ bgColor: "transperant" }}
          _expanded={{ display: "none" }}
        >
          <Box w="full" display="flex" justifyContent="space-between">
            {" "}
            <Box>Yer</Box> <Box>Esnek Arama</Box>
          </Box>
        </AccordionButton>

        <AccordionPanel p="0,5rem 14px 0,75rem">
          <Box fontSize="22px" fontWeight="600" mb="14px">
            Nereye?
          </Box>
          <Box>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                border="1px solid "
                borderColor="gray.400"
                variant="unstyle"
                bgColor="transparent"
                placeholder="Gidilecek yer arayın"
              />
            </InputGroup>
          </Box>
          <Box
            display="flex"
            gap="1.25rem"
            w="full"
            overflowY="hidden"
            overflowX="scroll"
            scrollbarWidth="none"
            msOverflowStyle="none"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  w="full"
                  h="auto"
                  src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320"
                />
              </Box>
              <Box>Esnek arama</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                />
              </Box>
              <Box>Avrupa</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"
                />
              </Box>
              <Box>İtalya</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                />
              </Box>
              <Box>ABD</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320"
                />
              </Box>
              <Box>Fransa</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                />
              </Box>
              <Box>Güneydoğu Asya</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/1c34ad8e-395a-4b08-bbc0-d7aa1dd0bd69.jpg?im_w=320"
                />
              </Box>
              <Box>Almanya</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320"
                />
              </Box>
              <Box>Afrika</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              cursor="pointer"
            >
              <Box w="120px">
                <Image
                  maxWidth="full"
                  h="auto"
                  src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320"
                />
              </Box>
              <Box>Birleşik Krallık</Box>
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default MdPanelFirst;
