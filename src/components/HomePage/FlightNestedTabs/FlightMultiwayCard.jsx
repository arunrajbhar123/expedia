import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Stack, Text, WrapItem } from "@chakra-ui/react";
import React from "react";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styles from '../../../styles/BookingCard.css'

const FlightMultiwayCard = () => {
  return (
    <div >
        <Stack spacing={4} mt='-80px' ml='25px'>
            <Text textAlign='left' fontSize='15px' fontWeight='700'>Flight 1</Text>
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
              w="26em"
            />
          </InputGroup>
            {/* <Box border='1px solid grey' borderRadius='50%' w='60px' h='28px' ml='-27px' mr='-27px' bg='white'zIndex='8'><CompareArrowsOutlinedIcon/></Box> */}
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
              w="26em"
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
       
      </Stack>

      <Stack spacing={4} mt='30px' ml='25px'>
            <Text textAlign='left' fontSize='15px' fontWeight='700'>Flight 2</Text>
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
              w="26em"
            />
          </InputGroup>
            {/* <Box border='1px solid grey' borderRadius='50%' w='60px' h='28px' ml='-27px' mr='-27px' bg='white'zIndex='8'><CompareArrowsOutlinedIcon/></Box> */}
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
              w="26em"
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
        <Text textAlign='right' fontSize='16px' fontWeight='600' color='#3662D8' pr='25px' pt='5px'><span className='add-flight-span'><AddOutlinedIcon className='add-flight-icon'/></span>Add another flight</Text>
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

export default FlightMultiwayCard