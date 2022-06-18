import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Hotel from './Hotel';
// import { uuid } from 'uuidv4';


const Hotels = ({data}) => {
  

  // let cityArr=data.pune;
  // console.log(data);
  return (
    
    
    <div>

    {data.map((hotel)=>(
      
      <Hotel  key={hotel.id} hotel={hotel} />
    ))}
    

    </div>

  )
}

export default Hotels