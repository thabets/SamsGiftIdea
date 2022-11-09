import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, NavDropdown,Container } from "react-bootstrap";

function Navigation(props) {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" style={{width:"100%"}}>
      <Container>
        <Navbar.Brand onClick={() => navigate("/about")}>
          Gift House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/about")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/Tierpg")}>Tier Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Navigation;
