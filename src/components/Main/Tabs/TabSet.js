import { Tabs, TabList, Image, Box, Tab } from '@chakra-ui/react'
import TabData from "../../../data/TabData.json"

const tabData = TabData

function TabSet() {
  return (
    <Tabs overflow="hidden">
      <TabList
        alignItems="center"
        h="min-content"
        border="none"
        style={{
          overflowY: 'hidden',
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {tabData?.map((tab) => {
          return (
            <Tab
              key={tab?.id}
              _hover={{ borderBottom: '3px solid red', pb: '3px' }}
            >
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                colorScheme="none"
                textColor="black"
                fontWeight="400"
                fontSize="12px"
                p="0"
                m="0"
              >
                <Image h="24px" w="24px" src={tab?.image} />
                <Box>{tab?.name}</Box>
              </Box>
            </Tab>
          )
        })}
      </TabList>
    </Tabs>
  )
}

export default TabSet
