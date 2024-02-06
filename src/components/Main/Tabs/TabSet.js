
import { Tabs ,TabIndicator } from "@chakra-ui/react";
import Tab from "./Tab";

function TabSet() {
  return (
    <>
      <Tabs overflow="hidden">
        <Tab />
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="#e61e4d"
          borderRadius="1px"
        />
      </Tabs>
    </>
  );
}

export default TabSet;
