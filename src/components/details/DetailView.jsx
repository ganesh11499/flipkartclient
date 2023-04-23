import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
import {Box, Grid, Typography} from '@mui/material'
import ActionItem from './ActionItem'
import styled from '@emotion/styled'
import ProductDetails from './ProductDetails'





//styles
const Component = styled(Box) `
background:#f2f2f2;
`

const Container = styled(Grid) `
background:#fff;
display:flex;
`
const RightContainer = styled(Grid) `
margin-top:50px;
padding-left:30px;
`




const DetailView = () => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
   const dispatch = useDispatch()
 
   const {loading, product} = useSelector(state => state.getProductDetails)
   const {id} = useParams();


    useEffect(() => {
     
      dispatch(getProductDetails(id))
    },[dispatch,id ]);

 
  return (
    <Component>
      {
      
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12} >
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color:'#878787', fontSize:14}}>
              8 Ratings & 1 review
              <Box component='span'>
                <img src={fassured} alt='image' style={{width:77, marginLeft:20}}/>
              </Box>
            </Typography>
            <Typography component='span' style={{fontSize:24}}>₹{product.price.cost}</Typography>&nbsp;&nbsp;&nbsp;
            <Typography component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Typography>&nbsp;&nbsp;&nbsp;
            <Typography component='span' style={{color:'green'}}>{product.price.discount}</Typography>
            <ProductDetails product={product}/>
          </RightContainer>  
        </Container>
      }
    </Component>
  )
}

export default DetailView