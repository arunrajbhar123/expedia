import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import styles from "../../../styles/BookingCardPackages.css";
import RoomCounterDropDown from "../RoomCounterDropDown";
import CheckBoxDisplay from "../CheckBoxDisplay";

const BookingCardPackages = () => {

  const [isChecked, setIsChecked] = useState(false)
  const handleCheckBoxClick = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div >
      <Box >
          <RoomCounterDropDown/>
      </Box >
        <br />
        <br/>
      <Stack spacing={4} mt='18px'>
        <Flex gap="20px" align="center" w="92%" justifyContent="center" m='auto' ml='20px'>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.5em"
              children={<LocationOnIcon fontSize="1.5em" />}
            />
            <Input
              type="tel"
              placeholder="Leaving from "
              id="stay-card-input"
              h="50px"
              w="28.8em"
              fontSize='18px'
              fontWeight='600'
              color='#141D38'
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input placeholder="Check-in" id="stay-card-input" h="50px" type='date'/>
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input placeholder="Check-in" id="stay-card-input" h="50px" type='date'/>
          </InputGroup>

          
        </Flex>
        <Stack
          spacing={[1, 5]}
          direction={["column", "row"]}
          w="440px"
          pl="30px"
          pb='8px'
        >
          <Checkbox size="md" colorScheme="blue" border="grey" fontSize="14px" onChange={handleCheckBoxClick}>
            I only need a accomodation for part of my trip
          </Checkbox>
        </Stack>
        <Stack>{isChecked ? <CheckBoxDisplay/> : null}</Stack>
        <WrapItem className="stay-search-button-wrap" mt='-20px'>
          <Button
            // colorScheme="messenger"
            bg='#3662D8'
            color='white'
            fontSize='16px'
            fontWeight='500'
            className="stay-search-button"
            h="48px"
            p="4px 16px"
            _hover={{bg:'blue.600'}}
          >
            Search
          </Button>
        </WrapItem>
      </Stack>
    </div>
  );
};

export default BookingCardPackages;
