import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import Data from "../data.json";
import { Card, Container } from "./CardStyles";
import Image from "../images/products-image.png";

function CardProducts() {
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
      <Img />
    </Card>
  );
}

export default CardProducts;

//STYLES

const Title = styled.h1`
  max-width: 384px;
  min-height: 88px;
  font-family: "raleway", sans-serif;
  font-size: 40px;
  line-height: 44px;
  /* Off Black */
  color: #0b0c0c;
`;

const Content = styled.p`
  max-width: 390px;
  min-height: 95px;
  font-style: normal;
  font-size: 16px;

  font-family: "proxima-nova", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 38px;
  /* Off Black */
  color: #0b0c0c;
`;

const Img = styled.div`
  display: flex;
  justify-self: center;
  align-self: flex-start;

  min-width: 263.37px;
  min-height: 263.37px;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    align-self: center;
    margin: 25px 0;
  }
`;
