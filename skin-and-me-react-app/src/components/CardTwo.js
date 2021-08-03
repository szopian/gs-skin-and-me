import React from "react";
import styled from "styled-components";
import Data from "../data.json";
import ButtonLink from "./ButtonLink";
import { RiArrowRightSLine } from "react-icons/ri";
import { Card, Container } from "./Card";

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
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 7px;

  /* Off Black */
  color: #0b0c0c;
`;

const List = styled.ul`
  grid-column: 2;

  max-height: 350px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
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
