import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Stack, WrapItem } from "@chakra-ui/react";
import React from "react";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

const FlightOnewayCard = () => {
  return (
    <div>
      <Stack spacing={4} mt='-70px'>
        <Flex gap="20px" align="center" w="96%" m="auto" >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.5em"
              children={<LocationOnIcon fontSize="1.5em" />}
            />
            <Input
              type="tel"
              placeholder="Leaving from"
              id="stay-card-input"
              h="50px"
              w="23.8em"
            />
          </InputGroup>
            <Box border='1px solid grey' borderRadius='50%' w='60px' h='28px' ml='-27px' mr='-27px' bg='white'zIndex='8'><CompareArrowsOutlinedIcon/></Box>
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
              w="23.8em"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input placeholder="Departing" id="stay-card-input" h="50px" type='date'/>
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

export default FlightOnewayCard;
