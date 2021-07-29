import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 1440px;
  height: 1185px;
  background: #ffffff;
`;

function Page() {
  return (
    <Container>
      <h1>Skin+Me</h1>
    </Container>
  );
}

export default Page;
