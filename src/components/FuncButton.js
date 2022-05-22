import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const FuncButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default FuncButton;


const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
`;

