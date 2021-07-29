import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

const Card = styled.div`
  width: 1440px;
  height: 241px;
  background-color: yellow;
`;

function CardThree() {
  return (
    <Card>
      <ButtonOne />
    </Card>
  );
}

export default CardThree;
