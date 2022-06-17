import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StayCheckBoxDrop = () => {
  return (
    <div>
        <Stack>
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
        </Stack>
    </div>
  )
}

export default StayCheckBoxDrop