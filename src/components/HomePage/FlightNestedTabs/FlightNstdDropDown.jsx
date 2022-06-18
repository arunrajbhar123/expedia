import {
    Button,
    ButtonGroup,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import styles from "../../../styles/RoomCounter.css";
  import RoomCounter from "../RoomCounter";
  
  function FlightNstdDropDown() {
    const initialFocusRef = React.useRef();
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={false}
        border='1px solid orange'
      >
        <PopoverTrigger className="counter-button-wrap" >
          <Button
            className="counter-button-drop"
            bg="none"
            color="#3662D8"
            fontSize="14px"
            fontWeight="400"
            mr='-650px'
            mt='-20px'
            mb='25px'
          >
            1 traveller
            <span className="down-arrow-span">
              <KeyboardArrowDownIcon />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent color="#3662D8" >
          <PopoverHeader
            pt={4}
            fontWeight="500"
            border="0"
            h="250px"
            w="200px"
            fontSize="20px"
            color="#141D38"
            textAlign="left"
            ml="7px"
            mt="8px"
          >
            Travellers
            {/* <Text fontSize="15px" fontWeight="500" ml="7px" mt="8px">Room 1</Text> */}
  
            <PopoverBody display='flex' justifyContent='space-between' mt="10px">
              <Text fontSize="14px" fontWeight="400" ml="-5px" mt="8px" mr='98px' color='#343B53'>Adults</Text>
              <RoomCounter />
            </PopoverBody>
            <PopoverBody display='flex' justifyContent='space-between' >
              <Text fontSize="14px" fontWeight="400" ml="-5px" mt="8px" mr='88px' color='#343B53'>Children</Text>
              <RoomCounter />
            </PopoverBody>
            <PopoverBody display='flex' justifyContent='space-between' >
              <Text fontSize="14px" fontWeight="400" ml="-5px" mt="8px" mr='98px'  color='#343B53'>Infants</Text>
              <RoomCounter />
            </PopoverBody>
  
          </PopoverHeader>
          {/* <PopoverArrow /> */}
          {/* <PopoverCloseButton /> */}
          <PopoverBody>
            <Text textAlign='right' fontSize='16px' fontWeight='500' mb='10px' >Add another room</Text>
          </PopoverBody>
          <PopoverFooter
            border="0"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={4}
          >
            <ButtonGroup size="sm" m="auto">
              <Button colorScheme="blue" ref={initialFocusRef} p="25px 130px">
                Done
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    );
  }
  
  export default FlightNstdDropDown;