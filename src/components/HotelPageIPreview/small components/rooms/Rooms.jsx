import React from 'react'
import styles from "./styles.module.css";
import { Box, Text, Button } from "@chakra-ui/react";

const Rooms = () => {
  return (
    <div>
      <Box w="75%" margin="auto" paddingTop="12px">
        <Text fontSize="3xl" fontWeight="500" textAlign="start">
          Choose your room
        </Text>
        <div className={styles.date_content} >
          <div>
            <input type="date" />
          </div>
          <div>
            <input type="date" />
          </div>
          <div className={styles.date_content_width}>
            <input type="date" />
          </div>
          <Button bg="blue" color="#fff" p={" 28px 72px 28px 72px"} _hover={{ bg: "blue.500" }}>
            Check availability
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Rooms