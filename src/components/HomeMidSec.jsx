// import { Box } from "@chakra-ui/react";
import React from "react";
import BookingCardSection from "./HomePage/BookingCardSection";
import styles from "../styles/HomeMidSec.css";
import { Box, Button, Flex, Input, InputGroup, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Text, WrapItem } from "@chakra-ui/react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const HomeMidSec = () => {
  return (
    <>
      <BookingCardSection />
      <div className="home-sec-image1">
        <div className="home-sec-innerText-heading-div">
          <p className="home-sec-innerText-heading">
            Save instantly with Expedia Rewards
          </p>
        </div>
        <div className="home-sec-innerText-des-div">
          <p className="home-sec-innerText-des">
            You can enjoy access to perks like Member Prices, saving you 10% or
            more on select hotels. Terms may apply.
          </p>
        </div>
        <div>
          <WrapItem float="left" ml="48px" mt="18px">
            <Button
              // colorScheme="messenger"
              bg="#3662D8"
              color="white"
              fontSize="16px"
              fontWeight="500"
              className="stay-search-button"
              h="48px"
              p="4px 16px"
              _hover={{ bg: "blue.500" }}
            >
              See Member Prices
            </Button>
          </WrapItem>
        </div>
      </div>
      <div>
        <div className="home-sec-image2">
          <div className="home-sec-img2-innerText-div">
            <p className="home-sec-img2-innerText1">Plan ahead and save</p>
            <p className="home-sec-img2-innerText2">
              Book 60 days in advance for 20% off select stays.
            </p>
          </div>
        </div>
      </div>
      <Stack border="1px solid black" w='79%' h='293px' m='auto' borderRadius='10px' mb='100px'>
        <Flex>
          <div  border='1px solid orange' className='home-sec-flex-image-div'></div>
          <Box w='650px' h='290px' border='1px solid orange'>
            <Text fontSize='32px' color='#141D38' textAlign='left' m='20px 0px 0px 20px' fontWeight='600'>Our app takes you further</Text>
            <Box w='530px' h='50px' ml='20px' >
                <Text fontSize='14px' color='#141D38' textAlign='left' fontWeight='400'>When you book on the app you can save up to 20% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Text>
            </Box>
            <Box w='530px' h='50px' m='25px 0px 0px 20px' >
                <Text fontSize='20px' color='#141D38' textAlign='left' fontWeight='600'>Text yourself a download link for easy access</Text>
            </Box>
            <Box>
                <Popover placement='top-start'>
                    <PopoverTrigger >
                        <Box float='left' ml='20px' w='165px' h='48px' border='1px solid #141D38' textAlign='left' pl='10px' boxSizing="borderBox" borderRadius='10px' p='0px 12px 0px 12px'><span>Country Code</span><br/>Click me <span className='down-arrow-icon'><ExpandMoreOutlinedIcon/></span></Box>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                        {/* <PopoverArrow />
                        <PopoverCloseButton /> */}
                        <PopoverBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
            <Box>
                <Flex gap='20px'>
                    <InputGroup w="40em" ml='20px'>
                
                        <Input
                        type="tel"
                        placeholder="Phone number"
                        w='11em'
                        h="48px"
                        id="stay-card-input"
                        />
                    </InputGroup>
                </Flex>
            </Box>
          </Box>
          <Box w='200px' h='290px' border='1px solid orange'>hi</Box>
        </Flex>
      </Stack>
    </>
  );
};

export default HomeMidSec;
