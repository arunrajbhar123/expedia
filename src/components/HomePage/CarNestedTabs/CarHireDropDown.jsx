import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TimeDropDown from "./TimeDropDown";

const CarHireDropDown = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [selected, setSelected] = useState('00:00');

  const handleActiveClick1 = () => {
    setIsActive1(!isActive1);
  };
  const handleActiveClick2 = () => {
    setIsActive2(!isActive2);
  };

  return (
    <div>
      <Stack spacing={4}>
        <Flex gap="20px" align="center" w="94%" m="auto" ml="27px">
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
              w="34em"
            />
          </InputGroup>

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
              w="34em"
            />
          </InputGroup>
        </Flex>
      </Stack>
      {/* ***************************************************************************** */}
      <Stack mt="22px">
        <Flex gap="20px" align="center" w="96%" m="auto">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input
              placeholder="Pick-up"
              id="stay-card-input"
              h="50px"
              type="date"
              w="16.4em"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input
              placeholder="Same as pick-up"
              id="stay-card-input"
              h="50px"
              type="date"
              w="16.4em"
            />
          </InputGroup>

          <Box
            border="1px solid #343b53"
            w="73em"
            h="49px"
            borderRadius="9px"
            onClick={handleActiveClick2} 
          >
            <Flex>
              <Stack fontSize="26px" ml="6px" mt="10px">
                <AccessTimeOutlinedIcon fontSize="30px" />
              </Stack>

              <Text mr="135px" fontSize="13px" >
                Pick-up time
              </Text>
            </Flex>
            <Text mt="-15px" textAlign="left" ml="47px" fontSize="17px" fontWeight='400'>
              00:00
            </Text>

            {isActive2 ? (
              <Box
                w="260px"
                h="350px"
                border="1px solid black"
                mt="15px"
                overflow="scroll"
                zIndex='100'
                bg='white'  
                
              >
                <TimeDropDown />
              </Box>
            ) : null}
          </Box>

          <Box
            border="1px solid #343b53"
            w="73em"
            h="49px"
            borderRadius="9px"
            onClick={handleActiveClick1}
          >
            <Flex>
              <Stack fontSize="26px" ml="6px" mt="10px">
                <AccessTimeOutlinedIcon fontSize="30px" />
              </Stack>

              <Text mr="135px" fontSize="13px" >
                Drop-off time
              </Text>
            </Flex>
            <Text mt="-15px" textAlign="left" ml="47px" fontSize="17px" fontWeight='400' >
              {selected}
            </Text>
            {isActive1 ? (
              <Box
                w="260px"
                h="350px"
                border="1px solid black"
                mt="30px"
                overflow="scroll"
                zIndex='100'
                bg='white'
              >
                <TimeDropDown selected={selected} setSelected={setSelected} />
              </Box>
            ) : null}
          </Box>

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

export default CarHireDropDown;
