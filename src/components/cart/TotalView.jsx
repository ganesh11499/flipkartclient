import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'


//styles
const Heading = styled(Box) `
 padding: 15px 24px;
 background:#fff;
 border-bottom:1px solid #f0f0f0;
`

const Header = styled(Typography) `
 color:#878787;
`

const Component = styled(Box)`
 padding:15px 20px;
 background:#fff;
 & > p {
  margin-bottom:20px;
  font-size:14px;
 } & > h6 {
  margin-bottom:20px;
 }
`
const Price = styled(Box) `
 float:right;
`

const Discount = styled(Typography)`
 color: green;
 font-size:12px;
 font-weight:600;
`

const TotalView = ({cartItems}) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  },[cartItems])


  const totalAmount = () => {
    let price = 0; 
    let discount=0;

    cartItems.map(item => {
      price += item.price.mrp;
      discount+=(item.price.mrp - item.price.cost);
    })
    setPrice(price);
    setDiscount(discount);
  }


  return (
   <Box>
    <Heading>
       <Header>Product Details</Header>
    </Heading>
     <Component>
      <Typography>Price({cartItems?.length}item)
       <Price component='span'>₹{price}</Price>
      </Typography>
      <Typography>Discount
       <Price component='span'>-₹{discount}</Price>
      </Typography>
      <Typography>Delivary Charges
       <Price component='span'>₹40</Price>
      </Typography>
      <Typography variant='h6'>Total Amount
       <Price component='span'>₹{price-discount+40}</Price>
      </Typography>
      <Discount>You will Save ₹{discount - 40} on this order</Discount>
     </Component>
   </Box>
  )
}

export default TotalView