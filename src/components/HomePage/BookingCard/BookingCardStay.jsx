import React, { useState } from "react";
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
import styles from "../../../styles/BookingCardStay.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayIcon from "@mui/icons-material/Today";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import StayCardDropdown from "./StayCardDropdown";

// import RoomCounter from "./RoomCounter";

const BookingCardStay = () => {
  const Navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const handleCheckBoxClick = (e) => {
    setIsChecked(e.target.checked);
  };
  const [city, setCity] = useState("");
  const handleSearch = () => {
    localStorage.setItem("city", JSON.stringify(city));
    console.log(city);
    Navigate("/result");
    // <Navigate to="/result"/>
  };

  // const handleStayClick = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div>
      <Stack spacing={4}>
        <Flex gap="10px" w="90%" m="auto">
          <InputGroup w="140em">
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.8em"
              children={<LocationOnIcon fontSize="1.8em" />}
            />
            <Input
              type="tel"
              placeholder="Going to"
              h="50px"
              id="stay-card-input"
              onChange={(e) => setCity(e.target.value)}
            />
          </InputGroup>

          <InputGroup w="60em">
            <InputLeftElement
              pointerEvents="none"
              // color="gray.300"
              fontSize="1.4em"
              children={<TodayIcon fontSize="1.4em" />}
            />
            <Input placeholder="Check-in" h="50px" id="stay-card-input" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              // color="gray.300"
              fontSize="1.4em"
              children={<TodayIcon color="black.300" fontSize="1.4em" />}
            />
            <Input placeholder="Check-out" h="50px" id="stay-card-input" />
          </InputGroup>

          <Box>
            <Flex className="stay-input-travellers">
              <Box className="stay-input-personIcon" mt="5px">
                <PersonIcon fontSize="40px" />
              </Box>
              <Box>
                <Box className="stay-box-travellers-heading">
                  Travellers
                  <br />
                  <span style={{ fontSize: "16px" }}>1 room, 2 travellers</span>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Stack
          spacing={[1, 5]}
          direction={["column", "row"]}
          w="400px"
          pl="60px"
        >
          <Checkbox
            size="md"
            colorScheme="blue"
            border="grey"
            fontSize="14px"
            onChange={handleCheckBoxClick}
          >
            Add a flight
          </Checkbox>
          <Checkbox size="md" colorScheme="blue" border="grey">
            Add a car
          </Checkbox>
        </Stack>
        {isChecked ? (
          <Stack pl="58px"  w='30em ' >
            <InputGroup w="30em" float='left' >
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.8em"
                children={<LocationOnIcon fontSize="1.8em" />}
              />
              <Input
                type="tel"
                placeholder="Going to"
                h="50px"
                float='left'
                
                id="stay-card-input"
              />
            </InputGroup>
          </Stack>
        ) : null}
        <WrapItem className="stay-search-button-wrap">
          <Button
            // colorScheme="messenger"
            bg="#3662D8"
            color="white"
            fontSize="16px"
            fontWeight="500"
            className="stay-search-button"
            h="48px"
            p="4px 16px"
            _hover={{ bg: "blue.600" }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </WrapItem>
      </Stack>
    </div>
  );
};

export default BookingCardStay;
