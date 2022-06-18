import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { ExternalLinkIcon, CheckIcon } from "@chakra-ui/icons";
import styles from "./styles.module.css";
const city=JSON.parse(localStorage.getItem("city")) || "varanasi";

const demos = {
  soundcloud: `<div className="mapouter"><div className="gmap_canvas">
    <iframe width="600px" height="330px" id="gmap_canvas" src="https://maps.google.com/maps?q=${city}=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
const Location = () => {
  return (
    <div id="location">
      <Box marginTop="25px" bg="#fff" borderRadius="8px">
        <div className={styles.main_container}>
          <div className={styles.main_container_box_first}>
            <Text fontSize="3xl" fontWeight="600" marginTop="-10em">
              About this area
            </Text>
            <h1>Calangute</h1>
            <p>
              Le Méridien Goa, Calangute is located in Gauravaddo, a
              neighbourhood in Calangute, and is in the entertainment district
              and near the beach. Fort Aguada and Church of Our Lady of
              Immaculate Conception are notable landmarks, and the area's
              natural beauty can be seen at Candolim Beach and Calangute Beach.
              Travelling with kids? Consider Splashdown Waterpark and Goa
              Science Centre. With scuba diving, waterskiing and parasailing
              nearby, you'll find plenty of adventures in the water.
            </p>
            <span>
              Visite our Calangute travel guite <ExternalLinkIcon />
            </span>
          </div>
          <div className={styles.main_container_box_second}>
            <div>
              <Box>
                <Iframe iframe={demos["soundcloud"]} allow="autoplay" />
              </Box>
            </div>
            <div className={styles.map_places}>
              <i className="fa-solid fa-location-dot" />

              <div style={{marginLeft:"2em"}}>
                <Text fontSize="2xl" fontWeight="600">
                  What's nearby
                </Text>
                <p>St. Anthony's Chpel - 6 min walk</p>
                <p>Candolim Beach - 7 min walk</p>
                <p>St. Anthony's Chpel - 6 min walk</p>
                <p>St. Anthony's Chpel - 6 min walk</p>
                <p>Poriat Football Ground - 16 min walk</p>
              </div>
            </div>
            <div className={styles.map_places}>
              <i className="fa-solid fa-car"></i>

              <div  style={{marginLeft:"2em"}}>
                <Text fontSize="2xl" fontWeight="600">
                  Getting around
                </Text>
                <div className={styles.map_places}>
                  <i className="fa-solid fa-train" />
                  <p>St. Anthony's Chpel - 6 min walk</p>
                </div>
                <div className={styles.map_places}>
                  <i className="fa-solid fa-plane"></i>
                  <p>St. Anthony's Chpel - 6 min walk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box marginTop="25px" paddingBottom="25px" bg="#fff" borderRadius="8px">
        <div className={styles.property_about}>
          <div className={styles.property_about_width_first} >
            <Text fontSize="2xl" fontWeight="600" style={{marginTop:"-4em"}}>
              About this property
            </Text>
          </div>
          <div>
            <div className={styles.property_about_width_second}>
              <Text fontSize="2xl" paddingBottom="12px">
                Le Meridien Goa, Calangute
              </Text>
              <p>
                This smoke-free hotel features 5 restaurants, an outdoor pool
                and 3 bars/lounges. Free WiFi in public areas and free self
                parking are also provided. Additionally, a health club, a
                poolside bar and 2 coffee shops/cafes are on-site.
              </p>
            </div>
            <div className={styles.property_about_width_second}>
              <Text fontSize="2xl" paddingBottom="12px" >
                Languages spoken
              </Text>
              <p>English, Hindi</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.property_about}>
          <div className={styles.property_about_width_first}>
            <Text fontSize="2xl" fontWeight="600" w="24rem" style={{marginTop:"-10.5em"}}>
              Cleaning and safety practices
            </Text>
          </div>
          <div>
            <div className={styles.property_about_width_second_last}>
              <i className="fa fa-star"></i>
              <div>
                <Text fontSize="2xl" paddingBottom="12px">
                  Enhanced cleanliness measures
                </Text>
                <p>
                  Disinfectant is used to clean the property Property is
                  disinfected with electrostatic spray High-touch surfaces are
                  cleaned and disinfected Sheets and towels are washed at 60°C
                  or hotter Guest accommodations are sealed after cleaning
                  Follows the standard cleaning and disinfection practices of
                  Commitment to Clean (Marriott) Follows the industry cleaning
                  and disinfection practices of Ecolab (third-party expert -
                  Global)
                </p>
              </div>
            </div>
            <div className={styles.property_about_width_second_last}>
              <i className="fas fa-male" style={{ fontSize: "19px" }} />
              <div>
                <Text fontSize="2xl" paddingBottom="12px">
                  Check-in
                </Text>
                <p>
                  Contactless social distancing and check-out Cashless
                  transactions are available for all charges at the property
                  Protective shields in place at main contact areas Guest
                  accommodations are accessible via mobile device Guest rooms
                  kept vacant for 24 hours between stays Social distancing
                  measures in place Contactless room service is available.
                </p>
              </div>
            </div>
            <div className={styles.property_about_width_second_last}>
              <CheckIcon marginTop="8px" paddingRight="5px" w={5} h={5} />
              <div>
                <Text fontSize="2xl" paddingBottom="12px">
                  Safety measures
                </Text>
                <p>
                  Personal protective equipment worn by staff Temperature checks
                  given to staff Temperature checks available for guests Masks
                  and gloves available Masks are required at the property Hand
                  sanitiser provided Enhanced food service safety measures are
                  in place Individually wrapped food options available for
                  breakfast, lunch, dinner and through room service Reservations
                  are required for the use of certain on-site facilities
                </p>
              </div>
            </div>
          </div>
        </div>
        <p style={{textAlign:"center"}}>This information is provided by our partners.</p>
      </Box>
    </div>
  );
};

export default Location;
