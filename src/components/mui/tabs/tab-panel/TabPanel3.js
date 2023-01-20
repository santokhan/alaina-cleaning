import { Link } from "react-router-dom";

import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/chair.webp" />
      </Col>
      <Col>
        <Box>
          <Title>Chair massage</Title>
          <List>
            <Item>
              Even uw hoofd voorover te rusten leggen in een Massagestoel
              kussen, uw armen laten hangen, zucht…even echt loslaten…
            </Item>
            <Item>
              De meest laagdrempelige massagevorm is de stoelmassage. Hij kan
              overal naar toe en zit fantastisch. Met drukpuntmassage worden uw
              bovenlijf, hoofd, handen en armen snel in ontspanning
              teruggebracht. Er wordt gebruik gemaakt van drukken, wrijven,
              schudden, kloppen, kneden en meer.
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
