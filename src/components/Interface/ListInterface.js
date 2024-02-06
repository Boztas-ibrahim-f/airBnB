import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

function ListInterface() {
  return (
    <Box w="90%">
      <Box
        display="flex"
        justifyContent="end"
        fontSize={{ base: '14px', md: '16px' }}
        fontWeight={{ md: '600' }}
        gap={{base:"10px", md: '20px' }}
        pb="1.25rem"
      >
        <Text
          p={{md:"0 28px"}}
          fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
        >
          Airbnb
        </Text>
        <Text
          p={{md:"0 28px"}}
          fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
        >
          Rakipler
        </Text>
      </Box>
      <Box
        borderTop="2px solid rgb(225, 225, 225);"
        py=" 1.75rem "
        fontSize={{ base: '16px', md: '22px' }}
      >
        <Flex
          justifyContent="space-between"
          marginBottom="0.75rem"
          overflow="hidden"
        >
          <Text
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Misafirlerin Kimliğini Doğrulama
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
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
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Rezervasyon taraması
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
          >
            <CheckIcon fontSize="24px" color="green" />
            <CloseIcon fontSize="24px" color="red" />
          </Flex>
        </Flex>
        <Box color="#717171">
          Tescilli teknolojimiz her rezervasyonda yüzlerce faktörü analiz eder
          ve çevreye rahatsızlık veren partiler ve mülk hasarı açısından yüksek
          riskli olarak görülen belirli rezervasyonları engeller.
        </Box>
      </Box>
      <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
        <Flex justifyContent="space-between" marginBottom="0.75rem">
          <Text
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            3 milyon USD değerinde hasar koruması
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
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
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Sanat eserleri ve değerli eşyalar
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
          >
            <CheckIcon fontSize="24px" color="green" />
            <CloseIcon fontSize="24px" color="red" />
          </Flex>
        </Flex>
      </Box>
      <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
        <Flex justifyContent="space-between" marginBottom="0.75rem">
          <Text
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Arabalar ve tekneler
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
          >
            <CheckIcon fontSize="24px" color="green" />
            <CloseIcon fontSize="24px" color="red" />
          </Flex>
        </Flex>
      </Box>
      <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
        <Flex justifyContent="space-between" marginBottom="0.75rem">
          <Text
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Evcil hayvan hasarı
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
          >
            <CheckIcon fontSize="24px" color="green" />
            <CloseIcon fontSize="24px" color="red" />
          </Flex>
        </Flex>
      </Box>
      <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
        <Flex justifyContent="space-between" marginBottom="0.75rem">
          <Text
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Gelir kaybı
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
          >
            <CheckIcon fontSize="24px" color="green" />
            <CloseIcon fontSize="24px" color="red" />
          </Flex>
        </Flex>
      </Box>
      <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
        <Flex justifyContent="space-between" marginBottom="0.75rem">
          <Text
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Derinlemesine temizlik
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
          >
            <CheckIcon fontSize="24px" color="green" />
            <CloseIcon fontSize="24px" color="red" />
          </Flex>
        </Flex>
      </Box>
      <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem ">
        <Flex justifyContent="space-between" marginBottom="0.75rem">
          <Text
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            1 milyon USD değerinde sorumluluk sigortası
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
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
            
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            24 saat Güvenlik Destek Hattı
          </Text>
          <Flex
            justifyContent="center"
            p={{base:"0 10px 0 0", md:'0 50px' }}
            gap={{ base: '36px', md: '110px' }}
            padding-inline={{ base: '10px', md: '50px' }}
          >
            <CheckIcon fontSize="24px" color="green" />
            <CloseIcon fontSize="24px" color="red" />
          </Flex>
        </Flex>
        <Box color="#717171">
          Kendinizi güvende hissetmezseniz uygulamamız özel olarak eğitilmiş
          güvenlik destek ekibine gece gündüz tek dokunuşla erişmenizi sağlar.
        </Box>
      </Box>
      <Box borderTop="2px solid rgb(225, 225, 225);" py=" 1.75rem" display={{base:"none", md:"flex"}}>
        <Flex justifyContent="space-between" marginBottom="0.75rem">
          <Text
            color="#717171"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Karşılaştırma, 22 Ekim itibarıyla herkese açık bilgilere ve büyük
            rakiplerin sunduğu ücretsiz tekliflere dayanır. Ayrıntıları ve
            istisnaları
            <Link textDecoration="underline" color="black" fontWeight="600">
              burada
            </Link>{' '}
            bulabilirsiniz.
          </Text>
        </Flex>
      </Box>
      <Box w="full" justifyContent="center" display={{base:"none", md:"flex"}} >
        <Button border="1px solid">Daha fazla bilgi edinin</Button>
      </Box>
    </Box>
  )
}

export default ListInterface
