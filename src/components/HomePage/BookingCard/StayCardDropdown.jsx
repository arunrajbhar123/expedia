import React from "react";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../../../styles/RoomCounter.css";
import RoomCounter from "../RoomCounter";

const StayCardDropdown = () => {
  const initialFocusRef = React.useRef();
  return (
    <div>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={false}
        border="1px solid orange"
      >
        <PopoverTrigger className="counter-button-wrap">
          <Text>1 room, 2 travellers</Text>
        </PopoverTrigger>
        <PopoverContent color="#3662D8">
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
            <Text fontSize="15px" fontWeight="500" ml="7px" mt="8px">
              Room 1
            </Text>
            <PopoverBody display="flex" justifyContent="space-between">
              <Text
                fontSize="14px"
                fontWeight="400"
                ml="-5px"
                mt="8px"
                mr="98px"
                color="#343B53"
              >
                Adults
              </Text>
              <RoomCounter />
            </PopoverBody>
            <PopoverBody
              display="flex"
              justifyContent="space-between"
              mt="-40px"
            >
              <Text
                fontSize="14px"
                fontWeight="400"
                ml="-5px"
                mt="8px"
                mr="88px"
                color="#343B53"
              >
                Children
              </Text>
              <RoomCounter />
            </PopoverBody>
            <PopoverBody
              display="flex"
              justifyContent="space-between"
              mt="-40px"
            >
              <Text
                fontSize="14px"
                fontWeight="400"
                ml="-5px"
                mt="8px"
                mr="98px"
                color="#343B53"
              >
                Infants
              </Text>
              <RoomCounter />
            </PopoverBody>
          </PopoverHeader>
          {/* <PopoverArrow /> */}
          {/* <PopoverCloseButton /> */}
          <PopoverBody mt="18px" mb="-10px">
            <Text textAlign="right" fontSize="16px" fontWeight="500" mb="30px">
              Add another room
            </Text>
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
    </div>
  );
};

export default StayCardDropdown;
