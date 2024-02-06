
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'

function QuestionBox() {
  return (
    <Box
      display="flex"
      flexDirection={{base:"column" ,md:'row'}}
      w="full"
      p={{md:"0 80px"}}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box w={{md:"50%"}} h="full">
        <Text m="32px 0 48px" fontSize="36px" fontWeight="600">
          Sorularınız Yanıtlandı
        </Text>
      </Box>
      <Box
        w={{md:"50%"}}
        fontSize="18px"
        color="#717171"
        fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
      >
        <Accordion allowMultiple>
          <AccordionItem
            borderBottom="1px solid"
            borderColor="gray.300"
            p={{base:"16px 10px", md:"16px 0"}}
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
              kulübeler, ağaç evler ve daha fazla türde kayıtlarımız var. Boş
              bir oda bile konaklamak için harika bir yer olabilir.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="1px solid"
            borderColor="gray.300"
            p={{base:"16px 10px", md:"16px 0"}}
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
              Kesinlikle değilsiniz. Takviminizi siz kontrol edersiniz. Yılda
              bir kez, ayda birkaç gece veya daha sık ev sahipliği
              yapabilirsiniz.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="1px solid"
            borderColor="gray.300"
            p={{base:"16px 10px", md:"16px 0"}}
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
              Bu size bağlıdır. Bazı ev sahipleri, misafirlere yalnızca önemli
              anlarda, örneğin giriş yaptıklarında mesaj göndermeyi tercih
              ederken bazıları da misafirleriyle yüz yüze görüşmekten keyif
              alır. Size ve misafirlerinize uyan bir tarz bulacağınıza eminiz.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="1px solid"
            borderColor="gray.300"
            p={{base:"16px 10px", md:"16px 0"}}
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
                Mükemmel bir Airbnb ev sahibi olmayla ilgili ipuçları var mı?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p="0" flex="1" textAlign="left">
              <Text>
                Temel ilkeleri uygulayarak oldukça ilerleme kaydedersiniz.
                Yerinizi temiz tutun, misafirlere hızlıca yanıt verin ve temiz
                havlu gibi gerekli olanakları sağlayın. Bazı ev sahipleri taze
                çiçekler koymak veya keşfedilecek yerel yerlerin bir listesini
                paylaşmak gibi kişisel bir dokunuş eklemek ister ancak bu
                elbette zorunlu değildir.
              </Text>
              <Text>
                Ev sahipliğiyle ilgili daha fazla ipucu için okumaya devam edin
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="1px solid"
            borderColor="gray.300"
            p={{base:"16px 10px", md:"16px 0"}}
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
                genellikle %3'ü oranında bir sabit hizmet bedeli tahsil eder.
                Ayrıca rezervasyon sırasında misafirlerden de bir ücret alırız.
                Airbnb, birçok bölgede otomatik olarak sizin adınıza satış ve
                turizm vergileri tahsil edip öder.
              </Text>
              <Text>Ücretler hakkında daha fazla bilgi edinin</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  )
}

export default QuestionBox
