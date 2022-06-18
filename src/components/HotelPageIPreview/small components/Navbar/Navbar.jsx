import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./styles.module.css";
import { Button,Box } from "@chakra-ui/react";

import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const handlePayment=()=>{
    navigate('/payment')
  }
  return (
    <Box>

      <div className={styles.small_navbar}>
        <ul>
          <li>
            <ScrollLink
              to="overview"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
               overview
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="rooms"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
            rooms
            </ScrollLink>{" "}
          </li>
          <li>
            <ScrollLink
              to="location"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
              location
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="amenitie"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
            >
             amenitie
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="policies"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
           policies
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="reviews"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
           reviews
            </ScrollLink>{" "}
          </li>
        </ul>
        <Button _hover={{ bg: "blue.500" }} onClick={handlePayment}>Reserve a room</Button>
      </div>
    </Box>
  );
};

export default Navbar;
