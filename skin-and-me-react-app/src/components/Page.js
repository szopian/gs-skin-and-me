import React from "react";
import styled from "styled-components";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const Container = styled.div`
  background: #ffffff;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: grid;
`;

const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flexbox;
  justify-content: center;
  background-color: #f0f6fb;
  margin-top: 100px;
  position: relative;
`;

function Page() {
  return (
    <>
      <Container>
        <CardOne />
        <CardTwo />
      </Container>

      <Section>
        <CardThree />
      </Section>
    </>
  );
}

export default Page;
