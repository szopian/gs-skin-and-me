import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import Data from "../data.json";

const Card = styled.div`
  width: 100%;
  height: 241px;
  background-color: #f0f6fb;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 92px;
  width: 120px;
  background-color: yellow;
`;

const ImgText = styled.h1`
  position: cover;
  font-size: 45px;
`;

function CardThree() {
  return (
    <Card>
      <ImgContainer>
        <ImgText>Skin + Me</ImgText>
      </ImgContainer>
      <ButtonLink
        Links={Data.components[2].link}
        bText={Data.components[2].buttonText}
      />
    </Card>
  );
}

export default CardThree;
