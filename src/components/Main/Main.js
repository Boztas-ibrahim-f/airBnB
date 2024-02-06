import { Box, Flex, Grid } from '@chakra-ui/react'
import MainData from './MainData'
import FilteredButton from './Tabs/FilteredButton'
import TabSet from './Tabs/TabSet'

function Main() {
  return (
    <Box h="full">
      <Flex flexDirection="column" justifyContent="center">
        <Box
          px="70px"
          py="14px 1rem"
          mt="1rem"
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
        >
          <TabSet />
          <FilteredButton />
        </Box>

        <Box
          px="14px"
          py="12px 14px"
          mt="14px"
          pb="14px"
          display={{ base: 'flex', md: 'none' }}
          borderBottom="1px solid"
          borderColor="gray.400"
          alignItems="center"
        >
          <TabSet />
        </Box>

        <Grid
          width="full"
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
            '2xl': 'repeat(6, 1fr)',
          }}
          placeItems="center"
          p={{
            base: '0',
            md: '0 16px',
            lg: '0 42px',
          }}
        >
          <MainData />
        </Grid>
      </Flex>
    </Box>
  )
}

export default Main
