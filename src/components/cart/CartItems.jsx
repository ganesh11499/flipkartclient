import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { addEllips } from '../utils/Common-Utilits'
import GroupButtons from './GroupButtons'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartActions'



//styles
const Component = styled(Box)`
 border-top: 1px solid #f0f0f0;
 display:flex;
 background:#fff;
`
const LeftComponent = styled(Box) `
margin: 20px;
display:flex;
flex-direction:column
`

const SmallText = styled(Box) `
 font-size: 14px;
 color:#878787;
 margin-top:10px;
`

const RemoveButton = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;
`

const CartItems = ({item}) => {
  const dispacth = useDispatch()

  const removeItemFromCart = (id) => {
    dispacth(removeFromCart(id));
  }




    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <Component>
        <LeftComponent>
           <img src={item.url} alt='image' style={{height:110, width:110}} />
           <GroupButtons/>
        </LeftComponent>
        <Box style={{margin:20}}> 
           <Typography>{addEllips (item.title.longTitle)}</Typography>
           <SmallText>
            Seller:RetailNet
            <Box component='span'><img src={fassured} style={{width:50, marginLeft:10}}/></Box>
           </SmallText>
           <Typography style={{margin:'20px 0'}}>
            <Typography component='span' style={{fontWeight: 600, fontSize:18}}>₹{item.price.cost}</Typography>&nbsp;&nbsp;&nbsp;
            <Typography component='span' style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Typography>&nbsp;&nbsp;&nbsp;
            <Typography component='span' style={{color:'green'}}>{item.price.discount}</Typography>
           </Typography>
           <RemoveButton onClick={() => removeItemFromCart(item.id)}>Remove</RemoveButton>
        </Box>
    </Component>
  )
}

export default CartItems