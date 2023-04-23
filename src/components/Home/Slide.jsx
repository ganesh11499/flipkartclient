import styled from '@emotion/styled';
import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom';


//styles
const Component = styled(Box)`
margin-top:10px;
background-color:#FFFFFF;
` 

//deal of the day stles
const Deal = styled(Box) `
padding:15px 20px;
display:flex;
`
const Timer = styled(Box)`
display:flex;
margin-left:10px;
color:#7f7f7f;
align-items:center;
`
const DealText = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:35px;
line-height:32px;
`

const ViewButton = styled(Button)`
margin-left:auto;
font-size:13px;
font-weight:600;
`

const Image = styled('img')({
    width:'auto',
    height:150,
})


const Text = styled(Typography)`
font-size:14px;
margin-type:5px;
`










const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide = ({products, title, timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
   
    const renderer = ({hours, minutes, seconds}) => {
      return <Box variant='span'>{hours}:{minutes}:{seconds} Left</Box>
    }

  return (
   <Component>
      <Deal>
         <DealText>{title}</DealText>
         {
        timer ? 
        <Timer>
            <img src={timerURL} alt='timer url' style={{width:24}}/>
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
         </Timer>
         :null
         }
         
         <ViewButton variant='contained' color='primary'>View All</ViewButton>
      </Deal>
      <Divider/>
      <Carousel 
    responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    centerMode={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    >
      {
        products.map(products => (
        <Link to={`products/${products.id}`} style={{textDecoration:'none'}}>  
         <Box textAlign='center' style={{padding:'25px 15px'}}>   
           <Image src={products.url} alt='product image'/>
           <Text style={{fontWeight: 600, color:"#212121"}}>{products.title.shortTitle}</Text>
           <Text style={{color:'green'}}>{products.discount}</Text>
           <Text style={{color:'#212121', opacity:'.6'}}>{products.tagline}</Text>
        </Box>
        </Link>
        ))
      }
    </Carousel>
   </Component>
  )
}

export default Slide