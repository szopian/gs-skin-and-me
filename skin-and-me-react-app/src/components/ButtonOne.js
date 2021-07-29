import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid #597489;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 15px;
  background: #ffffff;
  cursor: pointer;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.1em;
  color: #0b0c0c;

  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }
`;

function ButtonOne() {
  return <Button>CLICK ME!!</Button>;
}

export default ButtonOne;
