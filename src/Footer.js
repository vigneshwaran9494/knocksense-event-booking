import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Footer({ price, onBuyNowPressed }) {
  return (
    <>
      <Navbar className="backgound-header" variant="dark">
        <Container>
          <Navbar.Brand>
            <h6>₹{price} ONWORDS</h6>
          </Navbar.Brand>
          <Button onClick={onBuyNowPressed}>BUY NOW</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
