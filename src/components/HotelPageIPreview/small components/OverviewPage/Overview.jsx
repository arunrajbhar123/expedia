import React from "react";
import styles from "./styles.module.css";
import { Text, Box } from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";
const Overview = () => {
  return (
    <div>
      <div className={styles.name_Hotel_map}>
        <div>
          <p>UNESCO Sustainble Travel Pledge</p>
          <Text fontSize="4xl" fontWeight="500">ibis Amstrerdam Center Stopera</Text>
          <StarIcon w={4} h={4} />
          <Text fontSize="2xl" paddingTop="19px" paddingBottom="15px"  fontWeight="500">4.2/5 Very good</Text>
          <p>Guests rated this property 4.2/5 for cleanlines.</p>
          <div className={styles.see_review}>
            <p>See All 959 reviews</p> <ChevronRightIcon w={5} h={5} />
          </div>
        </div>
        <div className={styles.Hotel_location}>
          <Box border={"12px solid red"}></Box>
        </div>
      </div>
    </div>
  );
};

export default Overview;
