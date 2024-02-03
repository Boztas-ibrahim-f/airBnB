import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
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
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import iconsettings from "../Image/settings-sliders.png";
import { MdGraphicEq } from "react-icons/md";
import { useState } from "react";
import Data from "../data/Data.json";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rangeValues, setRangeValues] = useState([1091, 2182]);
  let md = useBreakpointValue({ base: false, md: true }); 

  const handleChange = (values) => {
    setRangeValues(values);
  };

  return (
    <Box h="full">
      <Flex flexDirection="column" justifyContent="center"  >
       {//Tab bölümü 
        md ? (
          <Box
          px="70px"
          py="14px 1rem"
          mt="1rem"
          display="flex"
          alignItems="center"
        >
          <Tabs overflow="hidden">
            <TabList
              alignItems="center"
              h="min-content"
              border="none"
              style={{
                overflowY: "hidden",
                overflowX: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <Tab _hover={{ borderBottom: "3px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
                  />
                  <Box>Küçük Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                  />
                  <Box>Denize Sıfır</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                  />
                  <Box>Olağanüstü</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
                  />
                  <Box>Göl Kenarı</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
                  />
                  <Box>Özel Odalar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
                  />
                  <Box>Güzel Manzaralar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                  />
                  <Box>Tekneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                  />
                  <Box>Popüler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                  />
                  <Box>Şatolar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Malikaneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                  />
                  <Box>Üçgen Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                  />
                  <Box>Luxe</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
                  />
                  <Box>Muhteşem Havuzlar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                  />
                  <Box>Çiflikler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Kayak</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Tasarım</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Kırsal</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
                  />
                  <Box>Küçük Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                  />
                  <Box>Denize Sıfır</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                  />
                  <Box>Olağanüstü</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
                  />
                  <Box>Göl Kenarı</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
                  />
                  <Box>Özel Odalar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
                  />
                  <Box>Güzel Manzaralar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                  />
                  <Box>Tekneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                  />
                  <Box>Popüler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                  />
                  <Box>Şatolar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Malikaneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                  />
                  <Box>Üçgen Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                  />
                  <Box>Luxe</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
                  />
                  <Box>Muhteşem Havuzlar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                  />
                  <Box>Çiflikler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Kayak</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Tasarım</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Kırsal</Box>
                </Button>
              </Tab>
            </TabList>

            <TabIndicator
              mt="-1.5px"
              height="3px"
              bg="#e61e4d"
              borderRadius="1px"
            />
          </Tabs>
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
        </Box>
        ):(
          <Box
          px="14px"
          py="12px 14px"
          mt="14px"
          pb="14px"
          display="flex"
          borderBottom="1px solid"
          borderColor="gray.400"
          alignItems="center"
        >
          <Tabs overflow="hidden">
            <TabList
              alignItems="center"
              h="min-content"
              border="none"
              style={{
                overflowY: "hidden",
                overflowX: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <Tab _hover={{ borderBottom: "3px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
                  />
                  <Box>Küçük Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                  />
                  <Box>Denize Sıfır</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                  />
                  <Box>Olağanüstü</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
                  />
                  <Box>Göl Kenarı</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
                  />
                  <Box>Özel Odalar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
                  />
                  <Box>Güzel Manzaralar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                  />
                  <Box>Tekneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                  />
                  <Box>Popüler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                  />
                  <Box>Şatolar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Malikaneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                  />
                  <Box>Üçgen Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                  />
                  <Box>Luxe</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
                  />
                  <Box>Muhteşem Havuzlar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                  />
                  <Box>Çiflikler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Kayak</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Tasarım</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Kırsal</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
                  />
                  <Box>Küçük Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                  />
                  <Box>Denize Sıfır</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                  />
                  <Box>Olağanüstü</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
                  />
                  <Box>Göl Kenarı</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
                  />
                  <Box>Özel Odalar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
                  />
                  <Box>Güzel Manzaralar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                  />
                  <Box>Tekneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                  />
                  <Box>Popüler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                  />
                  <Box>Şatolar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Malikaneler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                  />
                  <Box>Üçgen Evler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                  />
                  <Box>Luxe</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
                  />
                  <Box>Muhteşem Havuzlar</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
                  />
                  <Box>Kulübeler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                  />
                  <Box>Çiflikler</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Kayak</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                  />
                  <Box>Tasarım</Box>
                </Button>
              </Tab>
              <Tab _hover={{ borderBottom: "2px solid red", pb: "3px" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  colorScheme="none"
                  textColor="black"
                  fontWeight="400"
                  fontSize="12px"
                  p="0"
                  m="0"
                >
                  <Image
                    h="24px"
                    w="24px"
                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                  />
                  <Box>Kırsal</Box>
                </Button>
              </Tab>
            </TabList>

            <TabIndicator
              mt="-1.5px"
              height="3px"
              bg="#e61e4d"
              borderRadius="1px"
            />
          </Tabs>
        </Box>
        )
       }
        <Grid width="full"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(6, 1fr)",
          }}
          placeItems="center"
          p={{
            base:"0",
            md:"0 16px",
            lg:"0 42px"
          }}
        >
          {Data.map((item) => {
            return (
              <Box key={item.id}>
                <Box p="21px">
                  <Box w="full" object-fit= "contain">
                    <Image src={item.image} w="full" h="auto" mb="20px"   borderRadius="20px" />
                  </Box>
                  <Box>
                    <Text textColor="black" fontWeight="600" fontSize="17px">
                      {item.otelAdi}
                    </Text>
                    <Text fontSize="15px">{item.fiyat} Km uzakta</Text>
                    <Text fontSize="15px">{item.tarih}</Text>
                    <Box display="flex" fontSize="17px" gap="4px" pt="8px">
                      <Text fontWeight="600">₺{item.fiyat} </Text> gece
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Flex>

      <Box display="flex" position="fixed" alignItems="center">
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
                  />{" "}
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
                  />{" "}
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
              <Box>
                <Button
                  color="white"
                  bgColor="gray.400"
                  _hover={{ bgColor: "gray.600" }}
                  fontSize="14px"
                >
                  Tümü
                </Button>
                <Button
                  ml="1rem"
                  color="gray.600"
                  bgColor="white"
                  border="1px solid"
                  borderColor="gray.400"
                >
                  1
                </Button>
                <Button ml="1rem" color="gray.600" bgColor="white">
                  2
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  3
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  4
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  5
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  6
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  7
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  +8
                </Button>
              </Box>
              <Box
                my="0.75rem
              "
                fontSize="18px"
                fontWeight="600"
              >
                Yataklar
              </Box>
              <Box>
                <Button
                  color="white"
                  bgColor="gray.400"
                  _hover={{ bgColor: "gray.600" }}
                  fontSize="14px"
                >
                  Tümü
                </Button>
                <Button
                  ml="1rem"
                  color="gray.600"
                  bgColor="white"
                  border="1px solid"
                  borderColor="gray.400"
                >
                  1
                </Button>
                <Button ml="1rem" color="gray.600" bgColor="white">
                  2
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  3
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  4
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  5
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  6
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  7
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  +8
                </Button>
              </Box>
              <Box
                my="0.75rem
              "
                fontSize="18px"
                fontWeight="600"
              >
                Banyolar
              </Box>
              <Box>
                <Button
                  color="white"
                  bgColor="gray.400"
                  _hover={{ bgColor: "gray.600" }}
                  fontSize="14px"
                >
                  Tümü
                </Button>
                <Button
                  ml="1rem"
                  color="gray.600"
                  bgColor="white"
                  border="1px solid"
                  borderColor="gray.400"
                >
                  1
                </Button>
                <Button ml="1rem" color="gray.600" bgColor="white">
                  2
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  3
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  4
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  5
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  6
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  7
                </Button>
                <Button
                  ml="1rem"
                  color="gray.400"
                  bgColor="white"
                  _hover={{ textDecoration: "underline" }}
                >
                  +8
                </Button>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Tümünü temizle
              </Button>
              <Button variant="ghost">...evi göster</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

export default Main;
