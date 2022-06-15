import React from 'react'
import { Link } from "react-scroll";
import styles from "./styles.module.css";
import {  Button } from "@chakra-ui/react";
const Navbar = () => {
  console.log(Link);
  return (
    <div>
       <div className={styles.small_navbar}>
          <ul>
            <li>
              <Link
                to="overview"
                smooth={true}
                activeClass={styles.active}
                spy={true}
              >
                overview
              </Link>
            </li>
            <li>
              <Link
                to="rooms"
                smooth={true}
                activeClass={styles.active}
                spy={true}
              >
                rooms
              </Link>{" "}
            </li>
            <li>
              <Link
                to="location"
                smooth={true}
                activeClass={styles.active}
                spy={true}
              >
                location
              </Link>
            </li>
            <li>
              <Link
                to="amenitie"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
              >
                amenitie
              </Link>
            </li>
            <li>
              <Link
                to="policies"
                smooth={true}
                activeClass={styles.active}
                spy={true}
              >
                policies
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                smooth={true}
                activeClass={styles.active}
                spy={true}
              >
                reviews
              </Link>{" "}
            </li>
          </ul>
          <Button _hover={{ bg: "blue.500" }}>Reserve a room</Button>
        </div>


    </div>
  )
}

export default Navbar