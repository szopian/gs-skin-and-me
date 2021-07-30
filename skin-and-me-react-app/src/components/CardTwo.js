import React from "react";
import styled from "styled-components";
import Data from "../data.json";
import ButtonLink from "./ButtonLink";

const Card = styled.div`
  width: 860px;
  height: 355.59px;
  background-color: blue;
`;

function CardTwo() {
  return (
    <Card>
      <ButtonLink
        Links={Data.components[1].link}
        bText={Data.components[1].buttonText}
      />
    </Card>
  );
}

export default CardTwo;
