import React from "react";
import styled from "styled-components";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const Container = styled.div`
  position: absolute;
  width: 1440px;
  height: 1185px;
  background: #ffffff;
`;

function Page() {
  return (
    <Container>
      <CardOne />
      <CardTwo />
      <CardThree />
    </Container>
  );
}

export default Page;
