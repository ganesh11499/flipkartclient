import React, { useState } from 'react';
import {AppBar, Box, Drawer, IconButton, List, Toolbar, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';


//components
import Search from './Search';
import CustomButttons from './CustomButttons';
import { Link } from 'react-router-dom';





const CustomizedSlider = styled(AppBar)`
color: #2874f0;
height:55px;
`

//flipkart logo style;
const CustomizedBox = styled(Link)`
margin-left:12%;
color:white;
text-decoration:none;
`

const CustomizedTypography = styled(Typography)`
font-size:10px;
font-style:italic;
`

const PlusImage = styled('img')({
  width: 10,
  height:10,
  marginLeft:4

});

//custonbutton style 
const Component= styled(Box) `
margin-left:5%;
` 

const MenuButton = styled(IconButton)(({theme}) => ({
  display:"none",
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));


const   Menu = styled(Box) `
background:black;

`



const Header = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  const list = () => (
    <Menu onClick={handleClose} >
        <List>
            <listItem button>
                <CustomButttons  />
            </listItem>
        </List>
    </Menu>
);


  //image url
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <CustomizedSlider>
      <Toolbar style={{minHeight:55}}>
      
      <MenuButton style={{color:'white'}} onClick={handleOpen}>
       <MenuIcon/>
      </MenuButton>
      <Drawer open={open} onClose={handleClose}> 
         {list()}
      </Drawer>
        <CustomizedBox to={'/'}>
          <img src={logoURL} alt='logo'  style={{width:75}}/>
          <Box style={{display:'flex'}}>
           <CustomizedTypography>
            Explore &nbsp;
            <Box component = 'span' style={{color:'#FFE500'}}>Plus</Box>
            </CustomizedTypography> 
           <PlusImage src={subURL}  alt='sub-logo'/>
          </Box>
        </CustomizedBox>
        <Search/>
        <Component>
          <CustomButttons/>
        </Component>
      </Toolbar>
    </CustomizedSlider>
  )
}

export default Header