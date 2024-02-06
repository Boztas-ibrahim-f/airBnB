import { AccordionButton, AccordionItem, AccordionPanel, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

function MdPanelTree() {
    const [firstValue, setfirstValue] = useState(0);
    const [secondValue, setsecondValue] = useState(0);
    const [thirdValue, setThirdValue] = useState(0);
    const [fourthValue, setFourthValue] = useState(0);
    return (
    
    <>
      <AccordionItem width="full" p="14px" bgColor="white" borderRadius="15px">
        <AccordionButton
          w="full"
          placeContent="center"
          _hover={{ bgColor: "transperant" }}
          _expanded={{ display: "none" }}
        >
          <Box w="full" display="flex" justifyContent="space-between">
            <Box>Kişiler</Box> <Box>Kişi Ekleyin</Box>
          </Box>
        </AccordionButton>

        <AccordionPanel p="0">
          <Box display="flex" flexDirection="column" width="full">
            <Box p="0,5rem 14px 0,75rem ">
              <Box fontSize="22px" fontWeight="600">
                Kimler Geliyor
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py="1em"
                  borderBottom="1px solid"
                  borderColor="gray.400"
                >
                  <Box>
                    <Box fontSize="16px" color="black" fontWeight="600">
                      Yetişkinler
                    </Box>
                    <Box fontSize="14px" color="gray.500" fontWeight="400">
                      13 yaş ve üzeri
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center" height="max-content">
                    <Button
                      height="2.5rem"
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50%"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      mr="0.75rem"
                      onClick={() => setfirstValue(firstValue - 1)}
                    >
                      -
                    </Button>
                    {firstValue}
                    <Button
                      height="2.5rem"
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      ml="0.75rem"
                      onClick={() => setfirstValue(firstValue + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py="14px"
                  borderBottom="1px solid"
                  borderColor="gray.400"
                >
                  <Box>
                    <Box fontSize="16px" color="black" fontWeight="600">
                      Çocuklar
                    </Box>
                    <Box fontSize="14px" color="gray.500" fontWeight="400">
                      2 - 12 yaş
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      mr="0.75rem"
                      onClick={() => setsecondValue(secondValue - 1)}
                    >
                      -
                    </Button>
                    {secondValue}
                    <Button
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      ml="0.75rem"
                      onClick={() => setsecondValue(secondValue + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py="14px"
                  borderBottom="1px solid"
                  borderColor="gray.400"
                >
                  <Box>
                    <Box fontSize="16px" color="black" fontWeight="600">
                      Bebekler
                    </Box>
                    <Box fontSize="14px" color="gray.500" fontWeight="400">
                      2 yaş ve altı
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      mr="0.75rem"
                      onClick={() => setThirdValue(thirdValue - 1)}
                    >
                      -
                    </Button>
                    {thirdValue}
                    <Button
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      ml="0.75rem"
                      onClick={() => setThirdValue(thirdValue + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt="14px"
                >
                  <Box>
                    <Box fontSize="16px" color="black" fontWeight="600">
                      Evcil Hayvanlar
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      mr="0.75rem"
                      onClick={() => setFourthValue(fourthValue - 1)}
                    >
                      -
                    </Button>
                    {fourthValue}
                    <Button
                      colorScheme="ghost"
                      border="1px solid"
                      borderColor="gray.500"
                      borderRadius="50"
                      textColor="black"
                      fontSize="14px"
                      fontWeight="600"
                      px="14px"
                      ml="0.75rem"
                      onClick={() => setFourthValue(fourthValue + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default MdPanelTree;
