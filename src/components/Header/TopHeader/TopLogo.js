import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Image/airbnb.png"

function TopLogo() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        w="full"
        display={{ base: "none", md: "Flex" }}
        alignItems="center"
        flexWrap="wrap"
        onClick={() => navigate("/")}
      >
        <Box
          display="flex"
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Logo} w="30px" h="30px" />

          <Box
            display={{ base: "none", lg: "Flex" }}
            overflow="hidden"
            textColor="#ff385c"
            fontSize="20px"
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            airbnb
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TopLogo;
