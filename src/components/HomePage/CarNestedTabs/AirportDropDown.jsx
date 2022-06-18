import { Box, Button, Checkbox, Flex, Input, InputGroup, InputLeftElement, Stack, Text, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TimeDropDown from "./TimeDropDown";
import CheckBoxInputs from "./CheckBoxInputs";


const AirportDropDown = () => {

    const [isActive2, setIsActive2] = useState(false);
    const [selected, setSelected] = useState('00:00');
    const [checked, setChecked] = useState(true);   // for checkbox dropdown

    const handleCheckboxClick = () => {
        setChecked(!checked);
    };
    const handleActiveClick2 = () => {
        setIsActive2(!isActive2);
    };

  return (
    <div>
        <Stack spacing={4}>
        <Flex gap="18px" align="center" w="96%" m="auto" >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.5em"
              children={<LocationOnIcon fontSize="1.5em" />}
            />
            <Input
              type="tel"
              placeholder="Airport"
              id="stay-card-input"
              h="50px"
              w="18em"
            />
          </InputGroup>
            <Box border='1px solid grey' borderRadius='50%' w='60px' h='28px' ml='-27px' mr='-27px' bg='white'zIndex='8'><CompareArrowsOutlinedIcon/></Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.84em"
              children={<ApartmentOutlinedIcon fontSize="1.5em" color='#343B53' />}
            />
            <Input
              type="tel"
              placeholder="Hotel name"
              id="stay-card-input"
              h="50px"
              w="18em"
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

              <Text mr="100px" fontSize="13px" textAlign='left' >
               Flight arrival time
              </Text>
            </Flex>
            <Text mt="-15px" textAlign="left" ml="47px" fontSize="17px" fontWeight='400'>
              {selected}
            </Text>

            {isActive2 ? (
              <Box
                w="260px"
                h="350px"
                mt="15px"
                overflow="scroll"
                zIndex="8"
                bgColor='white'
                border='1px solid grey'
                textAlign='left'
                pl='30px'
                borderRadius='10px'
              >
                <TimeDropDown selected={selected} setSelected={setSelected}  zIndex='8' />
              </Box>
            ) : null}
          </Box>

        </Flex>

        <Checkbox defaultChecked pl='25px' color='#343B53' fontSize='16px' onChange={handleCheckboxClick}>Book return</Checkbox>
        {checked ? <CheckBoxInputs/> : null}

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
  )
}

export default AirportDropDown