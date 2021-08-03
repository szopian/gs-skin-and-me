import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import { rotate } from "../animations/animation";
import Data from "../data.json";
// import px2vw from "../utils/px2vw";
import { Card, Container } from "./Card";

import Image from "../images/products-image.png";

const Title = styled.h1`
  width: 384px;
  height: 88px;
  font-family: "raleway", sans-serif;
  font-size: 40px;
  line-height: 44px;
  /* Off Black */
  color: #0b0c0c;
`;

const Content = styled.p`
  width: 398px;
  height: 95px;
  font-style: normal;
  font-size: 16px;

  font-family: "proxima-nova", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: rgb(11, 12, 12);
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 38px;

  /* Off Black */
  color: #0b0c0c;
`;

const ImgContainer = styled.div`
  justify-content: center;
  align-items: center;
  grid-column: 2;

  width: 263.37px;
  height: 263.37px;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  /* animation: ${rotate} 6s linear infinite; */

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

function CardOne() {
  return (
    <Card>
      <Container>
        <Title>{Data.components[0].title}</Title>
        <Content>{Data.components[0].content}</Content>
        <ButtonLink
          Links={Data.components[0].link}
          bText={Data.components[0].buttonText}
        />
      </Container>
      <ImgContainer></ImgContainer>
    </Card>
  );
}

export default CardOne;
