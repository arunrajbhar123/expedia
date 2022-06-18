import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Box, Text, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
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

  const navigate=useNavigate();
  const handlePayment=()=>{
    navigate('/payment')
  }
  const data = [
    {
      id: 1,
      city: "Delhi",
      heading1: "Le Meridien New Delhi",
      headig2: "New Delhi",
      img1: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/0be7b7bd.jpg?impolicy=resizecrop&rw=455&ra=fit",
      img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/540000/531700/531648/db6e3fdf_b.jpg",
      img3: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/8d2945d0.jpg?impolicy=resizecrop&rw=455&ra=fit",
      img4: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/55467e67.jpg?impolicy=resizecrop&rw=455&ra=fit",
      text1: "The Capital’s Only Modern Palace Hotel",
      text2:
        "In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates.",
      text3: "Fully refundable",
      text4: "Reserve now, pay later",
      rating: "4.3/5",
      review: "Excellent",
      no_of_reviews: "(523 reviews)",
      heading3: "We have 5 left at",
      price1: "Rs8,650",
      price2: "10207",
    },
  ];
  const [orOgAmount, setorOgAmount] = useState(0);
  const [orOgAmount1, setorOgAmount1] = useState(0);
  useEffect(() => {
    data.map((el) => {
      for (let i = 0; i < el.price1.length; i++) {
        if (el.price1[i] === "Rs") {
        } else {
          setorOgAmount(el.price1);
          setorOgAmount1(el.price2);
        }
      }
    });
  }, []);

  const [room, setRoom] = useState("");
  const [priceRoom, setPriceRoom] = useState(0);

  useEffect(() => {
    fetch("https://expedia-server-for.herokuapp.com/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
      });
  }, []);
const [status, setStatus] = useState(true);


  return (
    <div id="rooms" >
      <Box marginTop="15px">
        <Text fontSize="3xl" fontWeight="500">
          Choose your room
        </Text>
        <div className={styles.date_content} style={{marginBottom:"25px"}}>
       
          
            <input type="text" placeholder="Check in"/>
            <input type="text" placeholder="Check out"/>
            <input type="text" placeholder="Travels Select" />
        
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
                    <p>More details</p>
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
                        onClick={() =>
                          setPriceRoom(Number(priceRoom + el.rupees))
                        }
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
                    {/* Rs{ogPrise ? ogPrise : el.price}
                     */}
                    {status ? orOgAmount :120 }
            
                  </Text>
                 
                  <div className={styles.price_btn_total_amount_flex}>
                    <div>
                      <p>Rs{orOgAmount1} total</p>
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
                        We have {Math.ceil(Math.random(3) * 10)} left
                      </p>
                      <Button
                        bg="blue"
                        color="#fff"
                        p={" 22px 40px 22px 30px"}
                        _hover={{ bg: "blue.500" }}
                        fontWeight="500"
                        fontSize="22px"
                        onClick={handlePayment}
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
