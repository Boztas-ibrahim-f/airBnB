import { Box, Image, Link } from '@chakra-ui/react'
import World from "../../../../Image/world-map.png"
import Twt from '../../../../Image/icons8-twitter-24.png'
import Face from '../../../../Image/icons8-facebook-24.png'
import İnsta from '../../../../Image/icons8-instagram-logo-24.png'

function FooterBottom() {
  return (
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
                <Image src={Face} w="18px" h="18px" />
                <Image src={Twt} w="18px" h="18px" borderRadius="30" />
                <Image src={İnsta} w="18px" h="18px" borderRadius="30" />
              </Box>
            </Box>
          </Box>
        </Box>
  )
}

export default FooterBottom
