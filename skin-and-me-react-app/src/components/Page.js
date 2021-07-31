import React from "react";
import styled from "styled-components";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const Container = styled.div`
  position: absolute;
  background: #ffffff;
  width: 100%;
  justify-content: center;
  align-items: center;
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
