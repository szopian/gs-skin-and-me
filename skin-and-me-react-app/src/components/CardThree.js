import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import Data from "../data.json";

const Card = styled.div`
  width: 100%;
  height: 241px;
  background-color: #f0f6fb;
  justify-content: center;
  display: flex;
`;

const Wrapper = styled.div`
  display: flexbox;
  align-items: center;
  justify-content: center;
  padding: 0 290px;
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

const Container = styled.div`
  grid-column: 1;
  padding-right: 185px;
  justify-content: space-between;
`;

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

function CardThree() {
  return (
    <Card>
      <Wrapper>
        <ImgContainer>
          <ImgText>Skin + Me</ImgText>
        </ImgContainer>
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
  );
}

export default CardThree;
