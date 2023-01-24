import { Link } from "react-router-dom";

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
              A soft and full stroke glows your skin under neutral or scented
              oil
            </Item>
            <Item>
              The relaxation massage is an energetic and subtle massage. Slow
              soft stroking alternates with tapping, swaying or possibly sound.
              Discuss in advance which massage pressure you experience as
              pleasant. You can also indicate preferences for your massage,
              attention for feet and calves or rather neck and head tension?
              Slow long strokes bring back the connection with the emotional
              life.
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
