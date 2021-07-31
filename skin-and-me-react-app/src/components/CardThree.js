import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import Data from "../data.json";

const Card = styled.div`
  width: 100%;
  height: 241px;
  background-color: #f0f6fb;
`;

function CardThree() {
  return (
    <Card>
      <ButtonLink
        Links={Data.components[2].link}
        bText={Data.components[2].buttonText}
      />
    </Card>
  );
}

export default CardThree;
