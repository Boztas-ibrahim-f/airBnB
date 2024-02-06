import {
  Box,
  Flex,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import TabSet from "./Tabs/TabSet";
import FilteredButton from "./Tabs/FilteredButone";
import FilteredModal from "./Tabs/FilteredModal";
import MainData from "./MainData";


function Main() {
  let md = useBreakpointValue({ base: false, md: true }); 


  return (
    <Box h="full">
      <Flex flexDirection="column" justifyContent="center"  >
       {
        md ? (
          <Box
          px="70px"
          py="14px 1rem"
          mt="1rem"
          display="flex"
          alignItems="center"
        >
          <TabSet/>
          <FilteredButton />
        </Box>
        ):(
          <Box
          px="14px"
          py="12px 14px"
          mt="14px"
          pb="14px"
          display="flex"
          borderBottom="1px solid"
          borderColor="gray.400"
          alignItems="center"
        >
          <TabSet/>
        </Box>
        )
       }
        <Grid width="full"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(6, 1fr)",
          }}
          placeItems="center"
          p={{
            base:"0",
            md:"0 16px",
            lg:"0 42px"
          }}
        >
          <MainData/>
        </Grid>
      </Flex>

      <Box display="flex" position="fixed" alignItems="center">
        <FilteredModal/>
      </Box>
    </Box>
  );
}

export default Main;
