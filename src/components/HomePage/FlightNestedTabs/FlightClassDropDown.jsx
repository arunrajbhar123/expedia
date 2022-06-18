import React from 'react'
import {Box, Button, Popover, PopoverBody, PopoverContent, PopoverTrigger} from '@chakra-ui/react'
import { useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function FlightClassDropDown() {

    const [buttonName, setButtonName] = useState('Economy')
    const handleClick = (e) => {
        setButtonName(e.target.innerText);
    }

    const initialFocusRef = React.useRef()
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
        
      >
        <PopoverTrigger bg='white' mt='-10px' >
          <Button bg='transparent' border='none' fontSize='14px' fontWeight='400' color='#3662D8' >{buttonName}<span><ExpandMoreOutlinedIcon/></span></Button>
        </PopoverTrigger>
        <PopoverContent color='#141D38' bg='white' w='190px'h='200px' p='12px 0px' boxSizing='border-box'>
          <PopoverBody textAlign='left' >
            <Box p='9px 15px' name='Economy'  onClick={handleClick}>Economy</Box>
            <Box p='9px 15px' value='Premium'  onClick={handleClick}>Premium Economy</Box>
            <Box p='9px 15px' value='Business'  onClick={handleClick}>Business Class</Box>
            <Box p='9px 15px' value='FirstClass'  onClick={handleClick}>First Class</Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }
export default FlightClassDropDown