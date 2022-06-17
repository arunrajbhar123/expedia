import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Box, Text, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";



const Rooms = () => {
  const [room, setRoom] = useState("");
  const [priceRoom, setPriceRoom] = useState(0);
 const [ogPrise, setOgPrise] = useState(0);
  useEffect(() => {
    fetch("https://expedia-server-for.herokuapp.com/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
      });
  }, []);

  return (
    <div id="rooms">
      <Box marginTop="25px">
        <Text fontSize="3xl" fontWeight="500" textAlign="start">
          Choose your room
        </Text>
        <div className={styles.date_content}>
          <div style={{ backgroundColor: "#fff",marginTop:"15px" }}>
            <input type="date" />
          </div>
          <div style={{ backgroundColor: "#fff",marginTop:"15px" }}>
            <input type="date" />
          </div>
          <div
            className={styles.date_content_width}
            style={{ backgroundColor: "#fff",marginTop:"18px" }}
          >
            <input type="date" />
          </div>
          <Button
            bg="blue"
            color="#fff"
            p={" 26px 72px 26px 72px"}
            _hover={{ bg: "blue.500" }}
          >
            Check availability
          </Button>
        </div>
      </Box>
      <Box>
        <div className={styles.room_box_size}>
          {room &&
            room.map((el, id) => (
              <div key={id}>
                <div>
                  <img src={el.images} alt="hotel" />
                  {/* {el.images.map((el, id) => (
                   
                       <div key={id}>
                        <img src={el.images} alt="hotel" />
                      </div>
))} */}

                </div>
                <Text
                  textAlign="start"
                  padding="12px"
                  fontWeight="700"
                  style={{ fontSize: "19px" }}
                >
                  {el.hotelTerm}
                </Text>
                <div className={styles.room_icon_benifit}>
                  {el.benefit.map((el, id) => (
                    <div key={id}>
                      <i className={el.icon}></i>
                      {el.name}
                    </div>
                  ))}
                  <p style={{ color: "green", fontWeight: "400" }}>
                    Fully refundable{" "}
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    />
                  </p>
                  <p>Before Sun, 26 jun</p>
                  <div className={styles.flexing_Explore_more}>
                    <h1>More details</h1>
                    <ChevronRightIcon w={5} h={5} />
                  </div>
                </div>
                <hr />
                <div className={styles.extras_box_details}>
                  <Text textAlign="start" fontSize="2xl" fontWeight="600">
                    Extras
                  </Text>
                  {el.extras.map((el, id) => (
                    <div key={id} className={styles.extras_box_details_ruppes}>
                      <div
                        className={styles.extras_box_details_ruppes_separate} onClick={()=>setPriceRoom(Number(priceRoom+el.rupees))}
                      >
                        {" "}
                        <input type="radio" name="extras" />
                        <Text w="200px">
                          {el.name}{" "}
                          {el.icon ? (
                            <i
                              className={el.icon}
                              style={{ color: "#666262" }}
                            ></i>
                          ) : null}
                        </Text>
                      </div>

                      <p style={{ paddingRight: "12px" }}>+Rs{el.rupees}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.price_btn_total_amount}>
                  <Text fontSize="2xl" fontWeight="700">
                    Rs{ogPrise ? ogPrise: el.price}
                  </Text>
                  <div className={styles.price_btn_total_amount_flex}>
                    <div>
                      <p>Rs {el.price} total</p>
                      <div className={styles.price_btn_total_amount_details}>
                        {/*  */}

                        <Popover>
                          <PopoverTrigger>
                            {/* <Button>Trigger</Button> */}
                            <p>Price details</p>
                            {/* <ChevronRightIcon w={5} h={5} /> */}
                          </PopoverTrigger>
                          <PopoverContent color="#111" border="none">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Price details!</PopoverHeader>
                            <PopoverBody>
                              <div style={{ display: "flex", color: "#111" }}>
                                <div>
                                  {" "}
                                  <p>1 room x 1 night</p>
                                  <p>Taxes and fees</p>
                                  <p>Local tax</p>
                                  <b style={{ lineHeight: "3" }}>Total</b>
                                </div>
                                <div>
                                  <p>Rs11,253</p>
                                  <p>Rs1,013</p>
                                  <p>Rs681</p>
                                  <b style={{ lineHeight: "3" }}>Rs12,947</b>
                                </div>
                              </div>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>

                      </div>
                    </div>
                    <div>
                      <p
                        style={{
                          textAlign: "end",
                          paddingBottom: "2px",
                          color: "#840000",
                          padding: "22px 30px 22px 30px",
                        }}
                      >
                        We have {Math.ceil(Math.random(3)*10)} left
                      </p>
                      <Button
                        bg="blue"
                        color="#fff"
                        p={" 22px 40px 22px 30px"}
                        _hover={{ bg: "blue.500" }}
                        fontWeight="500"
                        fontSize="22px"
                      >
                        Reserve
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Box>
    </div>
  );
};

export default Rooms;
