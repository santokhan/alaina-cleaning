import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/sport.jpg" />
      </Col>
      <Col>
        <Box>
          <Title>Sports massage</Title>
          <List>
            <Item>
              Sport massage is doorgaans een deelmassage maar kan ook als
              stevige massage toegepast worden op het gehele lichaam
            </Item>
            <Item>
              Sport massage is niet alleen voor sporters. Ook voor niet-sporters
              is een stevige sportmassage prettig bij vastzittende spieren.
            </Item>
            <Item>
              Een goede sportmasseur luistert naar uw lichaam en past de
              behandeling hierop aan. Een sportmassage kan worden ingezet bij
              pijnlijke spieren of spanningsklachten en werkt mobiliserend en
              activerend.
            </Item>
            <Item>
              Maak vastzittende spieren weer soepel en ontspan bij een stevige
              sportmassage.
            </Item>
          </List>
          <DetailsLink
            to="/meer-over-sportmassage-massages"
            className="hover:underline text-green-800"
          >
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
