import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TimeDropDown from "./TimeDropDown";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const CheckBoxInputs = () => {
  const [isActive2, setIsActive2] = useState(false);
  const [selected, setSelected] = useState("00:00");

  const handleActiveClick2 = () => {
    setIsActive2(!isActive2);
  };

  return (
    <div>
      <Flex
        gap="10px"
        align="center"
        w="51%"
        ml='20px'
        justifyContent="flex-start"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.4em"
            children={<TodayIcon />}
          />
          <Input
            placeholder="Departing"
            id="stay-card-input"
            h="50px"
            type="date"
            w="18em"
          />
        </InputGroup>

        <Box
          border="1px solid #343b53"
          w="43em"
          h="49px"
          borderRadius="9px"
          float="left"
          
          onClick={handleActiveClick2}
        >
          <Flex>
            <Stack fontSize="26px" ml="6px" mt="10px">
              <AccessTimeOutlinedIcon fontSize="30px" />
            </Stack>

            <Text mr="135px" fontSize="13px" textAlign='left'>
              Flight arrival time
            </Text>
          </Flex>
          <Text
            mt="-15px"
            textAlign="left"
            ml="47px"
            fontSize="17px"
            fontWeight="400"
          >
            {selected}
          </Text>

          {isActive2 ? (
            <Box
              w="260px"
              h="350px"
              mt="15px"
              overflow="scroll"
              zIndex="8"
              bgColor="white"
              border="1px solid grey"
              textAlign="left"
              pl="30px"
              borderRadius="10px"
            >
              <TimeDropDown
                selected={selected}
                setSelected={setSelected}
                zIndex="8"
              />
            </Box>
          ) : null}
        </Box>
      </Flex>
    </div>
  );
};

export default CheckBoxInputs;
