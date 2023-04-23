import React from 'react'
import Carousel from "react-multi-carousel";
import {styled} from '@mui/material'

import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../contants/data';

//styles
//imgae styles
const Image = styled('img') ({
 width:'100%',
 height:180
})



const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  return (
    <Carousel 
    responsive={responsive}
    swipeable={false}
    draggable={false}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    keyBoardControl={true}
    >
        {
            bannerData.map(data => (
                <Image src={data.url} alt='banner img'/>
            ))
        }
      
    </Carousel>
  )
}

export default Banner