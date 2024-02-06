import { Flex, useBreakpointValue } from "@chakra-ui/react";
import TopModal from "../Header/TopHeader/TopModal";
import TopLogo from "../Header/TopHeader/TopLogo";
import TopSearch from "../Header/TopHeader/TopSearch";
import TopRightSide from "../Header/TopHeader/TopRightSide";
import FirstModal from "../Header/TopHeader/Modals/FirstModal";
import MdModal from "../Header/TopHeader/Modals/MdModal";

function Ust() {
  let md = useBreakpointValue({ base: false, md: true });

  return (
    <Flex placeItems="center" flexDirection="column">
      <TopModal />
      <Flex
        w="full"
        py=" 18px"
        borderBottom={{ md: "1px solid" }}
        color="gray.300"
        px={{
          md: "10%",
          lg: "50px",
          xl: "70px",
        }}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
      >
        <TopLogo />
        <TopSearch />
        <TopRightSide />
      </Flex>
      {md ? <FirstModal /> : <MdModal />}
    </Flex>
  );
}

export default Ust;
