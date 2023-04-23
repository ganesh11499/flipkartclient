import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payusingPaytm } from '../../service/api';
import { post } from '../utils/paytm';

//styles
const LeftSide = styled(Box)`
min-width:40%;
padding:40px 0 0 80px;
`
const Image = styled('img')({
  padding:'15px',
  width: '95%'
})

const StyledButton = styled(Button) `
width:48%;
height:50px;
border-radious: 2px;
`


const ActionItem = ({product}) => {
let navigate = useNavigate()
const dispatch = useDispatch()
const [quatity, setQuantity] = useState(1) 
const {id} = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quatity))
    navigate('/cart')

  }

  const buyNow = async() => {
    const res =await payusingPaytm({amount:500, email:'ganesh@gmail.com'});

    let information =  {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: res
    }
    post(information)

  }


  return (
   <LeftSide>
    <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0'}}>
       <Image src={product.detailUrl}/>
    </Box>
    <StyledButton variant='contained' onClick={addItemToCart} style={{marginRight:10, background: '#ff9f00'}}><ShoppingCartIcon/>Add To Cart</StyledButton>
    <StyledButton variant='contained' style={{background: '#fb541b'}}><BoltIcon onClick={() => buyNow()}/>Buy Now</StyledButton>
   </LeftSide>
  )
}

export default ActionItem