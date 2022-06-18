import React from "react";
import { Box, Text, Progress, Button } from "@chakra-ui/react";
import styles from "./styles.module.css";

const Reviews = () => {
  return (
    <div id="reviews" className={styles.main_container_reviews}>
      <Box  bg="#fff"  borderRadius="8px">
        <div className={styles.reviews_flex}>
          <div  style={{marginTop:"-1em"}}>
            <div className={styles.reviews_flex_rate_text}>
              <Text fontSize="6xl">4.4</Text>
              <div className={styles.reviews_flex_rate_text_word}>
                <b>Excellent</b>
                <p style={{ color: "blue" }}>164 reviews</p>
                <span style={{ color: "blue" }}>
                  Verified reviews{" "}
                  <i
                    className="fa fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>

            <div className={styles.progress_bar}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>5 - Excellent</p> <p>107</p>
              </div>
              <Progress
                colorScheme="gray"
                borderRadius="5px"
                size="sm"
                value={80}
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p>4 - Good</p> <p>87</p>
              </div>
              <Progress
                colorScheme="gray"
                size="sm"
                borderRadius="5px"
                value={50}
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p>3 - Okay</p> <p>47</p>
              </div>

              <Progress
                colorScheme="gray"
                size="sm"
                borderRadius="5px"
                value={30}
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p>2 - Poor</p> <p>20</p>
              </div>

              <Progress
                colorScheme="gray"
                size="sm"
                borderRadius="5px"
                value={20}
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p>1 - Terrible</p> <p>8</p>
              </div>

              <Progress
                colorScheme="gray"
                size="sm"
                borderRadius="5px"
                value={10}
              />
            </div>
          </div>
          <div>
            <div className={styles.comment_first}>
              <Text fontSize="2xl" fontWeight="600">
                1/5 Terrible
              </Text>
              <b>Sarbjit Singh</b>
              <p>Travelled with family</p>
              <span>7 May 2022</span> <br />
              <span style={{ lineHeight: "3" }}>
                <i className="fa-solid fa-face-smile" /> Liked: Cleanliness,
                property conditions {"&"} facilities
              </span>
              <br />
              <br />
              <div>
                <p>
                  Main entrance is very poor hotel have two buildings go and
                  comes back to second building need to walk by the pool not
                  look nice areas around the hotel not interested main reception
                  area is very small to have a breakfast peopel nned to wait in
                  the queue as resturant areas is very small i don't think is
                  hotel is 5 stars
                </p>
              </div>
            </div>
            <hr />
            {/* face second */}

            <div className={styles.comment_first}>
              <Text fontSize="2xl" fontWeight="600">
                5/5 Excellent
              </Text>
              <b>M.Chaitanya</b>
              <span>2 Mar 2022</span> <br />
              <p>Stayed 9 nights in Feb 2022 </p>
              {/* <span style={{ lineHeight: "3" }}>
                <i className="fa-solid fa-face-smile" /> Liked: Cleanliness,
                property conditions {"&"} facilities
              </span> */}
              <br />
              <br />
              <div></div>
            </div>
            <hr />
            {/* face third */}
            <div className={styles.comment_first}>
              <Text fontSize="2xl" fontWeight="600">
                5/5 Excellent
              </Text>
              <b>Akshat</b>
              <p>Travelled with family</p>
              <span>11 Feb 2022</span> <br />
              <span style={{ lineHeight: "3" }}>
                <i className="fa-solid fa-face-smile" /> Liked: Cleanliness,
                property conditions {"&"} facilities
              </span>
              <br />
              <br />
              <div></div>
            </div>
            <hr />
            <div className={styles.seeallreview}>
              <Button
                background="transparent"
                border="1px solid grey"
                color="blue"
              >
                See all reviews
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Reviews;
