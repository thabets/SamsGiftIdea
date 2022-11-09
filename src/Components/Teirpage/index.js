import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import watch from "../../Img/sieko2.jpg";
import lens from "../../Img/lens.jpg";
import watch2 from "../../Img/brietling2.webp";
import watch3 from '../../Img/panzera2.webp'

function Tierpg() {
  const navigate = useNavigate();
  return (
    <section>
      <Card className="cardspacing">
        <Card.Body>
          <Card.Title className="text-center">Description</Card.Title>
          <blockquote>
            <p>
              To my dear and beloved friends and family. If you have reached
              here that means you are eager and willing to celebrate my
              wonderful birthday with one of the many options of gifts. Below
              you will find 3 cards all with different tier gifts. Please choose
              wisely and enjoy. Also each picture gift will have a link to where
              you are able to purchase the gift.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>Tier 1</Card.Header>
              <Card.Img variant="top" src={watch} />
              <Card.Body>
                <Button onClick={() => navigate("/Tierone")} active>
                  Enter
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Tier 2 Gifts</Card.Header>
              <Card.Img variant="top" src={watch3} />
              <Card.Body>
                <Button onClick={() => navigate("/Tiertwo")} active>
                  Enter
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="cardspacing">
              <Card.Header>Tier 3 Gifts</Card.Header>
              <Card.Img variant="top" src={watch2} />
              <Card.Body>
                <Button onClick={() => navigate("/Tierthree")} active>
                  Enter
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Tierpg;
