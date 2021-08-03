import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import Data from "../data.json";
import px2vw from "../utils/px2vw";
import Image from "../images/package-icon.png";

const Section = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: grid;
  background-color: #f0f6fb;
`;

const Card = styled.div`
  justify-content: space-between;
  display: flex;
  width: ${px2vw(879, 1440)};
  /* min-height: ${px2vw(250, 250)}; */
  flex-direction: row;
  padding: ${px2vw(50)};
  margin: ${px2vw(20)};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(600, 768)};
    min-height: ${px2vw(300)};
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(950, 1440)};
    min-height: ${px2vw(300)};
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
  }
`;

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

const Container = styled.div`
  grid-column: 2;
  font-family: "proxima-nova", sans-serif;
  padding: 0 46px 0 105px;
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

function CardThree() {
  return (
    <Section>
      <Card>
        <Wrapper>
          <Img />
          <Container>
            <Title>{Data.components[2].title}</Title>
            <Content>{Data.components[2].content}</Content>
          </Container>
          <ButtonLink
            Links={Data.components[2].link}
            bText={Data.components[2].buttonText}
          />
        </Wrapper>
      </Card>
    </Section>
  );
}

export default CardThree;
