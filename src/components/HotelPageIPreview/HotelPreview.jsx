import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { WarningTwoIcon, ArrowBackIcon } from "@chakra-ui/icons";
import TopImage from "./small components/TopImage/TopImage";
import Overview from "./small components/OverviewPage/Overview";
import Rooms from "./small components/rooms/Rooms";
import axios from "axios";
import Location from "./small components/location/Location";
import Amenities from "./small components/amenities/Amenities";
import Policies from "./small components/Policies/Policies";
import Reviews from "./small components/Reviews/Reviews";
import Navbar from "./small components/Navbar/Navbar";
import { Ads, Ads2 } from "./small components/Advetisement/Ads";
import { useNavigate } from "react-router-dom";

const HotelPreview = () => {
  const [imgaeTop, setImgaeTop] = useState([]);
  const [covidBanner, setCovidBanner] = useState(false);

  useEffect(() => {
    axios.get("https://expedia-server-for.herokuapp.com/image").then((res) => {
      let numberOfImg = 0;
      const ans = [];
      while (8 > numberOfImg) {
        ans.push(res.data[numberOfImg]);
        numberOfImg++;
      }
      setImgaeTop(ans);
    });
  }, []);
  const navigate =useNavigate();
  const handleBack=()=>{
    navigate("/result")
  }

  return (
    <div id={styles.only_bg_color}>
      <div className={styles.main_container}>
        <Box w="75%" p="1.5" className={styles.mobile_container_width}>
          <Box
            style={covidBanner ? { display: "none" } : {}}
            w="100%"
            bg={"#343b53"}
            color="White"
            paddingTop="2px"
            paddingLeft="32px"
            mb="12px"
            height="90px"
            className={styles.covid_banner_box}
          >
            <WarningTwoIcon w={5} h={5} />
            <div className={styles.covid_banner}>
           
              <Text>Check COVID-19 restrications.</Text>
              <div className={styles.covid_banner_btn}>
                <p>Find out more</p>
                <p onClick={() => setCovidBanner(!covidBanner)}>Dismiss</p>
              </div>
            </div>
          </Box>

          <div className={styles.back_to_all_product} onClick={handleBack}>
            <ArrowBackIcon w={5} h={5} />
            <p>See all properties</p>
          </div>
          <TopImage imgaeTop={imgaeTop} />

          <div className={styles.navbar_sticky}>
            <Navbar />
          </div>

          <Overview />

          <Rooms />

          <Location />

          <Amenities />

          <Policies />

          <Reviews />
        </Box>
        {/* <div className={styles.mobile_View_ads}>
          <Ads />
          <div className={styles.ads_sticky}>
            <Ads2 />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HotelPreview;
