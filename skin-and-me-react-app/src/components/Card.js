import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Card = styled.div`
  justify-content: space-between;
  align-self: center;
  display: flex;
  /* width: ${px2vw(320, 320)}; */
  flex-direction: row;
  padding: ${px2vw(50)};
  margin: ${px2vw(20)};

  @media (min-width: 779px) {
    width: ${px2vw(650, 768)};
    height: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: ${px2vw(650, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(950, 1440)};
    height: ${px2vw(300)};
  }
`;

export const Container = styled.div`
  grid-column: 1;
`;
