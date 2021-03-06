import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Card = styled.div`
  justify-content: space-between;
  align-self: center;
  display: flex;
  flex-direction: row;
  padding: ${px2vw(50)};
  margin: ${px2vw(20)};

  @media (min-width: 400px) {
    width: ${px2vw(500, 620)};
    height: ${px2vw(200)};
    height: 100%;
  }

  @media (min-width: 768px) {
    width: ${px2vw(660, 768)};
    height: ${px2vw(300)};
    height: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${px2vw(20)};
  }

  @media (min-width: 1200px) {
    width: ${px2vw(870)};
    height: ${px2vw(300)};
    height: 100%;
  }
`;

export const Container = styled.div``;
