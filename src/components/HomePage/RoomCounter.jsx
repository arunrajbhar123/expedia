import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import React from 'react'

function RoomCounter() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW='320px' >
      <Button {...dec} borderRadius='50%' background='transparent' border='1px solid  #343B53' w='35px' h='35px'>-</Button>
      <Input {...input} w='40px' border='none' bg='transparent'/>
      <Button {...inc} borderRadius='50%' background='transparent' border='1px solid #343B53' w='35px' h='35px'>+</Button>
    </HStack>
  )
}


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

export default RoomCounter