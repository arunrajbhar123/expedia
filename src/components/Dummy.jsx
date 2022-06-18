import { Box, Text } from '@chakra-ui/react'
// import { calcRelativeAxisPosition } from 'framer-motion/types/projection/geometry/delta-calc'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import Mapping from './HomePage/Mapping';
import styles from '../styles/Mapping.css'
import {
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  WrapItem,
} from "@chakra-ui/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayIcon from "@mui/icons-material/Today";
import PersonIcon from "@mui/icons-material/Person";

const Dummy = () => {

  const [data, setData] = useState([])
        useEffect(() => {
            const getData = async () => {
                let r = await axios.get('http://localhost:8080/goa');
                console.log(r.data);
                setData(r.data)
            }
            getData();
        }, [])
  return (
    <div>
        <Box w='780px' margin='auto' >
            <Text fontSize='54px' fontWeight='700' color='#343B53' textAlign="center">Travel Smarter - Book early & save</Text>
        </Box>
        <Box>
            <Text fontSize='16px' fontWeight='400' color='#465280' m='12px 0px 0px' textAlign="center">The early bird gets the deal. Save 20% on select hotels when you book 60 days in advance.</Text>
        </Box>
        <hr style={{height: '20px', backgroundColor:'#f2f2f2', margin: '15px 0px 0px'}}/>

        <div className='container-div' >
        {data.map((el) => (
          <div className='container-grid-item1'>
            <Mapping  key={el.id}el={el}/>
          </div>
        ))}
        </div>
        <hr className='seperator'/>
        <div>
        <Stack spacing={4} mt='30px'>
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

          <Stack>
            
            <Flex className="stay-input-travellers">
              <Flex className="stay-input-personIcon">
                <PersonIcon fontSize="30px" />
              </Flex>
              <Box>
                <Box className="stay-box-travellers-heading">Travellers</Box>
              </Box>
            </Flex>
          </Stack>
          <WrapItem className="stay-search-button-wrap" mt='-14px'>
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
        </Flex>

      </Stack>
        </div>
    </div>
  )
}

export default Dummy