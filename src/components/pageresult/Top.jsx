import React from 'react'
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
  import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayIcon from "@mui/icons-material/Today";
import PersonIcon from "@mui/icons-material/Person";
import styles from "../../styles/BookingCardStay.css";

const Top = () => {
    let city=JSON.parse(localStorage.getItem("city"));
  return (
    <div style={{marginTop:"25px",marginBottom:"25px"}}>
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
              value={city}
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
            <Input placeholder="Check-in" h="50px" id="stay-card-input" type="date" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              // color="gray.300"
              fontSize="1.4em"
              children={<TodayIcon color="black.300" fontSize="1.4em" />}
            />
            <Input placeholder="Check-out" h="50px" id="stay-card-input" type="date" />
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
            mt='-15px'
            _hover={{bg:'blue.600'}}
          >
            Search
          </Button>
        </WrapItem>
        </Flex>
        
        
          
      </Stack>

    </div>
        
  )
}

export default Top