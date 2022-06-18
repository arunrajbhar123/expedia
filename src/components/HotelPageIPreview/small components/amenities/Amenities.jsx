import React from "react";
import styles from "./styles.module.css";
import { Box, Text } from "@chakra-ui/react";
import  {Slider}  from "../Slider/Slider";
const Amenities = () => {
  return (
    <div id="amenitie">
      <Box marginTop="25px" bg="#fff" borderRadius="8px">
        <div className={styles.main_flexing}>
          <div className={styles.main_flexing_width}>
            <Text fontSize="2xl" fontWeight="600" style={{marginTop:"-21em"}}>
              Property amenities
            </Text>
          </div>
          <div className={styles.main_flexing_first}>
            <div>
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Internet
                  </Text>
                  <p>
                    Available in all rooms: Free WiFi Available in some public
                    areas: Free WiFi
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Parking and public transport
                  </Text>
                  <p>
                    Free self-parking on site Wheelchair-accessible parking
                    available
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Food and drink
                  </Text>
                  <p style={{ whiteSpace: "pre-line" }}>
                    Buffet breakfast available for a fee daily 7 AM{"–"}10:30
                    AM: INR 750 per person 5 restaurants and 2 coffee shops 3
                    bars/lounges and 1 poolside bar 24-hour room service
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Restaurants on site
                  </Text>
                  <p>
                    Longitude 73 Latest Recipe Jazz {"&"} Grills Library Lounge
                    Plunge Ba
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Things to do
                  </Text>
                  <p>
                    Air hockey Arcade/games room Billiards/pool table Children's
                    pool Fitness centre Outdoor pool Steam room Table tennis
                    Yoga classes
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Family friendly
                  </Text>
                  <p>
                    Arcade/games room Children's pool DVD player Free children's
                    club Free cots/infant beds Laundry facilities Outdoor pool
                    Rollaway/extra beds (surcharge) Snack bar/deli Supervised
                    childcare (surcharge)
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Conveniences
                  </Text>
                  <p>
                    Banquet hall Lift Free newspapers in reception Front-desk
                    safe Library
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.main_flexing_second}>
            <div>
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-bell-concierge" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Guest servies
                  </Text>
                  <p>
                    24-hour front desk Concierge services Daily housekeeping
                    Dry-cleaning service Laundry facilities Luggage storage
                    Multilingual staff Porter Tour/ticket assistance Turndown
                    service Wedding services
                  </p>
                </div>
              </div>
              {/* second fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-bell-concierge" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Business services
                  </Text>
                  <p>
                    Business centre Conference centre (10000 square feet of
                    space) Meeting rooms
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-bell-concierge" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Outdoors
                  </Text>
                  <p>Pool sunloungers Pool umbrellas Terrace</p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-bell-concierge" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Accessibility
                  </Text>
                  <p>
                    If you have any requests for specific accessibility needs,
                    please contact the property using the information on the
                    reservation confirmation received after booking. Accessible
                    bathroom (select rooms) Grab bar near toilet In-room
                    accessibility Lever door handles Low-height electrical
                    outlets in bathroom Roll-in shower (select rooms) Visual
                    fire alarm Wheelchair-accessible business centre
                    Wheelchair-accessible fitness centre Wheelchair-accessible
                    lounge Wheelchair-accessible parking Wheelchair-accessible
                    path of travel Wheelchair-accessible pool
                    Wheelchair-accessible registration desk
                    Wheelchair-accessible restaurant
                  </p>
                </div>
              </div>

              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-bell-concierge" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    More
                  </Text>
                  <p>Books Games Smoke-free property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* face */}

        <div className={styles.main_flexing}>
          <div className={styles.main_flexing_width}>
            <Text fontSize="2xl" fontWeight="600" style={{marginTop:"-9em"}}>
              Room amenities
            </Text>
          </div>
          <div className={styles.main_flexing_first}>
            <div>
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Bedroom
                  </Text>
                  <p>
                    Air conditioning Bed sheets Blackout drapes/curtains Free
                    cots/infant beds Pillow menu Pillow-top mattress Premium
                    bedding Rollaway/extra beds (surcharge)
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Bathroom
                  </Text>
                  <p>
                    Dressing gowns Bidet Designer toiletries Hairdryer Private
                    bathroom Shower Towels
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-wifi" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Entertainment
                  </Text>
                  <p style={{ whiteSpace: "pre-line" }}>
                    42-inch LED TV DVD player iPod dock Premium channels
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.main_flexing_second}>
            <div>
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-bell-concierge" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Food and drink
                  </Text>
                  <p>
                    Coffee/tea maker Electric kettle Free bottled water Minibar
                  </p>
                </div>
              </div>
              {/* second fase */}
              <div className={styles.main_flexing_first_inner}>
                <i className="fa-solid fa-bell-concierge" />
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    More
                  </Text>
                  <p>
                    Connecting rooms available Desk Free newspapers Individually
                    decorated Individually furnished Iron/ironing board (on
                    request) Laptop-friendly workspace Mobile key entry Phone
                    Safe Slippers Turndown service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

    <Slider/>
    </div>
  );
};

export default Amenities;
