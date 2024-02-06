import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function SectionTwo() {
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
  )
}

export default SectionTwo
