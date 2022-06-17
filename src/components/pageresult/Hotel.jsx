import React from 'react'
import "./hotel.css";

const Hotel = ({hotel}) => {
    // console.log(hotel)
  return (
    <div className='main'>
        <div className="left_img"><img className='img_left' src={hotel.img2}/></div>
        <div className='right_box'>
            <div className='heading1'><h2>{hotel.heading1}</h2></div>
            <div className='heading2'><h5>{hotel.heading2}</h5></div>
            <div className='bottombox'>
                <div className='bottom_left'>
                    <div className='text1'>{hotel.text1}</div>
                    <div>{hotel.text2}</div>
                    <br/>
                    <div style={{color:"green"}}>{hotel.text3}</div>
                    <div style={{color:"green"}}>{hotel.text4}</div>
                    <br/>
                    <div >
                        <span style={{fontWeight:"bolder"}}>{hotel.rating}{" "}</span>
                        <span>{hotel.review} </span>
                        <span>{hotel.no_of_reviews}</span>
                    </div>
                </div>
                <div className='bottom_right'>
                    <div className='heading3'>{hotel.heading3}</div>
                    <div className='price1'>{hotel.price1}</div>
                    <div className='price2'>{`Rs${hotel.price2} total`}</div>
                </div>
            </div>
        </div>
    

    </div>
  )
}

export default Hotel