// import React from 'react'
// import Left from './Left'
import Hotels from "./Hotels"
import "./searchPage.css"
import axios from "axios"
import React, { useEffect,useState } from 'react'
import Top from "./Top";
import { Box, Text } from "@chakra-ui/react";

const SearchPage = () => {
  const [data,setData]=useState([]);
  let city=JSON.parse(localStorage.getItem("city")) || "pune";
  useEffect(()=>{
    axios.get(`https://expedia-server-for.herokuapp.com/${city}`)
    .then((r)=>{
      // console.log(r.data)
      setData(r.data)
      
    })
  },[])
const handleSort=(e)=>{
  // let data=e.target.value;
  let selected=e.target.value;
  if (selected == 'high') {
    data.sort(function (a, b) {
        if (Number(a.price2) > Number(b.price2)) return 1;
        if (Number(a.price2) < Number(b.price2)) return -1;
        return 0;
    })
    console.log(data);
    setData([...data]);
}
if (selected == 'low') {
    data.sort(function (a, b) {
        if (Number(a.price2) > Number(b.price2)) return -1;
        if (Number(a.price2) < Number(b.price2)) return 1;
        return 0;
    })
    console.log(data);
    setData([...data])
}
 
}
  return (

    <>
      <Top/>
      {/* <Box
            style={covidBanner ? { display: "none" } : {}}
            w="100%"
            bg={"#343b53"}
            color="White"
            paddingTop="12px"
            paddingLeft="32px"
            className={styles.covid_banner_box}
          >
            <WarningTwoIcon w={5} h={5} />
            <div className={styles.covid_banner}>
           
              <Text>Check COVID-19 restrications.</Text>
              <div className={styles.covid_banner_btn}>
                <p>Find out more</p>
                <p onClick={() => setCovidBanner(!covidBanner)}>Dismiss</p>
              </div>
            </div>
          </Box> */}
      <div className='container'>
      <div className="left" style={{marginTop:"12px" ,marginLeft:"70px"}}>
        <div className="map" style={{marginLeft:"12px"}}>
          <a href="https://goo.gl/maps/rDQdrFCP9hbswadb9">
            <img className="imgMap" src="https://c1.10times.com/map/venue/4079.png" alt="" />
            <div className="view">View in map</div>
          </a>
        </div>
        <div className="searchProp">
          <div>Search by property name</div>
         
          <div className="inputDiv">
            <input type="text" placeholder="e.g. Best Western"/>
            <i className="inputSearch fas fa-search" ></i>
           
          </div>
        </div>
       
        <div className="fiterOption">
        <div className="heading">Filter by</div>
          <div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Popular filters</div>
          <div className="filOptions">
             <span><input type="checkbox" value="freeAirport"/> Dinner included</span>
             <span><input type="checkbox" value="allinclusive"/> Piazza Principe</span>
             <span><input type="checkbox" value="Powai"/> Villa</span>
             <span><input type="checkbox" value="freeWifi"/> Sea view</span>
             <span><input type="checkbox" value="lunch"/> Breakfast included</span>
          </div>
          <div className="subheading" > <i className="fas fa-chevron-up"></i> &nbsp; Price per night</div>
          <div className="filOptions">
             <span><input type="checkbox" value="2000"/> Less than Rs2,000</span>
             <span><input type="checkbox" value="4000"/> Rs2,000 to Rs4,000</span>
             <span><input type="checkbox" value="8000"/> Rs4,000 to Rs8,000</span>
             <span><input type="checkbox" value="11000"/> Rs8,000 to Rs11,000</span>
             <span><input type="checkbox" value="11000"/> Greater than Rs11,000</span>
          </div>
          <div className="subheading" > <i className="fas fa-chevron-up"></i> &nbsp; Guest rating</div>
          <div className="filOptions">
             <span><input type="radio"/> Any</span>
             <span><input type="radio" /> Wonderful 4.5+</span>
             <span><input type="radio" /> Very good 4+ </span>
             <span><input type="radio" /> Good 3.5+</span>
          </div>
          <div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Payment type</div>
          <div className="filOptions">
             <span><input type="checkbox" value="freeAirport"/> Villa</span>
             <span><input type="checkbox" value="allinclusive"/> Hotel resort</span>
             <span><input type="checkbox" value="Powai"/> Hotel boat</span>
            
          </div>
          <div className="more">See more</div>
          <div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Area</div>
<div className="filOptions">
    <span><input type="radio" /> Genoa</span>
    <span><input type="radio"/> Sant'llario</span>
    <span><input type="radio"/> Sturia</span>
   
</div>
<div className="more">See more</div>
<div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Popular locations</div>
<div className="filOptions">
    <span><input type="radio" /> Port of Genoa</span>
    <span><input type="radio"/> Aquarium of Genoa</span>
    <span><input type="radio"/> Old Port</span>
</div>
<div className="more">See more</div>
<div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Meal plans available</div>
<div className="filOptions">
    <span><input type="checkbox" /> Breakfast included</span>
    <span><input type="checkbox"/> Lunch included</span>
    <span><input type="checkbox"/> Dinner included</span>
</div>
<div className="more">See more</div>
<div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Amenities</div>
<div className="filOptions">
    <span><input type="checkbox" /> Sea view</span>
    <span><input type="checkbox"/> Gym</span>
    <span><input type="checkbox"/> Breakfast included</span>
</div>
<div className="more">See more</div>
<div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Accessibility</div>
<div className="filOptions">
    <span><input type="checkbox" /> Wheelchair-accessible parking</span>
    <span><input type="checkbox"/> Lift</span>
    <span><input type="checkbox"/> Accessible bathroom</span>
</div>
<div className="more">See more</div>
<div className="subheading"> <i className="fas fa-chevron-up"></i> &nbsp; Traveller experience</div>
<div className="filOptions">
    <span><input type="checkbox" /> LGBTQ welcoming<br/>
          <span>See properties that pledge to make<br/></span> 
          <span>all guests feel safe, welcome and <br/></span>
          <span>respected.</span></span>
    <span><input type="checkbox"/> Business-friendly<br/>
    <span>See properties with amenities to<br/></span> 
          <span>help you work comfortably, like WiFi <br/></span>
          <span>and breakfast.</span>
    </span>
    <span><input type="checkbox"/> Family-friendly<br/>
    <span>See properties that include family<br/></span> 
          <span>essentials like in-room conveniences <br/></span>
          <span>and activities for the kids.</span>
    
    </span>
</div>
        
        </div>

  </div>
  <div>
 
        <div className="sDiv">
          <div className="sort">
            See how we pick our recommended properties
            {/* <i className="fas fa-info-circle"></i> */}
          </div>
          <div className="select-wrap">
            <label>Sort by</label>
            <select name="Sort by" style={{width: "100%"}} onChange={handleSort} className="sortBy">
              <option value="recommended" >Recommended</option>
          
              <option value="high" >Low to High</option>
              <option value="low" >High to Low</option>
            </select>
          </div>
        </div>
  <Hotels data={data}/>
  </div>
  
  <div className="ad" style={{marginTop:"12px"}}>
        <img
          src="https://tpc.googlesyndication.com/simgad/11788750240072824287?"
          alt=""
        />
        <img
          src="https://tpc.googlesyndication.com/simgad/4652945743188291985?"
          alt=""
        />
      </div>

      </div>
      </>
    
  )
}

export default SearchPage