import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function SectionOne() {
  return (
    <Box w="full" py={{base:"20px",md:"0"}} borderBottom={{base:"1px solid",md:"none"}} borderColor="gray.400">
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
  )
}

export default SectionOne
