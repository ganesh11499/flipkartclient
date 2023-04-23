import { Box } from '@mui/material'
import React from 'react'
import Slide from './Slide'
import styled from '@emotion/styled'


//styles
const Component = styled(Box)`
display:flex;
`
const RightSide = styled(Box) `
width:83%;
`
const  LeftSide = styled(Box)`
background-color:#ffffff;
padding:5px;
margin-top:10px;
margin-left:10px;
width:17%;
text-align:center;
`


const MidSlide = ({products, timer, title}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Component>
        <RightSide>
            <Slide products={products} title={title} timer={timer}/>
        </RightSide>
        <LeftSide>
            <img src={adURL} alt='image' style={{width:197,height:341}}/>
        </LeftSide>
    </Component>
  )
}

export default MidSlide