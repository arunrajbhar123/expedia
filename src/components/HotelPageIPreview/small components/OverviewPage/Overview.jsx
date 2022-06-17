import React from "react";
import styles from "./styles.module.css";
import { Text, Box } from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";

const demos = {
  soundcloud: `<div className="mapouter"><div className="gmap_canvas">
    <iframe width="450px" height="250px" id="gmap_canvas" src="https://maps.google.com/maps?q=mumbai=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    <style>.mapouter{position:relative;text-align:right;}</style><style>
    .gmap_canvas {overflow:hidden;background:none!important;}</style></div></div>`,
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Overview = () => {
  const popularIcon = [
    { title: "Free Wifi", name: "fa-solid fa-wifi" },
    { title: "Restaurant", name: "fa fa-cutlery" },
    { title: "Pet-friendly", name: "fa-solid fa-paw" },
    { title: "Breakfast available", name: "fa-solid fa-mug-saucer" },
    { title: "Air Conditioning", name: "fa-solid fa-snowflake" },
    { title: "Business servies", name: "fa-solid fa-briefcase" },
  ];

  const exploreArea = [
    { icon: "fa-solid fa-location-dot", name: "Artis", time: "11 min walk" },
    { icon: "fa-solid fa-location-dot", name: "Artis", time: "11 min walk" },
    { icon: "fa-solid fa-location-dot", name: "Artis", time: "11 min walk" },
    { icon: "fa-solid fa-location-dot", name: "Artis", time: "11 min walk" },
  ];
  return (
    <div id="overview" style={{backgroundColor:"#fff"}}>
      <div className={styles.name_Hotel_map}>
        <div>
          <p>UNESCO Sustainble Travel Pledge</p>
          <Text fontSize="4xl" fontWeight="500">
            ibis Amstrerdam Center Stopera
          </Text>
          <StarIcon w={4} h={4} />
          <StarIcon w={4} h={4} />
          <StarIcon w={4} h={4} />
          <Text
            fontSize="2xl"
            paddingTop="19px"
            paddingBottom="15px"
            fontWeight="500"
          >
            4.2/5 Very good
          </Text>
          <p style={{ paddingBottom: "19px" }}>
            Guests rated this property 4.2/5 for cleanlines.
          </p>
          <div className={styles.see_review}>
            <p>See All 959 reviews</p> <ChevronRightIcon w={5} h={5} />
          </div>
        </div>
        <div className={styles.Hotel_location}>
          <Box borderRadius="8px" overflow="hidden">
            <Iframe iframe={demos["soundcloud"]} allow="autoplay" />
          </Box>
        </div>
      </div>

      {/* next part */}
      <div className={styles.category_flex}>
        <div className={styles.hotel_category}>
          {/* first category */}
          <div>
            {" "}
            <div className={styles.popular_items}>
              <Text fontSize="2xl" fontWeight="500">
                Popular amenities
              </Text>
            </div>
            <div className={styles.popular_items}>
              {popularIcon.map((el, id) => (
                <div key={id}>
                  <i className={el.name}></i>
                  {el.title}
                </div>
              ))}
              <div className={styles.see_review}>
                <p>See All</p> <ChevronRightIcon w={5} h={5} />
              </div>
            </div>
          </div>
          {/* second category */}
          <div>
            <div className={styles.popular_items}>
              <Text fontSize="2xl" fontWeight="500" width="500px">
                Cleaning and safety practices
              </Text>
            </div>
            <div className={styles.popular_items}>
              {popularIcon.map((el, id) => (
                <div key={id}>
                  <i className={el.name}></i>
                  {el.title}
                </div>
              ))}
              <div className={styles.see_review}>
                <p>See All</p> <ChevronRightIcon w={5} h={5} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.popular_items} style={{ width: "470px" }}>
              <Text fontSize="2xl" fontWeight="500">
                Explore the area
              </Text>
            </div>
            <div className={styles.explore_items}>
              {exploreArea.map((el, id) => (
                <div key={id}>
                  <div>
                    {" "}
                    <i className={el.icon} />
                    {el.name}
                  </div>
                  <p>{el.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
