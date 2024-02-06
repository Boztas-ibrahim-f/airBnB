import React from 'react'
import SectionOne from './Secions/SectionOne'
import SectionTwo from './Secions/SectionTwo'
import SectionThree from './Secions/SectionThree'
import { Grid } from '@chakra-ui/react'

function FooterInterface() {
  return (
    <Grid
            px={{md:"48px"}}
            mx="12px"
            display="flex"
            templateColumns="repeat(3, 1fr)"
            justifyItems="center"
            flexDirection={{base:"column",md:"row"}}
            gap={8}
            w="full"
          >
            <SectionOne />
            <SectionTwo/>
            <SectionThree/>
          </Grid>
  )
}

export default FooterInterface
