import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Text, Box } from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";

const city=JSON.parse(localStorage.getItem("city")) || "goa";

const demos = {
  soundcloud: `<div className="mapouter"><div className="gmap_canvas">
    <iframe width="450px" height="250px" id="gmap_canvas" src="https://maps.google.com/maps?q=${city}=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
  const data2 = [
    {
      id: 1,
      city: "mumbai",
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
      rating: "2/5",
      review: "Excellent",
      no_of_reviews: "(523 reviews)",
      heading3: "We have 5 left at",
      price1: "Rs8,650",
      price2: "10207",
    },
  ];
  const data=[]
  const datadsa=JSON.parse(localStorage.getItem("hoteldata")) || data2;
  
  data.push(datadsa);
 
  const convert = [];
    data.map((el) => {
      convert.push(el.rating);
    });
 
  
  const ratingNumber = convert.splice(".").join("")[0];
  const dsfj = [];

  for (let i = 0; i < ratingNumber; i++) {
    dsfj.push(<StarIcon w={4} h={4} />);
  }

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
    { icon: "fa-solid fa-location-dot", name: "Dam Square", time: "21 min walk" },
    { icon: "fa-solid fa-location-dot", name: "Anne Frank House", time: "5 min walk" },
    { icon: "fa-solid fa-location-dot", name: "Amsterdam (AMS-Schiphol)", time: "1 min walk" },
  ];
  return (
    <div id="overview" style={{ backgroundColor: "#fff" }}>
      <div className={styles.name_Hotel_map} style={{paddingRight:"1em"}}>
        {data.map((el, id) => (
          <div key={id}>
            <p>{el.text1}</p>
            <Text fontSize="4xl" fontWeight="500">
              {el.heading1}
            </Text>
            <div style={{ display: "flex" , marginRight:"22em"}}>
              {dsfj &&
                dsfj.map((el, id) => (
                  <div key={id}>
                    <StarIcon w={4} h={4} />
                  </div>
                ))}
            </div>

            <Text
              fontSize="2xl"
              paddingTop="19px"
              paddingBottom="15px"
              fontWeight="500"
            >
              {el.rating} {el.review}
            </Text>
            <p style={{ paddingBottom: "19px" }}>
              Guests rated this property {el.rating} for cleanlines.
            </p>
            <div className={styles.see_review}>
              <p>See All {el.no_of_reviews}</p> <ChevronRightIcon w={5} h={5} />
            </div>
          </div>
        ))}

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
        
            <div className={styles.popular_items} style={{marginTop:"-15px"}} >
              <Text fontSize="2xl" fontWeight="500">
                Popular amenities
              </Text>
            </div>
            <div className={styles.popular_items}>
              {popularIcon.map((el, id) => (
                <div key={id} style={{display:"flex",marginTop:"12px"}}>
                  <i className={el.name}></i>
                 <p style={{width:"150px"}}>{el.title}</p> 
                </div>
              ))}
              <div className={styles.see_review} style={{marginLeft:"12px",marginTop:"12px"}}>
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
            <div className={styles.popular_items} >
              {popularIcon.map((el, id) => (
                <div key={id} style={{display:"flex",marginTop:"12px"}}>
                  <i className={el.name}></i>
                  
                  <p style={{width:"150px"}}>{el.title}</p>
                </div>
              ))}
              <div className={styles.see_review} style={{marginLeft:"12px",marginTop:"12px"}}>
                <p>See All</p> <ChevronRightIcon w={5} h={5} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.popular_items} style={{ width: "450px",marginTop:"-12em" }}>
              <Text fontSize="2xl" fontWeight="500">
                Explore the area
              </Text>
            </div>
            <div className={styles.explore_items}>
              {exploreArea.map((el, id) => (
                <div key={id}>
                  <div  style={{display:"flex",marginTop:"12px"}}>
                    <i className={el.icon} />
                  <p style={{width:"150px"}}>{el.name}</p>
                    {/* {el.name} */}
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
