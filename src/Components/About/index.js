import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <Card container spacing={10} className="cardspacing">
      <Card.Header>Birthday Gifts</Card.Header>
      <Card.Body>
        <Card.Title className="text-center">Sallams Birthday Gifts</Card.Title>
        <Card.Text>
          Dear user I hope you are well. If you received a link to this website
          then you are one of the few honored people to be able to enter this
          website. This website will make it very easy for you to decide on what
          to get me for my birthday. You will find a list of birthday gift
          recommendations and they are all based on Tier. Please feel free to
          pick a gift and make sure it is not something everyone else has
          picked. Also the higher the tier gift you pick the more brownie points
          you score lol.
        </Card.Text>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/Tierpg")}
          active
        >
          Enter
        </Button>
      </Card.Body>
    </Card>
  );
}

export default About;
