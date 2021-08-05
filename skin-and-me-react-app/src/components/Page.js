import React from "react";
import styled from "styled-components";
import CardProducts from "./CardProducts";
import CardFAQs from "./CardFAQs";
import CardNewAroundHere from "./CardNewAroundHere";

const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flexbox;
  justify-content: center;
  background: ${(props) => props.bgColor};
`;

function Page({ bgColor }) {
  return (
    <>
      <Section bgColor="#ffffff">
        <CardProducts />
      </Section>
      <Section bgColor="#ffffff">
        <CardFAQs />
      </Section>
      <Section bgColor="#f0f6fb">
        <CardNewAroundHere />
      </Section>
    </>
  );
}

export default Page;
