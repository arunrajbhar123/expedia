import React from "react";
import styles from "./styles.module.css";
import { Text, Box } from "@chakra-ui/react";
export const Slider = () => {
  const obj = [{ id: "1" }, { id: "1" }, { id: "1" }, { id: "1" }];

  return (
    <Box marginTop="25px" marginBottom="25px" borderRadius="8px">
      <Text
        fontSize="3xl"
        paddingBottom="12px"
        textAlign="start"
        fontWeight="600"
      >
        Similar properties
      </Text>

      <div className={styles.main_main_main} id={styles.djjs}>
        {obj &&
          obj.map((el, id) => (
            <div className={styles.main_container} key={id}>
              <img
                src="//images.trvl-media.com/hotels/1000000/490000/483100/483011/acbb6394.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                alt="hotel"
              />
              <div className={styles.text_padding_words}>
                <h1>ibis Amsterdam Centre</h1>
                <p style={{ paddingBottom: "12px" }}>Amsterdam</p>
                <div>
                  <div className={styles.icon}>
                    {" "}
                    <i className="fa-solid fa-check"></i> <p>Free WiFi</p>
                  </div>
                  <div className={styles.icon}>
                    {" "}
                    <i className="fa-solid fa-check"></i> <p>Pet-friendly</p>
                  </div>
                  <div className={styles.icon}>
                    {" "}
                    <i className="fa-solid fa-check"></i> <p>Air conditioned</p>
                  </div>
                </div>
                <div className={styles.flex}>
                  <Text fontSize="2xl" fontWeight="600">
                    4.0/5
                  </Text>
                  <p className={styles.flex_second}>Very good (1003 reviews)</p>
                </div>
                <p>from</p>
                <Text fontSize="3xl" fontWeight="600">
                  Rs 13,839
                </Text>
                <span>per night</span>
              </div>
            </div>
          ))}
      </div>
    </Box>
  );
};
