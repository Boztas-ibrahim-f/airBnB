import { Box, Image, Text } from '@chakra-ui/react';
import Data from '../../data/Data.json'

function MainData() {
  return (
    <>
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
    </>
  )
}

export default MainData
