import React from "react";
import styled from "styled-components";

import { Card, Container } from "./CardStyles";
import ButtonLink from "./ButtonLink";
import Data from "../data.json";
import Image from "../images/package-icon.png";
import Frame from "../images/frame.png";
import { rotate } from "../animations/animation";

function CardNewAroundHere() {
  return (
    <Card>
      <Img>
        <Link as="a" href="https://www.skinandme.com/">
          <Readme />
        </Link>
      </Img>
      <Container>
        <Title>{Data.components[2].title}</Title>
        <Content>{Data.components[2].content}</Content>
      </Container>
      <Container>
        <ButtonLink
          Links={Data.components[2].link}
          bText={Data.components[2].buttonText}
        />
      </Container>
    </Card>
  );
}

export default CardNewAroundHere;

//STYLES

const Img = styled.div`
  height: 160px;
  width: 174px;
  justify-content: center;
  align-self: center;

  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Readme = styled.div`
  height: 160px;
  width: 160px;
  margin: 20px 35px;

  background-image: url(${Frame});
  background-repeat: no-repeat;
  cursor: pointer;
  /* animation: ${rotate} 6s linear infinite; */
`;

const Title = styled.h1`
  max-width: 250px;
  min-height: 29px;
  font-size: 24px;
  line-height: 28px;
  /* Off Black */
  color: #0b0c0c;
  font-family: "proxima-nova", sans-serif;
`;

const Content = styled.p`
  max-width: 290px;
  min-height: 80px;
  font-style: normal;
  font-size: 16px;

  font-family: "proxima-nova", sans-serif;
  font-size: 14px;
  line-height: 122%;
  margin-bottom: 38px;
  /* Off Black */
  color: #0b0c0c;
`;

const Link = styled.a``;
