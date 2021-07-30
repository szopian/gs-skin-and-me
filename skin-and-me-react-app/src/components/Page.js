import React from "react";
import styled from "styled-components";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const Container = styled.div`
  position: absolute;
  max-width: 1440px;
  max-height: 1185px;
  background: #ffffff;
  width: 100%;
  height: 100vh;
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
