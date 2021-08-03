import React from "react";
import styled from "styled-components";

import { Card } from "../components/Card";
import ButtonLink from "./ButtonLink";
import Data from "../data.json";
import px2vw from "../utils/px2vw";
import Image from "../images/package-icon.png";
import Frame from "../images/frame.png";

// const Card = styled.div`
//   width: ${px2vw(879, 1440)};
//   /* min-height: ${px2vw(250, 250)}; */
//   flex-direction: row;
//   padding: ${px2vw(50)};
//   margin: ${px2vw(20)};
//   height: 100%;
//   align-items: center;
//   justify-content: space-between;
//   display: flex;

//   @media (min-width: 768px) {
//     width: ${px2vw(600, 768)};
//     min-height: ${px2vw(300)};
//     height: 100%;
//   }

//   @media (min-width: 1024px) {
//     /* width: ${px2vw(950, 1440)}; */
//     min-height: ${px2vw(300)};
//     height: 100%;
//   }
// `;

const Img = styled.div`
  height: 92px;
  width: 120px;
  justify-content: center;
  align-items: center;
  grid-column: 1;

  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Readme = styled.div`
  height: 92px;
  width: 120px;
  justify-content: center;
  align-items: center;
  grid-column: 1;

  background-image: url(${Frame});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Container = styled.div`
  grid-column: 2;
  font-family: "proxima-nova", sans-serif;
`;

const Title = styled.h1`
  width: 250px;
  height: 24px;
  font-size: 24px;
  line-height: 28px;
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

const Link = styled.a``;

function CardThree() {
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
      <ButtonLink
        Links={Data.components[2].link}
        bText={Data.components[2].buttonText}
      />
    </Card>
  );
}

export default CardThree;
