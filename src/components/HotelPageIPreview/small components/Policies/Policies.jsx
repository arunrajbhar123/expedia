import React from "react";
import { Text, Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
const Policies = () => {
  return (
    <div id="policies">
      <Box marginTop="25px" bg="#fff"  borderRadius="8px">
        <div className={styles.main_flexing}>
          <div className={styles.main_flexing_width}>
            <Text fontSize="2xl" fontWeight="600" style={{marginTop:"-16em"}}>
              Policies
            </Text>
          </div>
          <div className={styles.main_flexing_first}>
            <div>
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Check-in
                  </Text>
                  <p>
                    Check-in from 3:00 PM - midnight Early check-in subject to
                    availability Early check-in is available for a fee (amount
                    varies) Express check-in Minimum check-in age - 18
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Special check-in instructions
                  </Text>
                  <p>
                    Front desk staff will greet guests on arrival For more
                    details, please contact the property using the information
                    on the booking confirmation
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner} style={{marginLeft:"-10em"}}>
                <div >
                  <Text fontSize="2xl" fontWeight="600">
                    Access methods
                  </Text>
                  <p style={{ whiteSpace: "pre-line" }}>Staffed front desk</p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}  style={{marginLeft:"-13em"}}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Pets
                  </Text>
                  <p>Pets not allowed</p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Children and extra beds
                  </Text>
                  <p>
                    Children are welcome Kids stay free! Up to 2 children stay
                    free when using existing bedding Rollaway/extra beds are
                    available for INR 2500.0 per night. Free cots (infant beds)
                  </p>
                </div>
              </div>
              {/* payment */}
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Payment types at the property
                  </Text>
                  <p
                    style={{ display: "flex", paddingTop: "12px", gap: "5px" }}
                  >
                    <img
                      src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
                      alt=""
                    />
                    <img
                      src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg"
                      alt=""
                    />
                    <img
                      src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
                      alt=""
                    />
                    <img
                      src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
                      alt=""
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.main_flexing_second} style={{marginTop:"-2px"}}>
            <div>
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Check-out
                  </Text>
                  <p>
                    Check-out before noon Late check-out subject to availability
                    A late check-out fee will be charged Express checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      {/* another fase */}

      <Box marginTop="25px" bg="#fff"  borderRadius="8px">
        <div className={styles.main_flexing}>
          <div className={styles.main_flexing_width}>
            <Text fontSize="2xl" fontWeight="600"  style={{marginTop:"-17em"}}>
              Important information
            </Text>
          </div>
          <div className={styles.main_flexing_first} style={{ width: "50rem" }}>
            <div>
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Fees
                  </Text>
                  <p>
                    You'll be asked to pay the following charges at the
                    property:
                    <ul>
                      <li>
                        Christmas Eve (24 December) Gala Dinner per adult: INR
                        1768
                      </li>
                      <li>
                        Christmas Eve (24 December) Gala Dinner per child: INR
                        884 (from 6 to 11 years old)
                      </li>
                    </ul>
                    We have included all charges provided to us by the property.
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    Optional extras
                  </Text>
                  <p>
                    The following fees and deposits are charged by the property
                    at the time of service, check-in or check-out.
                    <ul>
                      <li>
                        Fee for buffet breakfast: INR 750 per person
                        (approximately)
                      </li>
                      <li>
                        Early check-in is available for a fee (subject to
                        availability, amount varies)
                      </li>
                      <li>
                        Late check-out is available for a fee (subject to
                        availability, amount varies)
                      </li>
                      <li>Rollaway bed fee: INR 2500.0 per night</li>
                    </ul>
                    The above list may not be comprehensive. Fees and deposits
                    may not include tax and are subject to change.
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    You need to know
                  </Text>
                  <p style={{ whiteSpace: "pre-line" }}>
                    Extra-person charges may apply and vary depending on
                    property policy Government-issued photo identification and a
                    credit card, debit card or cash deposit may be required at
                    check-in for incidental charges Special requests are subject
                    to availability upon check-in and may incur additional
                    charges; special requests cannot be guaranteed The name on
                    the credit card used at check-in to pay for incidentals must
                    be the primary name on the guestroom reservation Guests must
                    contact this property in advance to reserve cots/infant beds
                    and rollaway/extra beds This property accepts credit cards;
                    cash is not accepted Safety features at this property
                    include a fire extinguisher, a smoke detector, a security
                    system and a first aid kit Please note that cultural norms
                    and guest policies may differ by country and by property;
                    the policies listed are provided by the property Additional
                    fees may apply to children for items such as extra bedding
                    and meals.
                  </p>
                </div>
              </div>
              {/* fase */}
              <div className={styles.main_flexing_first_inner}>
                <div>
                  <Text fontSize="2xl" fontWeight="600">
                    We should mention
                  </Text>
                  <p>
                    Pool access available from 7 AM to 8:30 PM <br />
                    The property has connecting/adjoining rooms, which are
                    subject to availability and can be requested by contacting
                    the property using the number on the booking confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      {/* another fase */}
      <Box marginTop="25px" bg="#fff"  borderRadius="8px">
        <div className={styles.frequently_questions}>
          <Text fontSize="2xl" w="500px" textAlign="start" fontWeight="600">Frequently ansked questions</Text>
          <div className={styles.frequently_questions_width}>
            <details>
              <summary>Does Le Méridien Goa, Calangute have a pool?</summary>
              Yes, this property has an outdoor pool and a children's pool. Pool
              access is from 7 AM to 8:30 PM.
            </details>
            <details>
              <summary>Is Le Méridien Goa, Calangute pet-friendly?</summary>
              No, pets are not allowed at this property.
            </details>
            <details>
              <summary>
                How much is parking at Le Méridien Goa, Calangute? How much is
                parking at Le Méridien Goa, Calangute?
              </summary>
              Self-parking is free at this property.
            </details>
            <details>
              <summary>
                What time is check-in at Le Méridien Goa, Calangute? What time
                is check-in at Le Méridien Goa, Calangute?
              </summary>
              Check-in is from 3:00 PM - midnight. A fee applies for early
              check-in (amount may vary, subject to availability).
            </details>
            <details>
              <summary>
                What time is check-out at Le Méridien Goa, Calangute?
              </summary>
              Checkout is at noon. Late checkout is available for a fee (amount
              may vary, subject to availability).
            </details>
            <details>
              <summary>
                Where is Le Méridien Goa, Calangute located? Where is Le
                Méridien Goa, Calangute located?
              </summary>
              This family-friendly Calangute hotel is located in the
              entertainment district, within a 10-minute walk of Candolim Beach
              and Calangute Beach. Baga Beach and Sinquerim Beach are also
              within 3 mi (5 km).
            </details>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Policies;
