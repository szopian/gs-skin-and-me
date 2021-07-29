import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

const Card = styled.div`
  width: 860px;
  height: 355.59px;
  background-color: blue;
`;

function CardTwo() {
  return (
    <Card>
      <ButtonOne />
    </Card>
  );
}

export default CardTwo;
