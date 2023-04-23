import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";


//styles
const Component = styled(ButtonGroup)`
 margin-top:20px;
`

const StyledButton = styled(Button)`
 border-radius:50%;
` 

const GroupButtons = () => {
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <StyledButton>1</StyledButton>
      <StyledButton>+</StyledButton>
    </Component>
  );
};

export default GroupButtons;
