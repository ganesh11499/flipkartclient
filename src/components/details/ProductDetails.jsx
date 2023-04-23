import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from '@emotion/styled';


//styles
const SmallText = styled(Box)`
vertical-align:baseline;
& > p{
    font-size: 14px;
    margin-top:10px;
}
`

const StyledBadge = styled(LocalOfferIcon) `
 margin-top:10px;
 color: green;
 font-size:14px; 
`

const ColumText = styled(TableRow) `
font-size:14px;
vertical-align:baseline;
& > td {
  font-size:14px;
  margin-top:10px;
  border:none;
}
`



const ProductDetails = ({product }) => {
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime()+(5 * 24 *60 * 60 * 1000));

  return (
   <>
   <Typography>Availble Offers</Typography>
   <SmallText>
      <Typography><StyledBadge/>Get extra 20% off upto ₹50 on 1 item</Typography>
      <Typography><StyledBadge/>Get extra 13% off (price inclusive) of discount T&C</Typography>
      <Typography><StyledBadge/>10% Instant Discount up to INR 750 on ICICI Bank Credit Cards</Typography>
      <Typography><StyledBadge/>5% Instant Discount + up to 5% back with Amazon Pay ICICI Bank</Typography>
      <Typography><StyledBadge/>5% Flipkart Credit Card</Typography>
   </SmallText>
   <Table>
    <TableBody>
      <ColumText>
        <TableCell style={{color: '#878787'}}>Delivery</TableCell>
        <TableCell style={{fontWeight:600}}>Delivery BY{date.toDateString()} | ₹50</TableCell>  
      </ColumText>
      <ColumText>
        <TableCell style={{color: '#878787'}}>Warrenty</TableCell>
        <TableCell style={{}}>No Warrenty</TableCell>  
      </ColumText>
      <ColumText>
        <TableCell style={{color: '#878787'}}>Seller</TableCell>
        <TableCell>
          <Box component='span'  style={{color:'#2874f0'}}>
             Super ComNent
          </Box>
          <Typography>GST Invoice Available</Typography>
          <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
        </TableCell>  
      </ColumText>
      <ColumText>
        <TableCell colSpan={2}>
          <img src={adURL} alt='flipkartcoins' style={{width:390}} />
        </TableCell>
      </ColumText>
      <ColumText>
        <TableCell  style={{color: '#878787'}}>Description</TableCell>
        <TableCell>{product.description}</TableCell>
      </ColumText>
    </TableBody>
   </Table>
   </>
  )
}

export default ProductDetails