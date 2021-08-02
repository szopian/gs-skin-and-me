import React from "react";
import styled from "styled-components";
import Data from "../data.json";
import ButtonLink from "./ButtonLink";
import { RiArrowRightSLine } from "react-icons/ri";
import px2vw from "../utils/px2vw";

const Card = styled.div`
  justify-content: space-between;
  display: grid;
  width: ${px2vw(870, 1440)};
  min-height: ${px2vw(300, 300)};
  flex-direction: column;
  padding: ${px2vw(50)};
  margin: ${px2vw(20)};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(600, 768)};
    min-height: ${px2vw(300)};
    height: 100%;
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(870, 1440)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

const Container = styled.div`
  grid-column: 1;
  padding-right: 70px;
`;

const Title = styled.h1`
  font-family: "raleway", sans-serif;
  font-size: 40px;
  line-height: 56px;
  /* Off Black */
  color: #0b0c0c;
`;

const Content = styled.p`
  width: 286px;
  height: 150px;
  font-style: normal;
  font-size: 16px;

  font-family: "proxima-nova", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: rgb(11, 12, 12);
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 7px;

  /* Off Black */
  color: #0b0c0c;
`;

const List = styled.ul`
  grid-column: 2;

  height: 350px;
  width: 450px;
  display: block;
  font-family: "raleway", sans-serif;
  list-style: none;
  font-size: 13px;
  line-height: 15px;
  margin-top: 36px;
  text-transform: uppercase;
`;

const ListItems = styled.li`
  border-bottom: 1px solid #597489;
  padding: 15px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #182026;
`;

const ListItemLast = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  text-transform: uppercase;
  text-decoration: none;
  color: #182026;
`;

const Text = styled.p``;

const ArrowIcon = styled(RiArrowRightSLine)`
  font-size: 35px;
  justify-self: flex-end;
`;

function CardTwo() {
  return (
    <Card>
      <Container>
        <Title>{Data.components[1].title}</Title>
        <Content>{Data.components[1].content}</Content>
        <ButtonLink
          Links={Data.components[0].link}
          bText={Data.components[1].buttonText}
        />
      </Container>
      <List>
        <ListItems
          as="a"
          href={Data.components[1].FAQList.faqLink1}
          target="_blank"
        >
          <Text>{Data.components[1].FAQList.faq1}</Text>
          <ArrowIcon />
        </ListItems>
        <ListItems
          as="a"
          href={Data.components[1].FAQList.faqLink2}
          target="_blank"
        >
          <Text>{Data.components[1].FAQList.faq2}</Text>
          <ArrowIcon />
        </ListItems>
        <ListItems
          as="a"
          href={Data.components[1].FAQList.faqLink3}
          target="_blank"
        >
          <Text>{Data.components[1].FAQList.faq3}</Text>
          <ArrowIcon />
        </ListItems>
        <ListItems
          as="a"
          href={Data.components[1].FAQList.faqLink4}
          target="_blank"
        >
          <Text>{Data.components[1].FAQList.faq4}</Text>
          <ArrowIcon />
        </ListItems>
        <ListItemLast
          as="a"
          href={Data.components[1].FAQList.faqLink5}
          target="_blank"
        >
          <Text>{Data.components[1].FAQList.faq5}</Text>
          <ArrowIcon />
        </ListItemLast>
      </List>
    </Card>
  );
}

export default CardTwo;
