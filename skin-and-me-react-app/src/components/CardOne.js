import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

// font-family: 'Raleway', sans-serif;
// font-family: 'Roboto', sans-serif;

const Card = styled.div`
  width: 879px;
  height: 300.2px;
  padding: 100px 290px;
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
`;

const Content = styled.p`
  font-family: "Roboto", sans-serif;
  padding-right: 70%;
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
