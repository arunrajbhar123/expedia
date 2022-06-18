import React from "react";
import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Box} from '@chakra-ui/react'
import FlightOnewayCard from "../FlightNestedTabs/FlightOnewayCard";
import FlightReturnCard from "../FlightNestedTabs/FlightReturnCard";
import FlightMultiwayCard from "../FlightNestedTabs/FlightMultiwayCard";
import FlightNstdDropDown from "../FlightNestedTabs/FlightNstdDropDown";
import FlightClassDropDown from "../FlightNestedTabs/FlightClassDropDown";

const BookingCardFlight = () => {
  return (
    <div>
      <Tabs variant="rounded">
        <TabList mt='20px' gap='20px' ml='23px' mb='10px'>
          <Tab _selected={{ color: "blue", bg: "#E7EDFD", p:'13px 35px 13px 35px', borderRadius: '10px'}} color='#343B53' fontSize='14px' fontWeight='500'>Return</Tab>
          <Tab _selected={{ color: "blue", bg: "#E7EDFD", p:'13px 35px 13px 35px', borderRadius: '10px'}} color='#343B53' fontSize='14px' fontWeight='500' >One-way</Tab>
          <Tab _selected={{ color: "blue", bg: "#E7EDFD", p:'13px 35px 13px 35px', borderRadius: '10px'}} color='#343B53' fontSize='14px' fontWeight='500'>Multi-city</Tab>
        </TabList>

        <Flex justifyContent='flex-end' >
          <Box >
            <FlightNstdDropDown/>
          </Box>
          <Box mt='-18px' mr='28px'>
            <FlightClassDropDown/>
          </Box>
        </Flex>
        <br/>
        <br/>
        
        <TabPanels>
          <TabPanel>
            <FlightReturnCard/>
          </TabPanel>
          <TabPanel>
            <FlightOnewayCard/>
          </TabPanel>
          <TabPanel>
            <FlightMultiwayCard/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default BookingCardFlight;

{
  /* <Tabs variant='rounded'>
  <TabList>
    <Tab _selected={{ color: 'blue', bg: '#E7EDFD' }}>Tab 1</Tab>
    <Tab _selected={{ color: 'blue', bg: '#E7EDFD' }}>Tab 2</Tab>
    <Tab _selected={{ color: 'blue', bg: '#E7EDFD' }}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs> */
}
