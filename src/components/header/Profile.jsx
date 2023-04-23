import styled from "@emotion/styled";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


//styles
const Component = styled(Menu)`
margin-top:5px;
`
//logout styles
const Logout = styled(Typography)`
font-size:14px;
margin-left:10px;
`

const Profile = ({ account, setAccount }) => {
   const [open, setOpen] = useState(false);

   const handelClick = (event) => {
    setOpen(event.currentTarget)
   }

   const handleClose = () => { 
    setOpen(false);
   }

   const logoutUser = () => {
    setAccount('');
   }
 
  return (
    <>
      <Box onClick={handelClick}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
         
      >
     
        <MenuItem onClick={() => {handleClose(); logoutUser();}}>  <PowerSettingsNewIcon color="primary" fontSize="small"/><Logout>Logout</Logout></MenuItem>
      
      </Component>
    </>
  );
};

export default Profile;
