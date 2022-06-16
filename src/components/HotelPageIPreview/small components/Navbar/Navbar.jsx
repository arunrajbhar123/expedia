import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./styles.module.css";
import { Button,Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link to="overview"> overview</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="rooms"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
              <Link to="rooms">rooms</Link>
            </ScrollLink>{" "}
          </li>
          <li>
            <ScrollLink
              to="location"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
              <Link to="location">location</Link>
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
              <Link to="amenitie">amenitie</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="policies"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
              <Link to="policies">policies</Link>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="reviews"
              smooth={true}
              activeClass={styles.active}
              spy={true}
            >
              <Link to="reviews">reviews</Link>
            </ScrollLink>{" "}
          </li>
        </ul>
        <Button _hover={{ bg: "blue.500" }}>Reserve a room</Button>
      </div>
    </Box>
  );
};

export default Navbar;
