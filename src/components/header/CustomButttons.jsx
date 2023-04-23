import { Badge, Box, Button, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState, useContext } from 'react'
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";


//components
import LoginDailogue from '../login/LoginDailogue';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';



//styles
const Wrapper = styled(Box) `
display:flex;
color:white;
margin: 0 3% 0 auto;
& >button, & > p, & > div {
    margin-right:40px;
    font-size:16px;
    align-items:center;
}
`

//cart style
const Container = styled(Box) `
 display:flex;
`
//Login button style

const LoginButton = styled(Button) `
 color:#2874f0;
 background-color:#fff;
 text-transform:none;
 padding:5px 40px;
 border-radious:2px;
 font-weight:600;
 box-shadow:none;
 height:32px;
`




const  CustomButttons = () => {
  let navigate = useNavigate()

  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;

  const cartClick = () => {
    navigate('/cart')
  }

  const [open, setOpen] = useState(false);

  const {account, setAccount} = useContext(DataContext);


  const openDailogue = () => {
    setOpen(true)
  }


  return (
    <Wrapper>
         
      {
   
         account ? <Profile account={account} setAccount={setAccount}/>:
        <LoginButton variant='contained' onClick={() => openDailogue()}>Login</LoginButton>
        
      }
       
        <Typography style={{marginTop:3, width:135}}>Become a seller</Typography>
        <Typography  style={{marginTop:3}}>More</Typography>
        <Container>
        <Badge badgeContent={cartItems?.length} color="secondary">
           <ShoppingCartIcon />
        </Badge>
            <Typography onClick={cartClick}  style={{cursor:'pointer', marginLeft:10}} >
                cart
            </Typography>
        </Container>
        <LoginDailogue open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButttons