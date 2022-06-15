import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { Text, StyledLogo } from "./styles";

function Logo() {
  return (
    <StyledLogo href="/">
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
