import React from "react";
// import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Footer({ price, onBuyNowPressed }) {
  return (
    <>
      <Navbar className="backgound-header" variant="dark">
        <Container>
          <Navbar.Brand>
            <div className="footerText">₹{price} ONWORDS</div>
          </Navbar.Brand>
          <Link
            onClick={onBuyNowPressed}
            style={{ textDecoration: "none" }}
            className="bookingsite_footer footerText"
          >
            BUY NOW
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
