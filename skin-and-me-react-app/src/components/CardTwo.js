import React from "react";
import styled from "styled-components";
import Data from "../data.json";
import ButtonLink from "./ButtonLink";

const Card = styled.div`
  max-width: 879px;
  height: 300.2px;
  padding: 0 290px;
  display: grid;
  justify-content: center;
`;

const Container = styled.div`
  padding: 0;
  grid-column: 1;
  padding-right: 100px;
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
  padding: 0;
  grid-column: 2;
  width: 430px;
  display: block;
  font-family: "raleway", sans-serif;
  list-style: none;
  font-size: 13px;
  line-height: 15px;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #597489;
  padding: 15px;
`;

const ListItemLast = styled.li`
  padding: 15px;
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
        <ListItem>
          How do I incorporate my Skin + Me into my skincare routine?
        </ListItem>
        <ListItem>My skin is getting worse, what should I do?</ListItem>
        <ListItem>
          How do I incorporate my Skin + Me into my skincare routine?
        </ListItem>
        <ListItem>
          How long will it take for me to see my results in the mirror?
        </ListItem>
        <ListItemLast>
          Can I use my own products whilst using Skin + Me?
        </ListItemLast>
      </List>
    </Card>
  );
}

export default CardTwo;
