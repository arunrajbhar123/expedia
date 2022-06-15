import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Box, Text, Button } from "@chakra-ui/react";
// import { axios } from "axios";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const Rooms = () => {
  const [room, setRoom] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
      });
  }, []);
  // {room && room.map((el)=>{
  // el.images.map((el)=>{
  //   console.log(el);
  // })
  // })}
  return (
    <div id="rooms">
      <Box w="75%" margin="auto" paddingTop="12px">
        <Text fontSize="3xl" fontWeight="500" textAlign="start">
          Choose your room
        </Text>
        <div className={styles.date_content}>
          <div>
            <input type="date" />
          </div>
          <div>
            <input type="date" />
          </div>
          <div className={styles.date_content_width}>
            <input type="date" />
          </div>
          <Button
            bg="blue"
            color="#fff"
            p={" 28px 72px 28px 72px"}
            _hover={{ bg: "blue.500" }}
          >
            Check availability
          </Button>
        </div>
      </Box>
      <Box w="75%" margin="auto" p="1.5">
        <div className={styles.room_box_size}>
          {room &&
            room.map((el, id) => (
              <div key={id}>
                <div>
                  <img src={el.images} alt="hotel" />
                  {/* {el.images.map((el,id) => (
                    <div key={id}>
                      <img src={el} alt="" />
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
                    ></i>
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
                        className={styles.extras_box_details_ruppes_separate}
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

                      <p>+ Rs{el.rupees}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.price_btn_total_amount}>
                  <Text fontSize="3xl" fontWeight="700">
                    Rs{el.price}
                  </Text>
                  <div className={styles.price_btn_total_amount_flex}>
                    <div>
                      <p>Rs 13,805 total</p>
                      <div className={styles.price_btn_total_amount_details}>
                        {/*  */}

                        <Popover>
                          <PopoverTrigger>
                            {/* <Button>Trigger</Button> */}
                            <p>Price details</p>
                            {/* <ChevronRightIcon w={5} h={5} /> */}
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Price details!</PopoverHeader>
                            <PopoverBody>
                              Are you sure you want to have that milkshake?
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>

                        {/*  */}
                      </div>
                    </div>
                    <div>
                      <p
                        style={{
                          textAlign: "end",
                          paddingBottom: "10px",
                          color: "#840000",
                        }}
                      >
                        We have 5 left
                      </p>
                      <Button
                        bg="blue"
                        color="#fff"
                        p={" 22px 30px 22px 30px"}
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
