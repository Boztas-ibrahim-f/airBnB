import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function SectionThree() {
  return (
    <Box w="full" py={{base:"20px",md:"0"}} >
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
  )
}

export default SectionThree
