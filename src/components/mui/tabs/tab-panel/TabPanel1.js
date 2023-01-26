import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/shiatsu.jpg" />
      </Col>
      <Col>
        <Box>
          <Title>Shiatsu massage</Title>
          <List>
            <Item>
              De extra dikke katoenen mat in de praktijk vormt zich heerlijk
              naar uw lichaam en geeft ruimte voor een krachtige of subtiele
              behandeling
            </Item>
            <Item>
              Shiatsu massage is een Japanse vorm van herstellend lichaamswerk.
              Het omvat meer dan massage en is eigenlijk een levensstijl. De
              helende werking gaat uit van de masseur die zijn gewicht
              verplaatst op het ademhalingsritme van de cliënt. Bij een
              verstoorde balans zijn er punten op het lichaam verzwakt of
              gespannen. Shiatsu wordt letterlijk vertaald als “vinger druk”.
              Het maakt gebruik van drukken, kloppen, kneden, schudden, strekken
              en kalmeren. Shiatsu wordt uitgevoerd zonder olie en over de
              kleding heen.
            </Item>
          </List>
          <DetailsLink to="/meer-over-shiatsu-massages">
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
