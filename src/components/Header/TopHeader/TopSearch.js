import React from 'react'
import { Box, Button, ButtonGroup, useBreakpointValue } from '@chakra-ui/react'
import LargeSearch from '../Large/LargeSearch';
import { SearchIcon } from '@chakra-ui/icons';

function TopSearch() {
    let md = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {md ? (
          <Box
            _hover={{
              boxShadow: "2xl",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            transition="box-shadow 0.3s ease-in-out"
            display="flex"
            justifyContent="center"
            borderRadius="50"
            w="full"
          >
            <ButtonGroup
              border="1px solid"
              borderColor="gray.300"
              borderRadius="50"
              h="50px"
              p="0 7px"
              alignItems="center"
            >
              <Button
                h="max-content"
                py="5px"
                colorScheme="white"
                variant="ghost"
                borderRight="1px solid"
                borderColor="gray.300"
                borderRadius="0"
                color="gray.600"
                fontWeight="600"
                fontSize="14px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Herhangi bir yer
              </Button>
              <Button
                h="max-content"
                py="5px"
                colorScheme="white"
                variant="ghost"
                borderRight="1px solid"
                borderColor="gray.300"
                borderRadius="0"
                color="gray.600"
                fontWeight="600"
                fontSize="14px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Herhangi bir hafta
              </Button>
              <Button
                h="max-content"
                py="5px"
                colorScheme="white"
                variant="ghost"
                color="gray.500"
                fontWeight="5400"
                fontSize="16px"
                fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
              >
                Misafir ekleyin
              </Button>
              <Button
                colorScheme="white"
                variant="ghost"
                bgColor="#ff385c"
                borderRadius="50"
                w="32px"
                h="40px"
                ml="7px"
              >
                <SearchIcon h="16px" w="16px" color="white" />
              </Button>
            </ButtonGroup>
          </Box>
        ) : (
          <LargeSearch/>
            
        )}
    </>
  )
}

export default TopSearch
