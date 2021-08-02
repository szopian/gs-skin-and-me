import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import { rotate } from "../animations/animation";
import Data from "../data.json";
import px2vw from "../utils/px2vw";
import { Card, Container } from "./Card";

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

  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  height: 100%;

  @media (min-width: 769px) {
    width: ${px2vw(300, 768)};
    min-height: ${px2vw(250, 768)};
    height: 100%;
  }
  @media (max-width: 769px) {
    padding: ${px2vw(20)};
    margin: ${px2vw(20)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(400)};
    min-height: ${px2vw(250)};
    height: 100%;
  }
`;

const Img = styled.div`
  width: 263.37px;
  height: 263.37px;

  border: 4px dashed #ffbc00;

  border-radius: 360px;
  box-shadow: 0px 20px 0px rgba(212, 227, 238, 0.8);

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const Logo = styled.div`
  position: relative;
  top: 35%;
  text-align: center;
  transform: translate(0, -50%);
  padding: 1rem;
  font-size: 45px;
  color: #ffbc00;
  text-shadow: 3px 6px 1px rgba(212, 227, 238, 0.5);
  animation: ${rotate} 6s linear infinite;
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
      <ImgContainer>
        <Img>
          <Logo>Skin + Me</Logo>
        </Img>
      </ImgContainer>
    </Card>
  );
}

export default CardOne;
