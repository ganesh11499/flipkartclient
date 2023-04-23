import React from "react";

import { navData } from "../../contants/data";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

//styles
//Box container 
const ContainerBox = styled(Box) `
display:flex;
margin:55px 130px 0 130px;
justify-content:space-between;
background:#fff;
`

//img styles
const Compnent = styled(Box) `
padding: 12px 8px;
text-align:center
`

//text styles
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`

const Navbar = () => {
  return (
   <Box style={{background:'#fff'}}>
    <ContainerBox>
      {navData.map((data) => (
        <Compnent>
          <img src={data.url} alt="img"  style={{width:65}}/>
          <Text>{data.text}</Text>
        </Compnent>
      ))}
    </ContainerBox>
    </Box>  
  );
};

export default Navbar;
