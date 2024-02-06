import { Box, Image } from '@chakra-ui/react'
import InterCenter from "../../Image/interface-center.jpg"

function MidInterface() {
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        m="120px 0"
        p={{md:"0 80px"}}
      >
        <Box
          display="flex"
          mb="28px"
          justifyContent="center"
          fontWeight="700"
          fontSize={{base:"22px",md:"48px"}}
          textAlign="center"
          fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
        >
          Airbnb Start ile evinizi kolayca Airbnb'ye taşıyın
        </Box>
        <Image src={InterCenter} />
        <Box p={{md:"0 40px"}} m="40px 0 0" display="flex" flexDirection={{base:"column", md:"row"}} gap={{base:"40px",md:"0"}} justifyContent="center">
          <Box pr={{base:"10px",md:"40px"}}>
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
          <Box pl={{base:"0",md:"40px"}}>
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
  )
}

export default MidInterface
