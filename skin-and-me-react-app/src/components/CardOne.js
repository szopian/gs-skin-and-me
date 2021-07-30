import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

const Card = styled.div`
  max-width: 879px;
  height: 300.2px;
  padding: 100px 290px;
  display: grid;
  justify-content: center;
`;

const Container = styled.div`
  grid-column: 1;
  padding-right: 180px;
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
  margin-bottom: 22px;
  /* Off Black */
  color: #0b0c0c;
`;

const Img = styled.div`
  width: 263.37px;
  height: 263.37px;
  position: relative;
  /* margin-top: 10px; */
  margin-right: -19px;

  grid-column: 2;

  border: 4px dashed #ffbc00;
  /* box-sizing: border-box; */
  border-radius: 360px;
  box-shadow: 0px 20px 0px rgba(212, 227, 238, 0.8);
`;

const Logo = styled.div`
  position: relative;
  top: 50%;
  text-align: center;
  transform: translate(0, -50%);
  padding: 1rem;
  font-size: 45px;
  color: #ffbc00;
  text-shadow: 3px 6px 1px rgba(212, 227, 238, 0.5);
`;

function CardOne() {
  return (
    <Card>
      <Container>
        <Title>Meet the products chosen for you</Title>
        <Content>
          To get the best out of your Skin + Me treatment, it’s all about
          keeping things simple. Discover our recommended routine – with what to
          use and when to use it, with the products our expert Dermatology Team
          recommend for you and your skin.
        </Content>
        <ButtonOne />
      </Container>
      <Img>
        <Logo>Skin + Me</Logo>
      </Img>
    </Card>
  );
}

export default CardOne;
