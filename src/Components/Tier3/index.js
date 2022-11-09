import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import watch from "../../Img/panzera1.webp";
import macbook from "../../Img/macbookair.jpeg";
import watch2 from "../../Img/brietling.png";
import watch3 from "../../Img/brietling2.webp";
import watch4 from "../../Img/brietling3.webp";
function Tierthree() {
  const navigate = useNavigate();
  return (
    <Container>
      <Card className="cardspacing">
        <Card.Header>Panzera Watch</Card.Header>
        <Card.Img variant="top" src={watch} />
        <Card.Body>
          <Card.Text>Please use code PEM40 for 40% discount</Card.Text>
          <Button
            onClick={() =>
              window.open(
                "https://www.panzera.shop/aquamarine-swiss-chronograph/"
              )
            }
            active
          >
            Go to gift
          </Button>
        </Card.Body>
      </Card>

      <Card className="cardspacing">
        <Card.Header>Macbook Air M2</Card.Header>
        <Card.Img variant="top" src={macbook} />
        <Card.Body>
          <Card.Text>
            Options Required: 512 GB Storage & 16GB unified ram
          </Card.Text>
          <Button
            onClick={() =>
              window.open(
                "https://www.apple.com/ca/shop/buy-mac/macbook-air/midnight-apple-m2-chip-with-8-core-cpu-and-8-core-gpu-256gb"
              )
            }
            active
          >
            Go to gift
          </Button>
        </Card.Body>
      </Card>

      <Col>
        <Card className="cardspacing">
          <Card.Header>Breitling Watch</Card.Header>
          <Card.Img variant="top" src={watch2} />
          <Card.Body>
            <Button
              onClick={() =>
                window.open(
                  "https://www.breitling.com/ca-en/watches/navitimer/navitimer-b01-chronograph-41/AB0139211L1/"
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
        <Card className="cardspacing">
          <Card.Header>Breitling Watch</Card.Header>
          <Card.Img variant="top" src={watch4} />
          <Card.Body>
            <Button
              onClick={() =>
                window.open(
                  "https://www.breitling.com/ca-en/watches/premier/premier-b01-chronograph-42/AB0118221L1/"
                )
              }
              active
            >
              Go to gift
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default Tierthree;
