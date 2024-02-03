import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabIndicator,
  Tabs,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import madaltel from "../Image/madaltel.webp";
import Logo from "../Image/airbnb.png";
import icon from "../Image/user.png";
import iconsettings from "../Image/settings-sliders.png";
import { HamburgerIcon, SearchIcon} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Ust() {
  const navigate = useNavigate();
  const [değer, setDeğer] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let md = useBreakpointValue({ base: false, md: true });
  let lg = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex placeItems="center" flexDirection="column">
      <Box w="full">
        {md ? (
          <Box w="full" bgColor="rgb(247, 247, 247)">
            <Box display="flex" justifyContent="center" w="full" h="full">
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
        ) : (
          <Box display="none"></Box>
        )}
      </Box>
      <Flex
        w="full"
        py=" 18px"
        borderBottom={{md:"1px solid"}}
        color="gray.300"
        px={{
          md: "10%",
          lg: "50px",
          xl: "70px",
        }}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
      >
        {md ? (
          <Box
            w="full"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            onClick={() => navigate("/")}
          >
            <Box
              display="flex"
              cursor="pointer"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={Logo} w="30px" h="30px" />
              {lg ? (
                <Box
                  overflow="hidden"
                  textColor="#ff385c"
                  fontSize="20px"
                  fontWeight="600"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  airbnb
                </Box>
              ) : (
                <Box display="none" />
              )}
            </Box>
          </Box>
        ) : (
          <Box display="none" />
        )}
        {md ? (
          <Box
            _hover={{
              boxShadow: "2xl",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            transition="box-shadow 0.3s ease-in-out"
            display="flex"
            justifyContent="center"
            borderRadius="50"
            w="full"
          >
            <ButtonGroup
              border="1px solid"
              borderColor="gray.300"
              borderRadius="50"
              h="50px"
              p="0 7px"
              alignItems="center"
            >
              <Button
                h="max-content"
                py="5px"
                colorScheme="white"
                variant="ghost"
                borderRight="1px solid"
                borderColor="gray.300"
                borderRadius="0"
                color="gray.600"
                fontWeight="600"
                fontSize="14px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Herhangi bir yer
              </Button>
              <Button
                h="max-content"
                py="5px"
                colorScheme="white"
                variant="ghost"
                borderRight="1px solid"
                borderColor="gray.300"
                borderRadius="0"
                color="gray.600"
                fontWeight="600"
                fontSize="14px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Herhangi bir hafta
              </Button>
              <Button
                h="max-content"
                py="5px"
                colorScheme="white"
                variant="ghost"
                color="gray.500"
                fontWeight="5400"
                fontSize="16px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Misafir ekleyin
              </Button>
              <Button
                colorScheme="white"
                variant="ghost"
                bgColor="#ff385c"
                borderRadius="50"
                w="32px"
                h="40px"
                ml="7px"
              >
                <SearchIcon h="16px" w="16px" color="white" />
              </Button>
            </ButtonGroup>
          </Box>
        ) : (
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
        )}

        {md ? (
          <Box
            display="flex"
            alignItems="center"
            width="full"
            justifyContent="end"
          >
            {lg ? (
              <Box>
                <Button
                  borderRadius="50"
                  colorScheme="gray"
                  fontSize="14px"
                  textColor="gray.600"
                  fontWeight="700"
                  variant="ghost"
                  onClick={() => navigate("/interface")}
                >
                  Evinizi Airbnb'ye taşıyın
                </Button>
              </Box>
            ) : (
              <Box>
                <Button
                  borderRadius="50"
                  colorScheme="gray"
                  variant="ghost"
                  onClick={() => navigate("/interface")}
                >
                  Keşfet
                </Button>
              </Box>
            )}
            <Box
              borderRadius="50"
              border="1px"
              display="inline-flex"
              borderColor="gray.300"
              color="gray.500"
            >
              <Menu isLazy>
                <MenuButton mr="5px" display="flex" alignItems="center">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    h="42px"
                    w="77px"
                    p="5px 5px 5px 10px"
                  >
                    <HamburgerIcon h="20px" w="25px" />
                    <Image src={icon} h="25px" w="25px" />
                  </Box>
                </MenuButton>

                <MenuList border="1px solid" borderColor="gray.300" p="10px">
                  <MenuItem
                    p="5px 10px"
                    color="gray.800"
                    fontSize="16"
                    fontWeight="600"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Kaydolun
                  </MenuItem>
                  <MenuItem
                    p="5px 10px"
                    color="gray.500"
                    fontSize="16"
                    fontWeight="600"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Oturum Açın
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    p="5px 10px"
                    color="gray.400"
                    fontSize="16"
                    fontWeight="500"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Evinizi Airbnb'ye Taşıyın
                  </MenuItem>
                  <MenuItem
                    p="5px 10px"
                    color="gray.400"
                    fontSize="16"
                    fontWeight="500"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Bir Deneyime Ev Sahipliği Yapın
                  </MenuItem>
                  <MenuItem
                    p="5px 10px"
                    color="gray.400"
                    fontSize="16"
                    fontWeight="500"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Yardım
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        ) : (
          <Box display="none"></Box>
        )}
      </Flex>
      {md ? (
        <Box>
          <Box>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
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
        </Box>
      ) : (
        <Box>
          <Box>
            <Modal
              closeOnOverlayClick={true}
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
                <ModalCloseButton
                  left="0"
                  top="0"
                  p="7px"
                  m="10px"
                />
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
                <ModalBody width="full" p="4px"  >
                  <Accordion allowToggle width="full" p="12px">
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
                        <Box
                          w="full"
                          display="flex"
                          justifyContent="space-between"
                        >
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

                    <AccordionItem
                      width="full"
                      bgColor="white"
                      p="14px"
                      mb="14px"
                      borderRadius="15px"
                    >
                      <AccordionButton
                        w="full"
                        placeContent="center"
                        _hover={{ bgColor: "transperant" }}
                        _expanded={{ display: "none" }}
                      >
                        <Box
                          w="full"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Box>Tarih</Box> <Box>Tarih Ekleyin</Box>
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

                    <AccordionItem
                      width="full"
                      p="14px"
                      bgColor="white"
                      borderRadius="15px"
                    >
                      <AccordionButton
                        w="full"
                        placeContent="center"
                        _hover={{ bgColor: "transperant" }}
                        _expanded={{ display: "none" }}
                      >
                        <Box
                          w="full"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Box>Kişiler</Box> <Box>Kişi Ekleyin</Box>
                        </Box>
                      </AccordionButton>

                      <AccordionPanel p="0">
                        <Box display="flex" flexDirection="column" width="full"  >
                          <Box p="0,5rem 14px 0,75rem " >
                          <Box fontSize="22px"  fontWeight="600">
                            Kimler Geliyor
                          </Box>
                          <Box>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              py="1em"
                              borderBottom="1px solid"
                              borderColor="gray.400"
                            >
                              <Box>
                                <Box
                                  fontSize="16px"
                                  color="black"
                                  fontWeight="600"
                                >
                                  Yetişkinler
                                </Box>
                                <Box
                                  fontSize="14px"
                                  color="gray.500"
                                  fontWeight="400"
                                >
                                  13 yaş ve üzeri
                                </Box>
                              </Box>
                              <Box display="flex" alignItems="center" height="max-content">
                                <Button
                                  height="2.5rem"
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50%"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  mr="0.75rem"
                                  onClick={() => setDeğer(değer - 1)}
                                >
                                  -
                                </Button>
                                {değer}
                                <Button
                                  height="2.5rem"
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  ml="0.75rem"
                                  onClick={() => setDeğer(değer + 1)}
                                >
                                  +
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                          <Box>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              py="14px"
                              borderBottom="1px solid"
                              borderColor="gray.400"
                            >
                              <Box>
                                <Box
                                  fontSize="16px"
                                  color="black"
                                  fontWeight="600"
                                >
                                  Çocuklar
                                </Box>
                                <Box
                                  fontSize="14px"
                                  color="gray.500"
                                  fontWeight="400"
                                >
                                  2 - 12 yaş
                                </Box>
                              </Box>
                              <Box>
                                <Button
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  mr="0.75rem"
                                  onClick={() => setDeğer(değer - 1)}
                                >
                                  -
                                </Button>
                                {değer}
                                <Button
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  ml="0.75rem"
                                  onClick={() => setDeğer(değer + 1)}
                                >
                                  +
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                          <Box>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              py="14px"
                              borderBottom="1px solid"
                              borderColor="gray.400"
                            >
                              <Box>
                                <Box
                                  fontSize="16px"
                                  color="black"
                                  fontWeight="600"
                                >
                                  Bebekler
                                </Box>
                                <Box
                                  fontSize="14px"
                                  color="gray.500"
                                  fontWeight="400"
                                >
                                  2 yaş ve altı
                                </Box>
                              </Box>
                              <Box>
                                <Button
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  mr="0.75rem"
                                  onClick={() => setDeğer(değer - 1)}
                                >
                                  -
                                </Button>
                                {değer}
                                <Button
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  ml="0.75rem"
                                  onClick={() => setDeğer(değer + 1)}
                                >
                                  +
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                          <Box>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              pt="14px"
                            >
                              <Box>
                                <Box
                                  fontSize="16px"
                                  color="black"
                                  fontWeight="600"
                                >
                                  Evcil Hayvanlar
                                </Box>
                              </Box>
                              <Box>
                                <Button
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  mr="0.75rem"
                                  onClick={() => setDeğer(değer - 1)}
                                >
                                  -
                                </Button>
                                {değer}
                                <Button
                                  colorScheme="ghost"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  borderRadius="50"
                                  textColor="black"
                                  fontSize="14px"
                                  fontWeight="600"
                                  px="14px"
                                  ml="0.75rem"
                                  onClick={() => setDeğer(değer + 1)}
                                >
                                  +
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                          </Box>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </ModalBody>
                <ModalFooter p="12px 21px" justifyContent="space-between" w="full">
                  <Button colorScheme="ghost" textColor="black" textDecoration="underline">Hepsini Temizle</Button>
                  <Button colorScheme="pink"  gap="14px"><SearchIcon /><Box> Arama</Box></Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      )}
    </Flex>
  );
}

export default Ust;
