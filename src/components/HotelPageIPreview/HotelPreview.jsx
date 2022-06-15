import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { WarningTwoIcon, ArrowBackIcon } from "@chakra-ui/icons";
import TopImage from "./small components/TopImage/TopImage";
import Overview from "./small components/OverviewPage/Overview";
import Rooms from "./small components/rooms/Rooms";
import axios from "axios";
import { Link } from "react-router-dom";
import Location from "./small components/location/Location";
import Amenities from "./small components/amenities/Amenities";
import Policies from "./small components/Policies/Policies";
import Reviews from "./small components/Reviews/Reviews";
const HotelPreview = () => {
  const [imgaeTop, setImgaeTop] = useState([]);
  const [covidBanner, setCovidBanner] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/image").then((res) => {
      // setImgaeTop(res.data);
      let numberOfImg = 0;
      const ans = [];
      while (8 > numberOfImg) {
        ans.push(res.data[numberOfImg]);
        numberOfImg++;
      }
      setImgaeTop(ans);
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.ads_first}>
        <img
          src="https://tpc.googlesyndication.com/simgad/4652945743188291985?"
          alt="ads"
        />
      </div>
      <Box w="75%" margin="auto" p="1.5" bg="#fff">
        <Box
          style={covidBanner ? { display: "none" } : {}}
          w="100%"
          bg={"#343b53"}
          color="White"
          p="4"
          paddingLeft="32px"
          textAlign="start"
          className={styles.covid_banner_box}
          borderRadius="10"
        >
          <WarningTwoIcon w={7} h={7} />
          <div className={styles.covid_banner}>
            {" "}
            <Text>Check COVID-19 restrications.</Text>
            <div className={styles.covid_banner_btn}>
              <p>Find out more</p>
              <p onClick={() => setCovidBanner(!covidBanner)}>Dismiss</p>
            </div>
          </div>
        </Box>
        <div className={styles.back_to_all_product}>
          <ArrowBackIcon w={5} h={5} />
          <p>See all properties</p>
        </div>
        <TopImage imgaeTop={imgaeTop} />
        {/* overview navbar */}

        <div className={styles.small_navbar}>
          <ul>
            <li>
              <Link
                to="overview"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                overview
              </Link>
            </li>
            <li>
              <Link
                to="rooms"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                rooms
              </Link>{" "}
            </li>
            <li>
              <Link
                to="location"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                location
              </Link>
            </li>
            <li>
              <Link
                to="amenitie"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                amenitie
              </Link>
            </li>
            <li>
              <Link
                to="policies"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                policies
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                reviews
              </Link>{" "}
            </li>
          </ul>
          <Button  _hover={{ bg: "blue.500" }}>Reserve a room</Button>
        </div>
        <div className={styles.ads_first} style={{ bottom: "-62px" }}>
          <img
            src="https://tpc.googlesyndication.com/simgad/3300578970834289968?"
            alt=""
          />
        </div>
        {/* overView page */}
        <Overview />
      </Box>
      {/* Rooms */}
      <Rooms/>

      {/* Location */}
      <Location/>

      {/* Amenities */}
      <Amenities/>
      {/* Policies */}
      <Policies/>
      {/* Reviews */}
      <Reviews/>
    </div>
  );
};

export default HotelPreview;
