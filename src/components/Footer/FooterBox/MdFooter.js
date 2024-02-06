import { Box } from '@chakra-ui/react'
import { CiHeart } from 'react-icons/ci'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { IoSearchOutline } from 'react-icons/io5'

function MdFooter() {
  return (
    <Box
      p="7px 40px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        fontWeight="600"
        justifyContent="center"
        w="full"
        alignItems="center"
      >
        <Box display="flex" justifyContent="space-around" flex="2 1">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box fontSize="3xl">
              <IoSearchOutline />
            </Box>
            <Box fontSize="12px" fontWeight="500">
              Keşfedin
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flex="1 1"
            >
              <Box color="black" fontSize="3xl">
                <CiHeart />
              </Box>
              <Box fontSize="12px" fontWeight="500">
                Favoriler
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              flex="1 1"
            >
              <Box fontSize="3xl">
                <HiOutlineUserCircle />
              </Box>
              <Box fontSize="12px" fontWeight="500">
                Giriş Yap
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MdFooter
