import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Card = styled.div`
  justify-content: space-between;
  display: flex;
  width: ${px2vw(879, 1440)};
  /* min-height: ${px2vw(300, 300)}; */
  flex-direction: row;
  padding: ${px2vw(50)};
  margin: ${px2vw(20)};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(600, 768)};
    min-height: ${px2vw(300)};
    height: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(950, 1440)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const Container = styled.div`
  grid-column: 1;
`;
