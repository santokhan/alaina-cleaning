import { Link } from "react-router-dom";

import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/stone.webp" />
      </Col>
      <Col>
        <Box>
          <Title>Hotstone massage</Title>
          <List>
            <Item>
              De volle rijke warmte van lavastenen heeft iets magisch. De pure
              ontlading van stralende warmte omarmt u en voedt u
            </Item>
            <Item>
              Deze oorspronkelijk Indiase rituele massage vindt u na haar
              ontstaan in diverse culturen terug. Lava stenen hebben een hoger
              metaalgehalte en blijven daardoor warmte uitstralen. Deze warmte
              blijft voor lange tijd in het lichaam en dit helpt u met
              ontgiften. In een vloeiende vorm van olie massage met hete en soms
              koude stenen biedt een goed uitgevoerde massage een unieke
              ervaring.
            </Item>
          </List>
          <DetailsLink to="/meer-over-hotstone-massages">
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
