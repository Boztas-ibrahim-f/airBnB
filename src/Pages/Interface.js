import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../Image/airbnb.png";
import Home from "../Image/icons8-home-24.png";
import InterCenter from "../Image/interface-center.jpg";
import World from "../Image/world-map.png";
import Twt from "../Image/icons8-twitter-24.png";
import Face from "../Image/icons8-facebook-24.png";
import İnsta from "../Image/icons8-instagram-logo-24.png";
import React, { useState } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

function Interface() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [silider, setSilender] = useState();
  return (
    <Flex flexDirection="column">
      <Box
        w="full"
        display="flex"
        justifyContent="center"
        bgColor="white"
        top="0"
        position="sticky"
      >
        <Box display="flex" alignItems="center" width="70%" pt="20px">
          <Image src={Logo} h="35px" />
          <Spacer />
          <Box display="flex" alignItems="center" gap="17px">
            <Text
              fontSize="16px"
              fontWeight="600"
              fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
            >
              Evinizi Airbnb'ye taşıyın!
            </Text>
            <Button
              align="center"
              bgColor="#e61e4d"
              colorScheme="red"
              onClick={onOpen}
              p="25px"
            >
              {" "}
              <Image src={Home} mr="5px" />{" "}
              <Text
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                fontWeight="500"
                fontSize="18px"
              >
                Airbnb Start
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt="25px">
        <Box w="70%" display="flex" flexDirection="column" alignItems="center">
          <Box
            textColor="#e61e4d"
            fontSize="28px"
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Evinizi Airbnb'ye taşıyın.
          </Box>
          <Box
            fontSize="28px"
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Tahmini kazancınız
          </Box>
          <Box w="full">
            <Box fontSize="14px">{silider}₺</Box>
            <Box fontSize="14px" fontWeight="450">
              {silider / 1091} gece (tahmini olarak gecelik 1.091 ₺ üzerinden)
            </Box>
            <Box>
              <Slider
                defaultValue={1091 * 5}
                min={1091}
                max={32730}
                step={1091}
                onChange={(val) => setSilender(val)}
              >
                <SliderTrack bg="red.100">
                  <SliderFilledTrack bg="#e61e4d" />
                </SliderTrack>
                <SliderThumb boxSize={3} />
              </Slider>
            </Box>
          </Box>
          <Box
            fontWeight="600"
            textDecoration="underline"
            cursor="pointer"
            onClick={onOpen}
          >
            Tahmini kazançlarınızı nasıl hesapladığımızı öğrenin
          </Box>
          <Box w="full" fontSize="14px">
            GoogleMaps
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        m="120px 0"
        p="0 80px"
      >
        <Box
          display="flex"
          mb="28px"
          justifyContent="center"
          fontWeight="700"
          fontSize="48px"
          fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
        >
          Airbnb Start ile evinizi kolayca Airbnb'ye taşıyın
        </Box>
        <Image src={InterCenter} />
        <Box p="0 40px" m="40px 0 0" display="flex" justifyContent="center">
          <Box pr="40px">
            <Box fontSize="18px" fontWeight="600" mb="8px">
              Süper Ev Sahibinden bire bir rehberlik
            </Box>
            <Box color="#717171" fontSize="16px">
              Sizi bölgenizdeki bir Süper Ev Sahibi ile eşleştireceğiz. Bu kişi,
              ilk sorunuzdan ilk misafirinize kadar telefonla, görüntülü arama
              veya sohbet yoluyla size rehberlik edecek.
            </Box>
          </Box>
          <Box>
            <Box fontSize="18px" fontWeight="600" mb="8px">
              İlk rezervasyonunuz için deneyimli bir misafir
            </Box>
            <Box color="#717171" fontSize="16px">
              İlk rezervasyonunuz için Airbnb'de en az üç konaklaması ve iyi bir
              geçmişi olan deneyimli bir misafiri ağırlamayı seçebilirsiniz.
            </Box>
          </Box>
          <Box pl="40px">
            <Box fontSize="18px" fontWeight="600" mb="8px">
              Airbnb'den özel destek
            </Box>
            <Box color="#717171" fontSize="16px">
              Yeni ev sahipleri, hesapla ilgili sorunlardan faturalandırma
              desteğine kadar her konuda size yardımcı olabilecek, özel olarak
              eğitilmiş Topluluk Desteği temsilcilerine tek dokunuşla
              erişebilir.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        p="0 80px"
        mb="80px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
      >
        <Image
          w="180px"
          mb="24px"
          src="https://a0.muscache.com/im/pictures/b59dd85e-3b84-4d64-8c11-3bf5f9268e4f.jpg?im_w=480&im_q=highq"
        />
        <Box
          fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          fontSize="40px"
          fontWeight="700"
          alignItems="center"
          mb="64px"
        >
          Tepeden tırnağa koruma ile evinizi Airbnb'ye taşıyın
        </Box>
        <Box w="804px" minW="1128px">
          <Box display="flex" justifyContent="end" pb="1.25rem">
            <Text
              p="0 28px"
              fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              fontSize="22"
            >
              Airbnb
            </Text>
            <Text
              p="0 28px"
              fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              fontSize="22"
            >
              Rakipler
            </Text>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Misafirlerin Kimliğini Doğrulama
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CheckIcon fontSize="24px" color="green" />
              </Flex>
            </Flex>
            <Box color="#717171">
              Kapsamlı doğrulama sistemimiz, Airbnb'de rezervasyon yapan
              misafirlerin kimliğini doğrulamak için ad, adres, resmî kimlik vb.
              ayrıntıları kontrol eder.
            </Box>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Rezervasyon taraması
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
            <Box color="#717171">
              Tescilli teknolojimiz her rezervasyonda yüzlerce faktörü analiz
              eder ve çevreye rahatsızlık veren partiler ve mülk hasarı
              açısından yüksek riskli olarak görülen belirli rezervasyonları
              engeller.
            </Box>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                3 milyon USD değerinde hasar koruması
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
            <Box color="#717171">
              Airbnb, misafirlerin evinize ve eşyalarınıza verdiği hasarı tazmin
              eder ve şu özel korumaları sunar:
            </Box>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Sanat eserleri ve değerli eşyalar
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Arabalar ve tekneler
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Evcil hayvan hasarı
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Gelir kaybı
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Derinlemesine temizlik
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                1 milyon USD değerinde sorumluluk sigortası
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CheckIcon fontSize="24px" color="green" />
              </Flex>
            </Flex>
            <Box color="#717171">
              Bir misafirin yaralanması veya eşyalarının hasar görmesi ya da
              çalınması gibi nadir görülen durumlara karşı korunursunuz.
            </Box>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                fontSize="22px"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                24 saat Güvenlik Destek Hattı
              </Text>
              <Flex
                justifyContent="center"
                p="0 50px"
                gap="110px"
                padding-inline="50px"
              >
                <CheckIcon fontSize="24px" color="green" />
                <CloseIcon fontSize="24px" color="red" />
              </Flex>
            </Flex>
            <Box color="#717171">
              Kendinizi güvende hissetmezseniz uygulamamız özel olarak eğitilmiş
              güvenlik destek ekibine gece gündüz tek dokunuşla erişmenizi
              sağlar.
            </Box>
          </Box>
          <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
            <Flex justifyContent="space-between" marginBottom="0.75rem">
              <Text
                color="#717171"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Karşılaştırma, 22 Ekim itibarıyla herkese açık bilgilere ve
                büyük rakiplerin sunduğu ücretsiz tekliflere dayanır.
                Ayrıntıları ve istisnaları{" "}
                <Link textDecoration="underline" color="black" fontWeight="600">
                  burada
                </Link>{" "}
                bulabilirsiniz.
              </Text>
            </Flex>
          </Box>
          <Flex w="full" justifyContent="center">
            <Button border="1px solid">Daha fazla bilgi edinin</Button>
          </Flex>
        </Box>
      </Box>
      <Box bgColor="rgb(245, 245, 245)" display="flex" pt="48px">
        <Flex
          w="full"
          p="0 80px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box w="50%" h="full">
            <Text m="32px 0 48px" fontSize="36px" fontWeight="600">
              Sorularınız Yanıtlandı
            </Text>
          </Box>
          <Box
            w="50%"
            fontSize="18px"
            color="#717171"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            <Accordion allowMultiple>
              <AccordionItem
                borderBottom="1px solid"
                borderColor="gray.300"
                p="16px 0"
              >
                <AccordionButton p="16px 0" _hover="none">
                  <Box
                    as="span"
                    flex="1"
                    fontSize="22px"
                    color="black"
                    fontWeight="500"
                    textAlign="left"
                  >
                    Yerim Airbnb için uygun mu?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p="0" flex="1" textAlign="left">
                  Airbnb misafirleri her türlü yerle ilgilenir. Küçük evler,
                  kulübeler, ağaç evler ve daha fazla türde kayıtlarımız var.
                  Boş bir oda bile konaklamak için harika bir yer olabilir.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderBottom="1px solid"
                borderColor="gray.300"
                p="16px 0"
              >
                <AccordionButton p="16px 0" _hover="none">
                  <Box
                    as="span"
                    flex="1"
                    fontSize="22px"
                    color="black"
                    fontWeight="500"
                    textAlign="left"
                  >
                    Her zaman ev sahipliği yapmak zorunda mıyım?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p="0" flex="1" textAlign="left">
                  Kesinlikle değilsiniz. Takviminizi siz kontrol edersiniz.
                  Yılda bir kez, ayda birkaç gece veya daha sık ev sahipliği
                  yapabilirsiniz.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderBottom="1px solid"
                borderColor="gray.300"
                p="16px 0"
              >
                <AccordionButton p="16px 0" _hover="none">
                  <Box
                    as="span"
                    flex="1"
                    fontSize="22px"
                    color="black"
                    fontWeight="500"
                    textAlign="left"
                  >
                    Misafirlerle ne kadar etkileşim kurmalıyım?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel p="0" flex="1" textAlign="left">
                  Bu size bağlıdır. Bazı ev sahipleri, misafirlere yalnızca
                  önemli anlarda, örneğin giriş yaptıklarında mesaj göndermeyi
                  tercih ederken bazıları da misafirleriyle yüz yüze görüşmekten
                  keyif alır. Size ve misafirlerinize uyan bir tarz bulacağınıza
                  eminiz.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderBottom="1px solid"
                borderColor="gray.300"
                p="16px 0"
              >
                <AccordionButton p="16px 0" _hover="none">
                  <Box
                    as="span"
                    flex="1"
                    fontSize="22px"
                    color="black"
                    fontWeight="500"
                    textAlign="left"
                  >
                    Mükemmel bir Airbnb ev sahibi olmayla ilgili ipuçları var
                    mı?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p="0" flex="1" textAlign="left">
                  <Text>
                    Temel ilkeleri uygulayarak oldukça ilerleme kaydedersiniz.
                    Yerinizi temiz tutun, misafirlere hızlıca yanıt verin ve
                    temiz havlu gibi gerekli olanakları sağlayın. Bazı ev
                    sahipleri taze çiçekler koymak veya keşfedilecek yerel
                    yerlerin bir listesini paylaşmak gibi kişisel bir dokunuş
                    eklemek ister ancak bu elbette zorunlu değildir.
                  </Text>
                  <Text>
                    Ev sahipliğiyle ilgili daha fazla ipucu için okumaya devam
                    edin
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderBottom="1px solid"
                borderColor="gray.300"
                p="16px 0"
              >
                <AccordionButton p="16px 0" _hover="none">
                  <Box
                    as="span"
                    flex="1"
                    fontSize="22px"
                    color="black"
                    fontWeight="500"
                    textAlign="left"
                  >
                    Airbnb'nin ücretleri nedir?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p="0" flex="1" textAlign="left">
                  <Text>
                    Airbnb, ödemenizi aldığınızda rezervasyon ara toplamının
                    genellikle %3'ü oranında bir sabit hizmet bedeli tahsil
                    eder. Ayrıca rezervasyon sırasında misafirlerden de bir
                    ücret alırız. Airbnb, birçok bölgede otomatik olarak sizin
                    adınıza satış ve turizm vergileri tahsil edip öder.
                  </Text>
                  <Text>Ücretler hakkında daha fazla bilgi edinin</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Box>
      <Box
        p="48px 0 80px"
        bgColor="rgb(245, 245, 245)"
        borderBottom="2px solid rgb(225, 225, 225)"
      >
        <Box p="0 80px" w="full" h="inherit">
          <Flex
            bgColor="white"
            borderRadius="16"
            overflow="hidden"
            alignItems="center"
          >
            <Image
              w="50%"
              src="https://a0.muscache.com/im/pictures/c19751e5-cd4f-41d0-898f-2580b60cae08.jpg?im_w=1200&im_q=highq"
              borderRadius="16px 16px"
            />
            <Box px="48px" width="full">
              <Box
                m="32px 0 16px"
                fontSize="32"
                fontWeight="600"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Başka sorularınız mı var?
              </Box>
              <Box
                color="#717171"
                mb="24px"
                fontSize="18px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Sorularınızın yanıtlarını yakınınızdaki deneyimli bir Süper Ev
                Sahibinden alabilirsiniz.
              </Box>
              <Button border="1px solid">Bir Süper Ev Sahibiyle eşleşin</Button>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box pb="80px" bgColor="rgb(245, 245, 245)">
        <Box
          py="80px"
          bgColor="rgb(245, 245, 245)"
          display="flex"
          justifyItems="center"
        >
          <Grid
            px="48px"
            mx="12px"
            display="flex"
            templateColumns="repeat(3, 1fr)"
            justifyItems="center"
            gap={8}
            w="full"
          >
            <Box w="full">
              <UnorderedList>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontWeight="600"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Destek
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Yardım Merkezi
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  AirCover
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Ayrımcılık yapmama
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Engellilik desteği
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  İptal seçenekleri
                </ListItem>
                <ListItem
                  listStyleType="none"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Semtinizdeki sorunu bildirin
                </ListItem>
              </UnorderedList>
            </Box>
            <Box w="full">
              <UnorderedList>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontWeight="600"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Ev sahipliği
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Evinizi Airbnb'ye taşıyın
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Ev sahipleri için AirCover
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Ev sahipliği kaynakları
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Topluluk forumu
                </ListItem>
                <ListItem
                  listStyleType="none"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Sorumlu ev sahipliği
                </ListItem>
              </UnorderedList>
            </Box>
            <Box w="full">
              <UnorderedList>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontWeight="600"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Airbnb
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Basın odası
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Yeni özellikler
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Kariyer
                </ListItem>
                <ListItem
                  listStyleType="none"
                  mb="12px"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Yatırımcılar
                </ListItem>
                <ListItem
                  listStyleType="none"
                  fontSize="14px"
                  fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                >
                  Airbnb.org acil konaklamaları
                </ListItem>
              </UnorderedList>
            </Box>
          </Grid>
        </Box>
        <Box borderTop="2px solid rgb(225, 225, 225)" px="80px">
          <Box py="24px" display="flex" justifyContent="space-between">
            <Box display="flex" p="4px" gap="8px">
              <Box> © 2024 Airbnb, Inc. </Box> ·<Box> Gizlilik </Box> ·
              <Box> Şartlar </Box> ·<Box> Site Haritası </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap="5px"
              fontSize="14px"
              fontWeight="600"
            >
              <Image width="18px" h="18px" src={World} />
              <Link>Türkçe (TR)</Link> ₺<Link>TRY</Link>
              <Box display="flex" justifyContent="center" gap="5px">
                {" "}
                <Image src={Face} w="18px" h="18px" />{" "}
                <Image src={Twt} w="18px" h="18px" borderRadius="30" />{" "}
                <Image src={İnsta} w="18px" h="18px" borderRadius="30" />{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Interface;
