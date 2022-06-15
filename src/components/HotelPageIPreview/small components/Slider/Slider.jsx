import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export const Slider = () => {
  
  return (
    <div>
      <Carousel>
                <div>
                <img src="https://images.trvl-media.com/hotels/1000000/490000/483100/483011/acbb6394.jpg?impolicy=resizecrop&rw=1200&ra=fit"/>
                   
                </div>
                <div>
                <img src="https://images.trvl-media.com/hotels/1000000/490000/483100/483011/acbb6394.jpg?impolicy=resizecrop&rw=1200&ra=fit"/>
                  
                </div>
                <div>
                <img src="https://images.trvl-media.com/hotels/1000000/490000/483100/483011/acbb6394.jpg?impolicy=resizecrop&rw=1200&ra=fit"/>
                   
                </div>
            </Carousel>

    </div>
  )
}
