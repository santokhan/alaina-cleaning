import { Link } from "react-router-dom";

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
              Sports massage is usually a partial massage, but can also be
              applied as a firm massage to the entire body
            </Item>
            <Item>
              Sports massage is not just for athletes. A firm sports massage is
              also pleasant for non-athletes with stuck muscles.
            </Item>
            <Item>
              A good sports masseur listens to your body and adjusts the
              treatment accordingly. A sports massage can be used for painful
              muscles or tension complaints and has a mobilizing and activating
              effect.
            </Item>
            <Item>
              Make stuck muscles supple again and relax with a solid sports
              massage.
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
