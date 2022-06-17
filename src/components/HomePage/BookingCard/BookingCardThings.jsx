import { Button, Flex, Input, InputGroup, InputLeftElement, Stack, WrapItem } from "@chakra-ui/react";
import React from "react";
import TodayIcon from "@mui/icons-material/Today";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from '../../../styles/BookingCardThings.css'

const BookingCardThings = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Flex gap="20px" align="center" w="90%" m="auto">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.5em"
              children={<LocationOnIcon fontSize="1.5em" />}
            />
            <Input
              type="tel"
              placeholder="Going to"
              id="stay-card-input"
              h="50px"
              w="30em"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input placeholder="Check-in" id="stay-card-input" h="50px" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input placeholder="Check-out" id="stay-card-input" h="50px" />
          </InputGroup>
        </Flex>
        <WrapItem className="stay-search-button-wrap">
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

export default BookingCardThings;
