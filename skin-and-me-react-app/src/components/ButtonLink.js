import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid #597489;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 16px 24px;
  background: #ffffff;
  cursor: pointer;
  align-self: flex-start;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  font-weight: 700 bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #0b0c0c;
  transition: all 0.3s ease 0s;
  -webkit-box-pack: center;
  justify-content: center;

  &:hover {
    background-color: #0b0c0c;
    color: #ffffff;
  }
`;

function ButtonLink({ Links, bText }) {
  return (
    <Button as="a" href={Links} target="_blank">
      {bText}
    </Button>
  );
}

export default ButtonLink;
