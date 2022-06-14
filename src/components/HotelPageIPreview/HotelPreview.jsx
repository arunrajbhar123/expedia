import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { WarningTwoIcon, ArrowBackIcon } from "@chakra-ui/icons";
import TopImage from "./small components/TopImage/TopImage";
import Overview from "./small components/OverviewPage/Overview";
import axios from "axios";
import {Link} from "react-router-dom";
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
      <Box w="80%" margin="auto" p="1.5" bg="#fff">
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
            <li><Link to="">overview</Link></li>
            <li><Link to="">rooms</Link>   </li>
            <li><Link to="">location</Link></li>
            <li><Link to="">amenitie</Link></li>
            <li><Link to="">policies</Link></li>
            <li><Link to="">reviews</Link> </li>
          </ul>
          <button>Reserve a room</button>
        </div>
{/* overView page */}
<Overview/>
      </Box>
    </div>
  );
};

export default HotelPreview;
