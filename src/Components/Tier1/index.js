import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import watch from "../../Img/sieko2.jpg";
import gameboy from "../../Img/gameboy.jpg";
import footrest from "../../Img/footrest.jpg";
import floorlamp from "../../Img/floorlamp.jpg";
import benq from "../../Img/screenbarbenq.webp";
import watch2 from "../../Img/sieko3.jpg";

function Tierone() {
  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <Row className="cardspacing">
          <Col>
            <Card>
              <Card.Header>Seiko Watch</Card.Header>
              <Card.Img variant="top" src={watch} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.amazon.ca/SEIKO-water-resistant-chronograph-SND411/dp/B001KESEEO/ref=sr_1_17?crid=35BGMXU9KHDEM&keywords=seiko+men%27s&qid=1667757471&qu=eyJxc2MiOiIxLjk5IiwicXNhIjoiMS4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=seiko+men%27s+%2Caps%2C73&sr=8-17"
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
              <Card.Header>Retro Game Console</Card.Header>
              <Card.Img variant="top" src={gameboy} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.amazon.ca/dp/B09JRKBYK5/?coliid=I2HDRH0TZ5WFXU&colid=313ANH8GVRT27&psc=1&ref_=lv_ov_lig_dp_it"
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
              <Card.Header>Foot Rest</Card.Header>
              <Card.Img variant="top" src={footrest} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.amazon.ca/dp/B07BDMTQFZ/?coliid=I3S9766VCLWL34&colid=313ANH8GVRT27&psc=1&ref_=lv_ov_lig_dp_it"
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
              <Card.Header>Floor Lamp</Card.Header>
              <Card.Img variant="top" src={floorlamp} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.amazon.ca/dp/B08V5PNBC4/?coliid=I3RDRZQNWZEWSJ&colid=313ANH8GVRT27&psc=1&ref_=lv_ov_lig_dp_it"
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
              <Card.Header>Desk Screen</Card.Header>
              <Card.Img variant="top" src={benq} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "//www.amazon.ca/Xiaomi-Computer-Monitor-Light-Bar/dp/B08W2C5W59/ref=asc_df_B08W2C5W59/?tag=googleshopc0c-20&linkCode=df0&hvadid=578935170917&hvpos=&hvnetw=g&hvrand=9836153795488801378&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9000983&hvtargid=pla-1189588364625&psc=1"
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
              <Card.Header>Seiko Watch</Card.Header>
              <Card.Img variant="top" src={watch2} />
              <Card.Body>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.amazon.ca/Seiko-RECRAFT-Automatic-Stainless-Leather/dp/B071LTYQXL/?_encoding=UTF8&pd_rd_w=WgOVR&content-id=amzn1.sym.b09e9731-f0de-43db-b62a-8954bcec282c&pf_rd_p=b09e9731-f0de-43db-b62a-8954bcec282c&pf_rd_r=3DV4MK6HTYR9PYDN672R&pd_rd_wg=POCqI&pd_rd_r=6bbc3d02-ef7a-4a35-945f-5286ee71b2ae&ref_=pd_gw_ci_mcx_mr_hp_atf_m"
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

export default Tierone;
