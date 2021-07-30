import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

// font-family: 'Raleway', sans-serif;
// font-family: 'Roboto', sans-serif;

const Card = styled.div`
  max-width: 879px;
  height: 300.2px;
  padding: 100px 290px;
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

function CardOne() {
  return (
    <Card>
      <Title>Meet the products chosen for you</Title>
      <Content>
        To get the best out of your Skin + Me treatment, it’s all about keeping
        things simple. Discover our recommended routine – with what to use and
        when to use it, with the products our expert Dermatology Team recommend
        for you and your skin.
      </Content>
      <ButtonOne />
    </Card>
  );
}

export default CardOne;
