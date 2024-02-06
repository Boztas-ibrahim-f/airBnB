import { HamburgerIcon } from '@chakra-ui/icons';
import icon from "../../../Image/user.png"
import { Box, Button, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useBreakpointValue } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopRightSide() {
  const navigate = useNavigate()
    let lg = useBreakpointValue({ base: false, lg: true });
  return (
    <>
          <Box
            display={{base:"none",md:"flex"}}
            alignItems="center"
            width="full"
            justifyContent="end"
          >
            {lg ? (
              <Box>
                <Button
                  borderRadius="50"
                  colorScheme="gray"
                  fontSize="14px"
                  textColor="gray.600"
                  fontWeight="700"
                  variant="ghost"
                  onClick={() => navigate("/interface")}
                >
                  Evinizi Airbnb'ye taşıyın
                </Button>
              </Box>
            ) : (
              <Box>
                <Button
                  borderRadius="50"
                  colorScheme="gray"
                  variant="ghost"
                  onClick={() => navigate("/interface")}
                >
                  Keşfet
                </Button>
              </Box>
            )}
            <Box
              borderRadius="50"
              border="1px"
              display="inline-flex"
              borderColor="gray.300"
              color="gray.500"
            >
              <Menu isLazy>
                <MenuButton mr="5px" display="flex" alignItems="center">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    h="42px"
                    w="77px"
                    p="5px 5px 5px 10px"
                  >
                    <HamburgerIcon h="20px" w="25px" />
                    <Image src={icon} h="25px" w="25px" />
                  </Box>
                </MenuButton>

                <MenuList border="1px solid" borderColor="gray.300" p="10px">
                  <MenuItem
                    p="5px 10px"
                    color="gray.800"
                    fontSize="16"
                    fontWeight="600"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Kaydolun
                  </MenuItem>
                  <MenuItem
                    p="5px 10px"
                    color="gray.500"
                    fontSize="16"
                    fontWeight="600"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Oturum Açın
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    p="5px 10px"
                    color="gray.400"
                    fontSize="16"
                    fontWeight="500"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Evinizi Airbnb'ye Taşıyın
                  </MenuItem>
                  <MenuItem
                    p="5px 10px"
                    color="gray.400"
                    fontSize="16"
                    fontWeight="500"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Bir Deneyime Ev Sahipliği Yapın
                  </MenuItem>
                  <MenuItem
                    p="5px 10px"
                    color="gray.400"
                    fontSize="16"
                    fontWeight="500"
                    fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
                  >
                    Yardım
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
    </>
  )
}

export default TopRightSide
