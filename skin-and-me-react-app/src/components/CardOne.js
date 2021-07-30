import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

const Card = styled.div`
  width: 879px;
  height: 300.2px;
  background-color: red;
`;

function CardOne() {
  return (
    <Card>
      <ButtonOne />
    </Card>
  );
}

export default CardOne;
