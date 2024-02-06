import { Box, Button } from '@chakra-ui/react'

import React from 'react'

function FilteredModalButton() {
  return (
    <Box>
      <Button
        color="white"
        bgColor="gray.400"
        _hover={{ bgColor: 'gray.600' }}
        fontSize="14px"
      >
        Tümü
      </Button>
      <Button
        ml="1rem"
        color="gray.600"
        bgColor="white"
        border="1px solid"
        borderColor="gray.400"
      >
        1
      </Button>
      <Button ml="1rem" color="gray.600" bgColor="white">
        2
      </Button>
      <Button
        ml="1rem"
        color="gray.400"
        bgColor="white"
        _hover={{ textDecoration: 'underline' }}
      >
        3
      </Button>
      <Button
        ml="1rem"
        color="gray.400"
        bgColor="white"
        _hover={{ textDecoration: 'underline' }}
      >
        4
      </Button>
      <Button
        ml="1rem"
        color="gray.400"
        bgColor="white"
        _hover={{ textDecoration: 'underline' }}
      >
        5
      </Button>
      <Button
        ml="1rem"
        color="gray.400"
        bgColor="white"
        _hover={{ textDecoration: 'underline' }}
      >
        6
      </Button>
      <Button
        ml="1rem"
        color="gray.400"
        bgColor="white"
        _hover={{ textDecoration: 'underline' }}
      >
        7
      </Button>
      <Button
        ml="1rem"
        color="gray.400"
        bgColor="white"
        _hover={{ textDecoration: 'underline' }}
      >
        +8
      </Button>
    </Box>
  )
}

export default FilteredModalButton
