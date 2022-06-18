import { Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import TodayIcon from "@mui/icons-material/Today";

const CheckBoxDisplay = () => {
  return (
    <div style={{marginLeft: ' 0px'}}>
        <Stack  >
            <Flex gap='20px' ml='20px'>
            <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input placeholder="Check-in" id="stay-card-input" h="45px" type='date'w='20em'/>
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.4em"
              children={<TodayIcon />}
            />
            <Input placeholder="Check-out" id="stay-card-input" h="45px" type='date' w='20em'/>
          </InputGroup>
            </Flex>
        </Stack>
    </div>
  )
}

export default CheckBoxDisplay