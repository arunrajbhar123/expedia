import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../../styles/RoomCounter.css";
import RoomCounter from "./RoomCounter";

function RoomCounterDropDown() {
  const initialFocusRef = React.useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
      border='1px solid orange'
    >
      <PopoverTrigger className="counter-button-wrap">
        <Button
          className="counter-button-drop"
          bg="none"
          color="#3662D8"
          fontSize="14px"
          fontWeight="400"
        >
          1 room, 2 travellers
          <span className="down-arrow-span">
            <KeyboardArrowDownIcon />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent color="#3662D8">
        <PopoverHeader
          pt={4}
          fontWeight="500"
          border="0"
          h="250px"
          w="200px"
          fontSize="20px"
          color="#141D38"
          textAlign="left"
          ml="7px"
          mt="8px"
        >
          Travellers
          <Text fontSize="15px" fontWeight="500" ml="7px" mt="8px">Room 1</Text>

          <PopoverBody display='flex' justifyContent='space-between'  >
            <Text fontSize="14px" fontWeight="400" ml="-5px" mt="8px" mr='98px' color='#343B53'>Adults</Text>
            <RoomCounter />
          </PopoverBody>
          <PopoverBody display='flex' justifyContent='space-between' >
            <Text fontSize="14px" fontWeight="400" ml="-5px" mt="8px" mr='88px' color='#343B53'>Children</Text>
            <RoomCounter />
          </PopoverBody>
          <PopoverBody display='flex' justifyContent='space-between' >
            <Text fontSize="14px" fontWeight="400" ml="-5px" mt="8px" mr='98px'  color='#343B53'>Infants</Text>
            <RoomCounter />
          </PopoverBody>

        </PopoverHeader>
        {/* <PopoverArrow /> */}
        {/* <PopoverCloseButton /> */}
        <PopoverBody mt='18px' mb='-10px'>
          <Text textAlign='right' fontSize='16px' fontWeight='500' mb='30px'>Add another room</Text>
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <ButtonGroup size="sm" m="auto">
            <Button colorScheme="blue" ref={initialFocusRef} p="25px 130px">
              Done
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default RoomCounterDropDown;

// function HookUsage() {
//   const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
//     useNumberInput({
//       step: 1,
//       defaultValue: 1,
//       min: 1,
//       max: 6,
//       precision: 0,
//     })

//   const inc = getIncrementButtonProps()
//   const dec = getDecrementButtonProps()
//   const input = getInputProps()

//   return (
//     <HStack maxW='320px'>
//       <Button {...inc} borderRadius='50%' background='transparent' border='1px solid grey'>+</Button>
//       <Input {...input} w='60px' border='none'/>
//       <Button {...dec} borderRadius='50%' background='transparent' border='1px solid grey'>-</Button>
//     </HStack>
//   )
// }

// function WalkthroughPopover() {
//   const initialFocusRef = React.useRef()
//   return (
//     <Popover
//       initialFocusRef={initialFocusRef}
//       placement='bottom'
//       closeOnBlur={false}
//     >
//       <PopoverTrigger>
//         <Button>Trigger</Button>
//       </PopoverTrigger>
//       <PopoverContent color='black' borderColor='blue.800'>
//         <PopoverHeader pt={4} fontWeight='bold' border='0'>
//           Manage Your Channels
//         </PopoverHeader>
//         <PopoverArrow />
//         <PopoverCloseButton />
//         <PopoverBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore.
//         </PopoverBody>
//         <PopoverFooter
//           border='0'
//           display='flex'
//           alignItems='center'
//           justifyContent='space-between'
//           pb={4}
//         >

//           <ButtonGroup size='sm' m='auto'>

//             <Button colorScheme='blue' ref={initialFocusRef} p='25px 130px'>
//               Done
//             </Button>
//           </ButtonGroup>
//         </PopoverFooter>
//       </PopoverContent>
//     </Popover>
//   )
// }
