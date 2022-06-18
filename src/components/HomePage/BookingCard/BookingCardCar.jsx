import React from 'react'
import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Box} from '@chakra-ui/react'
import CarHireDropDown from '../CarNestedTabs/CarHireDropDown'
import AirportDropDown from '../CarNestedTabs/AirportDropDown'

const BookingCardCar = () => {
  return (
    <div>
      <Tabs variant="rounded">
        <TabList mt='20px' gap='20px' ml='23px' mb='10px'>
          <Tab _selected={{ color: "blue", bg: "#E7EDFD", p:'13px 35px 13px 35px', borderRadius: '10px' }} color='#343B53' fontSize='14px' fontWeight='500'>Car hire</Tab>
          <Tab _selected={{ color: "blue", bg: "#E7EDFD", p:'13px 35px 13px 35px', borderRadius: '10px' }} color='#343B53' fontSize='14px' fontWeight='500' >Airport transport</Tab>
         
        </TabList>
        
        <TabPanels>
          <TabPanel>
            <CarHireDropDown/>
          </TabPanel>
          <TabPanel>
            <AirportDropDown/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default BookingCardCar