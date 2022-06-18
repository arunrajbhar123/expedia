import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Text, Box } from "@chakra-ui/react";
import axios from "axios";
export const Slider = () => {
  const [data, setData] = useState([]);
const city=JSON.parse(localStorage.getItem("city")) || "mumbai";
  useEffect(() => {
    axios.get(`https://expedia-server-for.herokuapp.com/${city}`).then((res) => {
      const take = [];
      for (let i = 0; i < 4; i++) {
        take.push(res.data[i]);
      }
      setData(take);
    });
  }, []);


  const handleReFetch=(el)=>{
    console.log("asdfgh");
localStorage.setItem("hoteldata",JSON.stringify(el))

//  localStorage.setItem("hoteldata",JSON.stringify(hotel));
  }
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

      <div className={styles.main_main_main} id={styles.djjs} >
        {data &&
          data.map((el, id) => (
            <div className={styles.main_container} key={id} onClick={()=>handleReFetch(el)}>
              <img src={el.img1} alt="hotel" />
              <div className={styles.text_padding_words}>
                <h1>{el.heading1}</h1>
                <p style={{ paddingBottom: "12px" }}>{el.city}</p>
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
                    {el.rating}
                  </Text>
                  <p className={styles.flex_second}>
                    {el.review} {el.no_of_reviews}
                  </p>
                </div>
                <p>from</p>
                <Text fontSize="3xl" fontWeight="600">
                  {el.price1}
                </Text>
                <span>per night</span>
              </div>
            </div>
          ))}
      </div>
    </Box>
  );
};
