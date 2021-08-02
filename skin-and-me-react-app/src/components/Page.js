import React from "react";
import styled from "styled-components";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
// import CardThree from "./CardThree";

import px2vw from "../utils/px2vw";

// <CardThree />

const Container = styled.div`
  background: #ffffff;
  width: 1440px;
  height: 1185px;
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;

  /* flex-wrap: wrap; */
  justify-content: center;
  /* margin: ${px2vw(32)}; */
  max-width: 100%;

  @media (min-width: 1024px) {
    /* flex-wrap: nowrap; */
  }
`;

function Page() {
  return (
    <Container>
      <CardOne />
      <CardTwo />
    </Container>
  );
}

export default Page;
