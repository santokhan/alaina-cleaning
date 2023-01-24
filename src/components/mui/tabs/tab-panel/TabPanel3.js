import { Link } from "react-router-dom";

import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/chair.jpg" />
      </Col>
      <Col>
        <Box>
          <Title>Chair massage</Title>
          <List>
            <Item>
              Just rest your head forward in a massage chair cushion, let your
              arms hang down, sigh ... really let go ...
            </Item>
            <Item>
              The most accessible form of massage is the chair massage. It can
              go anywhere and is fantastic. With pressure point massage, your
              upper body, head, hands and arms are quickly returned to
              relaxation. It uses pressing, rubbing, shaking, tapping, kneading
              and more.
            </Item>
            <Item>
              Chair massage is also very suitable as a company massage .
            </Item>
            <Item>
              Stoelmassage is ook zeer geschikt als{" "}
              <Link
                to="/bedrijfsmassage"
                className="hover:underline text-green-800"
              >
                bedrijfsmassage
              </Link>
              .
            </Item>
          </List>
          <DetailsLink
            to="/meer-over-stoelmassage-massages"
            className="hover:underline text-green-800"
          >
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
