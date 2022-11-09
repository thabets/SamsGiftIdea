import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import lens from "../../Img/lens.jpg";
import screen from "../../Img/lgScreen.jpg";
import watch from "../../Img/panzera1.webp";
import watch2 from "../../Img/panzera2.webp";

function Tiertwo() {
  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <Row className="cardspacing">
          <Col>
            <Card>
              <Card.Header>Screen</Card.Header>
              <Card.Img variant="top" src={screen} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.amazon.ca/dp/B09XTD5C7H/?coliid=I1IXZKD5XZODJG&colid=313ANH8GVRT27&psc=1&ref_=lv_ov_lig_dp_it"
                    )
                  }
                  active
                >
                  Go to gift
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>lens</Card.Header>
              <Card.Img variant="top" src={lens} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.amazon.ca/dp/B081L5HJBP/?coliid=I1ZRTHZLQZ1KN4&colid=313ANH8GVRT27&psc=1&ref_=lv_ov_lig_dp_it"
                    )
                  }
                  active
                >
                  Go to gift
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="cardspacing">
          <Col>
            <Card>
              <Card.Header>Panzera Watch</Card.Header>
              <Card.Img variant="top" src={watch2} />
              <Card.Body>
                <Card.Text>Please use code PEM40 for 40% discount</Card.Text>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.panzera.shop/product/aquamarine-38/caspian-blue/caspian-blue-mesh/"
                    )
                  }
                  active
                >
                  Go to gift
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Tiertwo;
