import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Card = styled.div`
  justify-content: space-between;
  align-self: center;
  display: flex;
  flex-direction: row;
  padding: ${px2vw(50)};
  margin: ${px2vw(20)};

  @media (max-width: 400px) {
    width: ${px2vw(520, 620)};
    height: ${px2vw(200)};
    height: 100%;
  }

  @media (min-width: 768px) {
    width: ${px2vw(650, 768)};
    height: ${px2vw(300)};
    height: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(950, 1440)};
    height: ${px2vw(400)};
  }
`;

export const Container = styled.div`
  grid-column: 1;
`;
