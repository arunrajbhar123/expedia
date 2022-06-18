import { Flex } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/Mapping.css'

const Mapping = ({el}) => {
  return (
    
    <div className='container-grid-item'>
        <div className='image-div'>
            <img src={el.img2} alt="image" className='map-image' />
        </div>
        <div>
            <p className='map-title-tag'>{el.heading1}</p>
            <p className='map-city-name'>{el.city}</p>
        </div>
        <hr className='horzontal-line'/>
        <div>
            <Flex justify='space-between'>
                <p className='map-rating-tag'>{el.rating}</p>
                <button className='book-now-btn'>Book Now</button>
                <p className='map-price-tag'>{el.price1}</p>
                
            </Flex>
            <p className='map-reviews-num'>{el.no_of_reviews}</p>
        </div>
    </div>
    
  )
}

export default Mapping